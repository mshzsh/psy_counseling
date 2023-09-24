import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'

const UserDetailModal = ({ name }) => (
  <div className="w-[246px] h-[172px] absolute  left-0  ">
    <div className="w-full h-full relative  p-[24px] mt-[16px] border-[1px] border-[#36E2B4] bg-[#fff]">
      <div className="absolute w-[20px] h-[20px] border-l-[1px] border-t-[1px] border-[#36E2B4] bg-[#fff] top-[-11px] left-[18px] rotate-45" />
      <p className="text-[18px] font-[400] text-center">{name}</p>
      <button
        type="button"
        className="bg-[#36E2B4] w-full my-[16px] h-[34px] flex items-center justify-center"
      >
        <AccountCircleOutlinedIcon />
        <p className="text-[14px] font-[500] mr-[8px]">ورود به پنل</p>
      </button>
      <button
        onClick={() => {
          localStorage.removeItem('info')
          localStorage.removeItem('authToken')
          window.location.reload(false)
        }}
        type="button"
        className="bg-[#F9F9F9] w-full h-[34px] flex items-center justify-center"
      >
        <LogoutIcon />
        <p className="text-[14px] font-[500] mr-[8px]">خروج</p>
      </button>
    </div>
  </div>
)

export default UserDetailModal
