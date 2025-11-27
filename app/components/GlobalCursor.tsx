"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function GlobalCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const globalLayerRef = useRef<HTMLElement | null>(null);
  const isHoveringRef = useRef(false);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const globalLayer = document.getElementById("global-layer");

    if (!cursor || !globalLayer) return;

    globalLayerRef.current = globalLayer;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out",
      });

      if (isHoveringRef.current && globalLayer) {
        const radius = 240;
        const scrollY = window.scrollY || window.pageYOffset;
        const adjustedY = clientY + scrollY;
        // globalLayer.style.clipPath = `circle(${radius}px at ${clientX}px ${clientY}px)`;
        globalLayer.style.clipPath = `circle(${radius}px at ${clientX}px ${adjustedY}px)`;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      isHoveringRef.current = true;

      const target = e.currentTarget as HTMLElement;
      const { clientX, clientY } = e as MouseEvent;

      //   const bgColor =
      //     target.getAttribute("data-cursor-bg") ||
      //     target.closest("[data-cursor-bg]")?.getAttribute("data-cursor-bg") ||
      //     getComputedStyle(target.closest("section") || document.body)
      //       .backgroundColor ||
      //     "#fff";

      const textColor = getComputedStyle(target).color || "#ffffff";

      if (cursor) {
        cursor.style.backgroundColor = textColor;
      }

      if (globalLayer) {
        globalLayer.style.opacity = "1";
        const radius = 240;
        globalLayer.style.clipPath = `circle(${radius}px at ${clientX}px ${clientY}px)`;
      }

      gsap.to(cursor, {
        scale: 30,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;

      gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: "power3.in",
      });

      if (globalLayer) {
        globalLayer.style.opacity = "0";

        setTimeout(() => {
          globalLayer.style.clipPath = "circle(0px at 0px 0px)";
        }, 300);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const targets = document.querySelectorAll(".cursor-hover-target");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter as EventListener);
      target.addEventListener("mouseleave", handleMouseLeave as EventListener);
    });
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998]"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
        }}
      />
    </>
  );
}
