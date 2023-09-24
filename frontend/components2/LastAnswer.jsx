import React from 'react'

const LastAnswer = ({ time, customClass }) => (
  <p className={`${customClass} text-[#9A9A9A] text-[16px] font-[600]`}>
    آخرین پاسخ‌دهی: {time} دقیقه پیش
  </p>
)

export default LastAnswer
