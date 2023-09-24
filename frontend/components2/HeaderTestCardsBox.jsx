import React from 'react'
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined'

const HeaderTestCardsBox = () => (
  <div className="bg-[#36E2B4] flex justify-between ">
    <div className="flex pr-[48px]">
      <AppRegistrationOutlinedIcon
        style={{ fontSize: '90px', marginTop: '40px' }}
      />
      <div className="flex flex-col mr-[16px]">
        <p className="text-[42px] pt-[38px] font-[800]">آزمون‌ها</p>
        <p className="text-[22px] font-[600]">
          این یک متن آزمایشی برای این بخش است
        </p>
      </div>
    </div>
    <div className="text-[22px] font-[800] py-[69px] pl-[48px]">
      آزمونهای بیشتر
    </div>
  </div>
)

export default HeaderTestCardsBox
