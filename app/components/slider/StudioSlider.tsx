"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function StudioSlider({ slides: externalSlides }) {
  // Default slides (replace / add more items or pass `slides` prop)
  const defaultSlides = [
    {
      id: 1,
      // <-- local uploaded file path (use exactly as provided)
      src: "/mnt/data/Home _ Reino Studio - Google Chrome 2025-11-22 11-52-37.mkv",
      title: "GEN — Global Engineering Network",
    },
    {
      id: 2,
      src: "/videos/placeholder-2.mp4",
      title: "Slide Two",
    },
    {
      id: 3,
      src: "/videos/placeholder-3.mp4",
      title: "Slide Three",
    },
  ];

  const slides =
    externalSlides && externalSlides.length ? externalSlides : defaultSlides;

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const leftRef = useRef(null); // reserved left column for GSAP effects
  const slideRefs = useRef([]);

  // ensure ref array length matches slides
  slideRefs.current = [];
  const addToRefs = (el) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  useEffect(() => {
    // initial layout animation -- fades in active slide
    gsap.set(slideRefs.current, { autoAlpha: 0, x: 40 });
    gsap.to(slideRefs.current[index], {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const goTo = (i) => {
    if (i === index) return;

    const prev = index;
    const next = i;

    // animate out previous
    gsap.to(slideRefs.current[prev], {
      autoAlpha: 0,
      x: -40,
      duration: 0.45,
      ease: "power2.in",
    });
    // animate in next (slightly delayed)
    gsap.fromTo(
      slideRefs.current[next],
      { autoAlpha: 0, x: 40 },
      { autoAlpha: 1, x: 0, duration: 0.6, delay: 0.05, ease: "power2.out" }
    );

    setIndex(next);
  };

  // optional keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goTo((index + 1) % slides.length);
      if (e.key === "ArrowLeft")
        goTo((index - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, slides.length]);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[520px] lg:min-h-[640px] flex flex-col"
    >
      <div className="w-full bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto flex items-stretch gap-8 py-16 px-6">
          {/* LEFT: reserved space for text / GSAP effects */}
          <div className="w-1/4 pr-6 flex items-start" ref={leftRef}>
            <div className="sticky top-28">
              {/* Insert your animated text/effects here later. Keep this element for GSAP targeting. */}
              <h3 className="text-sm tracking-wider uppercase">GEN</h3>
              <p className="mt-4 text-xl font-light">Branding, brand guide</p>
            </div>
          </div>

          {/* CENTER: Slider */}
          <div className="w-2/4 flex items-center justify-center">
            <div className="relative w-full">
              {slides.map((s, i) => (
                <div
                  key={s.id}
                  ref={addToRefs}
                  className={`absolute left-0 top-0 w-full transition-all duration-300 ease-in-out pointer-events-${
                    i === index ? "auto" : "none"
                  }`}
                  style={{ display: i === index ? "block" : "block" }}
                >
                  {/* video or image fallback */}
                  <div className="mx-auto max-w-[920px] bg-white">
                    {/* Use <video> for video slides. For images you can use <img>. */}
                    <video
                      src={s.src}
                      playsInline
                      muted
                      autoPlay
                      // do NOT loop by default if you want controlled playback per slide
                      loop
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Dots / controls */}
          <div className="w-1/4 pl-6 flex flex-col items-end justify-start">
            <div className="sticky top-40">
              <nav className="flex flex-col items-center gap-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      i === index
                        ? "bg-white text-black"
                        : "bg-transparent text-white"
                    }`}
                  >
                    {/* small inner dot */}
                    <span
                      className={`block w-2 h-2 rounded-full ${
                        i === index ? "bg-black" : "bg-white"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              <div className="mt-8 text-right text-sm opacity-80">
                ← Our Works
              </div>

              {/* optional social icons area */}
              <div className="mt-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Following content area (example grid) */}
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-8">
          <div className="h-48 bg-gray-200" />
          <div className="h-48 bg-gray-100" />
        </div>
      </div>
    </section>
  );
}
