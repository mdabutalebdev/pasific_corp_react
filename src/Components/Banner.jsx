import React from 'react'
import Image from './Layouts/Image'
import VectorTL from '../assets/images/vector_top_left.png'
import BannerRight from '../assets/images/banner_right.png'
import Button from './Layouts/Button'
import Vector_One from '../assets/images/vector_one.png'
import Vector_Two from '../assets/images/vector_two.png'

const Banner = () => {
  return (
     <section className='py-36 w-screen	h-[920px]'>
         <div className="relative">
          <Image src={VectorTL} className={`absolute top-[-310px] left-[250px]`}/>
         </div>
            <div className="flex justify-between relative">
                <div className="w-[680px] absolute top-0 left-96">
                    <h1 className='text-[70px] leading-[90px]'>We Are Ready To Make Your New Life Happier</h1>
                    <p className='paragraph leading-9 w-[627px] pb-10'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
                    <Button href={`#`} TagName={`a`} text={`Get a consultation`}/>
                </div>
                 <div className="absolute top-0 right-0">
                        <div className="w-50% relative ">
                            <Image src={Vector_Two} className={`absolute top-[-115px] right-72 z-10`}/>
                            <Image src={Vector_One} className={`absolute top-0 right-56`}/>
                            <Image src={BannerRight} className={``}/>
                        </div>
                </div>
            </div>
     </section>
  )
}

export default Banner