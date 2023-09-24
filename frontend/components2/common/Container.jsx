import React from 'react'

const Container = ({ paddingX = 12, children }) => (
  <div className="mx-auto container" style={{ padding: `0 ${paddingX}px` }}>
    {children}
  </div>
)

export default Container
