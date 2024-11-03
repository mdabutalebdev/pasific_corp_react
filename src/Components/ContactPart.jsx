import React from 'react'
import Button from './Layouts/Button'

const ContactPart = () => {
  return (
     <section className='w-full h-[541px] bg-HeaddingColor'>
           <div className="w-container mx-auto">
             <div className="">
             <h3 className='text-40 text-white w-[890px] text-center mx-auto pt-36 pb-5'>Ready To Get Insured? Submit Your Request 
             And Hear Back As Soon As Tomorroe.</h3>
             </div>
              <div className="flex relative">
                <input type="email" placeholder='your email' className='h-[56px] w-[320px] rounded-lg pl-5 ml-80'/>
                <Button type={`button`} TagName={`button`} text={`Get Started`} className={`px-10 py-4 absolute top-0 right-[370px]`}/>
              </div>
              <div className="">
                <p className='w-[540px] text-white text-center mx-auto pt-10'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the follow-wing day.</p>
              </div>
           </div>
     </section>
  )
}

export default ContactPart