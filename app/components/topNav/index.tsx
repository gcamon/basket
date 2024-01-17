import React from 'react'
import "./topNav.css"
import Contact from '../contacts'
import Socials from '../socials'

const TopNav = () => {
  return (
    <div className='topnav-wrapper'>
      <div className='top-nav-info'>
        <Contact imgUrl={'/icons/phone-v.png'} text={'(225) 555-0118'} socials={false}/>       
        <Contact imgUrl={'/icons/mail-v.png'} text={'michelle.rivera@example.com'} socials={false}/>
      </div>
      <div className='top-nav-info'>      
        <div>
          <div>
            Follow Us  and get a chance to win 80% off
          </div>
        </div>     
      </div>
      <div className='top-nav-info'>       
        <div>
          <div className='social-icons'>
            <span>Follow Us :</span>
            <Socials imgUrl={'/icons/instagram-v.png'}/>
            <Socials imgUrl={'/icons/youtube-v.png'}/>
            <Socials imgUrl={'/icons/facebook-v.png'}/>
            <Socials imgUrl={'/icons/twitter-v.png'}/>
          </div>       
        </div>
      </div>
    </div>
  )
}

export default TopNav

{/* <Image
className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
src="/next.svg"
alt="Next.js Logo"
width={180}
height={37}
priority
/> */}