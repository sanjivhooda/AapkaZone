import React from 'react'

const EventCard = () => {
  return (
    <div className='bg-gray-100'>
    <div className='w-[80vw] flex justify-center items-center bg-white mt-20 border shadow-lg p-5 ml-24 my-10'>
        <div className='grid grid-cols-2'>
        <div>
            <img src='https://files.utsav.yoga/image/2023-11-22/Music_jam_min1700638347671.png'/>
        </div>
      <div className=' pl-8'>
        <h1 className='text-4xl underline'>XYZ Heading</h1>
        <h2>29/05/2024</h2>
        <h3>5:30 pm - 6:30 pm</h3>
      </div>
      </div>
    </div>
    </div>
  )
}

export default EventCard
