import React, { useState, useEffect } from 'react'

const ImageAndImageForm = ({ state, selectHandler, getId, page, setPage }) => {
  const [answers, setAnswers] = useState([])
  const [isIinitial, setIsInitial] = useState(true)

  useEffect(() => {
    selectHandler(answers, page)
  }, [answers])

  useEffect(() => {
    if (isIinitial) {
      if (getId[page]?.length > 0) setAnswers(getId[page])
      setIsInitial(false)
    }
  }, [isIinitial, getId, page])

  return (
    <div className="flex flex-col bg-[#F9F9F9] w-[1224px]   mx-auto pt-[24px] pb-[92px]">
      <p className="text-[#36E2B4] text-[18px] font-[600] mr-[80px]">
        سوال ۱ از ۲۴۰
      </p>

      <div className="flex gap-x-[24px] mx-auto mt-[42px]">
        <img src={state.question.url} alt="" />
      </div>
      <div className="w-[856px] h-[1px] bg-[#CBCBCB] my-[58px] mx-auto" />
      <div className="flex gap-x-[24px] mx-auto">
        {state.options.map(
          op =>
            op.imageUrl && (
              // eslint-disable-next-line
              <img
                key={Math.random() * 100}
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
                className={`cursor-pointer ${
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

export default ImageAndImageForm
