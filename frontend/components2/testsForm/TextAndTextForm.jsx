import React from 'react'

const TextAndTextForm = ({ state, selectHandler, getId, page, setPage }) => (
  <div className="bg-[#F9F9F9] w-[1224px]  mx-auto px-[80px] pt-[24px] pb-[92px]">
    <p className="text-[#36E2B4] text-[18px] font-[600]">سوال ۱ از ۲۴۰</p>
    <p className="text-[22px] font-[600] mt-[30px]">فرد نگرانی نیستم.</p>

    <ul className="mt-[24px] space-y-[16px]">
      {state?.options?.map(option => (
        // eslint-disable-next-line
        <li
          key={Math.random() * 100}
          className={`flex items-center border-[1px] cursor-pointer ${
            getId[page] === option.id ? 'border-[#36E2B4]' : 'border-[#D1D1D6]'
          } h-[56px]`}
          onClick={() => {
            selectHandler(option.id, page)
            setPage(page + 1)
          }}
        >
          <div
            className={`w-[24px] flex justify-center items-center h-[24px] border-[1px] ${
              getId[page] === option.id
                ? 'border-[#36E2B4]'
                : 'border-[#D1D1D6]'
            } rounded-[50%] mr-[16px]`}
          >
            {getId[page] === option.id && (
              <div className="w-[12px] h-[12px] bg-[#36E2B4] rounded-[50%]" />
            )}
          </div>
          <p className="text-[22px] font-[400] mr-[16px]">
            {option.answerText}
          </p>
        </li>
      ))}
    </ul>
  </div>
)

export default TextAndTextForm
