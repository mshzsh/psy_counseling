import React, { useState } from 'react'

const Switch = ({ styles }) => {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    // eslint-disable-next-line
    <div
      onClick={() => setSwitchOn(!switchOn)}
      className={`${styles} w-[48px] h-[24px]  cursor-pointer transition-all duration-300   flex items-center  ${
        switchOn ? 'bg-[#36E2B4] ' : 'bg-[#D1D1D6]  '
      }`}
    >
      <div
        className={`w-[20px] h-[20px]  transition-all duration-300  ${
          switchOn ? ' bg-[#fff] mr-[2px]' : 'mr-[26px] bg-[#fff]'
        }`}
      />
    </div>
  )
}

export default Switch
