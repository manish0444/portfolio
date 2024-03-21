import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.jpg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="Not a real photo, but a glimpse into the virtual world of creativity and innovation"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl"
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className=" translate-y-10 text-body-1 opacity-0 2xl:text-4xl"
            >
              I am an independent frontend developer, UI/UX designer and creator
              based in Kathmandu, Nepal.
              <br></br>
              <br></br>
              As an independent frontend developer and UI/UX designer based in
              Kathmandu, Nepal, I thrive on crafting immersive digital
              experiences that seamlessly blend aesthetics with functionality.
              With a keen eye for detail and a passion for innovation, I
              continuously push the boundaries of design to deliver solutions
              that captivate and engage users. My approach is rooted in
              understanding the unique needs of each project and tailoring my
              skills to exceed expectations, whether it's creating responsive
              websites, intuitive mobile applications, or visually striking
              interfaces. 😎
              <br></br>
              <br></br>
              {/* When I am not developing or designing, I enjoy creating videos
              that talk about frontend development, productivity and design on{" "} */}
              {/* <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
              >
                YouTube 📸
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
