import React,{useState} from "react"
import {FaBars,FaTimes,FaGithub,FaLinkedin} from "react-icons/fa"
import logo1 from "../assets/logo1.png"
import { HiOutlineMail } from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {Link} from 'react-scroll'; 


const NavBar = () => {
  const [nav,setNav]=useState(false);
  const handleClick=()=>{
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-0 text-white bg-gradient-to-r from-black to-gray-900 ">
        <div> <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        <img src={logo1} alt="Logo" style={{width:'80px'}}/>
        </Link>
        </div>

        {/* MENU */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} className="hover:text-pink-600">
          Home
        </Link></li>
        <li><Link to="about" smooth={true} duration={500}  className="hover:text-pink-600">
          About
        </Link></li>
        <li><Link to="skills" smooth={true} duration={500}  className="hover:text-pink-600">
          Skills
        </Link></li>
        <li><Link to="projects" smooth={true} duration={500}  className="hover:text-pink-600">
          Projects
        </Link></li>
        <li><Link to="contact" smooth={true} duration={500}  className="hover:text-pink-600">
          Contact Me
        </Link></li>
      </ul>

    {/* Small Screen side-button */}
    <div onClick={handleClick} className="md:hidden z-10 w-10">
       {!nav ?  <FaBars/> : <FaTimes/>}
    </div>

    {/* Mobile MENU */}
    <ul className={!nav? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link  onClick={handleClick}  to="home" smooth={true} duration={500}  className="hover:text-pink-600">
          Home
        </Link></li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}  className="hover:text-pink-600">
          About
        </Link></li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}  className="hover:text-pink-600">
          Skills
        </Link></li>
        <li className="py-6 text-4xl">
          <Link  onClick={handleClick} to="projects" smooth={true} duration={500}  className="hover:text-pink-600">
          Projects
        </Link></li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to="contact" smooth={true} duration={500}  className="hover:text-pink-600">
          Contact Me
        </Link></li>
    </ul>

    {/* Socials */}
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/syed-sarkheel-baseer-84745b208">
              Linkedin<FaLinkedin size={30}/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/Syed-Sarkheel">
              GitHub<FaGithub size={30}/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
              E-Mail<HiOutlineMail size={30}/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-400">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
              Resume<BsFillPersonLinesFill size={30}/>
            </a>
          </li>
          
        </ul>
    </div>

    </div>
  )
}
export default NavBar