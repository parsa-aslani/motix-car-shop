import gsap from "gsap";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const gsapAnimations = gsap.context(() => {
      gsap.fromTo(
        ".navbar-company-logo",
        {
          opacity: 0,
          duration: 0.7,
          ease: "power3.in",
          y: -40,
        },
        { opacity: 1, y: 0 },
      );
    });
    return () => {
      gsapAnimations.revert();
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-items-container container">
        <img src="./images/motix-logo.png" alt="motox-logo" className="navbar-company-logo" />
        <input
          type="text"
          className="navbar-search-bar"
          placeholder="enter your desired car name ..."
        />
        <ul className="navbar-items-list">
          <li className="navbar-item">home</li>
          <li className="navbar-item">about us</li>
          <li className="navbar-item">cars</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
