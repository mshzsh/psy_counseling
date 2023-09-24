import React, { useState, useEffect } from 'react'

// comonents
import useWindowSize from 'components/CustomHooks/useWindowSize'
import Container from 'components/Common/Container'
import AdvanceCounselorCard from 'components/Counselors/AdvanceCounselorCard'
import FilterContent from 'components/Counselors/FilterContent'
import SortingFilter from 'components/Counselors/SortingFilter'

const CounselorsContent = () => {
  const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false)
  const [counselorsType, setCounselorsType] = useState([])
  const [docGender, setDocGender] = useState([])

  const windowSize = useWindowSize()

  useEffect(() => {
    if (isOpenFilterDrawer && windowSize.width < 640) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpenFilterDrawer, windowSize])

  console.log(counselorsType, 'counselors')
  console.log(docGender, 'doc')
  const test = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ]

  const handleCloseDrawer = isOpen => {
    if (isOpen) {
      setIsOpenFilterDrawer(true)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } else {
      setIsOpenFilterDrawer(false)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      {isOpenFilterDrawer && (
        // eslint-disable-next-line
        <div
          className="z-drawer block absolute lg:hidden top-[0px] right-[0] bottom-[0] left-[0]
        bg-textLight-primary/[.2] transition-all md:top-[70px]"
          onClick={() => {
            handleCloseDrawer(false)
          }}
        />
      )}
      <div
        data-open={isOpenFilterDrawer}
        className="z-drawer block w-full h-[auto] absolute overflow-y-scroll overflow-x-hidden
        bg-bgLight-paper top-[0px] px-[12px] pb-[28px] transition-all
        data-[open=true]:right-[0px] data-[open=false]:right-[-640px] sm:w-[320px] md:top-[70px] lg:hidden"
        style={{
          height: windowSize.width < 640 ? windowSize.height : 'auto',
        }}
      >
        <FilterContent
          wrapperType="drawer"
          isOpenFilterDrawer={isOpenFilterDrawer}
          handleCloseDrawer={handleCloseDrawer}
          docGender={docGender}
          setDocGender={setDocGender}
          counselorsType={counselorsType}
          setCounselorsType={setCounselorsType}
        />
      </div>

      <section>
        <Container>
          <div className="flex">
            <FilterContent
              wrapperType="aside"
              isOpenFilterDrawer={isOpenFilterDrawer}
              handleCloseDrawer={handleCloseDrawer}
              docGender={docGender}
              setDocGender={setDocGender}
              counselorsType={counselorsType}
              setCounselorsType={setCounselorsType}
            />

            <div className="flex-1 flex-col pr-[0px] lg:pr-[24px]">
              <SortingFilter handleCloseDrawer={handleCloseDrawer} />

              <div
                className="grid grid-cols-1 gap-[12px] justify-between mt-[16px]
            sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:gap-[24px] xl:grid-cols-1 min-[1380px]:grid-cols-2"
              >
                {test.map(item => (
                  <AdvanceCounselorCard key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CounselorsContent
