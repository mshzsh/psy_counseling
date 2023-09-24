import React, { useEffect, useState } from 'react'
import TestFormComponent from '../../components2/testsForm/TestFormComponent'

const TestsLayout = () => {
  const [minutetime, setMinuteTime] = useState('')
  const [secondTime, setScondTime] = useState('')
  const [time, setTime] = useState(120)
  const [testAlert, setTestAlert] = useState(false)

  const timerFunction = () => {
    if (testAlert && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }

    return (
      <div className="flex">
        <p>{secondTime}</p>
        <p>{time % 60 < 10 ? 0 : ''}</p>
        <p>:</p>
        <p>{minutetime}</p>
        <p>{Math.floor(time / 60) < 10 ? 0 : ''}</p>
      </div>
    )
  }

  useEffect(() => {
    setMinuteTime(Math.floor(time / 60))
    setScondTime(time % 60)
  }, [time])

  return (
    <div className="flex flex-col w-full">
      <div className="bg-[#F9F9F9] w-full h-[86px] flex items-center justify-center mb-[102px] text-[#9A9A9A] text-[22px] font-[400]">
        <div className="w-[1224px] flex justify-between">
          <p> تست شخصیت شناسی نئو (NEO PI-R)</p>
          {timerFunction()}
        </div>
      </div>
      <TestFormComponent setTestAlert={setTestAlert} />
    </div>
  )
}

export default TestsLayout
