import React, { useRef } from "react";
import Section from "./Section";
import curve from "../assets/curve.png";
import mainphoto from "../assets/mainphoto.jpg";
import nebula from "../assets/nebula.png";
import Button from "./Button";
import Generating from "../components/Generating";
import Notification from "../components/Notification";
import { MainIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Main";
import CompanyLogos from "./CompanyLogos";

const Main = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-[12rem] mt-[10rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="main">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mt-10 mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Dare to Dream, Dare to Explore — Reach for the Stars with{` `}
            <span className="inline-block relative">
              StarScape <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="Curve" />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lectus non metus mattis vestibulum. Nulla consequat, sem sed malesuada egestas, metus elit viverra orci, vitae
            malesuada nibh tortor accumsan dui. Vestibulum faucibus,
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl::mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/44] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img src={mainphoto} className="w-full" width={1024} height={490} alt="mainphoto" />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {MainIcons.map((Icon, index) => (
                      <li className="p-5" key={index}>
                        <Icon width={70} height={50} fill="white" />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Discover the sky " />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="opacity-15 absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img src={nebula} width={1440} height={1800} alt="backgroundMain" />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Main;
