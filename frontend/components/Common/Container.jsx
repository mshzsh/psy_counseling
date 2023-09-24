import React from 'react'

const Container = ({ children, paddingX = 12 }) => (
  <div
    className="container mx-auto"
    style={{
      padding: `0 ${paddingX}px`,
    }}
  >
    {children}
  </div>
)

export default Container
