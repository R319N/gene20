import { styles } from '@/styles/styles'
import { useGSAP } from '@gsap/react'
import { Box, Grid, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useState } from 'react'
import ourServices from '@/constants/our_services'
import ServiceSlide from '@/components/services/ServiceSlide'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import SlideIndicator from '@/components/services/SlideIndicator'
import HeaderText from '@/components/headers/HeaderText'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {
  const slides = ourServices
  const cardsRef = React.useRef<(HTMLDivElement | null)[]>([])
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current
      const slidesEls = cardsRef.current.filter((el): el is HTMLDivElement => Boolean(el))

      if (!track || !section) return

      const totalScroll = track.scrollWidth - window.innerWidth

      // horizontal animation
      const scrollTween = gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + totalScroll,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.25,
            ease: "power2.out",
          },
        }
      })

      slidesEls.forEach((slide, i) => {
        const items = slide.querySelectorAll(".title1, .title2, .slide-text, .slide-button")

        gsap.set(items, {
          y: 60,
          opacity: 0,
        })

        const tl = gsap.timeline({
          paused: true,
          defaults: {
            ease: "power3.out",
          }
        })

        tl.to(slide.querySelector(".title1"), {
          y: 0,
          opacity: 1,
          duration: 0.45,
        })
          .to(slide.querySelector(".title2"), {
            y: 0,
            opacity: 1,
            duration: 0.45,
          }, "-=0.2")
          .to(slide.querySelector(".slide-text"), {
            y: 0,
            opacity: 1,
            duration: 0.4,
          }, "-=0.2")
          .to(slide.querySelector(".slide-button"), {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.3,
          }, "-=0.2")

        ScrollTrigger.create({
          trigger: slide,
          containerAnimation: scrollTween,
          start: "left center",
          end: "right center",
          onToggle: (self) => {
            if (self.isActive) {
              setActive(i)
              tl.play()
            } else {
              tl.reverse()
            }
          },
        })

        ScrollTrigger.create({
          trigger: slide,
          containerAnimation: scrollTween,
          start: "center center",
          end: "center center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        })
      })

      setActive(0)
    })

    return () => ctx.revert()
  }, [slides.length])

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="services"
      className="services-section"
      sx={{
        ...styles.section_container_row,
        minHeight: "100dvh",
        height: "100dvh",
        boxSizing: "border-box",
        overflow: "visible",
      }}
    >
      <div
        className="services-gradient1"
      />
      <Grid
        container
        sx={{
          height: "100%",
          minHeight: 0,
          zIndex: 1,
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pt: { xs: "1rem", lg: "8vh", xxl: "5vh" },
        }}
      >
        <SlideIndicator slides={slides} active={active} />
        <Box 
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(120, 98, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 98, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "74px 74px",
            maskImage: "radial-gradient(circle at 72% 54%, black, transparent 68%)",
            opacity: 0.72,
            pointerEvents: "none",
          }}
        />
        <Box sx={{ width: "100%", flex: 1, overflow: "hidden", height: "100%", position: "relative" }} >
          <Box
            sx={{
              ...styles.between_flex,
              position: "relative",
              zIndex: 5,
              gap: 1.5,
              width: "100%",
              px: { xs: "1rem", md: "8vw", xxl: "10vw" },
            }}
          >
            <HeaderText label="Our Services" />
            <Box
              sx={{
                ...styles.center_flex,
                alignItems: "center",
                gap: 0.8,
                width: { xs: "min(210px, 30%)", md: "min(240px, 100%)", xxl: "min(370px, 100%)" },
                maxWidth: "100%",
                color: "#5db2ff",
                py: 1.35,
              }}
            >
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  flexShrink: 0,
                  fontWeight: 400,
                  letterSpacing: 1.2,
                  lineHeight: 1,
                }}
              >
                {String(active + 1).padStart(2, "0")}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 2,
                  overflow: "hidden",
                  borderRadius: 999,
                  bgcolor: "rgba(93, 178, 255, 0.18)",
                }}
              >
                <Box
                  sx={{
                    width: `${slides.length > 1 ? (active / (slides.length - 1)) * 100 : 100}%`,
                    height: "100%",
                    borderRadius: "inherit",
                    bgcolor: "#5db2ff",
                    boxShadow: "0 0 16px rgba(77, 140, 255, 0.55)",
                    transition: "width 0.25s ease",
                  }}
                />
              </Box>
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: "rgba(93, 178, 255, 0.62)",
                  flexShrink: 0,
                  fontWeight: 400,
                  letterSpacing: 1.2,
                  lineHeight: 1,
                }}
              >
                {String(slides.length).padStart(2, "0")}
              </Typography>
            </Box>
          </Box>
          <Box
            ref={trackRef}
            className='track'
            sx={{
              ...styles.center_flex,
              height: "100%",
              width:  `${slides.length * 100}vw`,
              minHeight: 0,
              willChange: "transform",
              py: { xs: "0", lg: "0" }
            }}>
            {slides.map((slide, i) => (
              <Box
                className="service-slide"
                key={i}
                ref={(el: HTMLDivElement | null) => {
                  if (el) cardsRef.current[i] = el
                }}
                sx={{
                  width: { xs: "100%", lg: "100vw" },
                  height: "100%",
                  minHeight: 0,
                  // px: { xs: "1rem", md: "2rem", xxl: "8rem" },
                }}
              >
                <ServiceSlide
                  image={slide.image}
                  name={slide.name}
                  description={slide.description}
                  features={slide.features}
                  heading={slide.heading}
                  importance={slide.importance}
                  pageUrl={slide.pageUrl}
                  color={slide.color}
                  detailIntro={slide.detailIntro}
                  deliverables={slide.deliverables}
                  outcomes={slide.outcomes}
                  index={i}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            display: { xs: "block", lg: "none" },
            position: "relative",
            width: "100%",
            height: "fit-content",
            gap: 2,
          }}
        >
          <ScrollIndicator />
        </Box>
      </Grid>
    </Box >
  )
}

export default ServicesSection