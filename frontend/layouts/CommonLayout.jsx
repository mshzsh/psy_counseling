import React, { useEffect } from 'react'

// Next
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import Header from 'components/Header/Header'
// import ThemeBtn from 'components/Common/ThemeBtn'
import Footer from 'components/Footer/Footer'
import CustomBreadcrumbs from 'components/Common/CustomBreadcrumbs'

const CommonLayout = ({
  children,
  title,
  // keyword,
  description,
  breadcrumbsRoutes,
}) => {
  const router = useRouter()

  useEffect(() => {
    // happens first render
    if (
      localStorage.theme === 'dark'
      // || ((!('theme' in localStorage) || localStorage.theme !== 'dark') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // happens only on other browser tabs
    const handleDarkTheme = () => {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    window.addEventListener('storage', handleDarkTheme)

    return () => window.removeEventListener('storage', handleDarkTheme)
  }, [])

  return (
    <>
      <Head>
        <title>{`${title} | حال خوب`}</title>
        {/* <meta name="keyword" content={keyword || 'حال خوب, حال, خوب'} /> */}
        <meta name="description" content={description || 'حالتو خوب کن'} />
        <meta property="og:title" content={`${title} | حال خوب`} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_ORIGIN}${router.asPath}`}
        />
        {/* <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={description || 'حالتو خوب کن'}
        />
        <meta property="og:image" content={image || '/cover.jpg'} />
        <meta property="og:locale" content="fa_IR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${title} | حال خوب`} />
        <meta
          name="twitter:description"
          content={description || 'حالتو خوب کن'}
        />
        <meta
          name="twitter:url"
          content={`${process.env.NEXT_PUBLIC_ORIGIN}${router.asPath}`}
        />
        <meta name="twitter:image" content={image || '/cover.jpg'} /> */}
      </Head>

      <div className="min-h-[100vh] flex flex-col justify-between">
        <Header
        // noBreadcrumb={noBreadcrumb}
        />

        {breadcrumbsRoutes?.length > 0 && (
          <CustomBreadcrumbs breadcrumbsRoutes={breadcrumbsRoutes} />
        )}

        <main className="flex-1 pb-[64px]">
          {/* {!noBreadcrumb && (
          <Breadcrumb
            title={title}
            parent={parent}
            parentRoute={parentRoute}
            subParent={subParent}
            subParentRoute={subParentRoute}
          />
        )} */}
          {/* <ThemeBtn /> */}
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default CommonLayout
