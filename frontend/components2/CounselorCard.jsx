import { toFaDigit } from 'fa-utils'
import React from 'react'
import CommentsNumber from './CommentsNumber'
import GetAdviseButton from './GetAdviseButton'
import LastAnswer from './LastAnswer'
import RatingStarComponent from './RatingStarComponent'

const CounselorCard = () => (
  <div className="bg-[#F9F9F9]">
    <div className="relative">
      <img
        src="https://i.ibb.co/fvSJQfK/Rectangle-184.png"
        alt="test"
        width={392}
        height={221}
      />
      <div className="absolute top-[180px] left-[24px] flex flex-col">
        <p className="bg-[#36E2B4] text-[36px] w-[95px] h-[63px] text-center flex items-center justify-center font-[800]">
          {toFaDigit(35)}
        </p>
        <p className="text-[14px] font-[800] text-center">تعداد مشاوره</p>
      </div>
      <div className="flex  mr-[24px] mt-[19px]">
        <RatingStarComponent number={3.4} />
        <CommentsNumber
          number={toFaDigit(365)}
          customClass="mr-[8px] mt-[3px]"
        />
      </div>
    </div>
    <div className="flex flex-col mt-[19px] mr-[26px]">
      <p className="font-[700] text-[20px]">نام و نام خانوادگی</p>
      <p className="font-[400] text-[18px] leading-[32px]">حرفه در این بخش</p>
      <LastAnswer time={toFaDigit(30)} customClass="mt-[4px] mb-[10px]" />
    </div>
    <GetAdviseButton />
  </div>
)

export default CounselorCard
