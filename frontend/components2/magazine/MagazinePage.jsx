import React, { useState, useEffect } from "react";
import MagazineCard from "./MagazineCard";
import VisibilitySensor from "react-visibility-sensor";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
const MagazinePage = () => {
  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const test2 = [1, 1, 1, 1, 1];
  const [state, setState] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  const [isVisibleStatus, setIsVisibleStatus] = useState(false);

  function onChange(isVisible) {
    setIsVisibleStatus(isVisible);
  }

  useEffect(() => {
    if (isVisibleStatus) {
      setTimeout(() => {
        const arr = [1, 1, 1, 1, 1, 1, 1, 1];
        setState([...state, ...arr]);
      }, 1000);
    }
  }, [isVisibleStatus]);

  return (
    <div className="flex w-full flex-col ">
      <div className="flex w-full justify-between ">
        <div className="w-[392px] ml-[24px]">
          <p>side content</p>
          <div className="w-full h-[2px] bg-[#CBCBCB]" />
        </div>
        <div className="flex w-full flex-col flex-wrap gap-[24px]">
          <div className="flex w-full flex-wrap gap-[24px]">
            {state.map((card, index) => (
              <MagazineCard
                imageSrc="https://i.ibb.co/41d739V/Rectangle-530.png"
                width={index % 16 === 0 || index % 16 === 9 ? "808" : "392"}
                height="396"
              />
            ))}
          </div>

          <VisibilitySensor onChange={onChange}>
            <div className="h-[2px] text-center mx-auto">
              <div className="text-center">
                <HourglassBottomIcon
                  className="hourClock"
                  style={{ marginBottom: "20px" }}
                />
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;
