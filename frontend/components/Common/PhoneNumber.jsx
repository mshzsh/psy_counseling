import { toFaDigit } from 'fa-utils'
import React from 'react'

const PhoneNumber = ({ styles, number }) => (
  <p className={`${styles} text-[18px] font-[600] text-[#9966FF]`}>
    {toFaDigit(number)}
  </p>
)

export default PhoneNumber
