import { useState } from 'react';
import ofriend from '../assets/ofriend.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import axios from 'axios'


const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const [notification, setNotification] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData, // Spread the existing form data
            [name]: value // Update the specific field (either name or email)          
        });
        console.log("Successful");
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/submit/', formData)

            console.log("form submitted successfully", response.data);
            setNotification(true);

            setTimeout(() => {
                setNotification(false)
            }, 3000);


            setFormData({
                name: "",
                email: ""
            })
            
        } catch (error) {
            console.error("Error submitting form", error);
            
        }
    }
  return (
    <div id='footer' className='p-6 pb-0 lg:p-12 lg:pb-0 lg:mb-0 lg:m-8 sm:m-4 sm:mb-0 lg:grid'>
        {notification && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded sticky top-14 " role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your form has been submitted.</span>
        </div>
         )}
        <div className='bg-blue text-white p-6 lg:p-12 sm:p-8 rounded-xl sm:w-[600px] text-center lg:justify-self-center sm:text-center'>
            <h2 className='italic font-semibold text-[14px] sm:text-2xl mb-2 text-center'>Subscribe to get notified on new updates</h2>
            <p className='text-[12px] mb-6 text-center'>Stay in touch, so we can reach out to you with our lasted news and exclusive offers</p>
            <div className='mb-6 relative'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} required placeholder="Enter your Name" className='rounded-xl p-2 w-[220px] lg:w-[400px] sm:w-[300px] text-black mb-3' />
                    <input type="email" name='email' value={formData.email} onChange={handleChange} required placeholder="Enter your E-mail" className='rounded-xl p-2 w-[220px] lg:w-[400px] sm:w-[300px] text-black' />
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
