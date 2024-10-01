import { NavLink } from "react-router-dom"
import ofriend from '../assets/ofriend.png'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/cancel.svg'
import { useState } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false) //State to toggle mobile menu   
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav className="flex py-3 lg:px-12 md:px-10 justify-between sm:justify-normal shadow-xl sticky top-0 bg-white z-20">
        <img src={ofriend} alt="Ofriend logo" className='mr-6 sm:px-8 px-6' />
        <button onClick={toggleMenu} className="sm:hidden pr-6">
          <img src={isOpen ? close : hamburger} alt="" className="w-6"/>
        </button>
        <div className='hidden sm:flex mx-24 px-22 sm:mx-0 md:mx-24'>
          <NavLink to="/" className={({isActive}) => `mr-6 lg:ml-[150px] ${isActive ? 'text-lightblue' : 'text-black'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `mx-5 ${isActive ? 'text-lightblue' : 'text-black'}`}>About us</NavLink>
          <NavLink to="/bootcamp" className={({isActive}) => `mx-5 ${isActive ? 'text-lightblue' : 'text-black'}`}>Bootcamp</NavLink>
        </div>
        <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} flex flex-col space-y-2 mt-4 absolute w-screen text-left right-0 bg-white top-9 p-6`}>
          <NavLink to="/" className={({isActive}) => `${isActive ? 'text-lightblue' : 'text-black'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-lightblue' : 'text-black'}`}>About us</NavLink>
          <NavLink to="/bootcamp" className={({isActive}) => `${isActive ? 'text-lightblue' : 'text-black'}`}>Bootcamp</NavLink>
        </div>
      </nav>
  )
}

export default Header