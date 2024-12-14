import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-green-400 rounded-xl p-5 '>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4>{data.date}</h4>
    </div>
    <h2 className='text-2xl font-semibold mt-5'>{data.title}</h2>
    <p className='mt-5'>{data.description}</p>
    <div className='flex items-center justify-between mt-14'>
            <button className='bg-blue-500 p-2  rounded'>Accept Task</button>
            <button className='bg-red-800 p-2  rounded'>Ignore</button>
        </div>
  </div>
  )
}

export default NewTask
