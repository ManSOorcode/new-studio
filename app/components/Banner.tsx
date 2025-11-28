"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import Icon, { IconName } from "./social-icon";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useLenis } from "./lenisScroll/useLenis";

gsap.registerPlugin(ScrollTrigger);

interface SocialType {
  name: IconName;
  url: string;
}

const Banner = () => {
  const [bannerId, setBannerId] = useState(0);
  const topTextWrapperRef = useRef<null>(null);
  const bottomTextWrapperRef = useRef<null>(null);
  const prevId = useRef(0);
  const bottomSectionRef = useRef<HTMLDivElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  const hasAnimated = useRef<boolean>(false);

  const bannerContents = [
    {
      id: 0,
      link: "/images/Gen.jpg",
      name: "Gen",
      texts: ["GEN", "Branding, brand guide"],
      condition: "img",
      otherSlider: {
        sliderTwoLink: "/images/secondSlidder/GenSliderSecond.png",
        sliderThreeLink: "/images/thirdSlidder/Gen-2.webp",
        sliderThreeCondition: "img",
        sliderText: "GEN",
      },
    },
    {
      id: 1,
      link: "/images/Berrics.jpg",
      name: "Berrics",
      texts: ["Berrics", "Strategy & Design, Identity, Interface"],
      condition: "img",
      otherSlider: {
        sliderTwoLink: "/images/secondSlidder/Berrics.jpg",
        sliderThreeLink: "/images/thirdSlidder/Berrics-22.webp",
        sliderThreeCondition: "img",
        sliderText: "Berrics",
      },
    },
    {
      id: 2,
      link: "/images/Cariuma.jpg",
      name: "Cariuma",
      texts: ["Cariuma", "Branding, Interactive Content"],
      condition: "img",
      otherSlider: {
        sliderTwoLink: "/images/secondSlidder/Cariuma.jpg",
        sliderThreeLink: "/images/thirdSlidder/Cariuma-11.webp",
        sliderThreeCondition: "img",
        sliderText: "Cariuma",
      },
    },
    {
      id: 3,
      link: "/images/Zuso-Video-3.mp4",
      name: "Zuso",
      texts: ["Zuso", "Branding, UX/UI, Illustration, Animation"],
      condition: "video",
      otherSlider: {
        sliderTwoLink: "/images/secondSlidder/Zuso.jpg",
        sliderThreeLink: "/images/thirdSlidder/Weekly_Planner.mp4",
        sliderThreeCondition: "video",
        sliderText: "Zuso",
      },
    },
    {
      id: 4,
      link: "/images/Superela.jpg",
      name: "Superela",
      texts: ["Superela", "App Design, Branding,  Illustration, Motion, UX/UI"],
      condition: "img",
      otherSlider: {
        sliderTwoLink: "/images/secondSlidder/Superela.jpg",
        sliderThreeLink: "/images/thirdSlidder/Superela-23.webp",
        sliderThreeCondition: "img",
        sliderText: "Superela",
      },
    },
  ];

  const socialLinks: SocialType[] = [
    { name: "instagram", url: "#" },
    { name: "linkedin", url: "#" },
    { name: "whatsapp", url: "#" },
  ];

  const previousHandler = () => {
    setBannerId((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextHandler = () => {
    setBannerId((prev) => prev + 1);
  };

  useGSAP(() => {
    if (!topTextWrapperRef.current) return;

    const topWrapper = topTextWrapperRef.current;
    const bottomWrapper = bottomTextWrapperRef.current;
    const rowHeight = 30;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [topWrapper, bottomWrapper],
        { y: -prevId.current * rowHeight },
        {
          y: -bannerId * rowHeight,
          duration: 0.8,
          ease: "power3.inOut",
        }
      );
    });

    prevId.current = bannerId;
    return () => ctx.revert();
  }, [bannerId]);

  const lenis = useLenis();
  const scrollBottomWithGsap = () => {
    // gsap.to(window, {
    //   duration: 1,
    //   scrollTo: bottomSectionRef.current!,
    //   ease: "power2.out",
    // });

    lenis?.scrollTo(bottomSectionRef.current as HTMLDivElement);
  };

  useGSAP(() => {
    if (!bannerRef.current) return;

    const ctx = gsap.context(() => {
      if (!hasAnimated.current) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".banner-heading", {
          y: 80,
          opacity: 0,
          duration: 1.2,
        })
          .from(
            ".banner-main-image",
            {
              scale: 1.15,
              opacity: 0,
              duration: 1.2,
            },
            "-=0.8"
          )
          .from(
            ".banner-control-btn",
            {
              y: 40,
              opacity: 0,
              stagger: 0.15,
              duration: 0.8,
            },
            "-=0.6"
          );

        hasAnimated.current = true;
      }

      ScrollTrigger.create({
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(".banner-heading", {
            y: -30 * progress,
            opacity: Math.max(0.7, 1 - 0.3 * progress),
          });
        },
        onLeaveBack: () => {
          gsap.set(".banner-heading", { y: 0, opacity: 1 });
        },
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="relative pt-48 pb-8 lg:pb-20  w-full ">
      <div className="h-200 bg-[#2B2F31] absolute left-0 right-0 top-0  z-0"></div>

      <div className=" mx-auto max-w-7xl  relative flex flex-col gap-24 px-4 sm:px-6">
        <div className="  text-right relative inline-block cursor-pointer  ">
          <h1 className="text-white banner-heading cursor-hover-target  leading-16   sm:leading-20 lg:leading-24   xl:leading-28 font-poppins  indent-[200px] tracking-tight text-5xl sm:text-6xl lg:text-[5rem] xl:text-8xl font-semibold  z-[2]">
            We craft identity,
            <br />
            experience and presence.
          </h1>
        </div>

        <div>
          <div className="lg:grid lg:grid-cols-12 items-center gap-12 mb-5">
            <div className="flex col-span-2 gap-2">
              <button
                onClick={previousHandler}
                className={`${
                  bannerId === 0
                    ? "border-white/40 pointer-events-none "
                    : "border-white cursor-pointer"
                } border  rounded-full w-12 h-12 flex justify-center items-center`}
              >
                <span
                  className={`rounded-full ${
                    bannerId === 0
                      ? "bg-white/40 pointer-events-none "
                      : "bg-white cursor-pointer"
                  }   p-1 text-base inline-block`}
                ></span>
              </button>
              <button
                onClick={nextHandler}
                className={`border ${
                  bannerId === bannerContents.length - 1
                    ? "border-white/40 pointer-events-none "
                    : "border-white cursor-pointer"
                } border-white  rounded-full w-12 h-12 flex justify-center items-center`}
              >
                <span
                  className={`rounded-full ${
                    bannerId === bannerContents.length - 1
                      ? "bg-white/40 pointer-events-none "
                      : "bg-white cursor-pointer"
                  }   p-1 text-base inline-block`}
                ></span>
              </button>
            </div>

            <div className="col-span-6 text-white overflow-hidden  h-[30px] hidden lg:flex items-start">
              <div ref={topTextWrapperRef}>
                {bannerContents.map((content) => {
                  console.log(content, "from text");
                  return (
                    <div
                      key={content.id}
                      className=" h-[30px] flex justify-end gap-24 items-center"
                    >
                      <p>{content.texts[0]}</p>
                      <p>{content.texts[1]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 h-full w-full lg:mb-12 lg:gap-12">
            <div className="relative overflow-hidden   lg:col-span-2">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${bannerId * 100}%)` }}
              >
                {bannerContents.map((content) => (
                  <div
                    key={content.id}
                    className="relative w-full  h-full flex flex-col gap-4 lg:inline-block  shrink-0"
                  >
                    <div className="relative w-full aspect-video banner-main-image ">
                      {content.condition === "img" ? (
                        <Image
                          src={content.link}
                          alt={content.name}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                          width={1920}
                          height={1080}
                        />
                      ) : (
                        <video
                          src={content.link}
                          playsInline
                          muted
                          autoPlay
                          className="w-full h-full  object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                      )}
                    </div>
                    <div
                      key={content.id}
                      className=" py-4 flex flex-col gap-1 justify-center md:hidden text-black"
                    >
                      <p className="font-bold">{content.texts[0]}</p>
                      <p>{content.texts[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:relative lg:inline-block  lg:col-span-1   mx-0 my-auto">
              <div className="absolute -top-24 left-0 flex gap-2 items-center">
                <Icon name={"arrow-left"} className="text-white w-5 h-5" />
                <p>Our Works</p>
              </div>
              <div className="absolute top-8 right-0 flex items-center gap-6">
                {socialLinks.map((item: SocialType) => (
                  <Icon
                    key={item.name}
                    name={item.name}
                    className="text-black w-5 h-5"
                  />
                ))}
                <button
                  onClick={scrollBottomWithGsap}
                  className="border-black cursor-pointer border  rounded-full w-12 h-12 flex justify-center items-center"
                >
                  <span
                    className={`rounded-full bg-black cursor-pointer
                       p-1 text-base inline-block`}
                  ></span>
                </button>
              </div>
            </div>
          </div>

          <div ref={bottomSectionRef} className="hidden lg:grid  h-full w-full">
            <div className="relative   gap-12 grid grid-cols-3">
              <div className=" overflow-hidden col-start-2 col-end-3">
                <div
                  className="flex transition-transform duration-700 ease-in-out "
                  style={{ transform: `translateX(-${bannerId * 100}%)` }}
                >
                  {bannerContents.map((content) => (
                    <div
                      key={content.id}
                      className="relative w-full banner-main-image aspect-[3/4] shrink-0"
                    >
                      <Image
                        src={content.otherSlider.sliderTwoLink}
                        alt={content.name}
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                        width={800}
                        height={1000}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="  overflow-hidden col-start-3 col-end-4">
                <div
                  className="flex transition-transform duration-700 ease-in-out "
                  style={{ transform: `translateX(-${bannerId * 100}%)` }}
                >
                  {bannerContents.map((content) => (
                    <div
                      key={content.id}
                      className="relative w-full aspect-[3/4] banner-main-image shrink-0"
                    >
                      {content.otherSlider.sliderThreeCondition === "img" ? (
                        <Image
                          src={content.otherSlider.sliderThreeLink}
                          alt={content.name}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                          width={800}
                          height={1000}
                        />
                      ) : (
                        <video
                          src={content.otherSlider.sliderThreeLink}
                          playsInline
                          muted
                          autoPlay
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 items-center  gap-12 mt-5">
            <div className=" hidden lg:flex col-start-6 col-span-2  gap-2">
              <button
                onClick={previousHandler}
                className={`${
                  bannerId === 0
                    ? "border-gray-400 pointer-events-none "
                    : "border-black cursor-pointer"
                } border  rounded-full w-12 h-12 flex justify-center items-center`}
              >
                <span
                  className={`rounded-full ${
                    bannerId === 0
                      ? "bg-gray-400 pointer-events-none "
                      : "bg-black cursor-pointer"
                  }   p-1 text-base inline-block`}
                ></span>
              </button>
              <button
                onClick={nextHandler}
                className={`border ${
                  bannerId === bannerContents.length - 1
                    ? "border-gray-400 pointer-events-none "
                    : "border-black cursor-pointer"
                }  rounded-full w-12 h-12 flex justify-center items-center`}
              >
                <span
                  className={`rounded-full ${
                    bannerId === bannerContents.length - 1
                      ? "bg-gray-400 pointer-events-none "
                      : "bg-black cursor-pointer"
                  }   p-1 text-base inline-block`}
                ></span>
              </button>
            </div>

            <div className="lg:col-start-8 lg:col-span-5  text-black overflow-hidden  h-[30px] hidden lg:flex items-start justify-end">
              <div ref={bottomTextWrapperRef}>
                {bannerContents.map((content) => {
                  return (
                    <div
                      key={content.id}
                      className=" h-[30px] flex justify-end gap-24 items-center font-bold "
                    >
                      <p>{content.texts[0]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
