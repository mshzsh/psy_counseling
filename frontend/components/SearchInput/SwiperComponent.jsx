import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'

const SwiperComponent = ({ rightArrow, leftArrow }) => (
  <Swiper
    navigation={{
      nextEl: rightArrow,
      prevEl: leftArrow,
      disabledClass: 'opacity-0',
    }}
    modules={[Navigation]}
    slidesPerView={5}
    className="mySwiper w-[90%] h-full flex z-40 items-center "
  >
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">خانواده</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">دانشگاه</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">افسردگی</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">تیک عصبی</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">بیزار بودن</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">هیپنوتیزم</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">بدبختی</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">بیچارگی</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">خودکشی</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">فلاکت</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="">خانه</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex  justify-center items-center">
        <ArrowLeftIcon
          style={{
            fontSize: '20px',
          }}
        />
        <p className="whitespace-nowrap">محیط شلوغ</p>
      </div>
    </SwiperSlide>
  </Swiper>
)

export default SwiperComponent
