import React from 'react'
import HeaderTestCardsBox from 'components/Home/HeaderTestCardsBox'
import TestCardHome from 'components/Home/TestCardHome'

const TestCardsBox = () => (
  <div className="w-full flex flex-col">
    <HeaderTestCardsBox />
    <div className="flex flex-wrap">
      <TestCardHome pic="/images/image1.png" />
      <TestCardHome pic="/images/image2.png" />
      <TestCardHome pic="/images/image3.png" />
      <TestCardHome pic="/images/image4.png" />
      <TestCardHome pic="/images/image5.png" />
      <TestCardHome pic="/images/image6.png" />
    </div>
  </div>
)

export default TestCardsBox
