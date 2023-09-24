import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import Time from './Time'
import LikeNumber from './LikeNumber'
import ViewNumber from './ViewNumber'

const MagazineLittleCard = () => (
  <div className="flex">
    <img
      src="https://i.ibb.co/X8kYB21/Rectangle-470.png"
      alt=""
      width={160}
      height={160}
    />

    <ul className="flex flex-col mr-[24px] justify-between">
      <li className="flex">
        <PlayArrowIcon style={{ color: '#9966FF' }} />
        <p className="text-[16px] font-[600]">ویدئو</p>
      </li>
      <li className="text-[#9A9A9A] text-[14px] font-[500]">
        <span>زیگموند فروید/</span>
        <span>۲۹ فروردین ۱۴۰۰</span>
      </li>
      <li className="text-black text-[16px] font-[600]">
        <p>
          این یک متن آزمایشی برای این مقاله می‌باشد این یک متن آزمایشی برای{' '}
        </p>
      </li>
      <li className="flex w-full justify-between">
        <div className=" flex gap-x-[18px]">
          <Time number={10} color="#9A9A9A" />
          <LikeNumber number={56} color="#9A9A9A" />
          <ViewNumber number={56} color="#9A9A9A" />
        </div>
        <BookmarkBorderOutlinedIcon style={{ color: '#9A9A9A' }} />
      </li>
    </ul>
  </div>
)

export default MagazineLittleCard
