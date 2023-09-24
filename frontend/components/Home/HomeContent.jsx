import React, { useEffect, useState, useRef } from 'react'

// layouts
import CommonLayout from 'layouts/CommonLayout'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'

import Diversity1Icon from '@mui/icons-material/Diversity1'
import Face6Icon from '@mui/icons-material/Face6'
import SchoolIcon from '@mui/icons-material/School'
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined'
import JoinInnerIcon from '@mui/icons-material/JoinInner'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import ElderlyIcon from '@mui/icons-material/Elderly'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import SearchInput from 'components/SearchInput/SearchInput'
import ClinicCards from 'components/ClinicCard/ClinicCards'
import TitleComponent from 'components/Common/TitleComponent'
import Container from 'components/Common/Container'
import CounselorCard from 'components/Common/CounselorCard'
import QuestionCard from 'components/QuestionAndAnswerPage/QuestionCard'
import ClinicCard from 'components/ClinicCard/ClinicCard'
import NumberComponentsToolbar from './NumberComponentsToolbar'
import BlogCard from './BlogCard'
import UserCommentsCard from './UserCommentsCard'
import TestCardsBox from './TestCardsBox'

const HomeContent = () => {
  const [open, setOpen] = useState(false)

  const clinics = [
    {
      id: '1',
      title: 'خانواده',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: Diversity1Icon,
    },
    {
      id: '2',
      title: 'تحصیلی و شغلی',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: SchoolIcon,
    },
    {
      id: '3',
      title: 'اعتیاد',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: SmokingRoomsIcon,
    },
    {
      id: '4',
      title: 'ازدواج',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: JoinInnerIcon,
    },
    {
      id: '5',
      title: 'کودک و نوجوان',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: Face6Icon,
    },
    {
      id: '6',
      title: 'مشکلات فردی',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: SentimentVeryDissatisfiedOutlinedIcon,
    },
    {
      id: '7',
      title: 'کودکان استثنایی',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: SettingsAccessibilityIcon,
    },
    {
      id: '8',
      title: 'سالمندان',
      subject: 'تعارضات زناشویی، روابط زناشویی و ...',
      count: '95',
      icon: ElderlyIcon,
    },
  ]

  const counselors = [
    {
      name: 'امیر',
      lastName: 'علیمحمدی',
      commentNumber: '86200',
      rate: '3.5',
      counselingNumber: '35',
      position: 'مشاور خانواده',
      lastCounseling: '30',
    },
    {
      name: 'امیر',
      lastName: 'علیمحمدی',
      commentNumber: '86200',
      rate: '3.5',
      counselingNumber: '35',
      position: 'مشاور خانواده',
      lastCounseling: '30',
    },
    {
      name: 'امیر',
      lastName: 'علیمحمدی',
      commentNumber: '86200',
      rate: '3.5',
      counselingNumber: '35',
      position: 'مشاور خانواده',
      lastCounseling: '30',
    },
    {
      name: 'امیر',
      lastName: 'علیمحمدی',
      commentNumber: '86200',
      rate: '3.5',
      counselingNumber: '35',
      position: 'مشاور خانواده',
      lastCounseling: '30',
    },
    {
      name: 'امیر',
      lastName: 'علیمحمدی',
      commentNumber: '86200',
      rate: '3.5',
      counselingNumber: '35',
      position: 'مشاور خانواده',
      lastCounseling: '30',
    },
  ]

  const questionAndAnswer = [
    {
      location: 'تهران',
      time: '۲ روز پیش',
      title: 'این یک متن آزمایشی برای  این مقاله میباشد',
      content:
        'لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لایپسوم لورم ایپسلو  لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم و...',
      likeNumber: '56',
      viewNumber: '56',
      commentNumber: '22',
    },
    {
      location: 'تهران',
      time: '۲ روز پیش',
      title: 'این یک متن آزمایشی برای  این مقاله میباشد',
      content:
        'لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لایپسوم لورم ایپسلو  لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم و...',
      likeNumber: '56',
      viewNumber: '56',
      commentNumber: '22',
    },
    {
      location: 'تهران',
      time: '۲ روز پیش',
      title: 'این یک متن آزمایشی برای  این مقاله میباشد',
      content:
        'لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لایپسوم لورم ایپسلو  لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم و...',
      likeNumber: '56',
      viewNumber: '56',
      commentNumber: '22',
    },
    {
      location: 'تهران',
      time: '۲ روز پیش',
      title: 'این یک متن آزمایشی برای  این مقاله میباشد',
      content:
        'لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لایپسوم لورم ایپسلو  لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم و...',
      likeNumber: '56',
      viewNumber: '56',
      commentNumber: '22',
    },
    {
      location: 'تهران',
      time: '۲ روز پیش',
      title: 'این یک متن آزمایشی برای  این مقاله میباشد',
      content:
        'لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لایپسوم لورم ایپسلو  لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم و...',
      likeNumber: '56',
      viewNumber: '56',
      commentNumber: '22',
    },
  ]

  const rightArrowCounselor = useRef()
  const leftArrowCounselor = useRef()
  const rightArrowClinic = useRef()
  const leftArrowClinic = useRef()
  const leftArrowQuestionAndAnswer = useRef()
  const rightArrowQuestionAndAnswer = useRef()

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <CommonLayout>
      <section className="mt-[12px] sm:pt-[40px] sm:mt-0 ">
        <Container>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="w-full flex flex-col bg-[#F9F9F9] text-[16px] font-[700] lg:w-[392px] md:w-[178px] lg:p-[32px] sm:p-[16px] sm:w-[282px] md:text-[18px] md:font-[600] lg:text-[22px] lg:font-[800] ">
              <div className="flex sm:flex-col gap-x-[12px] mt-[12px]">
                <button
                  type="button"
                  className="bg-[#36E2B4]  w-full h-[40px] lg:h-[58px]"
                >
                  مشاوره حضوری
                </button>
                <button
                  type="button"
                  className="bg-[#36E2B4]  h-[40px]  w-full  sm:mt-[16px] lg:h-[58px]"
                >
                  مشاوره آنلاین
                </button>
              </div>
              <div className="flex sm:flex-col gap-x-[12px] my-[12px] sm:my-0">
                <button
                  type="button"
                  className="bg-[#36E2B4] h-[40px]  w-full  sm:mt-[16px] lg:h-[58px]"
                >
                  آزمون‌ها
                </button>
                <button
                  type="button"
                  className="bg-[#36E2B4]  h-[40px]  w-full  sm:mt-[16px] lg:h-[58px]"
                >
                  پرسش و پاسخ
                </button>
              </div>
              <button
                type="button"
                className="bg-[#9966FF] h-[40px] w-full text-[#fff]  sm:mt-[16px] lg:h-[58px]"
              >
                درخواست وقت
              </button>
            </div>
            <div className="bg-[#EDEDED] px-[22px] pt-[40px] pb-[22px] flex-1 flex flex-col items-center md:px-[40px] sm:px-[20px] sm:mr-[24px] sm:py-0 ">
              <TitleComponent
                title="متن آزمایشی حدودا کوتاه"
                styles="text-[22px] font-[900]  text-[#383838] sm:mt-[90px] md:text-[38px] sm:font-[900] sm:text-[24px] lg:text-[48px]"
                h="h1"
              />

              <p className="text-[12px] font-[500] sm:text-[14px] md:text-[18px] lg:text-[28px]">
                این یک متن آزمایشی ثابت برای این بخش است
              </p>
              <SearchInput
                inputStyles="h-[40px]"
                parentStyles="mt-[16px]  h-[40px]"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-[64px]">
        <Container>
          {/* mobile and tablet */}
          <div className="flex flex-col lg:hidden">
            <TitleComponent
              title="کلینیک‌های روانشناسی"
              h="h2"
              styles="text-center mb-[16px]"
            />
            {open && (
              <div className="flex lg:hidden ">
                <Swiper
                  navigation={{
                    nextEl: rightArrowClinic.current,
                    prevEl: leftArrowClinic.current,
                    disabledClass: 'opacity-0',
                  }}
                  modules={[Navigation]}
                  breakpoints={{
                    // when window width is >= 640px
                    // 0: {
                    //   slidesPerView: 1,
                    //   spaceBetween: 12,
                    // },
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 12,
                    },

                    640: {
                      slidesPerView: 3,
                      spaceBetween: 18,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 18,
                    },
                  }}
                  // spaceBetween={1}
                  className="mySwiper flex"
                >
                  {clinics.map(clinic => (
                    <SwiperSlide
                      key={clinic.id}
                      className="md:!w-[calc((100%-54px)/4)]  sm:!w-[calc((100%-18px)/3)] "
                    >
                      <ClinicCard Icon={clinic.icon} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            <div className="w-full flex justify-center mt-[16px]">
              <button ref={rightArrowClinic} type="button">
                <ArrowBackIosNewIcon className="rotate-180 text-[#36E2B4]" />
              </button>
              <button ref={leftArrowClinic} type="button">
                <ArrowBackIosNewIcon className="text-[#36E2B4]" />
              </button>
            </div>
          </div>

          <div className="hidden w-full lg:block">
            <TitleComponent
              title="کلینیک‌های روانشناسی"
              h="h2"
              styles=" font-[800] text-center leading-[56px] mb-[32px] 2xl:text-[42px] md:text-[32px]"
            />
            <div className="hidden flex-wrap gap-y-[24px] gap-x-[24px] lg:flex">
              {clinics.map(clinic => (
                <ClinicCard key={clinic.id} Icon={clinic.icon} />
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F9F9F9]  py-[64px]">
        <Container>
          <TitleComponent
            h="h2"
            title="مشاوران"
            styles="text-[42px] font-[800] text-center "
          />
          <div className="hidden mt-[32px] gap-x-[12px] md:flex">
            {counselors.map(
              (counselor, i) =>
                i < 4 && (
                  <CounselorCard data={counselor} key={Math.random() * 100} />
                ),
            )}
          </div>
          <div className="flex flex-col md:hidden">
            {open && (
              <div className="flex ">
                <Swiper
                  navigation={{
                    nextEl: rightArrowCounselor.current,
                    prevEl: leftArrowCounselor.current,
                    disabledClass: 'opacity-0',
                  }}
                  modules={[Navigation]}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.7,
                      spaceBetween: 12,
                    },
                    360: {
                      slidesPerView: 2,
                      spaceBetween: 12,
                    },

                    640: {
                      slidesPerView: 3,
                      spaceBetween: 18,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 18,
                    },
                  }}
                  // spaceBetween={1}
                  className="mySwiper flex"
                >
                  {counselors.map(counselor => (
                    <SwiperSlide
                      key={counselor.id}
                      // className="md:!w-[calc((100%-54px)/4)]  sm:!w-[calc((100%-18px)/3)] "
                    >
                      <CounselorCard data={counselor} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

            <div className="w-full flex justify-center mt-[16px]">
              <button ref={rightArrowCounselor} type="button">
                <ArrowBackIosNewIcon className="rotate-180 text-[#36E2B4]" />
              </button>
              <button ref={leftArrowCounselor} type="button">
                <ArrowBackIosNewIcon className="text-[#36E2B4]" />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="hidden w-[232px] h-[54px] bg-[#36E2B4] mx-auto items-center justify-center text-[22px] font-[600] mt-[56px] md:flex"
          >
            مشاوران بیشتر
          </button>
        </Container>
      </section>
      <section className="bg-[#fff] py-[64px]">
        <Container>
          <TitleComponent
            h="h2"
            title="پرسش و پاسخ"
            styles="text-[42px] font-[800] text-center "
          />
          {/* desktop */}
          <div className="hidden lg:flex flex-col">
            <div className=" gap-x-[24px]  mt-[34px] lg:flex">
              {questionAndAnswer.map(
                (question, i) =>
                  i < 4 && (
                    <QuestionCard data={question} key={Math.random() * 100} />
                  ),
              )}
            </div>
            <button
              type="button"
              className=" w-[232px] h-[54px] bg-[#36E2B4] mx-auto items-center justify-center text-[22px] font-[600] mt-[56px] lg:flex"
            >
              پرسش‌های بیشتر
            </button>
          </div>

          {/* tablet and mobile */}
          <div className="flex flex-col lg:hidden">
            {open && (
              <div className="flex ">
                <Swiper
                  navigation={{
                    nextEl: rightArrowQuestionAndAnswer.current,
                    prevEl: leftArrowQuestionAndAnswer.current,
                    disabledClass: 'opacity-0',
                  }}
                  modules={[Navigation]}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.4,
                      spaceBetween: 12,
                    },
                    360: {
                      slidesPerView: 1.4,
                      spaceBetween: 12,
                    },
                    460: {
                      slidesPerView: 2,
                      spaceBetween: 12,
                    },

                    640: {
                      slidesPerView: 2.8,
                      spaceBetween: 18,
                    },
                    // when window width is >= 768px
                    // 768: {
                    //   slidesPerView: 2.8,
                    //   spaceBetween: 18,
                    // },
                  }}
                  // spaceBetween={1}
                  className="mySwiper flex"
                >
                  {questionAndAnswer.map(question => (
                    <SwiperSlide key={question.id}>
                      <QuestionCard data={question} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            <div className="w-full flex justify-center mt-[16px]">
              <button ref={rightArrowQuestionAndAnswer} type="button">
                <ArrowBackIosNewIcon className="rotate-180 text-[#36E2B4]" />
              </button>
              <button ref={leftArrowQuestionAndAnswer} type="button">
                <ArrowBackIosNewIcon className="text-[#36E2B4]" />
              </button>
            </div>
          </div>
        </Container>
      </section>
      {/* <section className="bg-[#F9F9F9] py-[56px]">
        <Container>
          <TestCardsBox />
        </Container>
      </section> */}
      {/* <section>
        <Container>
          <NumberComponentsToolbar />
        </Container>
      </section> */}
      {/* <section className="py-[64px] bg-[#F9F9F9]">
        <Container>
          <TitleComponent
            title="بلاگ"
            h="h1"
            styles="text-center text-[42px] font-[800] mb-[32px]"
          />
          <div className="flex gap-x-[24px]">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <button
            type="button"
            className="w-[232px] h-[54px] flex justify-center items-center text-[22px] font-[600] mt-[56px] mx-auto bg-[#36E2B4]"
          >
            بلاگ‌های بیشتر
          </button>
        </Container>
      </section> */}
      {/* <section className="py-[64px]">
        <Container>
          <TitleComponent
            title="نظر کاربران"
            h="h1"
            styles="text-center text-[42px] font-[800] mb-[32px]"
          />
          <div className="flex gap-x-[24px]">
            <UserCommentsCard />
            <UserCommentsCard />
            <UserCommentsCard />
          </div>
        </Container>
      </section> */}
    </CommonLayout>
  )
}

export default HomeContent
