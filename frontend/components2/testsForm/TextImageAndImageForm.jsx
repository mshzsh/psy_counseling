import React, { useState, useEffect, useRef } from 'react'

const TextImageAndImageForm = ({
  state,
  selectHandler,
  getId,
  page,
  setPage,
  maxState,
}) => {
  const [answers, setAnswers] = useState([])
  const [isIinitial, setIsInitial] = useState(true)
  const [heightState, setHeightState] = useState(0)

  const ref = useRef()
  useEffect(() => {
    selectHandler(answers, page)
  }, [answers])

  useEffect(() => {
    if (isIinitial) {
      if (getId[page]?.length > 0) setAnswers(getId[page])
      setIsInitial(false)
    }

    setHeightState(ref.current.clientHeight)
  }, [isIinitial, getId, page])

  // console.log(ref.current.clientHeight);
  return (
    <div className="flex flex-col bg-[#F9F9F9] min-h-[700px] 2xl:w-[1224px] xl:w-[960px] mx-auto pt-[24px] pb-[92px] 2xl:px-[80px] xl:px-[40px] ">
      <p className="text-[#36E2B4] text-[18px] font-[600] ">سوال ۱ از ۲۴۰</p>
      <div className="relative ">
        <p
          className="absolute top-[30px] text-[22px] font-[600]  select-none opacity-0"
          ref={ref}
        >
          {maxState}
        </p>
      </div>
      <p
        style={{ minHeight: `${heightState}px` }}
        className="mt-[30px] text-[22px] font-[600]"
      >
        {state.question.text}
      </p>
      <div className="flex gap-x-[24px] mx-auto mt-[16px]">
        <img src={state.question.url} alt="" />
      </div>
      <div className="w-[856px] h-[1px] bg-[#CBCBCB] my-[58px] mx-auto" />
      <div className="flex gap-x-[24px] mx-auto">
        {state.options.map(
          op =>
            op.imageUrl && (
              // eslint-disable-next-line
              <img
                onClick={() => {
                  let temp = [...answers]

                  if (temp?.includes(op.id)) {
                    const tempFilter = temp.filter(value => value !== op.id)
                    temp = [...tempFilter]
                  } else if (temp.length < 2) {
                    temp = [...temp, op.id]
                  } else {
                    temp = [op.id]
                  }
                  setAnswers([...temp])
                  setTimeout(() => {
                    if (temp.length === 2) setPage(page + 1)
                  }, 200)
                }}
                src={op.imageUrl}
                alt=""
                className={`cursor-pointer 2xl:w-[136px] xl:w-[100px] ${
                  getId[page]?.[0] === op.id || getId[page]?.[1] === op.id
                    ? 'border-[2px] border-[#36E2B4]'
                    : 'border-[2px]'
                }`}
              />
            ),
        )}
      </div>
    </div>
  )
}

export default TextImageAndImageForm
