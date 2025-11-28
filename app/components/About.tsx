"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  //   useGSAP(() => {
  //     if (!sectionRef.current) return;

  //     const ctx = gsap.context(() => {
  //       // Heading animation - plays once only
  //       gsap.from(headingRef.current, {
  //         y: 100,
  //         opacity: 0,
  //         duration: 1.2,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: headingRef.current,
  //           start: "top 80%",
  //           toggleActions: "play none none none", // Only play once, never reverse
  //           once: true, // Animation happens only once
  //         },
  //       });

  //       // All paragraphs animation - plays once only
  //       const allParagraphs = sectionRef.current.querySelectorAll("p");
  //       gsap.from(allParagraphs, {
  //         y: 80,
  //         opacity: 0,
  //         duration: 1,
  //         stagger: 0.15,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 60%",
  //           toggleActions: "play none none none",
  //           once: true,
  //         },
  //       });

  //       // Parallax effect on heading while scrolling through section
  //       //   gsap.to(headingRef.current, {
  //       //     y: -30,
  //       //     scrollTrigger: {
  //       //       trigger: sectionRef.current,
  //       //       start: "top top",
  //       //       end: "bottom top",
  //       //       scrub: 1,
  //       //     },
  //       //   });
  //     }, sectionRef);

  //     return () => ctx.revert();
  //   }, []);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const allParagraphs = sectionRef.current!.querySelectorAll("p");
      tl.from(
        allParagraphs,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 text-black">
      <div className="flex flex-col gap-20 xl:gap-48 max-w-7xl mx-auto px-6">
        <div>
          <h2
            ref={headingRef}
            className="text-4xl text-black cursor-hover-target md:text-5xl lg:text-6xl xl:text-7xl leading-12 md:leading-14 lg:leading-16 xl:leading-20 font-poppins font-bold"
          >
            We fuse creativity and technology to craft impactful designs that
            unlock fresh opportunities.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-48 text-base xl:text-lg">
          <div className="flex flex-col gap-10">
            <p>
              At Reino Studio, we merge artistic vision with modern technology
              to build creative solutions that inspire new possibilities. We
              believe true innovation comes from combining emotion with
              expertise, shaping results that benefit both your business and
              your audience.
            </p>
            <p>
              Focused primarily on digital experiences, we also extend our work
              across multiple formats. From strategy to execution, our team
              handles everything—from brand identity to immersive interactions.
              What truly distinguishes us is our tailored and thoughtful
              approach.
            </p>
          </div>
          <div>
            <p>
              Our founders play an active role in every stage of the creative
              journey, ensuring a dedicated and outcome-driven process. With our
              attentive support, collaborative workflow, and efficient
              structure, we keep everything smooth and straightforward, avoiding
              any unnecessary complications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
