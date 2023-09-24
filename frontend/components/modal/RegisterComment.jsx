import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import StarOutlineIcon from '@mui/icons-material/StarOutline'

const RegisterComment = () => {
  const [star, setStar] = useState([
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
    { id: 5, isActive: false },
  ])

  const hoverEnterFunc = id => {
    const temp = star
    const index = temp.findIndex(s => s.id === id)

    for (let i = 0; i <= index; i += 1) {
      temp[i].isActive = true
    }
    setStar([...temp])
  }

  const hoverLeaveFunc = () => {
    const temp = star
    temp.forEach(s => (s.isActive = false))
    setStar([...temp])
  }

  return (
    <div className="w-[704px]  p-[24px] bg-[#fff] flex flex-col ">
      <CloseIcon fontSize="20px" />
      <div className="flex w-full justify-between items-center px-[16px] bg-[#F9F9F9] h-[46px] mt-[32px]">
        <p className="text-[18px] font-[400]">نمره شما به روانشناس:</p>
        <div className="flex  items-center" style={{ direction: 'ltr' }}>
          {star.map(s => (
            <StarOutlineIcon
              key={Math.random() * 100}
              style={{
                color: `${s.isActive ? '#9966FF' : 'black'}`,
                // stroke: "#9966FF",
              }}
              className="cursor-pointer"
              onMouseEnter={() => hoverEnterFunc(s.id)}
              onMouseLeave={() => hoverLeaveFunc(s.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-[32px]">
        <p className="text-[18px] font-[400] mb-[8px]">نام و نام خانوادگی</p>
        <input className="w-full h-[46px] outline-none border-[1px] border-[#CBCBCB]" />
      </div>
      <div className="flex flex-col mt-[24px]">
        <p className="text-[18px] font-[400] mb-[8px]">
          لطفا نظر خود را بنویسید
        </p>
        <textarea
          style={{ resize: 'none' }}
          className="h-[222px] w-full border-[1px] border-[#CBCBCB]"
        />
      </div>
      <button
        type="button"
        className="w-[158px] h-[40px] bg-[#36E2B4] flex justify-center items-center text-[18px] font-[600] mx-auto mt-[24px]"
      >
        ثبت نظر
      </button>
    </div>
  )
}

export default RegisterComment
