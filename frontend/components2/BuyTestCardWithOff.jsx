import { toFaDigit } from 'fa-utils'
import React, { useState } from 'react'
import GoogleLoginComponent from './GoogleLoginComponent'

const BuyTestCardWithOff = () => {
  const [offValue, setOffValue] = useState('')
  const [numberValue, setNumberValue] = useState('')

  return (
    <div className="flex w-[1272px] h-[316px] justify-between mx-auto mb-[20px] bg-[#F9F9F9] mt-[20px] px-[24px]">
      <div className="flex flex-col w-[384px] py-[32px]">
        <div className="mt-[16px]">
          <img src="https://i.ibb.co/zVWsNB9/Rectangle-367-1.png" alt="s" />
        </div>
        <p className="text-[20px] font-[700] mt-[44px] mb-[8px]">کد تخفیف:</p>
        <div className="flex items-center w-[384px] h-[48px]">
          <input
            className="flex-1 h-full text-[18x] font-[400] pr-[12px] placeholder:text-[#CBCBCB] outline-none placeholder:text-[18px] placeholder:font-[400]"
            value={offValue}
            onChange={e => setOffValue(e.target.value)}
            placeholder="کد تخفیف را وارد کنید"
          />
          <button
            type="button"
            className="bg-[#0099FF] text-[#fff] w-[120px] h-full"
          >
            بررسی کد
          </button>
        </div>
      </div>
      <div className="w-[353px] items-center  py-[32px] bg-[#F9F9F9]">
        <div className="w-full h-full flex flex-col bg-[#fff] px-[42px]">
          <p className="text-[16px] font-[600] mt-[40px]">
            لطفا شماره همراه یا ایمیل خود را وارد نمایید
          </p>
          <input
            placeholder="۰۹"
            onChange={e => setNumberValue(e.target.value)}
            className="outline-none w-full h-[48px] pl-[12px] mt-[16px] border-[1px] border-[#CBCBCB] "
            style={{ direction: 'ltr' }}
          />
          <GoogleLoginComponent styles="mt-[32px] h-[48px]" />
        </div>
      </div>
      <div className="w-[30px] relative flex justify-center">
        <div className="w-full h-[30px] bg-white rounded-[50%] absolute top-[-22px]" />
        <div
          className="h-full w-[1px] bg-[#9A9A9A]"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #333 60%, rgba(255, 255, 255, 255) 0%)',
            backgroundPosition: 'top',
            backgroundSize: '2px 10px',
            backgroundRepeat: 'repeat-y',
          }}
        />
        <div className="w-full h-[30px] bg-white rounded-[50%] absolute bottom-[-22px]" />
      </div>
      <div className="flex flex-col w-[330px] py-[32px]">
        <ul>
          <li className="flex justify-between items-center">
            <p className="text-[20px] font-[700]">جمع کل:</p>
            <p className="text-[22px] font-[600]"> {toFaDigit(30000)} تومان</p>
          </li>
          <li className="flex justify-between items-center mt-[22px]">
            <p className="text-[20px] font-[700]">تخفیف:</p>
            <p className="text-[#0099FF] text-[22px] font-[600]">
              {toFaDigit([5000].toLocaleString())} تومان
            </p>
          </li>
          <li className="flex justify-between items-center mt-[58px]">
            <p className=" text-[20px] font-[700]">مبلغ قابل پرداخت:</p>
            <p className="text-[20px] font-[700] text-[#36E2B4]">
              {toFaDigit([25000].toLocaleString())} تومان
            </p>
          </li>
        </ul>
        <button
          type="button"
          className="bg-[#36E2B4] h-[54px] text-[22px] font-[600] w-full mt-[32px] justify-center items-center"
        >
          پرداخت
        </button>
      </div>
    </div>
  )
}

export default BuyTestCardWithOff
