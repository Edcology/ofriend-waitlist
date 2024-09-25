import abouthero from '../assets/abouthero.png'
import mission from '../assets/mission.png'
import vision from '../assets/vision.png'
import accessibility from '../assets/accessibility.png'
import quality from '../assets/quality.png'
import train from '../assets/train.png'
import engagement from '../assets/engagement.png'
import library from '../assets/library.png'
import forum from '../assets/forum.png'
import certification from '../assets/certification.png'
import money from '../assets/money.png'
import earn from '../assets/earn.png'
import platform from '../assets/platform.png'
import empowerment from '../assets/empowerment.png'
import student from '../assets/student.png'
import institution from '../assets/institution.png'
import author from '../assets/author.png'
import creator from '../assets/creator.png'
import usericon from '../assets/usericon.png'



const About = () => {
  return (
    <>
        <div className='px-6 mt-6 sm:flex lg:px-12 md:px-12 mb-8'>
            <div className='mb-10 lg:px-8 sm:px-3 sm:w-[40%] self-center'>
                <h3 className='text-lightblue mb-2 font-bold text-xl'>Who we are</h3>
                <h1 className='text-darkblue text-3xl mb-2 font-medium'>Learn and Earn</h1>
                <p>
                Ofriend Edu is a dynamic online platform connecting individuals for collaborative learning, problem-solving, and earning opportunities. We facilitate idea sharing, skill development, and mutual support among like-minded learners, creating a vibrant community for growth, learning, and success.
                </p>
            </div>
            <div className='sm:w-[60%] sm:h-[60%]'>
                <img src={abouthero} alt="" />
            </div>
        </div>
        <div className='bg-blue p-6 sm:p-8 sm:flex lg:px-20 lg:pt-12 md:px-12 gap-12'>
            <div className='bg-white rounded-xl p-4 mb-6 h-[250px] text-[14px] sm:w-[50%]'>
                <img src={mission} alt="" className='mb-3' />
                <h3 className='font-bold sm:text-2xl mb-3'>Our Mission</h3>
                <p>
                Bridge the gap between learning and earning, empowering students and learners to acquire knowledge, develop skills and monetize their expertise through a cutting-edge platform that connects, educates and rewards.
                </p>
            </div>
            <div className='bg-white rounded-xl p-4 h-[250px] text-[14px] sm:w-[50%]'>
                <img src={vision} alt="" className='mb-3' />
                <h3 className='font-bold mb-3 sm:text-2xl'>Our Vision</h3>
                <p>
                    To create a global community where knowledge sharing, skill development, and financial opportunities converge, fostering a brighter future for all.
                </p>
            </div>
        </div>
        <div className='px-6 sm:px-10 lg:px-20 md:px-10 mt-8 lg:flex lg:gap-12 lg:mb-12'>
            <div className='lg:w-[50%] lg:self-center'>
                <h1 className='text-3xl text-darkblue font-medium mb-4'>Challenge Overview</h1>
                <p className='text-gray mb-6'>
                    The education system is failing to deliver a cohesive and effective learning experience, leaving students unprepared for success. Gaps in access, quality and relevance are hindering student's ability to achieve their full potential, resulting in a lack of essential skills and a disconnect between education and real world applications. This "Learning Experience Gap" is a critical issue that needs to be addressed to ensure students receive a comprehensive and supportive learning experience that fosters growth, skill development, and success.
                </p>
            </div>
            <div className='grid gap-4 lg:grid-cols-2 lg:w-[70%]'>
                <div className='bg-vlightblue rounded-xl p-6'>
                    <img src={accessibility} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Accessibility</h2>
                    <p className='text-[14px]'>
                        Exorbitant textbook and course fees hinder access to educators, perpetuating socio-economic disparities.
                    </p>
                </div>
                <div className='bg-vlightblue rounded-xl p-6'>
                    <img src={quality} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Quality</h2>
                    <p className='text-[14px]'>
                        Limited availability of quality educational materials and lack of opportunities for authors to share their work, stifling knowledge sharing and innovation.
                    </p>
                </div>
                <div className='bg-vlightblue rounded-xl p-6'>
                    <img src={train} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Training</h2>
                    <p className='text-[14px]'>
                        Inadequate access to structured training and certification programs, exacerbating the gap between education and industry needs.
                    </p>
                </div>
                <div className='bg-vlightblue rounded-xl p-6'>
                    <img src={engagement} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Engagement</h2>
                    <p className='text-[14px]'>
                    Traditional learning methods sack of interactive experiences and limited access to income generating opportunities lead  to disengagement, hindering students’ ability to reach their full potential.
                    </p>
                </div>
            </div>
        </div>
        <div className='px-6 sm:px-10 py-6 lg:px-20 md:px-10 mt-8 lg:flex lg:gap-12 bg-vlightblue'>
            <div className='lg:w-[50%] lg:self-center'>
                <h3 className='text-lightblue mb-2 font-bold text-xl'>Our Approach</h3>
                <h1 className='text-3xl text-darkblue font-medium mb-4'>Access, Connect, Thrive</h1>
                <p className='text-gray mb-6'>
                    Ofriend Edu : Unlocking potential through Access (quality learning), Connection(industry experts & community) and Opportunity(Skill development& entrepreneurship).
                </p>
            </div>
            <div className='grid gap-4 lg:grid-cols-2 lg:w-[70%]'>
                <div className='bg-white rounded-xl p-6'>
                    <img src={library} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>E-library</h2>
                    <p className='text-[14px]'>
                        A vast digital repository of quality educational materials, enabling students to access and share knowledge freely.
                    </p>
                </div>
                <div className='bg-white rounded-xl p-6'>
                    <img src={forum} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Community Forum</h2>
                    <p className='text-[14px]'>
                        A vibrant space for learners to interact, share experiences, and connect with peers and mentors.  
                    </p>
                </div>
                <div className='bg-white rounded-xl p-6'>
                    <img src={certification} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Training and Certification</h2>
                    <p className='text-[14px]'>
                        Structured programs with industry-recognized certification and internship opportunities, preparing students for the workforce.  
                    </p>
                </div>
                <div className='bg-white rounded-xl p-6'>
                    <img src={money} alt="" className='mb-2' />
                    <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Monetization opportunities</h2>
                    <p className='text-[14px]'>
                        Empowering students to sell their articles and research, fostering a culture of innovation and entrepreneurship.
                    </p>
                </div>
            </div>
        </div>
        <div className='px-6 py-6 lg:px-20 sm:px-10 mt-4 text-center grid gap-4'>
            <h1 className='font-medium text-2xl'>Our Values</h1>
            <div className='grid gap-4 sm:grid-cols-3'>
                <div className='rounded-xl p-6 px-10 bg-vlightblue grid'>
                    <img src={earn} alt="" className='justify-self-center mb-4' />
                    <h2 className='text-darkblue font-medium text-[18px] sm:text-[16px] mb-3'>Learning and Earning</h2>
                    <p className='text-[14px] text-lightblue'>Bridging the gap between Learning and Earning.</p>
                </div>
                <div className='rounded-xl p-6 px-10 bg-vlightred grid'>
                    <img src={platform} alt="" className='justify-self-center mb-4' />
                    <h2 className='text-darkred font-medium text-[18px] sm:text-[16px] mb-3'>Comprehensive Platform</h2>
                    <p className='text-[14px] text-lightred'>Offering entertainment, education and entrepreneurship opportunities in one app.</p>
                </div>
                <div className='rounded-xl p-6 px-10 bg-vlightgreen grid'>
                    <img src={empowerment} alt="" className='justify-self-center mb-4' />
                    <h2 className='text-darkgreen font-medium text-[18px] sm:text-[16px] mb-3'>Empowerment</h2>
                    <p className='text-[14px] text-lightgreen'>Empowering learners to acquire knowledge, develop skills, and monetize their expertise.</p>
                </div>
            </div>
        </div>
        <div className='bg-serves bg-no-repeat bg-cover bg-center sm:bg-serve px-6 py-6 pt-[200px] lg:pt-0 lg:px-20 sm:px-8 mt-4'>
            <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-3 lg:relative'>
                    <h1 className='font-medium text-3xl text-white mb-4 lg:mb-0 lg:absolute lg:bottom-[250px]'>Who we serve</h1>
                    <div className='bg-white rounded-xl p-6 lg:row-start-3 lg:row-span-1'>
                        <img src={student} alt="" className='mb-2' />
                        <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Students</h2>
                        <p className='text-[14px]'>
                            Access to relevant content, connections with peers and mentors, and opportunities to thrive academically and professional.
                        </p>
                    </div>
                    <div className='bg-white rounded-xl p-6 lg:row-start-3 lg:row-span-1'>
                        <img src={institution} alt="" className='mb-2' />
                        <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Institutions</h2>
                        <p className='text-[14px]'>
                            Access to innovative solutions, connections with other institutions and industry partners, opportunities to thrive in terms of reputation and student outcomes.  
                        </p>
                    </div>
                    <div className='bg-white rounded-xl p-6 lg:row-start-3 lg:row-span-1'>
                        <img src={author} alt="" className='mb-2' />
                        <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Authors</h2>
                        <p className='text-[14px]'>
                            Access to a platform to share their expertise, connections with a wider audience and opportunities to thrive in terms of recognition and impact.   
                        </p>
                    </div>
                    <div className='bg-white rounded-xl p-6 lg:row-start-3 lg:row-span-1'>
                        <img src={creator} alt="" className='mb-2' />
                        <h2 className='font-medium text-[18px] mb-2 text-vdarkblue'>Content creators</h2>
                        <p className='text-[14px]'>
                            Access to a platform to share their expertise, connections with a wider audience and opportunities to thrive in terms of recognition and impact. 
                        </p>
                    </div>
            </div>
        </div>
        <div className='text-center px-6 py-6 lg:px-20 sm:px-10 grid gap-6 lg:gap-12 justify-center'>
            <h1 className='font-medium text-2xl'>Our Collaborators</h1>
            <div className='flex gap-6 lg:gap-[150px]'>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
            </div>
        </div>
        <div className='text-center bg-blue px-6 py-6 lg:px-20 sm:px-10 grid gap-6 lg:gap-12 justify-center'>
            <h1 className='font-medium text-2xl text-lightblue'>Meet the Team</h1>
            <div className='flex gap-6 lg:gap-[150px] text-white'>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center hidden lg:grid'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
            </div>
            <div className='flex gap-6 lg:gap-[150px] text-white hidden lg:flex'>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
                <div className='grid justify-items-center'>
                    <img src={usericon} alt="" className='w-12 lg:w-[200px]' />
                    <h3 className='text-[12px] lg:text-2xl font-bold'>Davis Brown</h3>
                    <p className='text-[10px] lg:text-[14px]'>Frontend Developer</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About