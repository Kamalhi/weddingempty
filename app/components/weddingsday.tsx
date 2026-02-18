import React from "react";

import { mrDafoe } from "@/lib/font";

const WeddingsDay = () => {
  return (
    <section className="relative w-full mx-auto h-screen overflow-hidden">
      <div className="h-screen bg-[#D9D9D9] flex flex-col items-center gap-5">
        <div className="relative w-[380px] md:w-[450px] px-3 flex justify-center items-end">
          <p
            className={`${mrDafoe.className} lg:text-[2.8rem] md:text-[2.5rem] text-[2rem]`}
          >
            Wedding's Day
          </p>
          <div className="flex-1 h-[2px] md:h-[3px] w-full max-w-[250px] -translate-y-[8px] md:-translate-y-[10px] ml-[-3rem]  bg-black rounded-full"></div>
        </div>
        <section className="w-screen h-screen flex justify-center items-center">
          <div
            className="relative w-[350px] h-[550px] md:w-[370px] md:h-[600px] flex flex-col
          justify-between items-center"
          >
            <div className="relative flex w-[100%] h-[320px] md:h-[290px] items-start">
              <div className="w-[260px] max-w-[300px] h-[250px] md:w-[280px] md:h-[280px] bg-[#474747] rounded-tr-xl rounded-bl-xl mr-auto flex flex-col">
                <div className="flex flex-col gap-4 h-full md:gap-3.5 px-3.5 pt-1 pb-4  text-white">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-0 mb-2">
                      <p
                        className={`${mrDafoe.className} text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem]`}
                      >
                        Akad Nikah
                      </p>
                      <p className="w-[150px] max-w-[180px] h-[3px] rounded-full bg-[#ffff]"></p>
                    </div>
                    <div>
                      <p className="font-[700] text-[0.65rem] md:text-[0.8rem] lg:text-[1rem]">
                        Hari, 32 Desember 2025
                      </p>
                      <p className="italic font-[200] text-[0.6rem] md:text-[0.75rem] lg:text-[0.9rem]">
                        Pukul 25:00 WIB
                      </p>
                    </div>
                    <div className="text-[0.65rem] md:text-[0.8rem] lg:text-[1rem]">
                      <p className="font-[600]">Lokasi</p>
                      <p className="font-[800] text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                        Masjid Al-Ikhlas
                      </p>
                      <p className="text-[0.65rem] md:text-[0.75rem] italic">
                        Kel. Xxxxx, Kec. Xxxxx, Kota/Kab. Xxxxx
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto w-[100px] md:w-[150px] h-[20px] md:h-[25px]">
                    <button className="w-[100px] h-[20px] md:w-[150px] md:h-[25px] bg-[#ffff] text-black md:text-[0.8rem] text-[0.65rem] italic rounded-tr-md rounded-bl-md cursor-pointer">
                      Lihat Lokasi
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col  w-[100%] h-[300px] text-right items-end">
              <div className="w-[260px] max-w-[300px] h-[250px] md:w-[280px] md:h-[280px] bg-[#474747] rounded-tl-xl rounded-br-xl">
                <div className="relative flex flex-col gap-4 h-full md:gap-3.5 px-3.5 pt-1 pb-4 text-white">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-0 mb-2">
                      <p
                        className={`${mrDafoe.className} text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem]`}
                      >
                        Resepsi
                      </p>
                      <p className="w-[150px] max-w-[180px] h-[3px] rounded-full bg-[#ffff] self-end"></p>
                    </div>
                    <div>
                      <p className="font-[700] text-[0.65rem] md:text-[0.8rem] lg:text-[1rem]">
                        Hari, 32 Desember 2025
                      </p>
                      <p className="italic font-[200] text-[0.6rem] md:text-[0.75rem] lg:text-[0.9rem]">
                        Pukul 25:00 WIB
                      </p>
                    </div>
                    <div className="text-[0.65rem] md:text-[0.8rem] lg:text-[1rem]">
                      <p className="font-[600]">Lokasi</p>
                      <p className="font-[800] text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                        Gedung Serbaguna
                      </p>
                      <p className="text-[0.65rem] md:text-[0.75rem] italic">
                        Kel. Xxxxx, Kec. Xxxxx, Kota/Kab. Xxxxx,
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto w-[100px] md:w-[150px] h-[20px] md:h-[25px] self-end">
                    <button className="w-[100px] h-[20px] md:w-[150px] md:h-[25px] bg-[#ffff] text-black md:text-[0.8rem] text-[0.65rem] italic rounded-tl-md rounded-br-md cursor-pointer">
                      Lihat Lokasi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default WeddingsDay;
