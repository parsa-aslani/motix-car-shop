import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionsTitle from "../SectionsTitle";
import SliderComment from "./SliderComment";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTriggerConsts } from "../../constants/gsapConstants";

const YourCommentsSection = () => {
  const [slickSetting, setSlickSetting] = useState({
    className: "slider-wrapper",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  });

  useEffect(() => {
    gsap.to(".slider-wrapper", {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: ".join-us-form-gsap",
        ...ScrollTriggerConsts,
        scrub:3,
      },
    });
    const handleResizeWindow = () => {
      if (window.innerWidth > 850) {
        setSlickSetting((prev) => ({
          ...prev,
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "60px",
        }));
      } else {
        setSlickSetting((prev) => ({
          ...prev,
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        }));
      }
    };
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const Slider = Slick.default;
  return (
    <section className="your-comments-section">
      <div className="container">
        <SectionsTitle titleText={"your comments"} />
        <Slider {...slickSetting}>
          <SliderComment
            commentatorName={"ali reza"}
            commentText={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!
                `}
            commentDate={"5 days"}
          />
          <SliderComment
            commentatorName={"ali reza"}
            commentText={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!
                `}
            commentDate={"5 days"}
          />
          <SliderComment
            commentatorName={"ali reza"}
            commentText={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!
                `}
            commentDate={"5 days"}
          />
          <SliderComment
            commentatorName={"ali reza"}
            commentText={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur suscipit molestias accusantium sunt quas veritatis!
                `}
            commentDate={"5 days"}
          />
        </Slider>
      </div>
    </section>
  );
};
export default YourCommentsSection;
