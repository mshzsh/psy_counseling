import React from 'react'
import { toFaDigit } from 'fa-utils'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

const ViewNumber = ({ number, color, situation, styles }) => (
  <div className={`${styles} flex justify-center items-center`}>
    <p className="">
      {situation === 'filled' ? (
        <VisibilityIcon
          className="text-[16px] lg:text-[20px]"
          style={{ color: `${color}` }}
        />
      ) : (
        <VisibilityOutlinedIcon
          className="text-[16px] lg:text-[20px]"
          style={{ color: `${color}` }}
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

export default ViewNumber
