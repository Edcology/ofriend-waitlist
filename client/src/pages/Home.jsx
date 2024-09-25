import girlimg from '../assets/girlimg.png'
import whatsapp from '../assets/whatsapp.png'
import community from '../assets/community.svg'
import training from '../assets/training.png'
import book from '../assets/book.svg'


const Home = () => {
  return (
    <>
      <div className='bg-hero-img flex flex-col sm:flex-row sm:justify-between sm:px-8 py-6 sm:py-0 sm:h-[550px]'>
        <div className='px-6 lg:px-12 sm:px-0 md:px-10 lg:py-8 lg:w-[660px] grid sm:self-center gap-4 sm:gap-6'>
            <h1 className='text-4xl lg:text-6xl md:text-5xl font-bold text-blue'>Why go solo when learning is better together ?</h1>
            <p className='font-blue mb-4'>Connecting with like-minded nerds has never been easier.Say hello to a new era of social studying.</p>
            <div>
                  <a href="#footer"><input type="submit" value="Join waitlist!" className='bg-blue text-white ms-1 p-2 rounded-xl' /></a>
            </div>
        </div>
        <div className='px-12 lg:px-12 sm:px-0 mx-12 lg:mx-12 sm:mx-0 grid'>
            <img src={girlimg} alt="" className='h-[250px] lg:h-[500px] sm:h-[440px] md:h-[480px]' />
            <img src={whatsapp} alt="" className='fixed bottom-6 right-4 sm:bottom-12 sm:w-[120px] w-[90px]' />
        </div>
    </div>
    <h2 className='font-bold text-center text-3xl text-blue mt-10 sm:text-4xl'>Why choose us ?</h2>
    <div className="container overflow-x-auto mx-auto p-6 sm:px-12">
    <div className='flex space-x-6 sm:space-x-12 md:space-x-8'>
      <div className='min-w-[250px] max-h-[280px] sm:max-h-[320px] rounded-lg shadow-sm shadow-black text-blue relative p-6 z-10 border border-blue mt-[30px]' >
        <img src={book} alt="" className='absolute -top-8 bg-white right-[80px] sm:right-[150px] sm:w-[63px] w-[70px] p-4 border border-blue rounded-full' />
        <h2 className='text-center font-bold text-2xl mt-4'>E-library</h2>
        <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      <div className='min-w-[250px] max-h-[280px] rounded-lg shadow-sm shadow-black text-blue relative p-6 z-10 border border-blue mt-[30px]'>
        <img src={community} alt="" className='absolute -top-9 bg-white right-[80px] sm:right-[150px] sm:w-[63px] w-[70px] p-4 border border-blue rounded-full' />
        <h2 className='text-center font-bold text-2xl mt-4'>Community</h2>
        <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      <div className='min-w-[250px] max-h-[280px] rounded-lg shadow-sm shadow-black text-blue relative p-6 z-10 border border-blue mt-[30px]'>
        <img src={training} alt="" className='absolute -top-9 bg-white right-[80px] sm:right-[150px] sm:w-[63px] w-[70px] p-4 border border-blue rounded-full' />
        <h2 className='text-center font-bold text-2xl mt-4'>Training</h2>
        <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home