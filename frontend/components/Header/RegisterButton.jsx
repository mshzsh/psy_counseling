import React from 'react'

import LoginIcon from '@mui/icons-material/Login'

const RegisterButton = ({ styles, setModalState, userName }) => (
  <>
    <button
      type="button"
      onClick={() => setModalState(true)}
      className={`${styles} max-[1200px]:hidden bg-[#36E2B4] flex items-center justify-center w-[232px] h-[54px] py-[12px] px-[24px] md:text-[12px] lg:text-[20px] xl:text-[22px] font-[600] hover:border-black hover:border-[2px]`}
    >
      {userName?.length > 0 ? userName : 'ورود/ثبت نام'}
    </button>

    <button
      type="button"
      className=" w-[40px] h-[40px] bg-[#36E2B4] flex items-center justify-center my-auto min-[1200px]:hidden"
    >
      <LoginIcon style={{ fontSize: '34px' }} />
    </button>
  </>
)

export default RegisterButton
