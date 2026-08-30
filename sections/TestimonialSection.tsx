import { TestimonialCard } from '@/components/cards/TestimonialCard'
import HeaderText from '@/components/headers/HeaderText';
import HeaderBanner from '@/components/headers/HeaderBanner';
import testimonialReviewData from '@/constants/testimonial_reviewData';
import { styles } from '@/styles/styles';
import { Box, Container , Stack} from '@mui/material';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const BRANDS = [
    { name: "SMART ME", sub: "ACADEMY", icon: "🎓" },
    { name: "GENE20", sub: "INC.", icon: "⬡" },
    { name: "IGUGU", sub: "PROJECTS", icon: "⬡" },
    { name: "SHOE FREAKS", sub: "SA", icon: "👟" },
];

const TestimonialSection = ({ reversed = false }: { reversed?: boolean }) => {

    const trackRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    const items = [...testimonialReviewData, ...testimonialReviewData];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const totalWidth = track.scrollWidth / 2;

        gsap.set(track, { x: reversed ? -totalWidth : 0 });

        tweenRef.current = gsap.to(track, {
            x: reversed ? 0 : -totalWidth,
            duration: 28,
            ease: "none",
            repeat: -1,
        });

        const onEnter = () => tweenRef.current?.timeScale(0.25);
        const onLeave = () => tweenRef.current?.timeScale(1);

        track.parentElement?.addEventListener("mouseenter", onEnter);
        track.parentElement?.addEventListener("mouseleave", onLeave);

        return () => {
            tweenRef.current?.kill();
            track.parentElement?.removeEventListener("mouseenter", onEnter);
            track.parentElement?.removeEventListener("mouseleave", onLeave);
        };
    }, [reversed]);

    return (
        <Box
            sx={{
                ...styles.section_container,
                gap: 4,
                maxHeight: "100dvh",
                height: "100%",
                boxSizing: "border-box",
                px: { xs: "1rem", md: "8vw", xxl: "10vw" },
                position: "relative"
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    zIndex: 0,
                }}
            />


            {/* Ambient blue glow — top right behind planet */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "-100px",
                    right: "-100px",
                    width: "700px",
                    height: "700px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(60,90,220,0.18) 0%, transparent 70%)",
                    zIndex: 0,
                }}
            />

            {/* Subtle edge vignette */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 40%, rgba(3,5,12,0.7) 100%)",
                    zIndex: 0,

                }}
            />
            {/* <Box sx={{ width: "100%", pl: "2rem" }}>  <HeaderText label='what our clients say' />
            </Box> */}

            <Box sx={{ width: "100%", height: "100%", gap: 8, ...styles.column_flex, alignItems: "start" }}>
                <Stack spacing={4} width="100%">
                    <HeaderText label='what our clients say' />
                    <HeaderBanner
                        text="Trusted by clients, driven by"
                        spanText="results"
                        spanColor="primary.main"
                        subtitle="We take pride in our work and the impact it has on our clients. Here are some of our most notable projects that showcase our expertise and dedication to delivering exceptional results."

                    />
                </Stack>
                <div ref={trackRef} className="flex w-max py-2 gap-8">
                    {items.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>
                <Box sx={{
                    width: "100%",
                    ...styles.center_flex
                }}>
                    <Box
                        sx={{
                            border: "1px solid rgba(255,255,255,0.08)",
                            p: "1rem",

                        }}
                        className="mx-6 rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0"
                    //    sx={{
                    //         border: "1px solid rgba(255,255,255,0.08)",
                    //         //   divideColor: "rgba(255,255,255,0.08)",
                    //     }}
                    >
                        {BRANDS.map((b) => (
                            <div
                                key={b.name}
                                className="flex items-center justify-center gap-3 py-6 px-4"
                                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                            >
                                <span className="text-2xl opacity-60">{b.icon}</span>
                                <div>
                                    <p className="text-xs font-black text-white/70 tracking-widest leading-none">{b.name}</p>
                                    <p className="text-[9px] tracking-[0.2em] text-white/35 mt-0.5">{b.sub}</p>
                                </div>
                            </div>
                        ))}
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

export default TestimonialSection