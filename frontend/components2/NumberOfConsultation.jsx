import { toFaDigit } from 'fa-utils'
import React from 'react'

const NumberOfConsultation = () => (
  <div className="flex flex-col items-center">
    <p className="text-[48px] font-[900] h-[60px]">{toFaDigit(35)}+</p>
    <p className="text-[20px] font-[700]">تعداد مشاوره‌های آنلاین</p>
  </div>
)

export default NumberOfConsultation
