import React from 'react'
import image_mobile from '../assets/images/image-hero-mobile.png'
import image_desktop from '../assets/images/image-hero-desktop.png'
import audiophile from '../assets/images/client-audiophile.svg'
import databiz from '../assets/images/client-databiz.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'

function Main() {
  return (
    <div className='main  md:flex md:flex-row-reverse md:items-center md:justify-between gap-32 md:px-48'>
        <picture className='mt-5'>
            <source media='(min-width: 640px)' srcset={image_desktop} />
            <img src={image_mobile} alt='image-hero'  className='md:px-24'/>
        </picture>
        <div className='basis-3/4'>
          <h2 className='text-center text-AlmostBlack text-3xl font-bold mt-5 tracking-wide 
          md:text-6xl md:pr-5 md:font-black md:text-left'>Make remote work</h2>
          <p className='text-center text-sm px-4 md:px-0 mt-5 text-MediumGray md:text-left'>
            Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.
          </p>
          <div className='flex justify-center mt-4 md:justify-start
          '>
            <button className='mt-4 bg-AlmostBlack text-AlmostWhite py-2 hover:bg-transparent transition duration-300 hover:text-AlmostBlack border-2 border-AlmostBlack hover:border-2  
             hover:border-AlmostBlack px-4 rounded-lg '>Learn more</button>
          </div>
          <div className='flex p-5 justify-between md:justify-start md:p-0 md:mt-10 gap-5 mt-5 md:gap-8'>
            <div>
              <img src={databiz} />
            </div>
            <div>
              <img src={audiophile} />
            </div>
            <div>
              <img src={meet} />
            </div>
            <div>
              <img src={maker} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main