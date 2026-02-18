import Image from "next/image";

import InvitationLeft from "./components/invitationleft";
import InvitationRight from "./components/invitationright";
import DateInvitation from "./components/dateinvitation";
import QuranSide from "./components/quranside";
import IntroductionSide from "./components/introductionside";
import WeddingsDay from "./components/weddingsday";
import BelovedMoments from "./components/belovedmoments";
import SendGift from "./components/sendgift";
import RspvpWish from "./components/rspvpwish";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="hidden lg:block lg:w-[65%] md:h-screen md:overflow-hidden ">
        <InvitationLeft />
      </div>
      <div className="w-full lg:w-[35%] h-full scroll-smooth overflow-y-scroll overflow-x-hidden">
        <InvitationRight />
        <DateInvitation />
        <QuranSide />
        <IntroductionSide />
        <WeddingsDay />
        <BelovedMoments />
        <SendGift />
        <RspvpWish />
      </div>
    </main>
  );
}
