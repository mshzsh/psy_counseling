import React from 'react'
// import Footer from '../components2/Footer'
// import Header from '../components2/header/Header'

const CommonLayout = ({ children }) => (
  <div className="flex flex-col justify-between min-h-[100vh]">
    {/* <Header /> */}
    <mian className="flex-1">{children}</mian>
    {/* <Footer /> */}
  </div>
)

export default CommonLayout
