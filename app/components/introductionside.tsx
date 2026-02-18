import React from "react";

import { mrDafoe, mrsSaintDelafield, ooohBaby } from "@/lib/font";

const IntroductionSide = () => {
  return (
    <section className="relative w-full mx-auto h-screen ">
      <div className="h-[100%] bg-[#D9D9D9] flex flex-col items-center">
        <div className="text-black flex flex-col gap-1 text-center">
          <p
            className={`${mrDafoe.className} md:text-[2.5rem] text-[1.8rem] italic`}
          >
            Assalamulaikum
          </p>
          <p className="md:text-[1rem] text-[0.8rem] font-normal mr-7 ml-7">
            Dengan dan Ridho Allah SWT, Kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami
          </p>
        </div>
        <div className="relative md:w-full w-[95%] flex items-center justify-center flex-1">
          <div className="w-[15%] max-w-[550px] grid grid-cols-2 relative place-items-center">
            <div className="grid md:grid-cols-[190px_1fr] grid-cols-[160px_1fr] md:gap-4 gap-2 md:w-[450px] w-[345px] md:translate-x-[0.9rem] translate-x-3">
              <div className="bg-[#474747] md:h-[250px] h-[220px] rounded-tr-md rounded-bl-md"></div>
              <div className="flex flex-col text-left gap-[5px]">
                <p className="font-[700] md:text-[18px] text-[16px]">
                  Fulan, Gelar
                </p>
                <div className="font-[300] italic md:text-[14px] text-[12px]">
                  <p className="">Putra pertama dari</p>
                  <p>Bapak Fulan & Ibu Fulanah</p>
                  <p>Surabaya, Jawa Timur</p>
                </div>
              </div>
            </div>
            <div></div>
            <span
              className={`${ooohBaby.className} absolute left-1/2 top-1/2 md:translate-x-[-50%] translate-x-[-60%] md:-translate-y-13 -translate-y-7 md:text-[5rem] text-[3rem] z-10`}
            >
              &
            </span>
            <div></div>
            <div className="grid md:grid-cols-[1fr_190px] grid-cols-[1fr_160px] gap-4 md:w-[450px] w-[345px] md:-translate-x-[0.88rem] -translate-x-3 translate-y-3">
              <div className="flex flex-col justify-end text-right gap-[5px]">
                <p className="font-[700] md:text-[18px] text-[16px]">
                  Fulanah, Gelar
                </p>
                <div className="font-[300] italic md:text-[14px] text-[12px]">
                  <p>Putri pertama dari</p>
                  <p>Bapak Fulan & Ibu Fulanah</p>
                  <p>Malang, Jawa Timur</p>
                </div>
              </div>
              <div className="bg-[#474747] md:h-[250px] h-[220px] rounded-tr-md rounded-bl-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSide;
