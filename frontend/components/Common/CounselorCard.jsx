import { toFaDigit } from 'fa-utils'
import React from 'react'
import CommentsNumber from './CommentsNumber'
import GetAdviseButton from './GetAdviseButton'
import LastAnswer from './LastAnswer'
import RatingStarComponent from './RatingStarComponent'

const CounselorCard = ({ data, styles }) => (
  <div className="bg-[#fff]">
    <div className="relative">
      <img
        src="https://i.ibb.co/fvSJQfK/Rectangle-184.png"
        alt="test"
        width={392}
        height={221}
        className="bg-red-200 "
      />

      <div className={`${styles} flex flex-col relative`}>
        <div className="absolute top-[-15px] left-[12px] w-[48px] flex flex-col  md:top-[-30px] min-[1460px]:w-[94px] xl:w-[64px] xl:left-[24px]">
          <div className="bg-[#36E2B4] text-[20px] flex justify-center items-center font-[800] min-[1460px]:text-[36px] xl:text-[26px] min-[1460px]:h-[62px] lg:h-[52px] md:h-[42px]">
            <p className="h-full flex  items-center mt-[5px] xl:mt-[10px]">
              {toFaDigit(data.counselingNumber)}
            </p>
          </div>
          <p className="text-[14px] font-[800] text-center  ">مشاوره</p>
        </div>
        <div className="flex flex-col items-start mr-[12px]  mt-[8px]  min-[1460px]:items-center min-[1460px]:flex-row sm:mt-[12px] sm:mr-[26px] xl:mt-[18px]">
          <RatingStarComponent number={data.rate} emptynumber={5 - data.rate} />
          <CommentsNumber
            number={data.commentNumber}
            customClass="mr-[8px] mt-[4px]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-[19px] mr-[12px] sm:mx-[26px]">
        <p className="text-[14px] font-[600] sm:font-[700] sm:text-[20px]">
          {data.lastName}
        </p>
        <p className="text-[12px] font-[400] sm:font-[400] sm:text-[18px] leading-[32px]">
          {data.position}
        </p>
        <LastAnswer
          time={toFaDigit(data.lastCounseling)}
          customClass="mt-[4px] mb-[10px]"
        />
      </div>
    </div>
    <GetAdviseButton />
  </div>
)

export default CounselorCard
