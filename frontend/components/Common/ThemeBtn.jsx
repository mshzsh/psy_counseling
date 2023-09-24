import React, { useState, useEffect } from 'react'

// components
import Container from 'components/Common/Container'

// const classes = {
//   root: 'h-[80px] bg-white dark:bg-gray-700',
//   btnWrapper:
//     'w-[40px] h-[24px] flex flex-row-reverse bg-gray-200 p-[2px] rounded-[12px]',
//   btn: 'mr-[8px] text-stone-900 dark:text-white',
// }

const ThemeBtn = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // happens first render
    if (
      localStorage.theme === 'dark'
      // || ((!('theme' in localStorage) || localStorage.theme !== 'dark') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }

    // happens only on other browser tabs
    const handleDarkTheme = () => {
      if (localStorage.theme === 'dark') {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }
    window.addEventListener('storage', handleDarkTheme)

    return () => window.removeEventListener('storage', handleDarkTheme)
  }, [])

  return (
    <div
      // className={classes.root}
      className="h-[80px] bg-white dark:bg-gray-700"
    >
      <Container>
        <button
          type="button"
          // className={`${classes.btnWrapper}`}
          className="w-[40px] h-[24px] flex flex-row-reverse bg-gray-200 p-[2px] rounded-[12px]"
          onClick={() => {
            if (!isDark) {
              document.documentElement.classList.add('dark')
              localStorage.setItem('theme', 'dark')
            } else {
              document.documentElement.classList.remove('dark')
              localStorage.setItem('theme', 'light')
            }

            setIsDark(prev => !prev)
          }}
        >
          <div
            className="w-[20px] h-[20px] rounded-[10px] transition-all"
            style={{
              marginLeft: isDark ? 16 : 0,
              backgroundColor: isDark ? 'rgb(96 165 250)' : 'rgb(250 204 21)',
            }}
          />
          {/* <button
          type="button"
          className={classes.btn}
          onClick={() => {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
          }}
        >
          Light
        </button>

        <button
          type="button"
          className={classes.btn}
          onClick={() => {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
          }}
        >
          Dark
        </button> */}
        </button>
      </Container>
    </div>
  )
}

export default ThemeBtn
