import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faLinkedin, faSquareXTwitter)


function Footer() {
  return (
    <div className='mt-4' >
       <p className='text-center text-white text-2xl' >Contact</p>
       <div className='flex justify-center' >
        <a href="https://www.linkedin.com/in/ayushkumarguptaa" ><FontAwesomeIcon size='2xl' icon="fa-brands fa-linkedin" style={{color: "#ffffff",}} /></a>
        <a href='#' ><FontAwesomeIcon className='ml-4' icon={faSquareXTwitter} size="2xl" style={{ color: '#ffffff' }} /></a>
       </div>

    </div>
  )
}

export default Footer