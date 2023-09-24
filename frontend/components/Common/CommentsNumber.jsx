import React from 'react'
import minifyNumOutput from 'utils/minifyNumOutput'

const CommentsNumber = ({ number, customClass }) => (
  <p className={`${customClass} text-[#9A9A9A] font-[800] text-[14px]`}>
    {minifyNumOutput(number)}
    &nbsp; نظر
  </p>
)

export default CommentsNumber
