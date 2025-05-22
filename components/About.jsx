import React from 'react'
import Button from 'react-bootstrap/Button';
import '../src/index.css'

function About() {
  return (
    <div className=' w-[100vw] h-[60vh]  flex ' id='/about'>
        <div className='w-[50%] h-[100%] grid items-center justify-center'>
            <div className=' ml-[20%] min-w-[10%] max-h-[80%]  overflow-y-scroll'>
            <p className='text-white text-6xl font-sans '>Let's get know<br></br> about me closer.</p>
            <p >commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.
            </p>
            <br></br>
            <Button variant="primary" className='explore_btn max-w-[50%] max-h[10%]'>Discover more about me<i className="fa-solid fa-arrow-right"></i></Button>
            </div>
        </div>
        <div className='w-[50%] h-[100%] flex items-center justify-center'>
            <img src='../src/assets/self.jpg' className='image max-w-[60%] '>

            </img>
        </div>
    </div>
  )
}

export default About