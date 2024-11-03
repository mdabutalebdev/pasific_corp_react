import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import TestmonialCard from './Layouts/TestmonialCard'
import Star from '../assets/icons/star.svg'

const TestmonialPart = () => {
    return (
        <section className='w-container mx-auto py-20'>
            <div className="flex justify-center">
                <CommonHeadding text={`testimonial`} className={`uppercase`} />
            </div>
            <div className="text-center">
                <h3 className='text-40 py-3'>What Our Customer Have To Says</h3>
                <p className='w-[550px] ml-80'>We share common trends, strategies ideas, Opinion, short & log
                    stories from the team behind company</p>
            </div>
            <div className="flex gap-x-5 mt-16">

                {/* card one start */}
                <div className="">
                    <TestmonialCard

                        src={Star}
                        ptext={`I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.`}
                        htext={`Viola Manisa`}
                        h4text={`Verified customer`}
                    />
                </div>
                {/* card one end */}
                {/* card two start */}
                <div className="">
                    <TestmonialCard

                        src={Star}
                        ptext={`I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.`}
                        htext={`Viola Manisa`}
                        h4text={`Verified customer`}
                    />
                </div>
                {/* card two end */}
                {/* card three start */}
                <div className="">
                    <TestmonialCard

                        src={Star}
                        ptext={`I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.`}
                        htext={`Viola Manisa`}
                        h4text={`Verified customer`}
                    />
                </div>
                {/* card three end */}


            </div>
        </section>
    )
}

export default TestmonialPart