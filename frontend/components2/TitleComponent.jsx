import React from 'react'

const TitleComponent = ({ title, styles, h }) => (
  <>
    {h === 'h1' && (
      <h1
        style={{ direction: 'rtl' }}
        className={`${styles} text-[22px] font-[800]`}
      >
        {title}
      </h1>
    )}
    {h === 'h2' && (
      <h1
        style={{ direction: 'rtl' }}
        className={`${styles} text-[22px] font-[800]`}
      >
        {title}
      </h1>
    )}
    {h === 'h3' && (
      <h1
        style={{ direction: 'rtl' }}
        className={`${styles} text-[22px] font-[800]`}
      >
        {title}
      </h1>
    )}
  </>
)

export default TitleComponent
