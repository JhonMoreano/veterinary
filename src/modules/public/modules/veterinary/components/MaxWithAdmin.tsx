import React from 'react'

const MaxWithAdmin = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-w-4xl mx-auto'>{children}</div>
  )
}

export default MaxWithAdmin