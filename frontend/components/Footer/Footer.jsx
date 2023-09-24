import React from 'react'

// Components
import Container from 'components/Common/Container'
import PhoneNumber from 'components/Common/PhoneNumber'

import FacebookIcon from 'public/images/svg/facebookIcon'
import FooterLogo from 'public/images/svg/footerLogo'
import InstagramIcon from 'public/images/svg/instagramIcon'
import TwitterIcon from 'public/images/svg/twitterIcon'
import YoutubeIcon from 'public/images/svg/youtubeIcon'

import MailOutlineIcon from '@mui/icons-material/MailOutline'

const Footer = () => (
  <footer className=" flex flex-col w-full">
    <section className="flex flex-col w-full bg-[#F9F9F9] ">
      <Container>
        <div className="w-full flex flex-col pt-[28px] bg-[#F9F9F9] items-center  sm:pb-[54px] sm:pt-[74px]">
          <div className="flex-col flex w-full justify-between sm:flex-row">
            <div className="flex flex-col items-center sm:items-center sm:w-[50%]  md:items-start md:w-auto">
              <FooterLogo width={106} height={28} styles="sm:hidden" />
              <FooterLogo styles="hidden sm:block lg:w-[194px] lg:h-[50px] sm:w-[141px] sm:h-[38px]" />

              <p
                className="text-[14px] font-[500] mt-[12px] text-center leading-[18px] w-[174px] text-[#131313] sm:w-[230px] md:w-[200px]  2xl:w-[392px]  lg:mt-[44px] lg:leading-[30px]
               min-[1200px]:w-[342px] lg:text-right lg:text-[18px] lg:font-[600] md:mt-[16px] md:leading-[18px]  sm:text-right"
              >
                لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور ایپسو لورمایپسووم و
                لورم ایپسوم و لورم ایپسو لوررم ایپسوم لورم ایپسوم و لو واللوررم
                لورمایپسوم و لورم ایالا لورملوررم ایپسوم
              </p>

              <PhoneNumber
                number="021-65897"
                styles="mt-[24px] mb-[32px] text-[18px] font-[600] sm:my-[16px]"
              />
              <div className="items-center hidden sm:flex lg:gap-x-[42px]  md:gap-x-[26px] sm:gap-x-[26px]">
                <InstagramIcon />
                <YoutubeIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
            </div>

            <div className="flex justify-center text-[14px] font-[800] mb-[32px] sm:w-[50%] md:w-auto lg:text-[16px] lg:font-[600] md:text-[14px] md:font-[700] sm:text-[12px] sm:mb-0">
              <ul className="flex space-y-[16px] flex-col  sm:space-y-[24px] ">
                <li className="cursor-pointer">مشاوره حضوری</li>
                <li className="cursor-pointer">مشاوره آنلاین</li>
                <li className="cursor-pointer">آزمون‌ها</li>
                <li className="cursor-pointer">مشاوران</li>
                <li className="cursor-pointer">پرسش و پاسخ</li>
              </ul>
              <ul className=" mr-[40px] space-y-[16px] sm:space-y-[24px]">
                <li className="cursor-pointer">بلاگ</li>
                <li className="cursor-pointer">آموزش</li>
                <li className="cursor-pointer">خدمات سازمانی</li>
                <li className="cursor-pointer">درباره ما</li>
                <li className="cursor-pointer">تماس با ما</li>
              </ul>
            </div>

            <div className="flex flex-col items-center sm:hidden md:flex">
              <div
                className="w-full flex flex-col items-center pt-[10px] px-[12px]  bg-[#fff]
                md:p-[10px] md:h-[178px] lg:h-[286px] 
                sm:w-[376px] md:w-[276px] lg:w-[376px] lg:px-[24px] lg:pt-[24px] xl:w-[496px]"
              >
                <iframe
                  title="map"
                  className="h-[134px] w-full sm:h-[110px] lg:h-[200px]  border-[1px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.25288143088244!2d51.46081951825787!3d35.79880149579772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05b1ba627ea9%3A0xef510cc465bf523e!2sTehran%20Province%2C%20Tajrish%2C%20District%201%2C%20S%20Kamraniyeh%20Blvd%2C%20Iran!5e0!3m2!1sen!2snl!4v1665230229707!5m2!1sen!2snl"
                  // style={{bor}}
                  loading="lazy"
                />
                <div className="flex my-[14px] items-center justify-center w-full sm:justify-between sm:my-0">
                  <p className=" font-[800] text-[#9966FF] sm:mt-[14px] sm:text-[12px] xl:text-[14px]">
                    تهران، کامرانیه جنوبی، پلاک ۱۴، واحد ۹
                  </p>

                  <div className="mt-[14px] text-[#9966FF] items-center hidden sm:flex sm:text-[12px] xl:text-[14px]">
                    <p className="font-[800] ml-[8px]">info@haalekhoob.ir</p>
                    <MailOutlineIcon />
                  </div>
                </div>
              </div>

              {/* just md till 1400 */}
              <div className="mt-[16px] hidden md:flex min-[1400px]:hidden">
                <img
                  width={85}
                  height={85}
                  src="images/enamad-1 1.png"
                  className="w-[85px] h-[85px] xl:w-[120px] xl:h-[120px]"
                  alt=""
                />
                <img
                  width={71}
                  height={85}
                  src="images/enamad-2.png"
                  className="w-[71px] h-[85px] mt-[8px] xl:w-[100px] xl:h-[120px]"
                  alt=""
                />
              </div>
            </div>

            {/* just under 640 and above 1400 */}
            <div className="w-auto flex flex-col items-center sm:hidden min-[1400px]:flex">
              <div className="flex w-[212px] my-[28px] justify-between items-center sm:hidden  sm:my-0">
                <InstagramIcon />
                <YoutubeIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
              <div className="flex text-[#9966FF] items-center justify-center sm:hidden">
                <p className="text-[14px] font-[800] ml-[8px]">
                  info@haalekhoob.ir
                </p>
                <MailOutlineIcon />
              </div>

              <div className="mb-[32px] mt-[18px] items-center flex min-[1400px]:flex min-[1400px]:flex-col lg:mb-0 sm:hidden">
                <img
                  width={56}
                  height={67}
                  src="images/enamad-2.png"
                  className=" sm:hidden"
                  alt=""
                />

                <img
                  // width={141}
                  // height={141}
                  src="images/enamad-1 1.png"
                  className="w-[141px] h-[141px] hidden sm:block"
                  alt=""
                />

                <img
                  // width={106}
                  // height={127}
                  src="images/enamad-2.png"
                  className="w-[106px] h-[126px] mt-[8px] hidden sm:block"
                  alt=""
                />
                <img
                  width={74}
                  height={67}
                  src="images/enamad-1 1.png"
                  className=" sm:hidden "
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* just sm till md */}
          <div className="w-full hidden justify-between items-center mt-[26px] sm:flex md:hidden">
            <div className="w-full flex flex-col items-center pt-[10px] px-[12px] bg-[#fff] sm:w-[50%] md:w-[276px] ">
              <iframe
                title="map"
                className="h-[134px] w-full sm:h-[110px] border-[1px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.25288143088244!2d51.46081951825787!3d35.79880149579772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05b1ba627ea9%3A0xef510cc465bf523e!2sTehran%20Province%2C%20Tajrish%2C%20District%201%2C%20S%20Kamraniyeh%20Blvd%2C%20Iran!5e0!3m2!1sen!2snl!4v1665230229707!5m2!1sen!2snl"
                // style={{bor}}
                loading="lazy"
              />
              <div className="flex flex-col my-[8px] text-[12px] font-[600] items-start justify-center w-full ">
                <p className="text-[#9966FF] ">
                  تهران، کامرانیه جنوبی، پلاک ۱۴، واحد ۹
                </p>

                <div className="flex  text-[#9966FF] items-center">
                  <p className=" ml-[8px]">info@haalekhoob.ir</p>
                  <MailOutlineIcon />
                </div>
              </div>
            </div>
            <div className="mt-[16px] hidden sm:flex justify-center w-[50%]  min-[1400px]:hidden">
              <img
                width={85}
                height={85}
                src="images/enamad-1 1.png"
                className="w-[96px] h-[96px]"
                alt=""
              />
              <img
                width={71}
                height={85}
                src="images/enamad-2.png"
                className="w-[80px] h-[96px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section className="w-full h-[56px] text-[12px] bg-[#36E2B4] font-[700] flex justify-center items-center min-[361px]:text-[16px] min-[361px]:font-[600]">
      کلیه حقوق این سایت متعلق به شرکت حال خوب می‌باشد
    </section>
  </footer>
)

export default Footer
