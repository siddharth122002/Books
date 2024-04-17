import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full w-16 h-16 border-t-2 border-b-2 border-sky-900'></div>
    </div>
  )
}

export default Spinner