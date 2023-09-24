import React, { useState, useEffect } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ImageAndImageForm from './ImageAndImageForm'
import TextAndTextForm from './TextAndTextForm'
import TextImageAndImageForm from './TextImageAndImageForm'
import TextAndImageTextForm from './TextAndImageTextForm'
import TestInfo from './TestInfo'
import Modal from '../modal/Modal'
import AlertTestTwoSelectModal from '../modal/AlertTestTwoSelectModal'
import AlertTestOneSelectModal from '../modal/AlertTestOneSelectModal'

const TestFormComponent = ({ setTestAlert }) => {
  const [state, setState] = useState([])
  const [startTest, setStartTest] = useState(false)
  const [maxState, setMaxState] = useState()
  const [alertStatusTwoSelect, setAlertStatusTwoSelect] = useState(false)
  const [alertStatusOneSelect, setAlertStatusOneSelect] = useState(false)
  const [getId, setGetId] = useState('')
  const [page, setPage] = useState(0)

  useEffect(() => {
    const temp = [
      {
        selectType: 'two',
        type: 'imageAndImage',
        question: {
          url: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png',
        },
        options: [
          { id: 1, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 2, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 3, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 4, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 5, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 6, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
        ],
      },
      {
        selectType: 'two',
        type: 'imageAndImage',
        question: {
          url: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png',
        },
        options: [
          { id: 1123, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 2123, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 3123, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 4123, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 5123, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 62131, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
        ],
      },
      {
        selectType: 'one',
        type: 'textAndText',
        question: {
          text: 'فرد نگرانی هستی؟',
        },
        options: [
          { id: 7, answerText: 'نظری ندارم', isActive: false },
          { id: 8, answerText: 'مخالفم', isActive: false },
          { id: 9, answerText: 'نظری ندارم', isActive: false },
          { id: 10, answerText: 'موافقم', isActive: false },
          { id: 11, answerText: 'کاملا موافقم', isActive: false },
        ],
      },
      {
        selectType: 'two',
        type: 'textImageAndImage',
        question: {
          url: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png',
          text: 'به عنوان آخرین مثال به شکل زیر توجه کنید. حاصل ترکیب دو مثلث در نمونه، گزینه‌ای است که با رنگ سبز مشخص شده است',
        },
        options: [
          { id: 12, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 13, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 14, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 15, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 16, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 17, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
        ],
      },
      {
        selectType: 'two',
        type: 'textImageAndImage',
        question: {
          url: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png',
          text: 'به عنوان آخرین مثال به شکل زیر توجه کنید. حاصل ترکیب دو مثلث در نمونه، گزینه‌ای است که با رنگ سبز مشخص شده است به عنوان آخرین مثال به شکل زیر توجه کنید. حاصل ترکیب دو مثلث در نمونه، گزینه‌ای است که با رنگ سبز مشخص شده است به عنوان آخرین مثال به شکل زیر توجه کنید. حاصل ترکیب دو مثلث در نمونه، گزینه‌ای است که با رنگ سبز مشخص شده است',
        },
        options: [
          { id: 120, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 130, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 140, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 150, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 160, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
          { id: 170, imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png' },
        ],
      },
      {
        selectType: 'two',
        type: 'textAndImageText',
        question: {
          text: 'کدام بچه خوشحال است؟',
        },
        options: [
          {
            id: 18,
            imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png',
            imageText: 'غمگین',
          },
          {
            id: 19,
            imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png',
            imageText: 'ترسنان',
          },
          {
            id: 20,
            imageUrl: 'https://i.ibb.co/0ffkrPN/Rectangle-362.png',
            imageText: 'خوشحال',
          },
        ],
      },
    ]
    setState(temp)

    const length = Math.max(
      ...temp.map(
        s => s.type === 'textImageAndImage' && s.question.text.length,
      ),
    )
    const maxLengthState = temp.find(s => s.question.text?.length === length)
    setMaxState(maxLengthState.question.text)

    let tempAnswers = []
    for (let i = 0; i <= temp.length - 1; i += 1) {
      tempAnswers = [...tempAnswers, null]
    }
    setGetId(tempAnswers)
  }, [])

  const selectHandler = (answerId, questionIndex) => {
    const tempGetId = [...getId]
    tempGetId[questionIndex] = answerId

    setGetId([...tempGetId])
  }

  return (
    <div className="mx-auto min-h-[700px] flex flex-col">
      <div className="flex flex-col my-[16px]">
        {startTest && state.length > 0 ? (
          <>
            {state[page].type === 'imageAndImage' && (
              <ImageAndImageForm
                state={state[page]}
                selectHandler={selectHandler}
                getId={getId}
                setPage={setPage}
                page={page}
              />
            )}

            {state[page].type === 'textAndText' && (
              <TextAndTextForm
                state={state[page]}
                selectHandler={selectHandler}
                getId={getId}
                setPage={setPage}
                page={page}
              />
            )}

            {state[page].type === 'textImageAndImage' && (
              <TextImageAndImageForm
                state={state[page]}
                selectHandler={selectHandler}
                getId={getId}
                setPage={setPage}
                page={page}
                maxState={maxState}
              />
            )}

            {state[page].type === 'textAndImageText' && (
              <TextAndImageTextForm
                state={state[page]}
                selectHandler={selectHandler}
                getId={getId}
                setPage={setPage}
                page={page}
              />
            )}
          </>
        ) : (
          <TestInfo setStartTest={setStartTest} setTestAlert={setTestAlert} />
        )}

        {startTest && (
          <div className="flex my-[16px] text-[18px] text-[600]">
            <button
              type="button"
              disabled={page === 0}
              className={`flex ${page === 0 ? 'text-[#EDEDED]' : 'text-black'}`}
              onClick={() => {
                if (page > 0) setPage(page - 1)
              }}
            >
              <KeyboardArrowRightIcon />
              <p>سوال قبلی</p>
            </button>
            <button
              type="button"
              disabled={page === state.length - 1}
              className={`flex mr-[42px] text-[18px] text-[600] ${
                page === state.length - 1 ? 'text-[#EDEDED]' : 'text-black'
              }`}
              onClick={() => {
                if (
                  state[page].selectType === 'two' &&
                  getId[page]?.length === 2
                ) {
                  if (page < state.length - 1) setPage(page + 1)
                } else if (
                  (state[page].selectType === 'two' &&
                    getId[page]?.length < 2) ||
                  (state[page].selectType === 'two' && getId[page] === null)
                ) {
                  setAlertStatusTwoSelect(true)
                }

                if (state[page].selectType === 'one' && getId[page]) {
                  if (page < state.length - 1) setPage(page + 1)
                } else if (state[page].selectType === 'one' && !getId[page]) {
                  setAlertStatusOneSelect(true)
                }
              }}
            >
              <p>سوال بعدی</p>
              <KeyboardArrowLeftIcon />
            </button>
          </div>
        )}
      </div>
      {alertStatusTwoSelect && (
        <Modal
          setModalState={setAlertStatusTwoSelect}
          OurModal={AlertTestTwoSelectModal}
        />
      )}
      {alertStatusOneSelect && (
        <Modal
          setModalState={setAlertStatusOneSelect}
          OurModal={AlertTestOneSelectModal}
        />
      )}
    </div>
  )
}

export default TestFormComponent
