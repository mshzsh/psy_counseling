import { toFaDigit } from 'fa-utils'
import React from 'react'
import SmsIcon from '@mui/icons-material/Sms'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'

const SmsNumber = ({ number, color, outLineStatus }) => (
  <div className="flex justify-center items-center">
    <p className="mb-1">
      {outLineStatus ? (
        <SmsOutlinedIcon style={{ color: `${color}`, fontSize: '20px' }} />
      ) : (
        <SmsIcon style={{ color: `${color}`, fontSize: '20px' }} />
      )}
    </p>
    <p className={`text-[${color}] text-[14px] mr-[3px]`}>
      {toFaDigit(number)}
    </p>
  </div>
)

export default SmsNumber
