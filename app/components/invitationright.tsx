import React from "react";
import Image from "next/image";
import wedding4 from "@/assets/img/wedding4.jpg";
import { oleoScript } from "@/lib/font";

const InvitationRight = () => {
  return (
    <section className="relative w-full mx-auto h-screen overflow-hidden">
      <Image src={wedding4} alt="" fill className="object-cover"></Image>
      <div className="absolute inset-0 h-[100%] bg-gradient-to-t from-[#000000]/100 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col px-4 text-center">
        {/* Title */}
        <div className="pt-10">
          <p
            className={`${oleoScript.className} md:text-[2rem] text-[1.5rem] font-[400] italic drop-shadow-md`}
          >
            Happy Wedding
          </p>
          <p
            className={`${oleoScript.className} md:text-[3.3rem] text-[2.3rem] font-[700] italic drop-shadow-md`}
          >
            Fulan & Fulanah
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-3 items-center pb-10">
          {/* Bottom-Text */}
          <div className="flex flex-col gap-2 text-white italic">
            <p className="md:text-[0.9rem] text-[0.7rem]">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            <p className="md:text-[1rem] text-[0.85rem]">Nama</p>
            <p className="md:text-[1rem] text-[0.85rem]">di Tempat</p>
            <p className="md:text-[0.75rem] text-[0.65rem]">
              *mohon maaf apabila ada kesalahan penulisan nama maupun gelar
            </p>
          </div>

          {/* frame */}
          <div className="relative mx-auto md:w-[250px] w-[200px] mt-5 text-white">
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
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="md:text-[1rem] text-[0.85rem] font-bold">
                Open Invitation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationRight;
