import React from 'react'
import { toFaDigit } from 'fa-utils'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'

const Time = ({ number, color, numberStyle, text }) => (
  <div className="flex items-center">
    <TimerOutlinedIcon style={{ color: `${color}`, fontSize: '20px' }} />
    &nbsp;
    <p className={`text-[14px] ${numberStyle} text-[#9A9A9A]`}>
      {text}&nbsp;
      {toFaDigit(number)}
      دقیقه
    </p>
  </div>
)

export default Time
