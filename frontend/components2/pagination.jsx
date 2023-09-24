import React from 'react'
// import RightArrowPagination from "../assets/svg/rightArrowPagination";
// import LeftArrowPagination from "../assets/svg/leftArrowPagination";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PointPAgination from '../public/images/svg/PointPagination'
import Page from './page'

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  // const [pageLists, setPageLists] = useState<ReactElement | any>([]);
  const firstPage = 1
  const lastPage = totalPage
  const nPagesToShow = 3

  const extraPagesNumber = Math.floor(nPagesToShow / 2)

  const spaceBefore = Math.max(0, currentPage - firstPage - 1)
  const spaceAfter = Math.max(0, lastPage - currentPage - 1)

  const showNumberBefore1 = Math.min(extraPagesNumber, spaceBefore)
  const showNumberAfter1 = Math.min(extraPagesNumber, spaceAfter)

  let showNumberBefore = showNumberBefore1
  let showNumberAfter = showNumberAfter1

  if (showNumberBefore1 + showNumberAfter1 < 2 * extraPagesNumber) {
    showNumberBefore = Math.min(
      2 * extraPagesNumber - showNumberAfter1,
      spaceBefore,
    )
  }

  if (showNumberBefore1 + showNumberAfter1 < 2 * extraPagesNumber) {
    showNumberAfter = Math.min(
      2 * extraPagesNumber - showNumberBefore1,
      spaceAfter,
    )
  }

  let midFirstPage = currentPage - showNumberBefore
  if (currentPage === +lastPage) {
    midFirstPage -= 1
  }

  let midLastPage = currentPage + showNumberAfter
  if (currentPage === +firstPage) {
    midLastPage += 1
  }

  let dotsBefore = 2
  if (midFirstPage - firstPage - 1 <= 0) {
    dotsBefore = 0
  } else if (midFirstPage - firstPage - 1 <= 1) {
    dotsBefore = 1
  }

  let dotsAfter = 2
  if (lastPage - midLastPage - 1 <= 0) {
    dotsAfter = 0
  } else if (lastPage - midLastPage - 1 <= 1) {
    dotsAfter = 1
  }

  const items = []

  const pushItems = (number, selected) => {
    const paginationFunc = () => {
      if (number > 0) {
        return number
      }
      if (number === -1) {
        return (
          <div className="flex justify-center items-center">
            <PointPAgination />
          </div>
        )
      }
      return (
        <div className="flex justify-center items-center">
          <PointPAgination />
          &nbsp;
          <PointPAgination />
        </div>
      )
    }

    items.push(
      <Page
        // key={key}
        className={
          selected
            ? 'text-[#fff] bg-[#389B7A] rounded-[19px] w-[45px] h-[30px] flex items-end justify-center'
            : 'text-black cursor-pointer'
        }
        onClick={
          number > 0 && !selected
            ? () => setCurrentPage(number)
            : console.log('onClick test')
        }
      >
        {paginationFunc()}

        {/* {number > 0 ? (
          number
        ) : number == -1 ? (
          <div className="flex justify-center items-center">
            <PointPAgination />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <PointPAgination />
            &nbsp;
            <PointPAgination />
          </div>
        )} */}
      </Page>,
    )
  }

  for (let number = 1; number <= lastPage; number += 1) {
    if (
      number === +firstPage ||
      number === +currentPage ||
      (number >= midFirstPage && number <= midLastPage)
    ) {
      pushItems(number, number === currentPage)
    } else if (number === +lastPage) {
      pushItems(number, number === currentPage)
    } else if (number === midFirstPage - 1) {
      pushItems(-dotsBefore, number === currentPage)
    } else if (number === midLastPage + 1) {
      pushItems(-dotsAfter, number === currentPage)
    }
  }

  const nextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex items-center flex-row-reverse justify-evenly mb-[24px]">
        <button
          type="button"
          onClick={nextPage}
          className={
            currentPage === lastPage ? 'cursor-auto' : 'cursor-pointer'
          }
        >
          <ArrowForwardIcon
            style={{
              backgroundColor: `${
                currentPage === lastPage ? '#D4D4D4' : '#389B7A'
              }`,
              color: '#fff',
              borderRadius: '50%',
              fontSize: '32px',
              padding: '5px',
              transform: 'rotate(180deg)',
            }}
          />
        </button>

        <ul className="flex items-center justify-evenly   min-w-[232px] ">
          {items.map(state => (
            <li key={Math.random() * 100} className="mx-1">
              {state}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={currentPage === 1 ? 'cursor-auto' : 'cursor-pointer'}
          onClick={prevPage}
        >
          <ArrowBackIcon
            style={{
              color: '#fff',
              backgroundColor: `${currentPage === 1 ? '#D4D4D4' : '#389B7A'}`,
              borderRadius: '50%',
              fontSize: '32px',
              padding: '5px',
              transform: 'rotate(180deg)',
            }}
          />
        </button>
      </div>
    </div>
  )
}

export default Pagination
