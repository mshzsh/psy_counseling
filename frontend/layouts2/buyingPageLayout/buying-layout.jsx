import { toFaDigit } from "fa-utils";
import React, { useState } from "react";
// import GoogleLoginComponent from "./GoogleLoginComponent";
import Footer from "../../components/Footer";
import MainNavbar from "../../components/header/MainNavbar";
import VerifiedIcon from "@mui/icons-material/Verified";
import RectangleIcon from "@mui/icons-material/Rectangle";

const BuyingLayout = () => {
  return (
    <div>
      <header>
        <MainNavbar />
      </header>
      <main className="container mx-auto">
        <div className="flex w-[1272px] h-[316px] justify-between mx-auto mb-[20px] bg-[#F9F9F9] mt-[20px] px-[24px]">
          <div className="flex flex-col w-[384px] py-[32px]">
            <div className="flex flex-col">
              <div className="flex">
                <img
                  width={110}
                  height={110}
                  src="https://i.ibb.co/zVWsNB9/Rectangle-367-1.png"
                  alt=""
                />
                <div className="flex flex-col mr-[32px]">
                  <div className="flex">
                    <VerifiedIcon style={{ color: "#0099FF" }} />
                    <p className="text-[22px] font-[800]">نام و نام خانوادگی</p>
                  </div>
                  <p className="text-[18px] font-[600]">حرفه در این بخش</p>
                </div>
              </div>

              <p className="text-[18px] font-[400] mt-[12px]">
                لورم ایپسوم و لورمایپسوم و لورم لورمایپسوم و لورم ایپسوم و لو
                ایپسوم و لایپسوم لورمایپسوم و لورم ایپسوم و لور لورمایلورماسوم و
                لور ایپسوم لورایپسوم و ورم ایپلورمایپسوم و لورم ایپسوم و لور.
              </p>
            </div>
          </div>
          <div className="w-[353px] items-center  py-[32px] bg-[#F9F9F9]">
            <div className="flex items-center">
              <RectangleIcon
                style={{
                  color: "#36E2B4",
                  fontSize: "14px",
                  marginBottom: "2px",
                }}
              />
              <p className="text-[18px] font-[600] mr-[8px]">علت مراجعه</p>
            </div>
            <textarea
              placeholder="لطفا شرح حال و علایم خود را بیان کنید"
              className="outline-none w-full  pl-[12px] p-[16px] h-[230px] mt-[8px] border-[1px] border-[#CBCBCB]"
              style={{ resize: "none" }}
            />
          </div>
          <div className="w-[30px] relative flex justify-center">
            <div className="w-full h-[30px] bg-white rounded-[50%] absolute top-[-22px]" />
            <div
              className="h-full w-[1px] bg-[#9A9A9A]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #333 60%, rgba(255, 255, 255, 255) 0%)",
                backgroundPosition: "top",
                backgroundSize: "2px 10px",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div className="w-full h-[30px] bg-white rounded-[50%] absolute bottom-[-22px]" />
          </div>
          <div className="flex flex-col w-[330px] py-[32px]">
            <ul>
              <li className="flex justify-between items-center">
                <p className="text-[20px] font-[700]">جمع کل:</p>
                <p className="text-[22px] font-[600]">
                  {" "}
                  {toFaDigit(30000)} تومان
                </p>
              </li>
              <li className="flex justify-between items-center mt-[22px]">
                <p className="text-[20px] font-[700]">تخفیف:</p>
                <p className="text-[#0099FF] text-[22px] font-[600]">
                  {toFaDigit([5000].toLocaleString())} تومان
                </p>
              </li>
              <li className="flex justify-between items-center mt-[58px]">
                <p className=" text-[20px] font-[700]">مبلغ قابل پرداخت:</p>
                <p className="text-[20px] font-[700] text-[#36E2B4]">
                  {toFaDigit([25000].toLocaleString())} تومان
                </p>
              </li>
            </ul>
            <button className="bg-[#36E2B4] h-[54px] text-[22px] font-[600] w-full mt-[32px] justify-center items-center">
              پرداخت
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BuyingLayout;
