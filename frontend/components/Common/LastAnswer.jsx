import React from 'react'

const LastAnswer = ({ time, customClass }) => (
  <p
    className={`${customClass} text-[#9A9A9A] text-[12px] font-[400] sm:text-[16px] sm:font-[600]`}
  >
    آخرین مشاوره: {time} دقیقه پیش{' '}
  </p>
)

export default LastAnswer
