import React from 'react'
import Button from 'react-bootstrap/Button';

function Explore() {
  return (
    <div className='min-w-[10vw] max-w-[100vw] h-[60vh] mt-2 flex justify-center items-center'>
        <div className=' grid justify-center items-center '>
        <p className=' text-center text-white text-6xl'>Full Stack Developer</p>
        <div className='flex justify-center'>
        <Button variant="primary" className='explore_btn'>Explore More <i className="fa-solid fa-arrow-right"></i></Button>
        </div>

        </div>
    </div>
  )
}

export default Explore