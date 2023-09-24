import React from 'react'

const CounselorSearchCard = ({ obj }) => (
  <div className="bg-[#F9F9F9] w-full h-full flex">
    <img width={62} height={62} src={obj.imageSrc} alt="عکس مشاور" />
    <div className="flex flex-col p-[8px]">
      <p className="text-[14px] font-[600] text-black">بیژن ساز مخالف</p>
      <p className="text-[14px] font-[400] text-[#9A9A9A] mt-[2px]">
        حرفه روانشناس
      </p>
    </div>
  </div>
)

export default CounselorSearchCard
