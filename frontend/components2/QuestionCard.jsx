import { toFaDigit } from 'fa-utils'
import React, { useRef } from 'react'
import ViewAnswerButton from './ViewAnswerButton'
import LikeNumber from './LikeNumber'
import SmsNumber from './SmsNumber'
import ViewNumber from './ViewNumber'

const QuestionCard = () => {
  const ref = useRef()
  const test =
    ' لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لایپسوم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم و...'

  return (
    <div className="w-[392px] bg-[#fff] ">
      <div className="px-[24px] mb-[16px]">
        <p className="mt-[24px] text-[12px] font-[800] text-[#9A9A9A]">
          {toFaDigit('تهران/۲ روز پیش')}
        </p>
        <p className="my-[8px] font-[700] text-[20px]">
          {toFaDigit('این یک متن آزمایشی برای این مقاله میباشد')}
        </p>
        <p className="text-[16px] font-[600]" ref={ref}>
          {test.slice(0, 152).concat('...')}
        </p>
        <div className="flex justify-between mt-[11px]">
          <SmsNumber number={56} color="#36E2B4" />
          <LikeNumber situation="filled" number={56} color="#36E2B4" />
          <ViewNumber situation="filled" number={56} color="#36E2B4" />
        </div>
      </div>
      <ViewAnswerButton />
    </div>
  )
}

export default QuestionCard
