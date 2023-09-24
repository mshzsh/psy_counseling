import React from 'react'
import { toFaDigit } from 'fa-utils'
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined'

const LikeNumber = ({ number, color, situation, styles, numberStyle }) => (
  <div className={`${styles} flex justify-center  items-center`}>
    <p className="">
      {situation === 'filled' ? (
        <ThumbUpOffAltRoundedIcon
          className="text-[16px] lg:text-[20px]"
          style={{ color: `${color}`, marginBottom: '5px' }}
        />
      ) : (
        <ThumbUpOffAltOutlinedIcon
          className="text-[16px] lg:text-[20px]"
          style={{ color: `${color}`, marginBottom: '5px' }}
        />
      )}
    </p>
    <p
      className={`text-[${color}] ${numberStyle} text-[12px] font-[700] lg:text-[14px] lg:font-[800] mr-[3px]`}
    >
      {toFaDigit(number)}
    </p>
  </div>
)

export default LikeNumber
