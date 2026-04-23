import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className=' border-t border-t-border lg:mx-17.5 mx-6 lg:pb-10 pb-5 lg:pt-8 pt-4 flex justify-between'>
            <p className='text-primary-text lg:text-[16px] text-[12px] font-normal font-inter'>
                @ 2024. All Rights Reserved
            </p>
            <p className='text-primary-text lg:text-[16px] text-[12px] font-normal font-inter'>
                Developed by <span className='font-semibold text-main'>Sahar Jwar</span>
            </p>
            <div className=" flex lg:gap-4 gap-1 items-center">
                <a href="https://www.linkedin.com/in/sahar-jwar-8000a52a2/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEtiGmt%2B%2FSuy48JMUiKstMg%3D%3D" className='text-white lg:p-1.75 p-1.25 bg-main rounded-[50%] cursor-pointer hover:bg-[#0c96e2c2]'>
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/Sahar-Jw" className='text-white lg:p-1.75 p-1.25 bg-main rounded-[50%] cursor-pointer hover:bg-[#0c96e2c2]'>
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}
