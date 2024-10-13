import React from "react"
import {AiOutlineRight} from "react-icons/ai"
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black text-white bg-gradient-to-r from-black to-gray-900">
    {/* Container */}
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-xl">Hey, im</p>

        <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6]">Syed Sarkheel Baseer</h1>
        <h2 className="text-4xl sm:text-6xl font bold text-[#8892b0]">& I'm a Front End Web Developer</h2>

        <p className="font bold text-[#8892b0] py-4 max-w-[650px]">I am a skilled front-end web developer with a deep interest in UI/UX. Through my expertise in HTML, CSS, and JavaScript, I bring together aesthetics and functionality to create intuitive and visually appealing user interfaces that enhance the overall user experience</p>
        <div>
        <button className=" group border-pink-500 hover:bg-pink-600 text-white border-2 px-6 py-3 my-2 flex items-center bg-transparent rounded-lg">View Work
        <span className="group-hover:rotate-90 duration-300">
            <AiOutlineRight className="ml-3 m-2"/> 
            </span>
            </button>
            </div>
    </div>
    </div>
  )
}
export default Home