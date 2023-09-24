import React from 'react'
import QuestionCard from '../QuestionCard'
import SortingFilter from '../SortingFilter'
import SearchInput from '../SearchInput'

const QuestionAnswerComponent = () => {
  const test = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]

  return (
    <div className="w-full">
      <div>
        <SortingFilter SearchInput={SearchInput} />
      </div>
      <div className="w-full grid grid-cols-4 gap-[24px] mt-[32px]">
        {test.map(() => (
          <QuestionCard key={Math.random() * 100} />
        ))}
      </div>
    </div>
  )
}

export default QuestionAnswerComponent
