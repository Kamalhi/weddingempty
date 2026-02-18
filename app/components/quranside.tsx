import React from "react";

import { notoSansArabic, notoNaskhArabic } from "@/lib/font";

const QuranSide = () => {
  return (
    <section className="relative w-full mx-auto h-screen overflow-hidden">
      <div className="w-[100%] h-[100%] bg-[#D9D9D9] flex flex-col items-center justify-center">
        <div className="relative md:w-[400px] md:h-[650px] w-[95%] h-[75%] bg-[#474747] rounded-tr-md rounded-bl-md items-center justify-center flex">
          <div className="absolute top-0 left-0 text-white">
            <svg
              width="168"
              height="123"
              viewBox="0 0 168 123"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M148.11 0C149.746 0 151.072 1.00125 151.072 2.23636C151.072 3.47146 149.746 4.47273 148.11 4.47273H8.8866V114.055C8.8866 115.907 6.89728 117.409 4.4433 117.409C1.98933 117.409 -2.2996e-09 115.907 0 114.055V0H148.11Z" />
              <path d="M162.921 7.82739C165.375 7.82739 167.364 9.32927 167.364 11.1819C167.364 13.0346 165.375 14.5365 162.921 14.5365H20.7352V120.764C20.7352 121.999 19.409 123 17.773 123C16.137 123 14.8108 121.999 14.8108 120.764V7.82739H162.921Z" />
            </svg>
          </div>
          <div className="flex flex-col text-center text-white md:mr-3 md:ml-3 mr-[1.8rem] ml-[1.8rem] gap-7">
            <p className="text-[0.8rem] md:text-[1rem] italic">
              Q.S. Al-Furqan : 74
            </p>
            <p
              dir="rtl"
              style={{ lineHeight: "1.8" }}
              className={`text-[1.2rem] md:text-[1.7rem] font-semibold mb-5 ${notoNaskhArabic.className}`}
            >
              وَالَّذِيْنَ يَقُوْلُوْنَ رَبَّنَا هَبْ لَنَا مِنْ اَزْوَاجِنَا
              وَذُرِّيّٰتِنَا قُرَّةَ اَعْيُنٍ وَّاجْعَلْنَا لِلْمُتَّقِيْنَ
              اِمَامًا
            </p>
            <p className="text-[0.8rem] md:text-[1rem] italic">
              Dan, orang-orang yang berkata, “Wahai Tuhan kami, anugerahkanlah
              kepada kami penyejuk mata dari pasangan dan keturunan kami serta
              jadikanlah kami sebagai pemimpin bagi orang-orang yang bertakwa.”
            </p>
          </div>
          <div className="absolute bottom-0 right-0 rotate-180 text-white">
            <svg
              width="168"
              height="123"
              viewBox="0 0 168 123"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M148.11 0C149.746 0 151.072 1.00125 151.072 2.23636C151.072 3.47146 149.746 4.47273 148.11 4.47273H8.8866V114.055C8.8866 115.907 6.89728 117.409 4.4433 117.409C1.98933 117.409 -2.2996e-09 115.907 0 114.055V0H148.11Z" />
              <path d="M162.921 7.82739C165.375 7.82739 167.364 9.32927 167.364 11.1819C167.364 13.0346 165.375 14.5365 162.921 14.5365H20.7352V120.764C20.7352 121.999 19.409 123 17.773 123C16.137 123 14.8108 121.999 14.8108 120.764V7.82739H162.921Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranSide;
