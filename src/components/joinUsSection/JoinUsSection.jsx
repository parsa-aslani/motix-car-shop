import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTriggerConsts } from "../../constants/gsapConstants";
import BackgroundLight from "../BackgroundLight";

const JoinUsSection = () => {
  useEffect(() => {
    const gsapAnimations = gsap.context(() => {
      gsap.to(".join-us-text-gsap", {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".join-us-text-gsap",
          ...ScrollTriggerConsts,
          scrub: 1.5,
        },
      });
      gsap.to(".join-us-form-gsap", {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".join-us-form-gsap",
          ...ScrollTriggerConsts,
          scrub: 0.5,
        },
      });
    });
    return () => {
      gsapAnimations.revert();
    };
  });
  return (
    <section className="join-us-bg">
      <BackgroundLight top={"-10%"} bottom={0} left={"20%"} right={0} />
      <BackgroundLight top={"100%"} bottom={0} left={"50%"} right={0} />
      <div className="container join-us-content">
        <div className="">
          <h3 className="join-us-title join-us-text-gsap">join us</h3>
          <p className="join-us-text-gsap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus labore non deserunt temporibus eligendi praesentium
            numquam obcaecati. Tempora pariatur itaque nam harum, voluptates,
            corrupti, soluta magni sit sunt sed dolores.
          </p>
        </div>
        <form className="join-us-form">
          <input
            className="join-us-input join-us-form-gsap"
            type="text"
            placeholder="enter your email ..."
          />
          <button type="submit" className="join-us-button join-us-form-gsap">
            send email
          </button>
        </form>
      </div>
    </section>
  );
};
export default JoinUsSection;
