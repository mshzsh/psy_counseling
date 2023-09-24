import React from 'react'

const FilterWithTitle = ({ titleState, setTitleState, styles }) => {
  const clinicHandler = id => {
    const tempState = titleState

    const index = titleState.findIndex(state => state.id === id)
    if (!titleState[index].isActive) {
      titleState.forEach((state, indx) => {
        tempState[indx].isActive = false
      })
      tempState[index].isActive = true
      setTitleState([...tempState])
    }
  }

  return (
    <ul className={`${styles} space-y-[8px] mt-[8px]`}>
      {titleState.map(state => (
        // eslint-disable-next-line
        <li
          key={state.id}
          className={`flex h-[40px] items-center cursor-pointer ${
            state.isActive ? 'bg-[#EDEDED]' : 'bg-[#F9F9F9]'
          }`}
          onClick={() => clinicHandler(state.id)}
        >
          <p className="mr-[24px] ">{state.icon}</p>
          <p className="text-[18px] font-[400] mr-[8px]">{state.title}</p>
        </li>
      ))}
    </ul>
  )
}

export default FilterWithTitle
