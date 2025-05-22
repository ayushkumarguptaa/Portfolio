import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareXTwitter, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(faLinkedin, faSquareXTwitter, faEnvelope, faSquareGithub)


function Footer() {
  return (
    <footer>
    <br/>
    <hr className='border-white' />
      <div className='mt-4 mb-4' >
       <p className=' text-white text-2xl text-center' >Contact</p>
       <div className='flex justify-center' >
        <a href="https://www.linkedin.com/in/ayush-kumar-guptaa" ><FontAwesomeIcon title='LinkedIn' size='2xl' icon="fa-brands fa-linkedin" style={{color: "#ffffff",}} /></a>
        <a href='https://x.com/AyushKumar95049' className='ml-8' ><FontAwesomeIcon title='Twitter' icon={faSquareXTwitter} size="2xl" style={{ color: '#ffffff' }} /></a>
        <a href='mailto:ayushgupta.ce@gmail.com' className='ml-8' ><FontAwesomeIcon title='Mail' icon={faEnvelope} size="2xl" style={{ color: '#ffffff' }} /></a>
        <a href='https://www.github.com/ayushkumarguptaa' className='ml-8' ><FontAwesomeIcon icon={faSquareGithub} size="2xl" style={{ color: '#ffffff' }} /></a>
       </div>

    </div>
    </footer>
  )
}

export default Footer