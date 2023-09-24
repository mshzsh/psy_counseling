import { toFaDigit } from 'fa-utils'
import React from 'react'
import SmsIcon from '@mui/icons-material/Sms'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'

const SmsNumber = ({ number, color, outLineStatus, styles }) => (
  <div className={`${styles} flex justify-center items-center`}>
    <p className="mb-1">
      {outLineStatus ? (
        <SmsOutlinedIcon
          style={{ color: `${color}` }}
          className="text-[16px] lg:text-[20px]"
        />
      ) : (
        <SmsIcon
          style={{ color: `${color}` }}
          className="text-[16px] lg:text-[20px]"
        />
      )}
    </p>
    <p
      className={`text-[${color}] text-[12px] font-[700] lg:text-[14px] lg:font-[800] mr-[3px]`}
    >
      {toFaDigit(number)}
    </p>
  </div>
)

export default SmsNumber
