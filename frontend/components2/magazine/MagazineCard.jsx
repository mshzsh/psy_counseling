import React, { useState, useEffect, useRef } from "react";
import MagazineContent from "./MagazineContent";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// import required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MagazineCard = ({ imageSrc, width, height, hasSlider, sliderState }) => {
  const [rightArrowButton, setRightArrowButton] = useState();
  const [leftArrowButton, setLeftArrowButton] = useState();
  const mapNumber = [1, 1, 1];
  const rightArrowRef = useRef();
  const leftArrowRef = useRef();

  useEffect(() => {
    setRightArrowButton(rightArrowRef.current);
    setLeftArrowButton(leftArrowRef.current);
  }, [rightArrowRef, leftArrowRef]);

  return (
    <>
      {width.length > 0 && height.length > 0 && (
        <div
          className={` relative w-full`}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {hasSlider ? (
            <>
              <div className="absolute flex w-full h-full justify-between items-center">
                <button ref={leftArrowRef} className="z-10 opacity-40">
                  <ArrowForwardIosIcon
                    style={{ color: "#F9F9F9", fontSize: "76px" }}
                  />
                </button>
                <button ref={rightArrowRef} className="z-10 opacity-40">
                  <ArrowBackIosNewIcon
                    style={{ color: "#F9F9F9", fontSize: "76px" }}
                  />
                </button>
              </div>
              {rightArrowRef.current && leftArrowRef.current && (
                <Swiper
                  onSliderFirstMove={(e) => {
                    setTimeout(() => {
                      if (e.isBeginning) {
                        e.allowSlidePrev = false;
                      } else if (e.isEnd) {
                        e.allowSlideNext = false;
                      } else {
                        e.allowSlideNext = true;
                        e.allowSlidePrev = true;
                      }
                    }, 0);
                  }}
                  pagination={{
                    type: "bullets",
                    bulletActiveClass:
                      "!bg-[#fff] !w-[20px] !h-[6px] !rounded-none",
                    bulletClass:
                      "swiper-pagination-bullet !opacity-100 !rounded-sm !bg-white",
                    bulletElement: "span",
                  }}
                  navigation={{
                    nextEl: rightArrowButton,
                    prevEl: leftArrowButton,
                    disabledClass: "!opacity-0",
                  }}
                  modules={[Pagination, Navigation]}
                  className=" h-full"
                >
                  {sliderState &&
                    sliderState.map((state) => (
                      <SwiperSlide>
                        <MagazineContent
                          width={width}
                          height={height}
                          imageSrc={imageSrc}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              )}
            </>
          ) : (
            <MagazineContent imageSrc={imageSrc} />
          )}
        </div>
      )}
    </>
  );
};

export default MagazineCard;
