import { useEffect } from "react";
import CompanyFacility from "./CompanyFacility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollTriggerConsts } from "../../constants/gsapConstants";
import BackgroundLight from "../BackgroundLight";

const CompanyFacilitiesSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const gsapAnimations = gsap.context(() => {
      gsap.to(".facilities-title", {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".facilities-title",
          ...ScrollTriggerConsts,
          scrub: 0.5,
        },
      });
      gsap.to(".facility", {
        y: 0,
        stagger: 0.1,
        ease: "power3.in",
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".facility",
          start: "top 75%",
          end: "bottom 40%",
          scrub: 0.6,
        },
      });
    });
    return () => {
      gsapAnimations.revert();
    };
  }, []);
  return (
    <section className="container facilities-section">
      <BackgroundLight top={"15%"} bottom={0} left={"5%"} right={0} />
      <BackgroundLight top={"115%"} bottom={0} left={"75%"} right={0} />
      <h3 className="facilities-title facilities-gsap">
        why <span>MOTIX</span> ?
      </h3>
      <div className="facilities-box">
        <CompanyFacility
          title={"fast services"}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            eveniet tempore aliquam culpa quo placeat nesciunt? Officiis
            excepturi delectus obcaecati. eveniet tempore aliquam culpa quo
            placeat nesciunt? Officiis excepturi delectus obcaecati. eveniet
            tempore aliquam culpa`}
        />
        <CompanyFacility
          title={"product diversity"}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            eveniet tempore aliquam culpa quo placeat nesciunt? Officiis
            Officiis excepturi delectus obcaecati. eveniet tempore aliquam culpa`}
        />
        <CompanyFacility
          title={"reasonable price"}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            eveniet tempore aliquam culpa quoOfficiis excepturi delectus
            obcaecati. eveniet tempore aliquam culpa`}
        />
        <CompanyFacility
          title={"fast delivery"}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            eveniet tempore aliquam culpa quo placeat nesciunt? Officiis
            excepturi delectus obcaecati. eveniet tempore aliquam`}
        />
      </div>
    </section>
  );
};
export default CompanyFacilitiesSection;
