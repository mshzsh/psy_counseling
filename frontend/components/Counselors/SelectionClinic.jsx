import React, { useState, useRef } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const SelectionClinic = ({ faceToFaceState }) => {
  const [provinceState, setProvinceState] = useState(null)
  const [cityState, setCityState] = useState(null)
  const ref = useRef()

  const province = [
    { name: 'تهران', id: 1 },
    { name: 'البرز', id: 2 },
  ]

  const city = [
    { cityName: 'پاکدشت', id: 10 },
    { cityName: 'شهریار', id: 11 },
  ]
  const center = [
    { centerName: 'مرکز۱', id: 20 },
    { centerName: 'مرکز۲', id: 21 },
  ]

  return (
    <div
      className={`w-full ${
        faceToFaceState
          ? 'bg-[#F9F9F9] pointer-events-auto'
          : 'bg-[#EDEDED] pointer-events-none'
      } mt-[16px] p-[24px]`}
    >
      <p
        className={`text-[20px] font-[700] ${
          faceToFaceState ? 'text-black' : 'text-[#9A9A9A]'
        }`}
      >
        انتخاب کلینیک برای مشاوره حضوری
      </p>
      <div className="mt-[16px]">
        <p
          className={`text-[18px] font-[400] mb-[8px] ${
            faceToFaceState ? 'text-black' : 'text-[#9A9A9A]'
          }`}
        >
          استان:
        </p>
        <div className="w-full h-[35px] bg-[#fff] relative">
          <KeyboardArrowDownIcon
            style={{
              position: 'absolute',
              left: '5px',
              top: '2px',
              color: `${faceToFaceState ? '#36E2B4' : '#CBCBCB'}`,
              fontSize: '31px',
            }}
          />
          <select
            onChange={e => setProvinceState(e.target.value)}
            disabled={!faceToFaceState}
            ref={ref}
            className="w-full h-[35px] absolute outline-none pr-[12px] border-[1px] bg-transparent border-[#CBCBCB] appearance-none"
            placeholder=""
          >
            <option value="default" disabled={!!faceToFaceState}>
              انتخاب کنید
            </option>
            {province.map(prov => (
              <option key={prov.id} value={prov.id}>
                {prov.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-[16px]">
        <p
          className={`text-[18px] font-[400] mb-[8px] ${
            provinceState && faceToFaceState ? 'text-black' : 'text-[#9A9A9A]'
          }`}
        >
          شهر:
        </p>
        <div className="w-full h-[35px] bg-[#fff] relative">
          <KeyboardArrowDownIcon
            style={{
              position: 'absolute',
              left: '5px',
              top: '2px',
              color: `${
                faceToFaceState && provinceState ? '#36E2B4' : '#CBCBCB'
              }`,
              fontSize: '31px',
            }}
          />
          <select
            disabled={!provinceState}
            onChange={e => setCityState(e.target.value)}
            ref={ref}
            className="w-full h-[35px] absolute outline-none pr-[12px] border-[1px] bg-transparent border-[#CBCBCB] appearance-none"
            placeholder=""
          >
            <option value="default" disabled={!!faceToFaceState}>
              انتخاب کنید
            </option>
            {city.map(c => (
              <option key={c.id} value={c.id}>
                {c.cityName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-[16px]">
        <p
          className={`text-[18px] font-[400] mb-[8px] ${
            cityState && faceToFaceState ? 'text-black' : 'text-[#9A9A9A]'
          }`}
        >
          مرکز:
        </p>
        <div className="w-full h-[35px] bg-[#fff] relative">
          <KeyboardArrowDownIcon
            style={{
              position: 'absolute',
              left: '5px',
              top: '2px',
              color: `${faceToFaceState && cityState ? '#36E2B4' : '#CBCBCB'}`,
              fontSize: '31px',
            }}
          />
          <select
            disabled={!cityState}
            ref={ref}
            className="w-full h-[35px] absolute outline-none pr-[12px] border-[1px] bg-transparent border-[#CBCBCB] appearance-none"
            placeholder=""
          >
            <option value="default" disabled={!!faceToFaceState}>
              انتخاب کنید
            </option>
            {center.map(cen => (
              <option key={cen.id} value={cen.id}>
                {cen.centerName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SelectionClinic
