import React, { useState, useEffect } from 'react'

import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import MenuIcon from '@mui/icons-material/Menu'

import HeaderLogo from 'public/images/svg/headerLogo'
// Components
import Container from 'components/Common/Container'
import ContactUs from 'components/Header/ContactUs'
import Tests from 'components/Header/Tests'
import Counsultants from 'components/Header/Consultants'
import OtherServices from 'components/Header/OtherServices'
import PhoneNumber from 'components/Common/PhoneNumber'
import OnlineCounseling from 'components/Header/OnlineCounseling'
import FaceToFaceConsultation from 'components/Header/FaceToFaceConsultation'
import RegisterButton from 'components/Header/RegisterButton'
import Modal from 'components/modal/Modal'
import SignupModal from 'components/modal/SignupModal'
import UserDetailModal from 'components/modal/UserDetailModal'

const HumbergerMenu = ({
  mobileState,
  setOpenMenu1,
  setOpenMenu2,
  openMenu1,
  openMenu2,
}) => (
  <div
    className={`flex justify-center w-full overflow-hidden absolute z-appBar bg-[#F9F9F9] transition-all duration-500 border-b-[1px] border-[#9A9A9A] ${
      mobileState ? 'h-[382px]' : 'h-0'
    }`}
  >
    <ul className="flex flex-col text-[16px] font-[600] gap-y-[30px]">
      <li>
        <FaceToFaceConsultation />
      </li>
      <li>
        <OnlineCounseling />
      </li>
      <li>
        <Tests />
      </li>
      <li>
        <Counsultants />
      </li>
      <li className="flex flex-col relative">
        {/* eslint-disable-next-line */}
        <div className="flex" onClick={() => setOpenMenu1(!openMenu1)}>
          <OtherServices />
          {!openMenu1 ? (
            <ExpandMoreOutlinedIcon
              style={{
                height: '23px',
                cursor: 'pointer',
              }}
            />
          ) : (
            <ExpandLessOutlinedIcon
              style={{
                height: '23px',
                cursor: 'pointer',
              }}
            />
          )}
        </div>

        {openMenu1 && (
          <ul className="text-[16px] font-[600] w-[147px] pr-[24px] bg-[#F9F9F9] top-[25px] absolute z-50">
            <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
              پرسش و پاسخ
            </li>
            <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
              بلاگ
            </li>
            <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
              آموزش
            </li>
            <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
              خدمات سازمانی
            </li>
          </ul>
        )}
      </li>
      <li className="flex flex-col relative">
        {/* eslint-disable-next-line */}
        <div className="flex" onClick={() => setOpenMenu2(!openMenu2)}>
          <ContactUs />
          {!openMenu2 ? (
            <ExpandMoreOutlinedIcon
              style={{
                height: '23px',
                cursor: 'pointer',
              }}
            />
          ) : (
            <ExpandLessOutlinedIcon
              style={{
                height: '23px',
                cursor: 'pointer',
              }}
            />
          )}
        </div>

        {openMenu2 && (
          <ul className="text-[16px] font-[600] w-[122px]  pr-[24px] bg-[#F9F9F9] z-50 absolute top-[25px]">
            <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
              درباره ما
            </li>
            <li className="my-[16px] cursor-pointer hover:text-[#9966FF] ">
              تماس با ما
            </li>
          </ul>
        )}
      </li>
      <li>
        <PhoneNumber styles="" number="021-897" />
      </li>
    </ul>
  </div>
)

const Header = () => {
  const [openMenu1, setOpenMenu1] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)
  const [modalState, setModalState] = useState(false)
  const [mobileState, setMobileState] = useState(false)
  const [userDetailModalState, setUserDetailModalState] = useState(false)
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [renderState, setRenderState] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('info')) {
      const info = JSON.parse(localStorage.getItem('info'))
      setUserName(info.name ?? 'کابر گرامی')
      setUserAvatar(info.avatar)
    }
    setRenderState(true)
  }, [])

  // mobile elements

  return (
    <header className="bg-[#F9F9F9] w-full sticky top-0  min-[361px]:static border-b-[1px] border-[#9A9A9A] ">
      <Container>
        <div className="flex justify-between w-full h-[86px]">
          <div className="min-[1200px]:hidden h-full ">
            <button
              onClick={() => setMobileState(!mobileState)}
              type="button"
              className="flex  h-full items-center min-[1200px]:hidden"
            >
              <MenuIcon style={{ fontSize: '32px' }} />
            </button>
          </div>
          <div className="my-[16px] max-[360px]:hidden">
            <HeaderLogo />
          </div>

          {/* mobile */}
          <div className="flex my-auto min-[361px]:hidden">
            <HeaderLogo width={106} height={28} />
          </div>

          <ul className="2xl:text-[16px] xl:text-[16px] md:text-[14px] min-[1200px]:flex hidden  font-[600] my-[30px] mr-[40px]">
            <li className="mr-[24px] hover:text-[#9966FF]">
              <FaceToFaceConsultation />
            </li>
            <li className="mr-[24px] hover:text-[#9966FF]">
              <OnlineCounseling />
            </li>
            <li className="mr-[24px] hover:text-[#9966FF]">
              <Tests />
            </li>
            <li className="mr-[24px] hover:text-[#9966FF]">
              <Counsultants />
            </li>
            <li
              className="mr-[24px] flex relative "
              onMouseEnter={() => setOpenMenu1(true)}
              onMouseLeave={() => setOpenMenu1(false)}
            >
              <div className="flex hover:text-[#9966FF]">
                <p className="cursor-pointer ">
                  <OtherServices />
                </p>
                {!openMenu1 ? (
                  <ExpandMoreOutlinedIcon
                    style={{
                      height: '23px',
                      cursor: 'pointer',
                    }}
                  />
                ) : (
                  <ExpandLessOutlinedIcon
                    style={{
                      height: '23px',
                      cursor: 'pointer',
                    }}
                  />
                )}
              </div>
              {openMenu1 && (
                <ul className="text-[16px] font-[600] w-[147px] pr-[24px] bg-[#F9F9F9] top-[25px] absolute z-50">
                  <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
                    پرسش و پاسخ
                  </li>
                  <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
                    بلاگ
                  </li>
                  <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
                    آموزش
                  </li>
                  <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
                    خدمات سازمانی
                  </li>
                </ul>
              )}
            </li>
            <li
              className="mr-[24px] flex relative "
              onMouseEnter={() => setOpenMenu2(true)}
              onMouseLeave={() => setOpenMenu2(false)}
            >
              <div className="flex hover:text-[#9966FF]">
                <p className="cursor-pointer ">
                  <ContactUs />
                </p>
                {!openMenu2 ? (
                  <ExpandMoreOutlinedIcon
                    style={{
                      height: '23px',
                      cursor: 'pointer',
                    }}
                  />
                ) : (
                  <ExpandLessOutlinedIcon
                    style={{
                      height: '23px',
                      cursor: 'pointer',
                    }}
                  />
                )}
              </div>
              {openMenu2 && (
                <ul className="text-[16px] font-[600] w-[122px]  pr-[24px] bg-[#F9F9F9] z-50 absolute top-[25px]">
                  <li className="my-[16px] cursor-pointer hover:text-[#9966FF]">
                    درباره ما
                  </li>
                  <li className="my-[16px] cursor-pointer hover:text-[#9966FF] ">
                    تماس با ما
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <PhoneNumber
            styles="my-[30px] mx-[40px] flex-1 text-left min-[1200px]:block hidden"
            number="021-897"
          />
          {renderState && userName !== '' ? (
            <div
              className="relative my-auto "
              onMouseEnter={() => setUserDetailModalState(true)}
              onMouseLeave={() => setUserDetailModalState(false)}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_ORIGIN}${userAvatar}`}
                alt="avatar"
                className="object-cover w-[54px] h-[54px] cursor-pointer"
              />
              {userDetailModalState && <UserDetailModal name={userName} />}
            </div>
          ) : (
            renderState && (
              <RegisterButton
                styles="my-[16px]"
                setModalState={setModalState}
                userName={userName}
              />
            )
          )}
        </div>
        {modalState && (
          <Modal
            OurModal={SignupModal}
            setModalState={setModalState}
            getState={setUserName}
            getState2={setUserAvatar}
          />
        )}
      </Container>
      {/* mobile */}
      <HumbergerMenu
        mobileState={mobileState}
        setOpenMenu1={setOpenMenu1}
        openMenu1={openMenu1}
        openMenu2={openMenu2}
        setOpenMenu2={setOpenMenu2}
      />
    </header>
  )
}

export default Header
