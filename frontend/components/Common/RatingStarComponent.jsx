import React, { useEffect, useState } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'

const RatingStarComponent = ({ number, emptynumber }) => {
  const [starNumber, setStarNumber] = useState()
  const [emptyStar, setEmptyStar] = useState()
  const createStar = () => {
    const array = []
    for (let i = 0; i <= number - 1; i += 1) {
      array.push(number - i)
    }

    setStarNumber(array)
  }

  const createEmptyStar = () => {
    const array = []
    for (let i = 0; i <= emptynumber - 1; i += 1) {
      array.push(emptynumber - i)
    }

    setEmptyStar(array)
  }

  useEffect(() => {
    createStar()
    createEmptyStar()
  }, [number, emptynumber])

  return (
    <ul className="flex  [&>li>svg]:!text-[16px]  lg:[&>li>svg]:!text-[24px]">
      {emptyStar?.map(() => (
        <li key={Math.random() * 100}>
          <StarOutlineOutlinedIcon
            style={{
              color: '#9966FF',
              marginTop: '1px',
            }}
          />
        </li>
      ))}
      {number % 1 !== 0 && (
        <li>
          <StarHalfIcon
            style={{
              color: '#9966FF',
              marginTop: '1px',
            }}
          />
        </li>
      )}
      {starNumber?.map(() => (
        <li key={Math.random() * 100}>
          <StarRateIcon
            style={{
              color: '#9966FF',
            }}
          />
        </li>
      ))}
    </ul>
  )
}

export default RatingStarComponent
