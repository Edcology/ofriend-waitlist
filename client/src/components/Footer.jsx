import { useState } from 'react';
import ofriend from '../assets/ofriend.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
    const [subscribeEmail, setSubscribeEmail] = useState("");
    const [subscribeName, setSubscribeName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubscribeEmail("")
        setSubscribeName("")
    }
  return (
    <div className='p-6 pb-0 lg:p-12 lg:pb-0 lg:mb-0 lg:m-8 sm:m-4 sm:mb-0 lg:grid'>
        <div className='bg-blue text-white p-6 lg:p-12 sm:p-8 rounded-xl sm:w-[600px] text-center lg:justify-self-center sm:text-center'>
            <h2 className='italic font-semibold text-[14px] sm:text-2xl mb-2 text-center'>Subscribe to get notified on new updates</h2>
            <p className='text-[12px] mb-6 text-center'>Stay in touch, so we can reach out to you with our lasted news and exclusive offers</p>
            <div className='mb-6 relative'>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={subscribeName} onChange={(e) => setSubscribeName(e.target.value)} required placeholder="Enter your Name" className='rounded-xl p-2 w-[220px] lg:w-[400px] sm:w-[300px] text-black mb-3' />
                    <input type="email" value={subscribeEmail} onChange={(e) => setSubscribeEmail(e.target.value)} required placeholder="Enter your E-mail" className='rounded-xl p-2 w-[220px] lg:w-[400px] sm:w-[300px] text-black' />
                    <input type="submit" value="Subscribe" className='bg-lightblue p-2 rounded-xl absolute right-8 lg:right-12 sm:right-12 z-10' />
                </form>
            </div>
        </div>
        <div className='flex gap-4 justify-between mt-12 sm:mt-24 text-[10px] sm:text-[15px]'>
            <div>
                <img src={ofriend} alt="" className='mb-6' />
                <div className='flex gap-2 sm:gap-6'>
                    <div className='grid gap-1 sm:gap-2'>
                        <p>Phone number</p>
                        <p>09018699546</p>
                    </div>
                    <div className='grid gap-1 sm:gap-2'>
                        <p>Email</p>
                        <p className='underline'>ofriend@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-1 sm:gap-6'>
                <div className='grid gap-4'>
                    <p>Home</p>
                    <p>Service</p>
                    <p>About us</p>
                    <p>Training</p>
                </div>
                <div className='grid gap-4'>
                    <p>Blog</p>
                    <p>Terms</p>
                    <p>Cookies</p>
                    <p>Privacy</p>
                </div>
                <div className='grid gap-4'>
                    <p>News</p>
                    <p>Features</p>
                    <p>Company</p>
                    <p>Plans & Pricing</p>
                </div>
            </div>
        </div>
        <hr className='text-gray mt-4' />
        <div className='flex justify-between mt-8 align-middle'>
            <p className='text-[13px] sm:text-[15px]'>Copyright 2024 Ofriend Inc.</p>
            <div className='flex gap-2 sm:gap-6 pb-4'>
                <img src={linkedin} alt=""  className='w-[25px] sm:w-[40px]'/>
                <img src={facebook} alt=""  className='w-[25px] sm:w-[40px]'/>
                <img src={instagram} alt="" className='w-[25px] sm:w-[40px]' />
            </div>
        </div>
    </div>
  )
}

export default Footer;
