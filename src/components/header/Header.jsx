import { useEffect } from "react";
import Header3dModel from "../3dComponents/Header3dModel";
import BackgroundLight from "../BackgroundLight";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    const gsapAnimations = gsap.context(() => {
      gsap.to(".header-image", {
        opacity: 0.9,
        margin: 0,
        delay: 0.2,
        duration: 1,
      });
      gsap.to(".header-title", {
        x: 0,
        delay: 0.5,
        duration: 1,
        opacity: 1,
        ease: "power3.in",
      });
    });
    return () => {
      gsapAnimations.revert();
    };
  }, []);
  return (
    <header className="header container">
      <BackgroundLight top={"0%"} bottom={0} left={"75%"} right={0} />
      <div className="header-3d-model">
        <Header3dModel />
      </div>
      <div className="header-texts">
        <h1 className="header-title">BUY FAST AND CHEAP</h1>
        <p className="header-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          architecto error necessitatibus ad omnis facere, laborum praesentium
          quaerat vitae magni quis
        </p>
      </div>
      <img
        src="../../../public/images/car-engine.png"
        alt="car-engine"
        className="header-image header-car-engine-img"
      />
      <img
        src="../../../public/images/car-wheel.png"
        alt="car-engine"
        className="header-image header-car-wheel-img"
      />
      <img
        src="../../../public/images/car-pheromone.png"
        alt="car-pheromone"
        className="header-image header-car-pheromone-img"
      />
    </header>
  );
};
export default Header;
