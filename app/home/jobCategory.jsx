import React from "react";
import Image from "next/image";
import Arrow_right from "../../public/assets/images/Arrow_rigth.png";

export default function JobCategories() {
  return (
    <div className="max-w-6xl mx-auto mt-20 mb-10 px-4">
      <div className="w-full">
        <div className="mb-4 mt-4 mb-12">
          <h2 className="font-[600] text-4xl text-center font_family_jakarta">
            Top Job Categories Right now
          </h2>
          <p className="font_family_display text-center text-lg text-[#7F7F7F] font-normal mb-4 mt-4">
            Mollit in laborum tempor Lorem incididunt irure. Aute eu sunt. {" "}
            <br className="hidden lg:block" />
             Pariatur sint culpa do incididunt eiusmod{" "}
            
            eiusmod culpa.
          </p>
        </div>
        
        {/* Responsive Grid - 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="col-span-1 border border-gray-300 p-4 rounded-lg">
            <div className="card1 flex justify-start items-center p-3 rounded-lg">
              <p className="inline-flex text-sm font_family_inter text-[#D92852] items-center rounded-md bg-white px-2 py-1 font-medium ring-1 ring-gray-200">
                Design
              </p>
            </div>
            <h2 className="text-[#141414] font_family_inter font-semibold mt-4 text-xl leading-[24px]">
              Sr. UI/UX Designer
            </h2>
            <p className="font_family_inter font-medium text-sm mt-3 text-[#686868] leading-[20px]">
              This role is ideal for individuals who enjoy building{" "}
              <br className="hidden lg:block" />
              rapport, negotiating deals, and working in a fast-paced environment.{" "}
              
            </p>
            <div className="mt-3 flex flex-col sm:flex-row border-2 bg-[#f6f6f6] border-gray-300 rounded-lg p-3">
              <div className="mb-2 sm:mb-0 sm:w-[30%]">
                <p className="inline-flex text-sm font_family_inter text-white items-center rounded-md bg-[#a289ff] px-2 py-1 text-xs font-medium">
                  Perfect for
                </p>
              </div>
              <div className="sm:ml-2">
                <p className="font_family_inter font-medium text-xs text-[#686868] leading-[18px]">
                  People with strong <br className="hidden lg:block" />
                  communication skills and a <br className="hidden lg:block" />
                  passion for persuading others.
                </p>
              </div>
            </div>
            <div className="flex mt-6 mb-3 justify-center">
              <button className="flex items-center gap-2 bg-[#171923] px-6 py-2 rounded-full text-white hover:bg-gray-800 transition-colors text-sm">
                Apply Now
                <Image src={Arrow_right} alt="" height={8} width={10} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 border border-gray-300 p-4 rounded-lg">
            <div className="card2 flex justify-start items-center p-3 rounded-lg">
              <p className="inline-flex text-sm font_family_inter text-[#D92852] items-center rounded-md bg-white px-2 py-1 font-medium ring-1 ring-gray-200">
                Technology
              </p>
            </div>
            <h2 className="text-[#141414] font_family_inter font-semibold mt-4 text-xl leading-[24px]">
              Software Developer
            </h2>
            <p className="font_family_inter font-medium text-sm mt-3 text-[#686868] leading-[20px]">
              This role is ideal for individuals who enjoy building{" "}
              <br className="hidden lg:block" />
              rapport, negotiating deals, and working in a fast-paced environment.{" "}              
            </p>
            <div className="mt-3 flex flex-col sm:flex-row border-2 bg-[#f6f6f6] border-gray-300 rounded-lg p-3">
              <div className="mb-2 sm:mb-0 sm:w-[30%]">
                <p className="inline-flex text-sm font_family_inter text-white items-center rounded-md bg-[#a289ff] px-2 py-1 text-xs font-medium">
                  Perfect for
                </p>
              </div>
              <div className="sm:ml-2">
                <p className="font_family_inter font-medium text-xs text-[#686868] leading-[18px]">
                  People with strong <br className="hidden lg:block" />
                  communication skills and a <br className="hidden lg:block" />
                  passion for persuading others.
                </p>
              </div>
            </div>
            <div className="flex mt-6 mb-3 justify-center">
              <button className="flex items-center gap-2 bg-[#171923] px-6 py-2 rounded-full text-white hover:bg-gray-800 transition-colors text-sm">
                Apply Now
                <Image src={Arrow_right} alt="" height={8} width={10} />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 border border-gray-300 p-4 rounded-lg">
            <div className="card3 flex justify-start items-center p-3 rounded-lg">
              <p className="inline-flex text-sm font_family_inter text-[#D92852] items-center rounded-md bg-white px-2 py-1 font-medium ring-1 ring-gray-200">
                Management
              </p>
            </div>
            <h2 className="text-[#141414] font_family_inter font-semibold mt-4 text-xl leading-[24px]">
              Business Development         <br className="hidden lg:block" />
 Representative (BDR)
            </h2>
            <p className="font_family_inter font-medium text-sm mt-3 text-[#686868] leading-[20px]">
              This role is ideal for individuals who enjoy building{" "}
              <br className="hidden lg:block" />
              rapport, negotiating deals, and working in a fast-paced environment.{" "}
            </p>
            <div className="mt-3 flex flex-col sm:flex-row border-2 bg-[#f6f6f6] border-gray-300 rounded-lg p-3">
              <div className="mb-2 sm:mb-0 sm:w-[30%]">
                <p className="inline-flex text-sm font_family_inter text-white items-center rounded-md bg-[#a289ff] px-2 py-1 text-xs font-medium">
                  Perfect for
                </p>
              </div>
              <div className="sm:ml-2">
                <p className="font_family_inter font-medium text-xs text-[#686868] leading-[18px]">
                  People with strong <br className="hidden lg:block" />
                  communication skills and a <br className="hidden lg:block" />
                  passion for persuading others.
                </p>
              </div>
            </div>
            <div className="flex mt-6 mb-3 justify-center">
              <button className="flex items-center gap-2 bg-[#171923] px-6 py-2 rounded-full text-white hover:bg-gray-800 transition-colors text-sm">
                Apply Now
                <Image src={Arrow_right} alt="" height={8} width={10} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}