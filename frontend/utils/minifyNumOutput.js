import { toFaDigit } from 'fa-utils'

const minifyNumOutput = number => {
  const initialNumber = parseInt(`${number}`, 10)
  let finalNumber = '0'

  if (initialNumber < 2000) {
    finalNumber = toFaDigit(`${initialNumber}` || '')
  } else if (initialNumber < 100000) {
    const tempNumString = `${(initialNumber / 1000).toFixed(3)}`
    finalNumber = toFaDigit(
      `${tempNumString.substring(0, tempNumString.length - 2)} هزار` || '',
    )
  } else {
    const tempUrlList = `${initialNumber / 1000}`.split('.')
    finalNumber = toFaDigit(`${tempUrlList[0]} هزار` || '')
  }

  return finalNumber
}

export default minifyNumOutput
