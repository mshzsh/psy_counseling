import { toFaDigit } from 'fa-utils'
import React, { useState, useEffect, useRef } from 'react'
import GoogleLoginComponent from 'components/google/GoogleLoginComponent'
import api from 'utils/api'
import SignupLogo from '../../public/images/svg/SignupLogo'

const SignupModal = ({ zModal, setModalState, getState, getState2 }) => {
  const [timer, setTimer] = useState(120)
  const [startTimer, setStartTimer] = useState(false)
  const [hasPassword, setHasPassword] = useState(false)
  const [getOtp, setGetOtp] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [inputValue3, setInputValue3] = useState('')
  const [inputValue4, setInputValue4] = useState('')

  const refInput1 = useRef()
  const refInput2 = useRef()
  const refInput3 = useRef()
  const firstInputRef = useRef()

  useEffect(() => {
    if (timer === 0) setStartTimer(false)
    setTimeout(() => {
      if (startTimer && timer > 0) setTimer(timer - 1)
    }, 1000)
  }, [timer, startTimer])

  useEffect(() => {
    if (getOtp) {
      setStartTimer(true)
      firstInputRef.current.focus()
    }
  }, [getOtp])

  return (
    <div className={`${zModal} flex w-[808px] h-[544px] bg-[#fff]`}>
      <div className="w-[404px] h-full pr-[74px]">
        <p className="text-[20px] font-[700] mt-[80px] text-black">
          به حال خوب خوش‌آمدید
        </p>
        <p className="w-[216px] leading-[24px] text-[16px] font-[600] text-[#9A9A9A] ">
          برای ثبت نام در حال خوب شماره موبایل خود را وارد کنید
        </p>
        <div className="flex w-[256px] flex-col items-start mt-[48px] ">
          {getOtp && (
            <>
              <div className="flex w-full justify-between">
                <div className="text-[14px] font-[800] text-black">
                  {/* {timer === 120 && 'شماره موبایل'} */}
                  {timer <= 120 && `کد به ${toFaDigit(mobileNumber)} ارسال شد`}
                </div>

                {getOtp && (
                  <div className="flex text-black" style={{ direction: 'ltr' }}>
                    <p>۰</p>
                    <p>
                      {timer === 120 && '۲'}
                      {timer < 120 && timer >= 60 && '۱'}
                      {timer < 60 && '۰'}
                    </p>
                    :
                    <p>
                      {timer < 70 && timer > 60 && toFaDigit(0)}
                      {timer < 120 && timer >= 60 && toFaDigit(timer - 60)}
                      {timer < 10 && toFaDigit(0)}
                      {timer < 60 && toFaDigit(timer)}
                      {(timer === 120 && '۰') || (timer === 60 && toFaDigit(0))}
                    </p>
                    <p>{(timer === 120 || timer === 0) && '۰'}</p>
                  </div>
                )}
              </div>

              {timer <= 120 && (
                <div className="flex w-[256px] justify-center items-center  mt-[8px] mb-[16px] bg-[#F9F9F9]">
                  <div className="flex h-[17px] mt-[13px] mb-[10px]">
                    <input
                      ref={refInput1}
                      type="text"
                      value={toFaDigit(inputValue1)}
                      onChange={e => {
                        if (e.target.value < 10 && e.target.value > -1) {
                          setInputValue1(e.target.value)
                        }
                      }}
                      className={`w-[10px] mx-[20px] text-[#9A9A9A] bg-[#F9F9F9] text-center flex items-start ${
                        inputValue1 === '' ? 'border-b-[2px]' : ''
                      } border-[#CBCBCB] outline-none`}
                    />
                    <input
                      ref={refInput2}
                      type="text"
                      value={toFaDigit(inputValue2)}
                      onChange={e => {
                        if (e.target.value < 10 && e.target.value > -1) {
                          setInputValue2(e.target.value)
                          if (e.target.value !== '') refInput1.current.focus()
                        }
                      }}
                      className={`w-[10px] mx-[20px] text-[#9A9A9A] bg-[#F9F9F9] text-center  ${
                        inputValue2 === '' ? 'border-b-[2px]' : ''
                      } border-[#CBCBCB] outline-none`}
                    />
                    <input
                      ref={refInput3}
                      type="text"
                      value={toFaDigit(inputValue3)}
                      onChange={e => {
                        if (e.target.value < 10 && e.target.value > -1) {
                          setInputValue3(e.target.value)
                          if (e.target.value !== '') refInput2.current.focus()
                        }
                      }}
                      className={`w-[10px] mx-[20px] text-[#9A9A9A] bg-[#F9F9F9] text-center ${
                        inputValue3 === '' ? 'border-b-[2px]' : ''
                      } border-[#CBCBCB] outline-none`}
                    />
                    <input
                      ref={firstInputRef}
                      type="text"
                      value={toFaDigit(inputValue4)}
                      onChange={e => {
                        if (e.target.value < 10 && e.target.value > -1) {
                          setInputValue4(e.target.value)
                          if (e.target.value !== '') refInput3.current.focus()
                        }
                      }}
                      className={`w-[10px] mx-[20px] text-[#9A9A9A] bg-[#F9F9F9] text-center ${
                        inputValue4 === '' ? 'border-b-[2px]' : ''
                      } border-[#CBCBCB] outline-none`}
                    />
                  </div>
                </div>
              )}

              {/* {timer <= 120 &&
                timer !== 0 &&
                (inputValue1 === '' ||
                  inputValue2 === '' ||
                  inputValue3 === '' ||
                  inputValue4 === '') && (
                  <button
                    type="button"
                    onClick={() => setStartTimer(true)}
                    className="w-full text-[16px] font-[600] px-[80px] py-[11px] bg-[#36E2B4] flex justify-center items-center"
                  >
                    کد را وارد کنید
                  </button>
                )} */}

              {timer !== 0 &&
                inputValue1 !== '' &&
                inputValue2 !== '' &&
                inputValue3 !== '' &&
                inputValue4 !== '' && (
                  <button
                    type="button"
                    onClick={() => {
                      api
                        .login({
                          data: {
                            mobile: mobileNumber,
                            otp: getOtp,
                          },
                        })
                        .then(({ data }) => {
                          localStorage.setItem('authToken', data.token)
                          localStorage.setItem(
                            'info',
                            JSON.stringify({
                              name: data.name,
                              mobile: mobileNumber,
                            }),
                          )
                          setModalState(false)
                        })
                    }}
                    className="w-full text-[16px] font-[600] px-[80px] py-[11px] bg-[#36E2B4] flex justify-center items-center"
                  >
                    ورود
                  </button>
                )}

              {timer === 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setStartTimer(true)
                    setTimer(120)
                    setInputValue1('')
                    setInputValue2('')
                    setInputValue3('')
                    setInputValue4('')
                  }}
                  className="w-full text-[16px] font-[600] px-[90px] py-[11px] bg-[#36E2B4] flex justify-center items-center"
                >
                  ارسال مجدد
                </button>
              )}

              {/* {!startTimer && timer === 120 && (
                <button
                  type="button"
                  onClick={async () => {
                    setSendCodeStatus(true)
                    setStartTimer(true)
                    // refInput4.current.focus();

                    const obj = {}
                    obj.otp = `${getOtp}`
                    obj.mobile = mobileNumber
                    if (hasPassword) obj.password = password
                    

                    await axios
                      .post('https://api.haalekhoob.net/users/login/', obj)
                      .then(data => console.log(data, 'otp'))
                  }}
                  className="w-full text-[16px] font-[600] px-[96px] py-[11px] bg-[#36E2B4] flex justify-center items-center"
                >
                  ارسال کد
                </button>
              )}

              <p className="mt-[16px] text-[14px] font-[800] text-[#9A9A9A] flex w-full justify-center ">
                یا
              </p> */}
            </>
          )}

          {!getOtp && !hasPassword && (
            <div className="w-full flex flex-col">
              <input
                className="outline-none bg-gray-100 w-full h-[40px] px-[60px]"
                type="text"
                value={mobileNumber}
                placeholder="شماره خود را وارد کنید"
                onChange={e => {
                  if (e.target.value.length < 12 && e.target.value >= 0) {
                    setMobileNumber(e.target.value)
                  }
                }}
              />
              <button
                type="button"
                onClick={() => {
                  api
                    .preLogin({
                      data: {
                        mobile: mobileNumber,
                      },
                    })
                    .then(({ data }) => {
                      setGetOtp(data.otp)
                      setHasPassword(data.has_password)
                    })
                }}
                className="w-full h-[40px] bg-[#36E2B4] text-[#131313] mt-[16px] text-[16px] font-[600]"
              >
                تایید
              </button>
            </div>
          )}

          {hasPassword && (
            <div className="w-full">
              <input
                type="password"
                placeholder="پسورد را وارد کنید"
                onChange={e => setPassword(e.target.value)}
                className="h-[40px] w-full bg-gray-100 px-[10px]"
              />
              <button
                type="button"
                className="w-full h-[40px] bg-[#36E2B4] text-[#131313] mt-[16px] text-[16px] font-[600]"
                onClick={async () => {
                  api
                    .login({
                      data: {
                        mobile: mobileNumber,
                        password,
                      },
                    })
                    .then(({ data }) => {
                      getState(data.name ?? 'کاربر گرامی')
                      getState2(data.avatar ?? '')
                      localStorage.setItem('authToken', data.token)
                      localStorage.setItem(
                        'info',
                        JSON.stringify({
                          name: data.name,
                          mobile: mobileNumber,
                          avatar: data.avatar,
                        }),
                      )
                      setModalState(false)
                    })
                }}
              >
                تایید پسورد
              </button>
            </div>
          )}

          <GoogleLoginComponent />

          <p className="text-[12px] font-[500] text-[#9A9A9A]">
            با ثبت نام/ورود، قوانین و مقررات حال خوب را می پذیرم.
          </p>
        </div>
      </div>
      <div className="flex w-[404px] h-full justify-center items-center bg-[#36E2B4] ">
        <SignupLogo />
      </div>
    </div>
  )
}

export default SignupModal
