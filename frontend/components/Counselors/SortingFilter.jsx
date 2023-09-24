import React, { useState } from 'react'

// mui
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

// components
// import SearchInput from 'components/SearchInput/SearchInput'

const SortingFilter = ({ handleCloseDrawer }) => {
  const [def, setDef] = useState(false)
  const [highestExperience, setHighestExperience] = useState(false)
  const [highestScore, setHighestScore] = useState(false)

  return (
    <div className="flex flex-col justify-between md:flex-row">
      {/* eslint-disable-next-line */}
      <div
        onClick={() => {
          handleCloseDrawer(true)
        }}
        className="w-full flex flex-row justify-between items-center pr-[12px] pl-[16px]
        mb-[12px] bg-[#36E2B4] md:w-[178px] md:mb-[0px] lg:hidden"
      >
        <div className="h-[40px] flex flex-row items-center [&>svg]:ml-[8px] lg:[&>svg]:ml-[12px]">
          <TuneOutlinedIcon />

          <p className="text-[16px] font-[700] lg:text-[22px] lg:font-[600]">
            فیلترها
          </p>
        </div>

        <ArrowBackIosIcon
          style={{
            fontSize: 16,
            marginRight: -5,
          }}
        />
      </div>

      <div
        className="w-full h-[40px] flex items-center bg-[#EDEDED] px-[12px]
        md:w-[calc(100%_-_178px_-_18px)] lg:w-full lg:h-[60px] lg:px-[24px]"
      >
        <ul className="flex h-full w-full items-center">
          <li className="hidden text-[18px] font-[600] ml-[16px] lg:block">
            مرتب سازی :
          </li>
          {/* eslint-disable-next-line */}
          <li
            onClick={() => {
              setDef(!def)
              setHighestExperience(false)
              setHighestScore(false)
            }}
            className={`text-[12px] font-[500] ${
              def ? 'text-secondary' : 'text-textLight-primary'
            } ml-[16px] cursor-pointer select-none lg:text-[16px] lg:font-[600] lg:ml-[24px]`}
          >
            پیش‌فرض
          </li>
          {/* eslint-disable-next-line */}
          <li
            onClick={() => {
              setHighestExperience(!highestExperience)
              setDef(false)
              setHighestScore(false)
            }}
            className={`text-[12px] font-[500] ${
              highestExperience ? 'text-secondary' : 'text-textLight-primary'
            } ml-[16px] cursor-pointer select-none lg:text-[16px] lg:font-[600] lg:ml-[24px]`}
          >
            بالاترین تجربه
          </li>
          {/* eslint-disable-next-line */}
          <li
            onClick={() => {
              setHighestScore(!highestScore)
              setDef(false)
              setHighestExperience(false)
            }}
            className={`text-[12px] font-[500] ${
              highestScore ? 'text-secondary' : 'text-textLight-primary'
            } ml-[16px] cursor-pointer select-none lg:text-[16px] lg:font-[600] lg:ml-[24px]`}
          >
            بیشترین امتیاز
          </li>
        </ul>
        {/* <div className="hidden xl:block">
        <SearchInput
          parentStyles="h-[35px] w-[588px]"
          iconStyles="h-[35px] mt-0 ml-0"
          inputStyles="placeholder:text-[18px] text-[15px]"
        />
      </div> */}
      </div>
    </div>
  )
}

export default SortingFilter
