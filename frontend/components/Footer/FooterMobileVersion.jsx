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

const FooterMobileVersion = () => (
  <footer className=" min-[361px]:hidden flex flex-col w-full">
    <section className="flex flex-col w-full bg-[#F9F9F9]">
      <Container>
        <div className="w-full flex flex-col pb-[32px]">
          <div className="w-full flex flex-col items-center pt-[28px]  bg-[#F9F9F9]">
            <FooterLogo width={106} height={28} />
            <p className="text-[14px] font-[500] text-[#131313] mt-[12px] leading-[18px] w-[174px]">
              لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور ایپسوم لورم ا
              لورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم لورم ایپسوم و
              و...لورم لورمایپسوم و لورم ایپسوم و لورملورم ایپسوم
            </p>
            <PhoneNumber
              number="021-65897"
              styles="mt-[24px] text-[18px] font-[600]"
            />

            <div className="flex my-[32px]">
              <ul className="flex space-y-[16px] flex-col text-[14px] font-[800]">
                <li className="cursor-pointer">مشاوره حضوری</li>
                <li className="cursor-pointer">مشاوره آنلاین</li>
                <li className="cursor-pointer">آزمون‌ها</li>
                <li className="cursor-pointer">مشاوران</li>
                <li className="cursor-pointer">پرسش و پاسخ</li>
              </ul>
              <ul className=" mr-[40px] space-y-[16px] text-[16px] font-[600]">
                <li className="cursor-pointer">بلاگ</li>
                <li className="cursor-pointer">آموزش</li>
                <li className="cursor-pointer">خدمات سازمانی</li>
                <li className="cursor-pointer">درباره ما</li>
              </ul>
            </div>

            <div className="w-full flex flex-col items-center bg-[#fff] pt-[10px] pb-[16px]">
              <iframe
                title="map"
                className="min-[321px]:w-[312px] max-[331px]:w-[280px] h-[134px] border-[1px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.25288143088244!2d51.46081951825787!3d35.79880149579772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05b1ba627ea9%3A0xef510cc465bf523e!2sTehran%20Province%2C%20Tajrish%2C%20District%201%2C%20S%20Kamraniyeh%20Blvd%2C%20Iran!5e0!3m2!1sen!2snl!4v1665230229707!5m2!1sen!2snl"
                // style={{bor}}
                loading="lazy"
              />
              <p className="text-[14px] font-[800] text-[#9966FF] mt-[14px]">
                تهران، کامرانیه جنوبی، پلاک ۱۴، واحد ۹
              </p>
            </div>

            <div className="w-full flex flex-col pt-[28px] items-center">
              <div className="flex w-[212px] justify-between items-center">
                <InstagramIcon />
                <YoutubeIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
              <div className="flex text-[#9966FF] items-center justify-center mt-[32px]">
                <MailOutlineIcon />
                <p className="text-[14px] font-[800]">info@haalekhoob.ir</p>
              </div>

              <div className="flex items-center mt-[24px]">
                <img width={56} height={67} src="images/enamad-2.png" alt="" />
                <img
                  width={74}
                  height={67}
                  src="images/enamad-1 1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section className="w-full h-[56px] text-[12px] bg-[#36E2B4] font-[700] flex justify-center items-center">
      کلیه حقوق این سایت متعلق به شرکت حال خوب می‌باشد
    </section>
  </footer>
)

export default FooterMobileVersion
