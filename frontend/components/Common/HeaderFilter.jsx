import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'

const HeaderFilter = ({ text = 'فیلترها' }) => (
  <div className="bg-[#36E2B4] w-full h-[60px] flex items-center px-[24px]">
    <TuneOutlinedIcon
      style={{
        marginLeft: '12px',
      }}
    />
    <p className="text-[22px] font-[600]">{text}</p>
  </div>
)

export default HeaderFilter
