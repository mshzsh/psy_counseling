import React from 'react'

const CommentsNumber = ({ number, customClass }) => (
  <p className={`${customClass} text-[#9A9A9A] font-[800] text-[14px]`}>
    {number} نظر
  </p>
)

export default CommentsNumber
