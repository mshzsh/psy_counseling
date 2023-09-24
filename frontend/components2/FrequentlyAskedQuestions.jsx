import React, { useState, useRef } from "react";
import AccordionComponent from "./AccordionComponent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FrequentlyAskedQuestions = () => {
  const [accordionState, setAccordionState] = useState([
    {
      id: "1",
      question: "تست نئو چیست؟",
      answer:
        "تست نئو یک آزمون شخصیت شناسی است که توسط آن می توان ارزیابی دقیقی از سبک های عاطفی، بین فردی، تجربی، نگرشی، انگیزشی و حرفه ای به دست آورد. این آزمون منبع ارزشمندی برای شناخت خود می باشد.",
      isActive: false,
    },

    {
      id: "2",
      question: "تست نئو چه ویژگی‌هایی را می‌سنجد؟",
      answer:
        "متن تست متن تست متن تست متن تستمتن تستمتن تست متن تستمتن تستمتن تست",
      isActive: false,
    },

    {
      id: "3",
      question: "تست نئو حال خوب چه ویژگی‌هایی دارد؟",
      answer:
        "متن تست متن تست متن تست متن تستمتن تستمتن تست متن تستمتن تستمتن تست",
      isActive: false,
    },

    {
      id: "4",
      question: "چگونه به سوالات تست نئو پاسخ بدهیم؟",
      answer:
        "متن تست متن تست متن تست متن تستمتن تستمتن تست متن تستمتن تستمتن تست",
      isActive: false,
    },

    {
      id: "5",
      question: "چرا بهتر است از تست نئو فرم بلند استفاده کنیم؟",
      answer:
        "متن تست متن تست متن تست متن تستمتن تستمتن تست متن تستمتن تستمتن تست",
      isActive: false,
    },
  ]);

  const accordionFunction = (id) => {
    let temp = accordionState;
    const index = temp.findIndex((ac) => ac.id === id);
    // temp.forEach((acc) => (acc.isActive = false));
    if (!temp[index].isActive) {
      temp[index].isActive = true;
    } else {
      temp[index].isActive = false;
    }
    setAccordionState([...temp]);
  };

  return (
    <div className="flex flex-col ">
      {accordionState.map((state) => (
        <>
          <div
            className="flex flex-col justify-center h-auto  mb-[24px] py-[20px] border-[1px] pr-[24px] border-[#36E2B4] "
            key={state.id}
          >
            <div
              className="w-full flex justify-between items-center cursor-pointer"
              onClick={() => accordionFunction(state.id)}
            >
              <p className="text-[22px] font-[800] cursor-pointer">
                {state.question}
              </p>
              <KeyboardArrowDownIcon
                className={`ml-[24px] ${
                  state.isActive ? "rotate-180" : "rotate-0"
                }`}
                style={{ color: "#36E2B4", fontSize: "24px" }}
              />
            </div>

            <AccordionComponent state={state} />
          </div>
        </>
      ))}
    </div>
  );
};

export default FrequentlyAskedQuestions;
