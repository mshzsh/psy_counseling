import React from 'react'

const ClinicCard = ({ Icon, styles }) => (
  <div
    className={`${styles}  bg-[#fff] w-full flex flex-col lg:flex-row lg:w-[calc((100%-72px)/4)]`}
  >
    <div className="bg-[#F9F9F9] py-[26px] flex justify-center items-center lg:px-[25px] 2xl:px-[50px] ">
      <Icon
        style={{ color: '#9966FF' }}
        className="text-[54px]  lg:text-[34px] xl:text-[44px] 2xl:text-[54px] md:text-[58px]"
      />
    </div>

    <div className="flex flex-col pr-[16px] pl-[20px] pt-[18px] pb-[16px] border-[2px] border-[#F9F9F9]">
      <p className="text-[#36E2B4]  font-[800] text-[22px]">خانواده</p>
      <p className="text-[14px] font-[600] xl:text-[18px] xl:font-[400]">
        تعارضات زناشویی، روابط زناشویی و ...
      </p>
      <p className="text-[14px] font-[500] text-[#9A9A9A] xl:font-[600] xl:text-[16px] mt-[8px]">
        ۹۵ پزشک متخصص
      </p>
    </div>
  </div>
)

export default ClinicCard
