"use client";

import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

import worldData from "world-atlas/countries-110m.json";
import landData from "world-atlas/land-110m.json";

import gsap from "gsap";

type Props = {
  width?: number;
  height?: number;
  dotSpacing?: number;
  dotRadius?: number;
  color?: string;
  highlightColor?: string;
  opacity?: number;
  className?: string;
};

type Dot = {
  x: number;
  y: number;
  highlight: boolean;
};

export default function DottedWorldMap({
  width = 1200,
  height = 600,
  dotSpacing = 10,
  dotRadius = 1.5,
  color = "currentColor",
  highlightColor = "#8B5CF6",
  opacity = 0.3,
  className,
}: Props) {
  const mapRef = useRef<SVGSVGElement>(null);

  const dots = useMemo<Dot[]>(() => {
    /*
     * Convert the TopoJSON data into GeoJSON.
     */
    const land: Feature<Geometry, GeoJsonProperties> = feature(
      // eslint-disable-next-line
      landData as any,
      // eslint-disable-next-line
      (landData as any).objects.land as any
    );

    const countriesResult: Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties> = feature(
      // eslint-disable-next-line
      worldData as any,
      // eslint-disable-next-line
      (worldData as any).objects.countries as any
    );

    // Cast to FeatureCollection - the world-atlas countries-110m.json contains a FeatureCollection
    const countries = countriesResult as unknown as FeatureCollection<
      Geometry,
      GeoJsonProperties
    >;

    /*
     * South Africa's ISO numeric country code is 710.
     */
    const southAfrica = countries.features.find(
      (country) => String(country.id) === "710"
    );

    if (!southAfrica) {
      console.warn("South Africa geometry could not be found.");
      return [];
    }

    /*
     * Natural Earth projection gives the map a nice
     * editorial / design-oriented appearance.
     */
    const projection = d3
      .geoNaturalEarth1()
      .fitSize([width, height], land);

    const result: Dot[] = [];

    /*
     * Generate a regular geographic grid.
     *
     * Instead of checking every pixel, we create points
     * at longitude/latitude intervals and project them
     * onto the SVG.
     */
    const lonStep = dotSpacing * 0.18;
    const latStep = dotSpacing * 0.18;

    for (let lat = -60; lat <= 85; lat += latStep) {
      for (let lon = -180; lon <= 180; lon += lonStep) {
        const coordinate: [number, number] = [lon, lat];

        /*
         * Only create dots where land exists.
         */
        if (!d3.geoContains(land, coordinate)) continue;

        const projected = projection(coordinate);

        if (!projected) continue;

        const [x, y] = projected;

        /*
         * Ignore anything outside the SVG.
         */
        if (x < 0 || x > width || y < 0 || y > height) {
          continue;
        }

        const isSouthAfrica = d3.geoContains(
          southAfrica,
          coordinate
        );

        result.push({
          x,
          y,
          highlight: isSouthAfrica,
        });
      }
    }

    return result;
  }, [width, height, dotSpacing]);

  /*
   * Animate the map when it enters the page.
   */
  useEffect(() => {
    if (!mapRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".world-map-dot",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: {
            amount: 1.8,
            from: "random",
          },
          ease: "power2.out",
        }
      );
    }, mapRef);

    return () => ctx.revert();
  }, [dots]);

  return (
    <svg
      ref={mapRef}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-label="Dotted world map highlighting South Africa"
      role="img"
    >
      {dots.map((dot, index) => (
        <circle
          key={index}
          className="world-map-dot"
          cx={dot.x}
          cy={dot.y}
          r={dot.highlight ? dotRadius * 1.35 : dotRadius}
          fill={dot.highlight ? highlightColor : color}
          opacity={dot.highlight ? 1 : opacity}
          style={{
            transformOrigin: `${dot.x}px ${dot.y}px`,
          }}
        />
      ))}
    </svg>
  );
}

