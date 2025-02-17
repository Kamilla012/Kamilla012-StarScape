import React from "react";
import ButtonSvg from "../assets/ButtonSvg";
const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors duration-300 ease-in-out hover:text-color-green ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${
    className || ""
  }`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};
export default Button;
