import React from 'react'

const Facilitators = () => {
  return (
    <div>
      <div className="grid grid-cols-3 mx-36 gap-7 pt-20">
        <div className="relative bg-white h-72">
            <div>
        <img
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white"
          src="https://themewagon.github.io/elderly/images/person_1.jpg"
          alt="Person"
        />
        <h1 className='text-center text-xl mt-16'>
            Pows & Poses
        </h1>
          <div className=" text-md mx-3 text-center">
          Paws & Poses is a heart-warming and compassionate initiative that combines the love for yoga with a deep commitment to animal welfare.
          </div>
          <div className='flex items-center justify-center mt-4'>
          <button className='bg-blue-500 p-1  rounded-lg'>More Info</button>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Facilitators
