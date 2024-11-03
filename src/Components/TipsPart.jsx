import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import Image from './Layouts/Image'
import Tips_one from '../assets/images/tips_one.jpg'
import Tips_two from '../assets/images/tips_two.jpg'
import Tips_three from '../assets/images/tips_three.jpg'

const TipsPart = () => {
    return (
        <section className='w-container mx-auto py-20'>
            <div className="flex justify-center">
                <CommonHeadding text={`our tips for you`} className={`uppercase`} />
            </div>
            <div className="text-center">
                <h3 className='text-40 py-3'>Reinventing Your Protection</h3>
                <p className='w-[550px] ml-80'>We share common trends, strategies ideas, opinion, short & log
                                            stories from the team behind company</p>
            </div>
            <div className="flex gap-x-7 mt-20">
                <div className="">
                    <Image src={Tips_one}/>
                </div>
                <div className="">
                    <Image src={Tips_two}/>
                    <h3 className='w-[300px] text-center text-2xl pt-5 ml-7'>How to prevent and protect your family from Carbon monoxide</h3>
                    <p className='w-[275px] text-center text-base pt-2 ml-7'>We share common trends, strategies ideas, opinion, short & log
                    stories from the team behind company.</p>
                </div>
                <div className="">
                    <Image src={Tips_three}/>
                </div>
            </div>
        </section>
    )
}

export default TipsPart