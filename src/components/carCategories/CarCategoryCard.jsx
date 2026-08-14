import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTriggerConsts } from "../../constants/gsapConstants";

const CarCategoryCard = ({
  imgUrl,
  imgAlt,
  categoryName,
  categoryDescription,
}) => {
  useEffect(() => {
    const gsapAnimations = gsap.context(() => {
      gsap.to(".car-category-card", {
        x: 0,
        opacity: 1,
        stagger: 0.07,
        scrollTrigger: {
          trigger: ".car-category-card",
          ...ScrollTriggerConsts,
          scrub: 0.4,
        },
      });
    });
    return () => {
      gsapAnimations.revert();
    };
  }, []);
  return (
    <div className="car-category-card">
      <div className="category-card-shadow"></div>
      <img
        src={imgUrl}
        alt={imgAlt}
        className="category-card-img"
      />
      <div className="category-card-typography">
        <h4 className="category-card-title">{categoryName}</h4>
        <p className="category-card-description">{categoryDescription}</p>
      </div>
    </div>
  );
};
export default CarCategoryCard;
