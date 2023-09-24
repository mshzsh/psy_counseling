import React from "react";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import VideocamIcon from "@mui/icons-material/Videocam";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import CheckIcon from "@mui/icons-material/Check";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const PlansModals = ({ closeIconHandler }) => {
  return (
    <div className="bg-[#fff] w-[808px] h-[673px] p-[24px]">
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-[600] text-black">جزئیات کامل پلن‌ها</p>
        <button
          onClick={() => {
            closeIconHandler(false);
          }}
        >
          <CloseRoundedIcon style={{ color: "black", fontSize: "20px" }} />
        </button>
      </div>
      <table class="table-auto text-black bg-gray-100 w-full">
        <thead className="h-[50px] bg-[#fff]">
          <tr className="text-[14px] font-[800] ">
            <th></th>
            <th className=" items-center">
              <PhoneCallbackIcon
                style={{ color: "#36E2B4", fontSize: "24px" }}
              />
              <span className="mr-[8px]">مشاوره تلفنی</span>
            </th>
            <th className=" items-center">
              <VideocamIcon style={{ color: "#36E2B4", fontSize: "24px" }} />
              <span className="mr-[8px]">مشاوره ویدئویی</span>
            </th>
            <th className="">
              <AirlineSeatReclineExtraIcon
                style={{ color: "#36E2B4", fontSize: "24px" }}
              />
              <span className="mr-[8px]">مشاوره حضوری</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center h-[50px] bg-[#F9F9F9]">
            <td className="text-[16px] font-[600]">زمان انتظار پاسخگویی</td>
            <td>کمتر از ۳ ساعت</td>
            <td>تعیین زمان توسط شما</td>
            <td className="text-[24px] text-[#9A9A9A]">-</td>
          </tr>
          <tr className="text-center h-[50px] bg-[#EDEDED]">
            <td className="text-[16px] font-[600]">میانگین پاسخگویی</td>
            <td>۳ ساعت</td>
            <td>گفتگو در زمان رزرو شده</td>
            <td className="text-[24px] text-[#9A9A9A]">-</td>
          </tr>
          <tr className="text-center h-[50px] bg-[#F9F9F9]">
            <td className="text-[16px] font-[600]">زمان گفتگو با پزشک</td>
            <td>۲۰ دقیقه گفتگو</td>
            <td>۴۵ دقیقه گفتگو</td>
            <td className="text-[24px] text-[#9A9A9A]">-</td>
          </tr>
          <tr className="text-center h-[50px] bg-[#EDEDED]">
            <td className="text-[16px] font-[600]">ارسال عکس</td>
            <td>
              <CheckIcon style={{ color: "#1AB88E", fontSize: "24px" }} />
            </td>
            <td>
              <CheckIcon style={{ color: "#1AB88E", fontSize: "24px" }} />
            </td>
            <td className="text-[24px]  text-[#9A9A9A]">-</td>
          </tr>
          <tr className="text-center bg-[#F9F9F9] h-[50px]">
            <td className="text-[16px] font-[600]">ارسال صوت</td>
            <td>
              <CheckIcon style={{ color: "#1AB88E", fontSize: "24px" }} />
            </td>
            <td>
              <CheckIcon style={{ color: "#1AB88E", fontSize: "24px" }} />
            </td>
            <td className="text-[24px] text-[#9A9A9A]">-</td>
          </tr>
          <tr className="text-center bg-[#EDEDED] h-[50px]">
            <td className="text-[16px] font-[600]">ارسال متن</td>
            <td>
              <CheckIcon style={{ color: "#1AB88E", fontSize: "24px" }} />
            </td>
            <td>
              <CheckIcon style={{ color: "#1AB88E", fontSize: "24px" }} />
            </td>
            <td className="text-[24px] text-[#9A9A9A]">-</td>
          </tr>
        </tbody>
      </table>
      <p className="text-[#1AB88E] mt-[24px] text-[16px] font-[500]">
        در پلن گفتگو تلفنی و ویدئویی پزشک با شما تماس خواهد گرفت !
      </p>
      <p className="text-[#1AB88E] mt-[14px] text-[16px] font-[500]">
        گفتگو شما و پزشک حول یک موضوع مشخص ادامه دارد
      </p>
      <ul className="mt-[6px]">
        <li className="text-[16px] font-[500]">
          <span className="text-[#9966FF]">زمان انتظار پاسخگویی:</span>&nbsp;
          <span className="text-black">
            زمان انتظار پاسخگویی، زمانی است که پزشک بعد از مطلع شدن از سوال شما
            تا زمانی که پاسختان را میدهد منتظر میمانید، معمولا در اسرع وقت
            پاسخگوی شماست و این زمان، حداکثر مدت انتظار شماست.
          </span>
        </li>
        <li className="text-[16px] font-[500] mt-[6px]">
          <span className="text-[#9966FF]">میانگین پاسخگویی پزشک:</span>&nbsp;
          <span className="text-black">
            این زمان میانگین اولین پاسخ پزشک به پیام کاربران در ۱ هفته اخیر می
            باشد. معمولا پزشک تلاش می کند تا در این زمان پاسخ شما را دهد.
          </span>
        </li>
        <li className="text-[16px] font-[500] mt-[6px]">
          <span className="text-[#9966FF]">پایان توافقی گفتگو:</span>&nbsp;
          <span className="text-black">
            پایان توافقی گفتگو به این معنی میباشد که پس از گفتگوی دوطرفه، پزشک
            از دریافت پاسخ کامل سوال شما اطمینان حاصل کرده و به تایید شما گفتگو
            را خواهد بست.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PlansModals;
