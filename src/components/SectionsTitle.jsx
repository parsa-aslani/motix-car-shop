import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTriggerConsts } from "../constants/gsapConstants";

const SectionsTitle = ({ titleText }) => {
  useEffect(() => {
    const gsapAnimations = gsap.context(() => {
      gsap.to(".section-title", {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".section-title",
          ...ScrollTriggerConsts,
          scrub: 1,
        },
      });
    });
    return () => {
      gsapAnimations.revert();
    };
  }, []);
  return (
    <div>
      <h3 className="section-title glow-text">{titleText}</h3>
      <hr className="section-title-hr" />
    </div>
  );
};
export default SectionsTitle;
