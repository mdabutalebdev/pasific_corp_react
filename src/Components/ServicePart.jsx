import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import ServiceCard from './Layouts/ServiceCard'
import Home from '../assets/icons/home.svg'
import Life from '../assets/icons/life.svg'
import Car from '../assets/icons/car.svg'
import Image from './Layouts/Image'
import Service_Bg from '../assets/images/service_bg.jpg'
import Cotetion from '../assets/icons/cotetion.svg'
import Verification from '../assets/icons/verification.svg'



const ServicePart = () => {
   return (
      <section className='w-container mx-auto py-10'>
         <div className="flex justify-center">
            <CommonHeadding text={`OUR SERVICES`} />
         </div>
         <div className="text-center">
            <h3 className='text-40 py-3'>Insurance made simple for you</h3>
            <p className='w-[550px] ml-80 '>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
            </div>
            <div className="flex gap-x-10 mt-20">
               {/* card one start*/}
               <div className="hover:translate-y-[-50px] duration-500">
                  <ServiceCard
                     className={``}
                     src={Home}
                     htext={`Home insurance`}
                     ptext={`Home insurance is a type of insurance policy that provides cover for your home.`}
                     h4text={`Learn more`}
                  />
               </div>
               {/* card one end */}
               {/* card two start */}
               <div className="hover:translate-y-[-50px] duration-500">
                  <ServiceCard
                     src={Life}
                     htext={`Life Insurance`}
                     ptext={`Helping you bridge gaps in your health care coverage during times of transition`}
                     h4text={`Learn more`}
                  />
               </div>
               {/* card two end */}
               {/* card three start */}
               <div className="hover:translate-y-[-50px] duration-500">
                  <ServiceCard
                     className={``}
                     src={Car}
                     htext={`Car Insurance`}
                     ptext={`Car insurance is a type of insurance policy that provides cover for your car.`}
                     h4text={`Learn more`}
                  />
               </div>
               {/* card three end */}

            </div>
         
         <div className="mt-24 relative">
            <Image src={Service_Bg} className={`rounded-xl`} />
            <div className="h-[377px] w-[370px] shadow-2xl rounded-xl absolute top-16 left-16">
               <Image src={Cotetion} className={`py-5 ml-8`} />
               <p className='text-2xl w-[310px] mx-auto'>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</p>
               <h3 className='pl-8 leading-7 pt-3'>Daniel Anderson</h3>
               <div className="flex ml-8">
                  <Image src={Verification} />
                  <p className='italic p-2'>Verified customer</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ServicePart