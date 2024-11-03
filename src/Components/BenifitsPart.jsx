import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import ServiceCard from './Layouts/ServiceCard'
import {serviceData} from '../data/Data'



const BenifitsPart = () => {
  return (
     <section className='w-container mx-auto py-36'>
          <div className="flex justify-center">
            <CommonHeadding text={`your benefits`}  className={`uppercase`}/>
         </div>
         <div className="text-center">
            <h3 className='text-40 py-3'>We’re Your Right Insurance Advocate</h3>
            <p className='w-[550px] ml-80'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
         </div>
          <div className="mt-20 flex flex-wrap gap-7 justify-center">

            {
            serviceData.map((data)=> (
              <ServiceCard 
                key={data.id}
                src={data.src}
                htext={data.htext}
                ptext={data.ptext}
                service= {false}
                benifits ={true}
              />
            ))

            }
         </div>
     </section>
  )
}

export default BenifitsPart