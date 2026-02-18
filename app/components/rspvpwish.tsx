"use client";

import { mrDafoe } from "@/lib/font";
import React, { useRef } from "react";
import { text } from "stream/consumers";

const RspvpWish = () => {
  // const [name, setName] = useState("");

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;

  //   if (value.length === 0) {
  //     setName("");
  //     return;
  //   }

  //   const lastChar = value[value.length - 1];
  //   const prevChar = value[value.length - 2];
  //   if (value.length === 1) {
  //     setName(lastChar.toUpperCase());
  //     return;
  //   }

  //   if (prevChar === " " && lastChar === " ") {
  //     setName(value.slice(0, -1));
  //     return;
  //   }

  //   if (prevChar === " " && lastChar.match(/[a-z]/i)) {
  //     setName(value.slice(0, -1) + lastChar.toUpperCase());
  //     return;
  //   }

  //   setName(value);
  // const formatted = value.charAt(0).toUpperCase() + value.slice(1);
  // setName(formatted);
  // };
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // relative w-full mx-auto h-screen overflow-hidden
  return (
    <section className="w-full mx-auto min-h-screen flex flex-col">
      <div className="flex-1 bg-[#d9d9d9] flex flex-col items-center gap-5">
        <div className="relative w-[380px] md:w-[450px] px-3 flex justify-center items-end">
          <p
            className={`${mrDafoe.className} lg:text-[2.8rem] md:text-[2.5rem] text-[2rem]`}
          >
            RSVP's & Wish Corner
          </p>
          <div className="flex-1 h-[2px] md:h-[3px] w-full max-w-[250px] -translate-y-[8px] md:-translate-y-[10px] ml-[-3rem]  bg-black rounded-full"></div>
        </div>
        <div className="flex flex-col max-w-[450px] gap-2">
          <div className="flex flex-col gap-2">
            <p className="lg:text-[1rem] md:text-[0.85rem] text-[0.7rem] text-center">
              Bantu kami untuk mempersiapkan sesuatu yang hangat untuk Anda
              semua.
            </p>
            <div className="w-[400px] md:w-[450px] h-auto bg-[#B0B0B0] rounded-md p-2 mx-auto">
              <form className="flex flex-col gap-2.5 items-center mt-3">
                <input
                  className="w-[calc(100%-10%)] h-[40px] rounded-md bg-[#ffff] p-2 placeholder:italic placeholder:font-[200] outline-none placeholder:text-[12px] placeholder:md:text-[14px] 
                "
                  type="text"
                  // value={name}
                  // onChange={handleNameChange}
                  placeholder="Masukkan Nama"
                ></input>
                <div className="flex gap-2.5">
                  <label className="flex items-center justify-center gap-1 text-[14px] md:text-[12px] ">
                    <input
                      type="radio"
                      name="kehadiran"
                      value="datang"
                      className="cursor-pointer"
                      required
                    />
                    Pasti, Datang
                  </label>
                  <label className="flex items-center justify-center gap-1 text-[14px] md:text-[12px]">
                    <input
                      type="radio"
                      name="kehadiran"
                      value="tidak_datang"
                      className="cursor-pointer"
                    />
                    Mohon Maaf, Tidak Datang
                  </label>
                </div>
                <button
                  className="rounded-md bg-[#ffff] w-[100px] md:w-[150px] h-[20px] md:h-[35px] cursor-pointer mx-auto text-[12px] md:text-[14px]"
                  type="submit"
                >
                  Kirimkan
                </button>
              </form>
            </div>
            {/* wish corner */}
            <div className="w-[400px] md:w-[450px]  md:h-[300px] h-[290px] bg-[#B0B0B0] rounded-md flex flex-col items-center p-2 mx-auto gap-1">
              <div className="w-[390px] md:w-[440px] h-[75px] md:h-[95px] bg-[#8F8F8F] rounded-md p-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Wish dikirim");
                  }}
                  className="flex self-start gap-2 items-center justify-center"
                >
                  <textarea
                    ref={textareaRef}
                    name="wishcorner"
                    placeholder="Tinggalkan pesan kalian disini."
                    className="placeholder:italic placeholder:md:text-[14px] placeholder:text-[12px] w-[300px] md:w-[350px] h-[60px] md:h-[80px] bg-[#ffff] rounded-md outline-none p-1 resize-none"
                  ></textarea>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (textareaRef.current) {
                          textareaRef.current.value = "";
                        }
                      }}
                      className="w-[60px] md:w-[75px] h-[20px] md:h-[30px] rounded-md bg-[#dc3545] lg:text-[14px] text-[10px] cursor-pointer"
                    >
                      Batalkan
                    </button>
                    <button
                      type="submit"
                      className="w-[60px] md:w-[75px] h-[20px] md:h-[30px] rounded-md bg-[#ffff] lg:text-[14px] text-[10px] cursor-pointer"
                    >
                      Kirimkan
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-[390px] md:w-[440px] h-full bg-[#8F8F8F] rounded-md p-2"></div>
            </div>
            <div className={`${mrDafoe.className} lg:text-[16px] text-center`}>
              <p>Thanks everyone for your attentions</p>
              <p>Fulan & Fulanah</p>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full h-[50px] bg-[#474747] flex items-center justify-center mt-auto">
          <p>made by &copy; 2026 </p>
        </div>
      </div>
    </section>
  );
};

export default RspvpWish;
