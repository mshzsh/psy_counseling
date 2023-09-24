import React from 'react'
import { toFaDigit } from 'fa-utils'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

const ViewNumber = ({ number, color, situation }) => (
  <div className="flex justify-center items-center">
    <p className="">
      {situation === 'filled' ? (
        <VisibilityIcon style={{ color: `${color}`, fontSize: '20px' }} />
      ) : (
        <VisibilityOutlinedIcon
          style={{ color: `${color}`, fontSize: '20px' }}
        />
      )}
    </p>
    <p className={`text-[${color}] text-[14px] mr-[3px]`}>
      {toFaDigit(number)}
    </p>
  </div>
)

export default ViewNumber
