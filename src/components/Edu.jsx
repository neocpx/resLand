import React from 'react'

const Edu = ({disc, date}) => {
  return (
    <div className='flex justify-between py-1'>
        <div className='w-4/5'>{disc}</div>
        <div className='font-medium'>{date}</div>
        </div>
  )
}

export default Edu