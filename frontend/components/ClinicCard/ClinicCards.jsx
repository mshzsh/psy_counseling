import React from 'react'

import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import JoinFullOutlinedIcon from '@mui/icons-material/JoinFullOutlined'
import SmokingRoomsOutlinedIcon from '@mui/icons-material/SmokingRoomsOutlined'
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined'
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined'
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined'
import ElderlyOutlinedIcon from '@mui/icons-material/ElderlyOutlined'

import ClinicCard from './ClinicCard'

const ClinicCards = () => (
  <div className="flex flex-col">
    <div className="flex justify-between">
      <ClinicCard Icon={Diversity1OutlinedIcon} />
      <ClinicCard Icon={SchoolOutlinedIcon} />
      <ClinicCard Icon={JoinFullOutlinedIcon} />
      <ClinicCard Icon={SmokingRoomsOutlinedIcon} />
    </div>
    <div className="flex justify-between mt-[24px]">
      <ClinicCard Icon={Face6OutlinedIcon} />
      <ClinicCard Icon={SentimentVeryDissatisfiedOutlinedIcon} />
      <ClinicCard Icon={SettingsAccessibilityOutlinedIcon} styles={' '} />
      <ClinicCard Icon={ElderlyOutlinedIcon} />
    </div>
  </div>
)

export default ClinicCards
