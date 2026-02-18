import { exportTraceState } from "next/dist/trace";
import {
  Mrs_Saint_Delafield,
  Oleo_Script,
  Oooh_Baby,
  Poppins,
  Noto_Sans_Arabic,
  Noto_Naskh_Arabic,
  Mr_Dafoe,
} from "next/font/google";

export const mrsSaintDelafield = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
});

export const oleoScript = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const ooohBaby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
});

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const mrDafoe = Mr_Dafoe({
  subsets: ["latin"],
  weight: "400",
});
