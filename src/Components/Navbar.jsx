import React from 'react'
import Image from './Layouts/Image'
import Logo from '../assets/icons/logo.png'
import List from './Layouts/List'
import Button from './Layouts/Button'

const Navbar = () => {
  return (
     <nav className='w-container mx-auto py-[50px] flex justify-between items-center p-4'>
        
                  {/* logo start */}
            <div className="flex gap-x-1">
                <div className="">
                    <Image src={Logo}/>
                </div>
                <div className="">
                    {/* <h3 TagName={`h1`} text={`Pacific Corp.`} className={`text-[32px]`}/> */}
                    <h3 className='text-[35px]'>Pacific Corp.</h3>
                </div>
            </div> 
            {/* logo end */}
            {/* menu start */}
            <ul className="flex space-x-6  font-semibold">
                    <List  text='Home' className={`hover:text-ButtonBg`}/>
                    <List  text='Pages' className={`hover:text-ButtonBg`}/>
                    <List  text='Services' className={`hover:text-ButtonBg`}/>
                    <List  text='Portfolio' className={`hover:text-ButtonBg`}/>
                    <List  text='Blog' className={`hover:text-ButtonBg`}/>
                    <List  text='Contact Us' className={`hover:text-ButtonBg`}/>
           </ul>
            {/* menu end */}




        <Button href={`#`} TagName={`a`} text={`Call Now`}/>
        
     </nav>
  )
}

export default Navbar