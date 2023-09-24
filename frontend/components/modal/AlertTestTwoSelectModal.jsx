import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel'

const AlertTestTwoSelectModal = ({ closeIconHandler }) => (
  <div className="w-[540px] h-[338px] flex flex-col items-center bg-[#F9F9F9]">
    <CancelIcon
      style={{ color: '#DA2A2A', fontSize: '98px', marginTop: '44px' }}
    />
    <p className="text-[24px] font-[500] mt-[18px]">
      دو گزینه را باید انتخاب کنید
    </p>
    <button
      type="button"
      onClick={() => closeIconHandler(false)}
      className="w-[328px] h-[54px] text-[20px] font-[700] mt-[44px] flex justify-center items-center bg-[#36E2B4]"
    >
      متوجه شدم
    </button>
  </div>
)

export default AlertTestTwoSelectModal
