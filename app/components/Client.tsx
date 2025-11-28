"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function Client() {
  const sectionRef = useRef<HTMLElement>(null);
  const logos = [
    "/client-logo/berrics.webp",
    "/client-logo/cariuma.webp",
    "/client-logo/evian.webp",
    "/client-logo/fifa.webp",
    "/client-logo/herrs.webp",
    "/client-logo/megdey.webp",
    "/client-logo/mount.webp",
    "/client-logo/museu.webp",
    "/client-logo/nba.webp",
    "/client-logo/novo-nordisk.webp",
    "/client-logo/optavia.webp",
    "/client-logo/pavona.webp",
    "/client-logo/peugeot.webp",
    "/client-logo/sunmaid.webp",
    "/client-logo/tim.webp",
    "/client-logo/wix.webp",
  ];

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate all logo items
      const logoItems = sectionRef.current!.querySelectorAll(".logo-item");

      gsap.from(logoItems, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
          grid 
          grid-cols-1
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-x-10 
          gap-y-16 
          items-center
        "
        >
          {logos.map((src, i) => (
            <div key={i} className="logo-item flex justify-center">
              <Image
                src={src}
                alt={`logo-${i}`}
                className="w-28 opacity-90 hover:opacity-100 transition"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
