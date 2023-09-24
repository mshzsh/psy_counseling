import { toFaDigit } from 'fa-utils'
import React from 'react'
import LeftChevron from 'public/images/svg/leftChevron'
import BlogCreatedBy from './BlogCreatedBy'
import LikeNumber from '../Common/LikeNumber'
import Time from '../Common/Time'
import ViewNumber from '../Common/ViewNumber'

const BlogCard = () => {
  const test =
    ' لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لایپسوم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم لورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و لورم و...'
  const testDate = '۲۹ فروردین ۱۴۰۰'
  const testTitle = 'این یک متن آزمایشی برای  این مقاله میباشد'
  return (
    <div className="w-[392px] bg-[#fff]">
      <img
        className="mb-[16px]"
        src="https://i.ibb.co/58NWngq/Rectangle-172.png"
        alt="image1"
        width={392}
        height={221}
      />
      <div className="px-[24px]">
        <BlogCreatedBy name="آلبرت بندورا" date={toFaDigit(testDate)} />
        <p className="font-[700] text-[20px] mt-[8px]">
          {toFaDigit(testTitle)}
        </p>{' '}
        <p className="text-[16px] font-[600] mt-[4px]">
          {toFaDigit(test.slice(0, 152).concat('...'))}
        </p>
        <div className="flex justify-between mt-[24px] h-[23px]">
          <Time number={10} color="#9A9A9A" />
          <LikeNumber situation="" number={56} color="#9A9A9A" />
          <ViewNumber situation="" number={56} color="#9A9A9A" />
          <button type="button" className="flex items-center text-[#36E2B4]">
            ادامه مطالعه <LeftChevron color="#36E2B4" />{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
