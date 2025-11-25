"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  gif: string;
  items: string[];
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="inline-flex items-center flex-wrap justify-center">
          <span>MOTI</span>
          <span className="relative inline-block w-12 h-6 xs:w-16 xs:h-8 sm:w-20 sm:h-10 md:w-28 md:h-14 lg:w-36 lg:h-[4.5rem] xl:w-44 xl:h-22 mx-0.5 sm:mx-1">
            <Image
              src={service.gif}
              alt=""
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 176px"
            />
          </span>
          <span>N GRAPHICS</span>
        </div>
      );
    } else if (service.id === 2) {
      return (
        <div className="inline-flex items-center flex-wrap justify-center">
          <span>WEB &amp; DIGITAL PR</span>
          <span className="relative inline-block w-12 h-6 xs:w-16 xs:h-8 sm:w-20 sm:h-10 md:w-28 md:h-14 lg:w-36 lg:h-[4.5rem] xl:w-44 xl:h-22 mx-0.5 sm:mx-1">
            <Image
              src={service.gif}
              alt=""
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 176px"
            />
          </span>
          <span>DUCT</span>
        </div>
      );
    } else if (service.id === 3) {
      return (
        <div className="inline-flex items-center flex-wrap justify-center">
          <span>BR</span>
          <span className="relative inline-block w-12 h-6 xs:w-16 xs:h-8 sm:w-20 sm:h-10 md:w-28 md:h-14 lg:w-36 lg:h-[4.5rem] xl:w-44 xl:h-22 mx-0.5 sm:mx-1">
            <Image
              src={service.gif}
              alt=""
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 176px"
            />
          </span>
          <span>ND IDENTITY</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 bg-white w-full max-w-[1920px] mx-auto"
    >
      {/* Title */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        <h2
          ref={titleRef}
          className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black mb-8 sm:mb-10 md:mb-12 uppercase tracking-wider"
        >
          What can we do for you
        </h2>

        {/* Service Items - Stacked vertically */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              className="relative"
            >
              {/* Front Button */}
              <button
                type="button"
                onClick={() => handleServiceClick(service.id, index)}
                className="w-full text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-lg transition-all duration-300"
                aria-expanded={activeService === service.id}
                aria-controls={`service-details-${service.id}`}
              >
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins font-bold text-gray-900 tracking-tight leading-tight hover:text-gray-700 transition-colors duration-300">
                  {renderServiceTitle(service)}
                </div>
              </button>

              {/* Back Content - Marquee */}
              {activeService === service.id && (
                <div
                  id={`service-details-${service.id}`}
                  ref={(el) => {
                    marqueeRefs.current[index] = el;
                  }}
                  className="mt-4 sm:mt-5 md:mt-6 bg-gray-900 text-white rounded-full overflow-hidden"
                  role="region"
                  aria-label={`${service.title} services`}
                >
                  <div className="relative py-2.5 sm:py-3 md:py-4 overflow-hidden">
                    <div className="marquee-text flex whitespace-nowrap">
                      {[...service.items, ...service.items].map((item, idx) => (
                        <span
                          key={idx}
                          className="mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm md:text-base lg:text-lg font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <a
          href="/works"
          className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm md:text-base font-medium group"
        >
          <span>View all Works</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
