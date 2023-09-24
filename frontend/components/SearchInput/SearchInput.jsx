import React, { useEffect, useState, useRef } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import RotateRightIcon from '@mui/icons-material/RotateRight'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'

// Import Swiper React components

import CounselorSearchCard from './CounselorSearchCard'
import SwiperComponent from './SwiperComponent'

// Import Swiper styles

// import required modules
// import { Pagination } from "swiper";

const SearchInput = ({ parentStyles, inputStyles }) => {
  const [modalStatus, setModalStatus] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [showCounselorSlider, setShowCounselorSlider] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState('')
  const [imageLoade, setImageLoade] = useState(true)
  const [IsvisibleStartEl, setIsVisibleStartEl] = useState(false)
  const [IsvisibleSEndEl, setIsVisibleEndEl] = useState(true)
  const [showTagSlider, setShowTagSlider] = useState(false)

  const rightArrow = useRef()
  const leftArrow = useRef()

  const rightArrowCounselor = useRef()
  const leftArrowCounselor = useRef()

  const [hightState, setHightState] = useState('h-0 overflow-hidden')

  const testNumb = [1, 1, 1, 1, 1, 1, 1, 1]

  useEffect(() => {
    if (searchValue.length > 2) setLoadingStatus(true)
    setTimeout(() => {
      if (searchValue.length > 2) {
        setHightState('h-full overflow-auto')
        setImageLoade(false)
      } else {
        setHightState('h-0 overflow-hidden')
        setImageLoade(true)
      }

      setLoadingStatus(false)
    }, 1000)
  }, [searchValue])

  useEffect(() => {
    if (modalStatus) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modalStatus])

  return (
    <>
      <div
        className={`${parentStyles} w-full items-center h-[40px] bg-[#fff] relative lg:w-[538px] `}
      >
        <div
          className={`absolute  w-full  bg-[#fff] shadow-md  ${
            modalStatus
              ? 'opacity-100 z-50 duration-500  transition-all'
              : 'opacity-0 z-[-1] transition-all  duration-500'
          }`}
        >
          <div className="w-full h-[48px] flex items-center ">
            <SearchRoundedIcon
              style={{
                color: '#36E2B4',
                marginRight: '12px',
              }}
            />

            <input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              className={`${inputStyles} w-full h-full pr-[8px] text-[18px] font-[400] outline-none text-black placeholder:text-[18px] placeholder:font-[400] placeholder:text-[#CBCBCB]`}
              type="text"
              placeholder="جستجو کن"
            />

            {searchValue.length !== 0 && loadingStatus ? (
              <RotateRightIcon
                className="icon-animation"
                style={{
                  color: '#CBCBCB',
                  marginLeft: '12px',
                  cursor: 'pointer',
                }}
              />
            ) : (
              <CloseIcon
                onClick={() => setSearchValue('')}
                style={{
                  color: '#1C1B1F',
                  marginLeft: '12px',
                  cursor: 'pointer',
                }}
              />
            )}
          </div>
          {imageLoade && (
            <div>
              <img
                className="m-[8px]"
                src="https://i.postimg.cc/7hwxxPJQ/test1.png"
                alt="عکس تبلیغات"
              />
            </div>
          )}

          {/* after search */}

          <div className={`flex flex-col ${hightState}`}>
            <div className="h-[70px] w-full mt-[16px] bg-[#fff]  relative">
              <div
                className="w-full h-full  my-auto  flex justify-between absolute"
                onMouseEnter={() => setShowCounselorSlider(true)}
                onMouseLeave={() => setShowCounselorSlider(false)}
              >
                {IsvisibleStartEl && (
                  <div className="w-[80px] h-[62px] absolute bg-gradient-to-l top-0 right-0 from-[#fff]   z-10 to-transparent" />
                )}
                {IsvisibleSEndEl && (
                  <div className="w-[80px] h-[62px] absolute bg-gradient-to-r top-0 left-0 from-[#fff]   z-10 to-transparent" />
                )}
                <button
                  type="button"
                  ref={leftArrowCounselor}
                  className="z-20  rotate-180 my-auto"
                >
                  {showCounselorSlider && (
                    <ArrowBackIosIcon
                      style={{
                        color: '#CBCBCB',
                        backgroundColor: '',
                        fontSize: '55px',
                      }}
                    />
                  )}
                </button>

                <button
                  type="button"
                  ref={rightArrowCounselor}
                  className="z-20  my-auto "
                >
                  {showCounselorSlider && (
                    <ArrowBackIosIcon
                      style={{
                        color: '#CBCBCB',
                        backgroundColor: '',
                        fontSize: '55px',
                      }}
                    />
                  )}
                </button>
              </div>

              {leftArrowCounselor.current && rightArrowCounselor.current && (
                <div
                  className="relative w-full h-full"
                  onMouseEnter={() => setShowCounselorSlider(true)}
                  onMouseLeave={() => setShowCounselorSlider(false)}
                >
                  <Swiper
                    onSlideChange={() => {
                      setIsVisibleStartEl(true)
                      setIsVisibleEndEl(true)
                    }}
                    onReachBeginning={() => {
                      setTimeout(() => {
                        setIsVisibleStartEl(false)
                      }, 300)
                    }}
                    onReachEnd={() => {
                      setTimeout(() => {
                        setIsVisibleEndEl(false)
                      }, 300)
                    }}
                    navigation={{
                      nextEl: rightArrowCounselor.current,
                      prevEl: leftArrowCounselor.current,
                      disabledClass: 'opacity-0',
                    }}
                    modules={[Navigation]}
                    slidesPerView="auto"
                    spaceBetween={6}
                    className="mySwiper flex  h-[62px] "
                  >
                    {testNumb.map((counselor, index) => (
                      <SwiperSlide
                        key={Math.random() * 100}
                        className={`${
                          (index === 0 && '!w-[208px] pr-[24px]') ||
                          (index === testNumb.length - 1 &&
                            '!w-[208px] pl-[24px]') ||
                          '!w-[184px]'
                        }    `}
                      >
                        <div className=" w-full h-full flex items-center justify-center">
                          <CounselorSearchCard
                            obj={{
                              imageSrc:
                                'https://i.ibb.co/HGSw1dG/Rectangle-517.png',
                            }}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            <div className="w-[538px] my-[16px] h-[1px] mx-auto bg-[#CBCBCB]" />
            <ul className="flex flex-col gap-y-[16px]">
              <li className="flex items-center mr-[24px]">
                <SearchRoundedIcon style={{ color: '#CBCBCB' }} />
                <div className="mr-[8px]">
                  <p className="text-[16px] font-[600] text-black">
                    بی اعصابی در خانه
                  </p>
                  <p className="text-[14px] font-[600] text-[#9966FF]">
                    در بخش بلاگ
                  </p>
                </div>
              </li>

              <li className="flex items-center mr-[24px]">
                <SearchRoundedIcon style={{ color: '#CBCBCB' }} />
                <div className="mr-[8px]">
                  <p className="text-[16px] font-[600] text-black">
                    بی خیالی در زمانی بروزه مشکلات مهم
                  </p>
                  <p className="text-[14px] font-[600] text-[#9966FF]">
                    در بخش بلاگ
                  </p>
                </div>
              </li>

              <li className="flex items-center mr-[24px]">
                <SearchRoundedIcon style={{ color: '#CBCBCB' }} />
                <div className="mr-[8px]">
                  <p className="text-[16px] font-[600] text-black">
                    بی ادب بودن کودک
                  </p>
                  <p className="text-[14px] font-[600] text-[#9966FF]">
                    در بخش بلاگ
                  </p>
                </div>
              </li>

              <li className="flex items-center mr-[24px]">
                <SearchRoundedIcon style={{ color: '#CBCBCB' }} />
                <div className="mr-[8px]">
                  <p className="text-[16px] font-[600] text-black">
                    بی خودی گیر دادن
                  </p>
                  <p className="text-[14px] font-[600] text-[#9966FF]">
                    در بخش بلاگ
                  </p>
                </div>
              </li>

              <li className="flex items-center mr-[24px]">
                <SearchRoundedIcon style={{ color: '#CBCBCB' }} />
                <div className="mr-[8px]">
                  <p className="text-[16px] font-[600] text-black">
                    بینایی یا شنوایی
                  </p>
                  <p className="text-[14px] font-[600] text-[#9966FF]">
                    در بخش بلاگ
                  </p>
                </div>
              </li>

              <li className="flex items-center mr-[24px]">
                <SearchRoundedIcon style={{ color: '#CBCBCB' }} />
                <div className="mr-[8px]">
                  <p className="text-[16px] font-[600] text-black">
                    بیسیم های روانشناسی
                  </p>
                  <p className="text-[14px] font-[600] text-[#9966FF]">
                    در بخش بلاگ
                  </p>
                </div>
              </li>
            </ul>
            <div
              className="  h-[70px] my-[16px] mx-[16px]  relative"
              onMouseEnter={() => setShowTagSlider(true)}
              onMouseLeave={() => setShowTagSlider(false)}
            >
              <div
                className={`bottom-0  w-full h-full items-center  flex justify-between absolute `}
              >
                <button
                  type="button"
                  ref={leftArrow}
                  className={`z-20 mr-[5px]   justify-center items-center  bg-[#36E2B4]
                      
                  `}
                >
                  {showTagSlider && (
                    <div className="w-[24px] rotate-180 h-[24px] ">
                      <ArrowBackIosIcon
                        style={{
                          color: '#131313',
                          marginLeft: '3px',
                          fontSize: '14px',
                          height: '10px',
                          width: '20px',
                          marginTop: '2px',
                        }}
                      />
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  ref={rightArrow}
                  className={`z-20 rotate-180 
                   justify-center items-center flex  bg-[#36E2B4]`}
                >
                  {showTagSlider && (
                    <div className="w-[24px] rotate-180 h-[24px] ">
                      <ArrowBackIosIcon
                        style={{
                          color: '#131313',
                          marginLeft: '8px',
                          height: '10px',
                          width: '20px',
                          marginTop: '2px',
                        }}
                      />
                    </div>
                  )}
                </button>
              </div>

              {leftArrow.current && rightArrow.current && (
                <SwiperComponent
                  showTagSlider={showTagSlider}
                  leftArrow={leftArrow.current}
                  rightArrow={rightArrow.current}
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-center">
          <SearchRoundedIcon
            style={{
              color: '#36E2B4',
              marginRight: '12px',
            }}
          />

          <input
            onClick={() => {
              setModalStatus(!modalStatus)
            }}
            className={`${inputStyles}  h-full  w-full pr-[8px] text-[18px] font-[400] outline-none text-black placeholder:text-[18px] placeholder:font-[400] placeholder:text-[#CBCBCB]`}
            type="text"
            placeholder="جستجو کن"
          />
        </div>
      </div>
      {modalStatus && (
        <div
          aria-hidden="true"
          onClick={() => setModalStatus(false)}
          className="modal fixed bg-black inset-0 opacity-30 z-30"
        />
      )}
    </>
  )
}

export default SearchInput
