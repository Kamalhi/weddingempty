import React from "react";

import { mrDafoe } from "@/lib/font";
import wedding2 from "@/assets/img/wedding2.jpg";
import wedding3 from "@/assets/img/wedding3.jpg";
import wedding4 from "@/assets/img/wedding4.jpg";
import wedding5 from "@/assets/img/wedding5.jpg";
import wedding6 from "@/assets/img/wedding6.jpg";
import wedding7 from "@/assets/img/wedding7.jpg";

const photos = [
  wedding2.src,
  wedding3.src,
  wedding4.src,
  wedding5.src,
  wedding6.src,
  wedding7.src,
];

const BelovedMoments = () => {
  return (
    <section className="relative w-full mx-auto h-screen overflow-hidden">
      <div className="h-screen bg-[#D9D9D9] flex flex-col items-center gap-3">
        <div className="relative w-[380px] md:w-[450px] px-3 flex justify-center items-end">
          <p
            className={`${mrDafoe.className} lg:text-[2.8rem] md:text-[2.5rem] text-[2rem]`}
          >
            Beloved Moments
          </p>
          <div className="flex-1 h-[2px] md:h-[3px] w-full max-w-[250px] -translate-y-[8px] md:-translate-y-[10px] ml-[-3rem]  bg-black rounded-full"></div>
        </div>
        <div className="flex justify-center h-screen items-center">
          <div className="grid grid-cols-[repeat(auto-fit,140px)] md:grid-cols-[repeat(auto-fit,145px)] w-[350px] md:w-[400px] gap-4 mx-auto justify-center items-center pb-1.5">
            {photos.map((src, i) => (
              <div
                key={i}
                className="bg-[#474747] w-[130px] md:w-[140px] h-[170px] md:h-[180px] rounded-tr-md rounded-bl-md overflow-hidden flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`moment-${i}`}
                  className="w-[100px] md:w-[110px] h-[155px] md:h-[165px] rounded-tr-md rounded-bl-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelovedMoments;
