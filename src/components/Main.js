import Section from "./Section";
import curve from "../assets/curve.png";
import mainphoto from "../assets/mainphoto.jpg";
import nebula from "../assets/nebula.png";
import Button from "./Button";
// import { BackgroundCircles, BottomLine, Gradient } from "./design/Header";

const Main = () => {
  return (
    <Section className="pt-[12rem] mt-[10rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="main">
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mt-10 mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1  mt-1 mb-6">
            Dare to Dream, Dare to Explore — Reach for the Stars with
            <span className="inline-block relative">
              StarScape
              <img src={curve} className="top-full left-0 w-full mt-2" width={624} height={28} alt="curve" />
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
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className=" aspect-[33/44] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img src={mainphoto} className="w-full" width={1024} height={490} alt="mainphoto" />
              </div>
            </div>
          </div>
          <div className=" opacity-15 absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img src={nebula} width={1440} height={1800} alt="backgroundMain" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Main;
