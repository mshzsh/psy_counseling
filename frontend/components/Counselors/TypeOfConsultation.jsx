import React, { useState } from 'react'

const TypeOfConsultation = ({
  ConsultationIcon,
  title,
  styles,
  setFaceToFaceState,
  id,
  setDocGender,
  docGender,
  counselorsType,
  setCounselorsType,
  type,
}) => {
  const [iconOn, setIconOn] = useState(false)

  return (
    // eslint-disable-next-line
    <div
      onClick={() => {
        if (type === 'genderDoc' && id === docGender) {
          setDocGender('')
        } else if (type === 'genderDoc') {
          setDocGender(id)
        }

        if (type === 'counselorType' && counselorsType?.includes(id)) {
          const findItem = counselorsType.find(counselor => counselor === id)

          const finalState = counselorsType.filter(
            counselor => counselor !== findItem,
          )
          setCounselorsType(finalState)
        } else if (type === 'counselorType') {
          setCounselorsType([...counselorsType, id])
        }
        if (title === 'حضوری') setFaceToFaceState(!iconOn)
        setIconOn(!iconOn)
      }}
      className={`${styles} flex mt-[16px] cursor-pointer flex-col items-center "
      }`}
    >
      <div
        className={`border-[2px] p-[5px] w-[44px] border-gray-200  ${
          docGender === id || counselorsType?.includes(id)
            ? 'bg-[#36E2B4]'
            : 'bg-[#fff]'
        }`}
      >
        <ConsultationIcon
          style={
            docGender === id || counselorsType?.includes(id)
              ? { color: '#fff', fontSize: '30px' }
              : { color: 'black', fontSize: '30px' }
          }
        />
      </div>
      <p className="mt-[6px] select-none text-[18px] font-[400] text-center">
        {title}
      </p>
    </div>
  )
}

export default TypeOfConsultation
