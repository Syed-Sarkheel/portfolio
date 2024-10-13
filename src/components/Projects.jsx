import React from "react";
import Weather from "../assets/projects/Weather.png";
import Tictactoe from "../assets/projects/tictactoe.gif";
import Music from "../assets/projects/Music-Management.png"; 
import Calculator from "../assets/projects/calculator.gif";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen bg-black text-gray-300 bg-gradient-to-r from-black to-gray-900"> 
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
        <p className="py-4 mt-7 mb-4 text-xl">Check out my recent projects:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="weatherimg" style={{backgroundImage:`url(${Weather})`}}>
        <div className="shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider text-center ">
            Weather App
          </span>
          <div className="pt-8 text-center">
           <a href="https://todeizweather.netlify.app"> 
           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
           </a>

           <a href="https://github.com/Syed-Sarkheel/Weather"> 
           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
           </a>
           </div>
           </div>
          </div>
        </div>
        <div className="weatherimg" style={{backgroundImage:`url(${Tictactoe})`}}>
        <div className="shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider text-center ">
           Tic-Tac-Toe game
          </span>
          <div className="pt-8 text-center">
           <a href="https://syed-sarkheel.github.io/TicTacToe/"> 
           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
           </a>

           <a href="https://github.com/Syed-Sarkheel/TicTacToe"> 
           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
           </a>
           </div>
           </div>
          </div>
        </div>
        <div className="weatherimg" style={{backgroundImage:`url(${Music})`}}>
        <div className="shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider text-center ">
            Music Management
          </span>
          <div className="pt-8 text-center">
           <a href="https://github.com/Syed-Sarkheel/Philharmonic-Music-Data-Management-System"> 
           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
           </a>
           </div>
           </div>
          </div>
        </div>
        <div className="weatherimg" style={{backgroundImage:`url(${Calculator})`}}>
        <div className="shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider text-center ">
            Calculator
          </span>
          <div className="pt-8 text-center">
           <a href=""> 
           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
           </a>

           <a href=""> 
           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
           </a>
           </div>
           </div>
          </div>
        </div>
      </div>
      
      
    </div>

    </div>
  )
}
export default Projects