// import { toFaDigit } from 'fa-utils'
import React, { useRef } from 'react'
import ViewAnswerButton from 'components/Common/ViewAnswerButton'
import LikeNumber from 'components/Common/LikeNumber'
import SmsNumber from 'components/Common/SmsNumber'
import ViewNumber from 'components/Common/ViewNumber'

const QuestionCard = ({ data }) => {
  const ref = useRef()

  return (
    <div className="w-full bg-[#FBFBFB] ">
      <div className="px-[24px] mb-[16px]">
        <div className="flex ">
          <p className="mt-[24px] text-[12px] font-[800] text-[#9A9A9A]">
            {data.location}
          </p>

          <p className="mt-[24px] text-[12px] font-[800] text-[#9A9A9A]">
            /&nbsp;{data.time}
          </p>
        </div>
        {/* <p className="my-[8px] text-[14px] font-[14px]  xl:font-[700] xl:text-[20px]">{data.title}</p> */}
        <p
          className="mt-[10px] text-[14px] font-[500] xl:text-[16px] xl:font-[600]  xl:leading-[24px]"
          ref={ref}
        >
          {data.content.slice(0, 152).concat('...')}
        </p>
        <div className="flex justify-between mt-[10px]">
          <SmsNumber number={data.commentNumber} color="#36E2B4" />
          <LikeNumber
            situation="filled"
            number={data.likeNumber}
            color="#36E2B4"
          />
          <ViewNumber
            situation="filled"
            number={data.viewNumber}
            color="#36E2B4"
          />
        </div>
      </div>
      <ViewAnswerButton />
    </div>
  )
}

export default QuestionCard
