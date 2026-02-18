"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import wedding5 from "@/assets/img/wedding5.jpg";
import { oleoScript, ooohBaby } from "@/lib/font";

const countDownTarget = new Date("2025-12-30T00:00:00");
const getTimeLeft = () => {
  const nowDate = new Date();

  const totalTimeLeft = countDownTarget.getTime() - nowDate.getTime();

  const days = String(
    Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const hours = String(
    Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((totalTimeLeft / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const seconds = String(Math.floor((totalTimeLeft / 1000) % 60)).padStart(
    2,
    "0"
  );
  return { days, hours, minutes, seconds };
};

const DateInvitation = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const timerCount = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timerCount);
  }, []);

  return (
    <section className="relative w-full mx-auto h-screen overflow-hidden flex items-center justify-center">
      <Image src={wedding5} alt="" fill className="object-cover"></Image>
      <div className="absolute inset-0 h-[100%] bg-gradient-to-t from-[#000000]/100 to-transparent pointer-events-none" />

      <div className="relative z-10 mt-auto flex justify-center bottom-10">
        <div className="md:w-[450px] md:h-[200px] w-[350px] h-[200px] bg-[#d9d9d9] rounded-tr-xl rounded-bl-xl">
          <div className="flex flex-col gap-1 ">
            <p
              className={`${oleoScript.className} md:text-[1.2rem] text-[0.95rem] italic ml-3`}
            >
              Date of Wedding
            </p>
            <div className="flex flex-wrap justify-center">
              {Object.entries(timeLeft).map(([label, value], i, arr) => {
                //   const formattedValue = String(value).padStart(2, "0");
                const capitalLabel =
                  label.charAt(0).toUpperCase() + label.slice(1);
                return (
                  <div key={i} className="flex items-center justify-center">
                    <div className="flex flex-col items-center relative">
                      <div className="flex md:gap-1 h-10 relative">
                        <div
                          className={`${ooohBaby.className} md:w-8 md:h-8 w-6 h-6 border-1 border-black rounded-tr-md rounded-bl-md flex items-center justify-center bg-white`}
                        >
                          {value[0]}
                        </div>
                        <div
                          className={`${ooohBaby.className} md:w-8 md:h-8 w-6 h-6 border-1 border-black rounded-tr-md rounded-bl-md flex items-center justify-center bg-white`}
                        >
                          {value[1]}
                        </div>
                      </div>
                      <span
                        className={`${ooohBaby.className} absolute top-7 md:text-lg text-md italic`}
                      >
                        {capitalLabel}
                      </span>
                    </div>

                    {i !== arr.length - 1 && (
                      <div className="flex flex-col gap-1 md:mx-3 mx-1.5">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="md:w-[200px] md:h-[40px] w-[150px] h-[30px] bg-[#474747] flex items-center justify-center mx-auto rounded-tr-md rounded-bl-md mt-4">
              <p
                className={`${ooohBaby.className} text-white md:text-[0.9rem] text-[0.75rem] italic`}
              >
                32 Desember 2025
              </p>
            </div>
            <div className="relative mx-auto md:w-[180px] w-[150px] md:mt-1 mt-2 text-black">
              <svg
                viewBox="0 0 302 68"
                fill="currentColor"
                className="object-contain w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9_10)">
                  <path d="M66.2281 0C66.9596 0 67.5526 0.447715 67.5526 1C67.5526 1.55228 66.9596 2 66.2281 2H3.97368V51C3.97368 51.8284 3.08415 52.5 1.98684 52.5C0.88954 52.5 -1.02828e-09 51.8284 0 51V0H66.2281Z" />
                  <path d="M72.8509 3.5C73.9481 3.5 74.8377 4.17157 74.8377 5C74.8377 5.82843 73.9481 6.5 72.8509 6.5H9.27193V54C9.27193 54.5523 8.67889 55 7.94736 55C7.21584 55 6.6228 54.5523 6.6228 54V3.5H72.8509Z" />
                  <path d="M235.11 68C234.378 68 233.785 67.5523 233.785 67C233.785 66.4477 234.378 66 235.11 66H297.364V17C297.364 16.1716 298.254 15.5 299.351 15.5C300.448 15.5 301.338 16.1716 301.338 17V68H235.11Z" />
                  <path d="M228.487 64.5C227.39 64.5 226.5 63.8284 226.5 63C226.5 62.1716 227.39 61.5 228.487 61.5H292.066V14C292.066 13.4477 292.659 13 293.39 13C294.122 13 294.715 13.4477 294.715 14V64.5H228.487Z" />
                </g>
                <defs>
                  <clipPath id="clip0_9_10">
                    <rect width="302" height="68" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="md:size-5 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <span className="md:text-[0.9rem] text-[0.7rem] font-bold italic">
                  Save the date
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateInvitation;
