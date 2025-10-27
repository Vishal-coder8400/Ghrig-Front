import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/seprator";

const informationLinks = [
  "About us",
  "Services",
  "Contact Us",
  "Blog",
];

const menuLinks = ["For a couple", "For him", "For her"];

export const Footer = () => {
  return (
    <footer className="relative bg-white mx-auto max-w-[1600px] px-4 sm:px-10">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        alt="Gradient bg"
        src="../assets/images/gradientbg.png"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-10 pb-4 lg:pb-6">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-24 px-4 lg:px-10 py-4 lg:py-8 self-stretch w-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
          {/* <div className="w-full lg:w-auto flex flex-col items-start gap-2.5">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#323232] text-xl lg:text-2xl tracking-[0] leading-6 whitespace-nowrap">
              Company
            </h2>
          </div> */}
            <div className="flex items-center gap-2 invert">
          <img src="../assets/images/logo.png" alt="Logo" width={85} height={45} />
        </div>

          <div className="flex w-full lg:w-[442px] items-start gap-4">
            <nav className="flex flex-col items-start gap-4 lg:gap-6 flex-1">
              <h3 className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#1a1819] text-xs lg:text-[10px] tracking-[0.40px] leading-[14px] uppercase">
                INFORMATION
              </h3>

              <ul className="flex flex-col items-start gap-1 self-stretch w-full">
                {informationLinks.map((link, index) => (
                  <li key={index} className="self-stretch">
                    <a
                      href="#"
                      className="[font-family:'Inter',Helvetica] font-normal text-[#1a1819] text-sm lg:text-base tracking-[0] leading-[22.4px] hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* <nav className="flex flex-col items-start gap-4 lg:gap-6 flex-1">
              <h3 className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#1a1819] text-xs lg:text-[10px] tracking-[0.40px] leading-[14px] uppercase">
                MENU
              </h3>

              <ul className="flex flex-col items-start gap-1 self-stretch w-full">
                {menuLinks.map((link, index) => (
                  <li key={index} className="self-stretch">
                    <a
                      href="#"
                      className="[font-family:'Inter',Helvetica] font-normal text-[#1a1819] text-sm lg:text-base tracking-[0] leading-[22.4px] hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav> */}
          </div>

          <div className="flex-1 flex flex-col items-end gap-4">
            <Button className="h-auto inline-flex items-center gap-2.5 px-4 py-2 bg-[#1a1819] rounded-lg hover:bg-[#1a1819]/90 transition-colors">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                Request a call
              </span>
            </Button>

            <address className="flex flex-col items-end not-italic">
              <a
                href="tel:+91 97118 25377"
                className="font-semibold text-[#1a1819] text-xs leading-[15.6px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap hover:underline transition-colors"
              >
                +91 97118 25377
              </a>
              <a
                href="mailto:connect@ghrig.in"
                className="[font-family:'Inter',Helvetica] font-semibold text-[#1a1819] text-xs tracking-[0] leading-[15.6px] whitespace-nowrap hover:underline transition-colors"
              >
                connect@ghrig.in
              </a>
            </address>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row items-center gap-4 self-stretch w-full px-4 lg:px-10">
          <img
            className="flex-1 w-full lg:w-auto"
            alt="Social"
            src="/social.svg"
          />

          <address className="flex w-full lg:w-[442px] items-start not-italic">
            <p className="[font-family:'Inter',Helvetica] font-semibold text-[#1a1819] text-xs tracking-[0] leading-[15.6px]">
              1901 Thornridge Cir. Shiloh,
              <br />
              Hawaii 81063
            </p>
          </address>

          <div className="flex items-center justify-end gap-4 flex-1">
            <div className="font-bold text-[#1a1819] text-2xl lg:text-[28px] leading-[36.4px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
              18+
            </div>

            <Separator
              orientation="vertical"
              className="w-px h-6 lg:h-9 bg-[#cacbc2] rotate-45"
            />

            <p className="[font-family:'Inter',Helvetica] font-semibold text-[#1a1819] text-xs tracking-[0] leading-[15.6px]">
              Score
              <br />
              for adults
            </p>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col lg:flex-row items-end gap-4 lg:gap-[241px] w-full px-4 lg:px-10 py-4">
        <h2 className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#585858] text-3xl lg:text-[40px] tracking-[-0.80px] leading-8 lg:leading-10">
          If you didn't find the jobs
          <br />
          you are interested in or have questions?
        </h2>

        <div className="flex flex-col items-start gap-2 w-full lg:flex-1">
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#4f4f4f] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
            Just send us your contact email and we will contact you.
          </p>

          <div className="flex w-full lg:w-[670px] items-center justify-between pl-4 pr-6 py-2 rounded-xl border border-solid border-[#58585899]">
            <div className="flex flex-col items-start gap-1 flex-1">
              <label
                htmlFor="email-input"
                className=" [font-family:'Inter',Helvetica] font-medium text-[#4f4f4f] text-xs lg:text-[10px] tracking-[0.40px] leading-[14px] uppercase whitespace-nowrap"
              >
                YOUR EMAIL
              </label>
              <Input
                id="email-input"
                type="email"
                defaultValue="+91"
                className="border-0 p-0 h-auto font-normal text-[#4f4f4f] text-sm lg:text-base leading-[22.4px] [font-family:'Inter',Helvetica] tracking-[0] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <img
              className="w-[16.5px] h-[9.5px] mr-[-0.75px]"
              alt="Vector"
              src="/vector-7.svg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-10 py-4">
        <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d2d2d] text-xs lg:text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
          © 2023 — Copyright
        </p>

        <a
          href="#"
          className="[font-family:'Inter',Helvetica] font-normal text-[#2d2d2d] text-xs lg:text-[10px] text-right tracking-[0] leading-[14px] whitespace-nowrap hover:underline transition-colors"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
};