"use client";

const About = () => {
  return (
    <section className=" py-20  text-black ">
      <div className="flex flex-col gap-20 xl:gap-48 max-w-7xl  mx-auto px-6">
        <div>
          <h2 className="text-4xl text-black cursor-hover-target  md:text-5xl lg:text-6xl xl:text-7xl leading-12 md:leading-14 lg:leading-16 xl:leading-20 font-poppins font-bold">
            We fuse creativity and technology to craft impactful designs that
            unlock fresh opportunities.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-48 text-base  xl:text-lg ">
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
