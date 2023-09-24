import React from 'react'
import { toFaDigit } from 'fa-utils'
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined'

const LikeNumber = ({ number, color, situation, styles, numberStyle }) => (
  <div className={`${styles} flex justify-center  items-center`}>
    <p className="">
      {situation === 'filled' ? (
        <ThumbUpOffAltRoundedIcon
          style={{ color: `${color}`, fontSize: '20px', marginBottom: '5px' }}
        />
      ) : (
        <ThumbUpOffAltOutlinedIcon
          style={{ color: `${color}`, fontSize: '20px', marginBottom: '5px' }}
        />
      )}
    </p>
    <p className={`text-[${color}] ${numberStyle} text-[14px] mr-[3px]`}>
      {toFaDigit(number)}
    </p>
  </div>
)

export default LikeNumber
