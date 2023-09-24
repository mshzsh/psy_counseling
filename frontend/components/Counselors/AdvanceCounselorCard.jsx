import React from 'react'

import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback'
import VideocamIcon from '@mui/icons-material/Videocam'
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra'
import BeenhereIcon from '@mui/icons-material/Beenhere'

// components
import RatingStarComponent from 'components/Common/RatingStarComponent'

// utils
import minifyNumOutput from 'utils/minifyNumOutput'

const AdvanceCounselorCard = () => (
  <div className="w-[100%] bg-[#F9F9F9]">
    <div className="flex pb-[16px] p-[12px] flex-row lg:p-[24px]">
      <div className="w-[calc(100%_-_18px)] flex flex-col lg:w-full">
        <div className="w-full flex justify-between">
          <div className="w-[100%] flex items-center lg:w-[calc(100%_-_100px)] min-[1460px]:w-[calc(100%_-_130px)]">
            <img
              src="https://i.ibb.co/yfGr9zj/Rectangle-208.png"
              alt=""
              width={110}
              height={110}
              className="w-[68px] h-[68px] lg:w-[110px] lg:h-[110px]"
            />

            <ul className="w-[calc(100%_-_68px_-_24px)] flex flex-col items-start mr-[24px] lg:w-[calc(100%_-_110px_-_24px)]">
              <li
                // data-text="نام و نام خانوادگی نام و نام خانوادگی"
                data-text="نام و نام خانوادگی"
                className="relative w-full text-[16px] font-[600] lg:text-[20px] lg:font-[700]
                after:content-[attr(data-text)]
                after:hidden hover:after:block after:absolute after:w-[auto] after:h-[24px]
                after:top-[-1px] after:right-[-9px] after:whitespace-nowrap
                after:px-[8px] after:border-[1px] after:border-divider after:rounded-[4px] after:overflow-hidden
                after:text-textLight-primary after:bg-white after:shadow-md lg:after:h-[30px]"
              >
                <p className="w-[calc(100%_-_8px)] text-textLight-primary truncate">
                  نام و نام خانوادگی
                  {/* نام و نام خانوادگی نام و نام خانوادگی */}
                </p>
              </li>
              <li className="text-[14px] font-[500] lg:text-[18px] lg:font-[400]">
                حرفه در این بخش
              </li>
              <li className="flex flex-row items-center">
                <RatingStarComponent number={2.2} emptynumber={5 - 2.2} />
                <span className="h-[16px] text-[12px] font-[600] text-textLight-secondary mt-[2px] mr-[8px] lg:text-[14px]">
                  {minifyNumOutput(87543)} نظر
                </span>
              </li>
            </ul>
          </div>

          <ul className="hidden w-[18px] flex-col lg:flex lg:w-[100px] min-[1460px]:w-[130px]">
            <li className="h-[27px] flex items-center">
              <PhoneCallbackIcon
                style={{ color: '#36E2B4', fontSize: '18px' }}
              />
              <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
                تلفنی
              </p>
            </li>
            <li className="h-[27px] flex items-center">
              <VideocamIcon style={{ color: '#36E2B4', fontSize: '18px' }} />
              <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
                ویدئویی
              </p>
            </li>
            <li className="h-[27px] flex items-center">
              <AirlineSeatReclineExtraIcon
                style={{ color: '#36E2B4', fontSize: '18px' }}
              />
              <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
                حضوری
              </p>
            </li>
            <li className="h-[27px] flex items-center">
              <BeenhereIcon style={{ color: '#36E2B4', fontSize: '18px' }} />
              <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
                بیمه
              </p>
            </li>
          </ul>
        </div>
        <div className="box2 flex w-full justify-between mt-[24px]">
          <div className="text-[12px] font-[600] leading-[17px] lg:text-[18px] lg:leading-[24px]">
            <p>مشاوره موفق: ۶۵۴۸ (در ۳ سال)</p>
            <p className="mt-[8px] lg:mt-[12px]">
              شماره نظام روانشناسی: ۶۸۷۶۱۶
            </p>
          </div>

          <div className="w-[72px] text-[12px] font-[600] leading-[17px] lg:w-[100px] lg:text-[18px] lg:leading-[24px] min-[1460px]:w-[130px]">
            <p className="text-transparent">نظر</p>
            <p className="text-left mt-[8px] translate-x-[-18px] lg:mt-[12px] lg:text-right lg:translate-x-[0px]">
              تجربه: ۲۰ سال
            </p>
          </div>
        </div>
      </div>

      <ul className="w-[18px] flex flex-col lg:hidden lg:w-[100px] min-[1460px]:w-[130px]">
        <li className="h-[27px] flex items-center">
          <PhoneCallbackIcon style={{ color: '#36E2B4', fontSize: '18px' }} />
          <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
            تلفنی
          </p>
        </li>
        <li className="h-[27px] flex items-center">
          <VideocamIcon style={{ color: '#36E2B4', fontSize: '18px' }} />
          <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
            ویدئویی
          </p>
        </li>
        <li className="h-[27px] flex items-center">
          <AirlineSeatReclineExtraIcon
            style={{ color: '#36E2B4', fontSize: '18px' }}
          />
          <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
            حضوری
          </p>
        </li>
        <li className="h-[27px] flex items-center">
          <BeenhereIcon style={{ color: '#36E2B4', fontSize: '18px' }} />
          <p className="hidden text-[18px] font-[400] mr-[7px] lg:block">
            بیمه
          </p>
        </li>
      </ul>
    </div>

    <button
      type="button"
      className="w-full h-[40px] flex justify-center items-center text-[14px] font-[800] bg-[#EDEDED]
       hover:bg-[#36E2B4] hover:text-[#fff]
      lg:h-[56px] lg:text-[20px] lg:font-[700]"
    >
      دریافت مشاوره
    </button>
  </div>
)

export default AdvanceCounselorCard
