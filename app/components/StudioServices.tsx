"use client";

import { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  id: number;
  title: string;
  gif: string;
  items: string[];
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoverMarqueeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const marqueeAnimations = useRef<(gsap.core.Tween | null)[]>([]);

  //   eslint-disable-next-line react-hooks/exhaustive-deps
  const services: Service[] = [
    {
      id: 1,
      title: "Motion Graphics",
      gif: "/gif/GIF_Motion.gif",
      items: [
        "Campaigns",
        "Institutional and Corporate Videos",
        "Digital and Interactive Experiences",
      ],
    },
    {
      id: 2,
      title: "Web & Digital Product",
      gif: "/gif/GIF_Web.gif",
      items: [
        "Interface Design(UI)",
        "User Experience (UX)",
        "Mobile and App Design",
        "Interactive Design",
        "Prototyping",
      ],
    },
    {
      id: 3,
      title: "Brand Identity",
      gif: "/gif/GIF_Brand.gif",
      items: [
        "Market Research",
        "Brand Architecture",
        "Brand Messaging Development",
        "Brand Guidelines",
        "Naming and Slogan",
      ],
    },
  ];

  useGSAP(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    hoverMarqueeRefs.current.forEach((ref, index) => {
      if (ref && hoveredService === services[index].id) {
        const marqueeText = ref.querySelector(".marquee-text");
        if (marqueeText) {
          if (marqueeAnimations.current[index]) {
            marqueeAnimations.current[index]?.kill();
          }

          const textWidth = marqueeText.scrollWidth / 2;

          marqueeAnimations.current[index] = gsap.to(marqueeText, {
            x: -textWidth,
            duration: 15,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => parseFloat(x) % textWidth),
            },
          });
        }
      } else if (marqueeAnimations.current[index]) {
        marqueeAnimations.current[index]?.kill();
        marqueeAnimations.current[index] = null;

        const marqueeText =
          hoverMarqueeRefs.current[index]?.querySelector(".marquee-text");
        if (marqueeText) {
          gsap.set(marqueeText, { x: 0 });
        }
      }
    });

    return () => {
      marqueeAnimations.current.forEach((anim) => anim?.kill());
    };
  }, [hoveredService, services]);

  useEffect(() => {
    marqueeRefs.current.forEach((ref, index) => {
      if (ref && activeService === services[index].id) {
        const marqueeText = ref.querySelector(".marquee-text");
        if (marqueeText) {
          gsap.to(marqueeText, {
            x: "-50%",
            duration: 20,
            ease: "none",
            repeat: -1,
          });
        }
      }
    });
  }, [activeService, services]);

  const handleServiceClick = (serviceId: number, index: number): void => {
    const isClosing = activeService === serviceId;
    setActiveService(isClosing ? null : serviceId);

    if (!isClosing) {
      const backContent = marqueeRefs.current[index];
      if (backContent) {
        gsap.fromTo(
          backContent,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    }
  };

  const renderServiceTitle = (service: Service) => {
    if (service.id === 1) {
      return (
        <>
          <span>MOTI</span>
          <span className="relative inline-block w-12 h-6 xs:w-16 xs:h-8 sm:w-20 sm:h-10 md:w-28 md:h-14 lg:w-36 lg:h-[4.5rem] xl:w-44 xl:h-22 mx-0.5 sm:mx-1 rounded-full overflow-hidden">
            <Image
              src={service.gif}
              alt=""
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 176px"
            />
          </span>
          <span>N GRAPHICS</span>
        </>
      );
    } else if (service.id === 2) {
      return (
        <>
          <span>WEB &amp; DIGITAL PR</span>
          <span className="relative inline-block w-12 h-6 xs:w-16 xs:h-8 sm:w-20 sm:h-10 md:w-28 md:h-14 lg:w-36 lg:h-[4.5rem] xl:w-44 xl:h-22 mx-0.5 sm:mx-1 rounded-full overflow-hidden">
            <Image
              src={service.gif}
              alt=""
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 176px"
            />
          </span>
          <span>DUCT</span>
        </>
      );
    } else if (service.id === 3) {
      return (
        <>
          <span>BR</span>
          <span className="relative inline-block w-12 h-6 xs:w-16 xs:h-8 sm:w-20 sm:h-10 md:w-28 md:h-14 lg:w-36 lg:h-[4.5rem] xl:w-44 xl:h-22 mx-0.5 sm:mx-1 rounded-full overflow-hidden">
            <Image
              src={service.gif}
              alt=""
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 176px"
            />
          </span>
          <span>ND IDENTITY</span>
        </>
      );
    }
    return null;
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 lg:py-16 px-4 bg-white w-full max-w-7xl mx-auto"
    >
      <div className=" text-left md:text-center mb-10  md:mb-16 lg:mb-20">
        <h2
          ref={titleRef}
          className="text-base  lg:text-lg font-bold text-black mb-8 sm:mb-10 md:mb-12 uppercase tracking-wider"
        >
          What can we do for you
        </h2>

        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              className="relative"
            >
              <button
                type="button"
                onClick={() => handleServiceClick(service.id, index)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="w-full text-start md:text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-lg transition-all duration-300 relative min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] xl:min-h-[7rem]"
                aria-expanded={activeService === service.id}
                aria-controls={`service-details-${service.id}`}
              >
                <div
                  className={`text-4xl   lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 tracking-tight leading-tight inline-flex items-center justify-center flex-wrap transition-opacity duration-300 ${
                    hoveredService === service.id
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                >
                  {renderServiceTitle(service)}
                </div>

                <div
                  ref={(el) => {
                    hoverMarqueeRefs.current[index] = el;
                  }}
                  className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start overflow-hidden transition-opacity duration-300 ${
                    hoveredService === service.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="marquee-text bg-black flex whitespace-nowrap text-4xl   lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white items-center tracking-tight leading-tight will-change-transform">
                    {[...service.items, ...service.items, ...service.items].map(
                      (item, idx) => (
                        <span
                          key={idx}
                          className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 inline-block py-2"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start md:justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <button className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm md:text-base font-medium group">
          <span>View all Works</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
