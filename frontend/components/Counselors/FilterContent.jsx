import React, { useState, useRef, useEffect } from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback'
import VideocamIcon from '@mui/icons-material/Videocam'
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra'
import Man4Icon from '@mui/icons-material/Man4'
import WomanIcon from '@mui/icons-material/Woman'
import Diversity1Icon from '@mui/icons-material/Diversity1'
import Face6Icon from '@mui/icons-material/Face6'
import SchoolIcon from '@mui/icons-material/School'
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined'
import JoinInnerIcon from '@mui/icons-material/JoinInner'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import ElderlyIcon from '@mui/icons-material/Elderly'
// import GraphicEqIcon from '@mui/icons-material/GraphicEq'
// import PlayArrowIcon from '@mui/icons-material/PlayArrow'
// import ArticleIcon from '@mui/icons-material/Article'

// components
import useWindowSize from 'components/CustomHooks/useWindowSize'
import SelectionClinic from 'components/Counselors/SelectionClinic'
import TypeOfConsultation from 'components/Counselors/TypeOfConsultation'
import Switch from 'components/Common/Switch'
import HeaderFilter from 'components/Common/HeaderFilter'
import FilterWithTitle from 'components/Counselors/FilterWithTitle'

const FilterContent = ({
  wrapperType,
  isOpenFilterDrawer,
  handleCloseDrawer,
  docGender,
  setDocGender,
  setCounselorsType,
  counselorsType,
}) => {
  const [isFilterActionShadowVisible, setIsFilterActionShadowVisible] =
    useState(true)
  const [faceToFaceState, setFaceToFaceState] = useState(false)
  const [clinicState, setClinicState] = useState([
    {
      isActive: false,
      title: 'خانواده',
      icon: <Diversity1Icon style={{ color: '#9966FF' }} />,
      id: 1,
    },
    {
      isActive: false,
      title: 'کودک و نوجوان',
      icon: <Face6Icon style={{ color: '#9966FF' }} />,
      id: 2,
    },
    {
      isActive: false,
      title: 'تحصیلی و شغلی',
      icon: <SchoolIcon style={{ color: '#9966FF' }} />,
      id: 3,
    },
    {
      isActive: false,
      title: 'مشکلات فردی',
      icon: (
        <SentimentVeryDissatisfiedOutlinedIcon style={{ color: '#9966FF' }} />
      ),
      id: 4,
    },
    {
      isActive: false,
      title: 'ازدواج',
      icon: <JoinInnerIcon style={{ color: '#9966FF' }} />,
      id: 5,
    },
    {
      isActive: false,
      title: 'کودکان استثنایی',
      icon: <SettingsAccessibilityIcon style={{ color: '#9966FF' }} />,
      id: 6,
    },
    {
      isActive: false,
      title: 'اعتیاد',
      icon: <SmokingRoomsIcon style={{ color: '#9966FF' }} />,
      id: 7,
    },
    {
      isActive: false,
      title: 'سالمندان',
      icon: <ElderlyIcon style={{ color: '#9966FF' }} />,
      id: 8,
    },
  ])
  // const [doSomethingState, setDoSomethingState] = useState([
  //   {
  //     isActive: false,
  //     title: 'پادکست',
  //     icon: <GraphicEqIcon style={{ color: '#36E2B4' }} />,
  //     id: 1,
  //   },
  //   {
  //     isActive: false,
  //     title: 'ویدئو',
  //     icon: <PlayArrowIcon style={{ color: '#9966FF' }} />,
  //     id: 2,
  //   },
  //   {
  //     isActive: false,
  //     title: 'بلاگ پست',
  //     icon: <ArticleIcon style={{ color: '#0099FF' }} />,
  //     id: 3,
  //   },
  // ])
  const drawerRef = useRef()

  const windowSize = useWindowSize()

  useEffect(() => {
    if (
      wrapperType === 'drawer' &&
      !isOpenFilterDrawer &&
      windowSize.width < 640
    ) {
      drawerRef.current?.parentElement?.scroll({
        top: 0,
        left: 0,
        // behavior: 'smooth',
      })
    }
  }, [wrapperType, isOpenFilterDrawer, windowSize])

  useEffect(() => {
    let tempIsVisible = true
    const scrollFunc = () => {
      if (
        drawerRef.current?.parentElement?.scrollHeight &&
        drawerRef.current?.parentElement?.offsetHeight
      ) {
        const maxScroll =
          drawerRef.current.parentElement.scrollHeight -
          drawerRef.current.parentElement.offsetHeight

        if (maxScroll === drawerRef.current?.parentElement?.scrollTop) {
          tempIsVisible = true
          setIsFilterActionShadowVisible(false)
        } else if (tempIsVisible) {
          tempIsVisible = false
          setIsFilterActionShadowVisible(true)
        }
      }
    }

    setTimeout(() => {
      if (drawerRef.current?.parentElement && windowSize.width < 640) {
        drawerRef.current.parentElement.addEventListener('scroll', scrollFunc)
      }
    }, 2000)

    return () => {
      if (drawerRef.current?.parentElement) {
        drawerRef.current.parentElement.removeEventListener(
          'scroll',
          scrollFunc,
        )
      }
    }
  }, [drawerRef, windowSize])

  return (
    <div
      ref={drawerRef}
      data-wrapper={wrapperType}
      className="data-[wrapper=drawer]:flex data-[wrapper=aside]:hidden
      data-[wrapper=drawer]:w-full data-[wrapper=aside]:w-[392px]
      flex-col lg:data-[wrapper=aside]:flex
      min-[1380px]:data-[wrapper=aside]:w-[320px] 2xl:data-[wrapper=aside]:w-[392px]"
    >
      {wrapperType === 'aside' && <HeaderFilter />}

      {wrapperType === 'drawer' && (
        <div className="w-full flex flex-row justify-between items-center pr-[12px] pl-[16px] mt-[16px]">
          <p className="text-[16px] font-[700]">فیلترها</p>

          <ArrowForwardIcon
            onClick={() => {
              handleCloseDrawer(false)
            }}
            style={{
              fontSize: 24,
              marginRight: -5,
            }}
          />
        </div>
      )}

      <div className="bg-[#F9F9F9] p-[24px] mt-[12px] lg:mt-[16px]">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-[400]">مشاوره فوری</p>
          <Switch />
        </div>
        <div className="flex justify-between items-center mt-[8px]">
          <p className="text-[18px] font-[400]">پزشکان دارای مشاوره با بیمه</p>
          <Switch />
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-[24px] mt-[12px] lg:mt-[16px]">
        <p className="text-[20px] font-[700]">نوع مشاوره</p>
        <div className="bg-[#F9F9F9] ml-2 flex flex-wrap">
          <TypeOfConsultation
            title="تلفنی"
            ConsultationIcon={PhoneCallbackIcon}
            counselorsType={counselorsType}
            setCounselorsType={setCounselorsType}
            styles=""
            type="counselorType"
            id="3"
          />
          <TypeOfConsultation
            title="ویدئویی"
            ConsultationIcon={VideocamIcon}
            counselorsType={counselorsType}
            setCounselorsType={setCounselorsType}
            styles="mr-[40px]"
            type="counselorType"
            id="4"
          />
          <TypeOfConsultation
            title="حضوری"
            setFaceToFaceState={setFaceToFaceState}
            counselorsType={counselorsType}
            setCounselorsType={setCounselorsType}
            ConsultationIcon={AirlineSeatReclineExtraIcon}
            styles="mr-[40px]"
            type="counselorType"
            id="5"
          />
        </div>
      </div>

      <SelectionClinic faceToFaceState={faceToFaceState} />

      <div className="bg-[#F9F9F9] p-[24px] mt-[12px] lg:mt-[16px]">
        <p className="text-[20px] font-[700]">جنسیت پزشکان</p>
        <div className="ml-2 flex justify-between  w-[150px]">
          <TypeOfConsultation
            id="2"
            title="خانم"
            ConsultationIcon={WomanIcon}
            docGender={docGender}
            type="genderDoc"
            setDocGender={setDocGender}
          />
          <TypeOfConsultation
            id="1"
            title="آقا"
            docGender={docGender}
            setDocGender={setDocGender}
            type="genderDoc"
            ConsultationIcon={Man4Icon}
          />
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-[24px] mt-[12px] lg:mt-[16px]">
        <p className="text-[20px] font-[700] mb-[16px]">مقطع تحصیلی</p>
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-[400]">کارشناسی ارشد</p>
          <Switch />
        </div>
        <div className="flex justify-between items-center mt-[8px]">
          <p className="text-[18px] font-[400]">دکتری تخصصی (Ph.D)</p>
          <Switch />
        </div>
      </div>

      <div className="bg-[#F9F9F9] pt-[24px] pb-[8px] mt-[12px] lg:mt-[16px]">
        <p className="text-[20px] font-[700] mr-[24px]">کلینیک‌ها</p>

        <FilterWithTitle
          titleState={clinicState}
          setTitleState={setClinicState}
        />
        {/* <FilterWithTitle
          titleState={doSomethingState}
          setTitleState={setDoSomethingState}
        /> */}
      </div>

      {wrapperType === 'drawer' && (
        <div
          className={`sticky bottom-[-28px]
          ${
            isFilterActionShadowVisible
              ? 'shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1),_0_-2px_4px_-2px_rgb(0,0,0,0.1)]'
              : 'shadow-none'
          }
         flex flex-row justify-between bg-[#f9f9f9] p-[12px] mt-[12px]`}
        >
          <button
            type="button"
            className="w-[calc((100%-12px)/2)] h-[40px] text-[14px] font-[600]
            bg-primary text-textLight-primary
            border-[1px] border-solid border-primary"
            onClick={() => {
              handleCloseDrawer(false)
            }}
          >
            اعمال فیلترها
          </button>

          <button
            type="button"
            className="w-[calc((100%-12px)/2)] h-[40px] text-[14px] font-[600]
            bg-[#f9f9f9] text-secondary
            border-[1px] border-solid border-secondary"
            onClick={() => {
              handleCloseDrawer(false)
            }}
          >
            حذف فیلترها
          </button>
        </div>
      )}
    </div>
  )
}

export default FilterContent
