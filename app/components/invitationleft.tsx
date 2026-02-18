import React from "react";

import Image from "next/image";
import wedding1 from "@/assets/img/wedding1.jpg";
import { oleoScript } from "@/lib/font";

const InvitationLeft = () => {
  return (
    <section className="relative w-full h-full">
      <div className="">
        <Image
          src={wedding1}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-screen object-cover"
        ></Image>
      </div>

      <div className="absolute inset-0 bg-white/10"></div>

      <div className="absolute bottom-10 left-20 w-full text-left z-10">
        <p
          className={`text-4xl md:text-6xl font-[700] text-black tracking-wide drop-shadow-md italic ${oleoScript.className}`}
        >
          Fulan & Fulanah
        </p>
      </div>
    </section>
  );
};

export default InvitationLeft;
