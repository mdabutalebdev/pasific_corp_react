import React from 'react'
import Image from './Layouts/Image'
import Logo from '../assets/icons/logo.png'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterList from './Layouts/FooterList';

const FooterPart = () => {
    return (
        <section className='w-container mx-auto py-32'>
            <div className="flex justify-between">
                <div className="">
                    <div className="flex gap-x-1">
                        <div className="">
                            <Image src={Logo} />
                        </div>
                        <div className="">
                            {/* <h3 TagName={`h1`} text={`Pacific Corp.`} className={`text-[32px]`}/> */}
                            <h3 className='text-[35px]'>Pacific Corp.</h3>
                        </div>

                    </div>
                    <div className="">
                        <p className='text base w-[200px] pt-4 ml-2'>Build a modern and creative website with crealand</p>
                    </div>
                    <div className="flex gap-x-5 mt-5">
                        <a href="#" className='bg-[#E2E4E6] h-8 w-8 rounded-full'><FaGoogle className='h-6 w-6  text-black text-lg mx-auto mt-1' /></a>
                        <a href="#" className='bg-[#E2E4E6] h-8 w-8 rounded-full'><FaTwitter className='h-6 w-6  text-black text-lg mx-auto mt-1' /></a>
                        <a href="#" className='bg-[#E2E4E6] h-8 w-8 rounded-full'><FaInstagram className='h-6 w-6  text-black text-lg mx-auto mt-1' /></a>
                        <a href="#" className='bg-[#E2E4E6] h-8 w-8 rounded-full'><FaLinkedin className='h-6 w-6  text-black text-lg mx-auto mt-1' /></a>
                    </div>
                </div>
                {/* logo part end */} 

                <div className="">
                    <FooterList href={"#"} text={`Product`} className={`text-lg font-bold text-black`} />
                    <FooterList href={"#"} text={`Landingpage`} className={`text-base text-ParagraphColor font-normal mt-20`} />
                    <FooterList href={"#"} text={`Documentation`} className={`text-base text-ParagraphColor font-normal`} />
                    <FooterList href={"#"} text={`Referral Program`} className={`text-base text-ParagraphColor font-normal`} />
                    <FooterList href={"#"} text={`Product`} className={`text-base text-ParagraphColor font-normal`} />
                    <FooterList href={"#"} text={`Pricing`} className={`text-base text-ParagraphColor font-normal`} />

                </div>
                <div className="">
                    <FooterList href={"#"} text={`Services`} className={`text-lg font-bold text-black pb-10`} />
                    <FooterList href={"#"} text={`Documentation`} className={`text-base text-ParagraphColor font-normal pt-10`} />
                    <FooterList href={"#"} text={`Design`} className={`text-base text-ParagraphColor font-normal pb-4`} />
                    <FooterList href={"#"} text={`Themes`} className={`text-base text-ParagraphColor font-normal pb-4`} />
                    <FooterList href={"#"} text={`Illustrations`} className={`text-base text-ParagraphColor font-normal pb-4`} />
                    <FooterList href={"#"} text={`UI Kit`} className={`text-base text-ParagraphColor font-normal pb-4`} />
                </div>
                <div className="">
                    <FooterList  href={"#"} text={`Company`} className={`text-lg font-bold text-black pb-10`} />
                    <FooterList  href={"#"} text={`About`} className={`text-base text-ParagraphColor font-normal pt-10`} />
                    <FooterList  href={"#"} text={`Terms`} className={`text-base text-ParagraphColor font-normal pb-4`} />
                    <FooterList  href={"#"} text={`Privacy Policy`} className={`text-base text-ParagraphColor font-normal pb-4`} />
                    <FooterList  href={"#"} text={`Careers`} className={`text-base text-ParagraphColor font-normal pb-4`} />
                    
                </div>
                <div className="">
                    <FooterList href={"#"} text={`More`} className={`text-lg font-bold text-black pb-10`} />
                    <FooterList href={"#"} text={`Documentation`} className={`text-base text-ParagraphColor font-normal`} />
                    <FooterList href={"#"} text={`License`} className={`text-base text-ParagraphColor font-normal pt-10`} />
                    <FooterList href={"#"} text={`Changelog`} className={`text-base text-ParagraphColor font-normal pt-10`} />
                   
                </div>





            </div>
        </section>
    )
}

export default FooterPart