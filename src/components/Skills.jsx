import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png"
import ReactImg from "../assets/react.png"
import Node from "../assets/node.png"
import Next from "../assets/next.png"


const Skills = () => {
  return (
    <div name="skills" className="bg-black text-gray-300 w-full h-screen bg-gradient-to-r from-black to-gray-900">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                <p className="py-4 mt-7 mb-4 text-xl">My Repertoire:</p>
            </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
  
        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
           <img src={HTML} alt="HTML Logo" className="w-20 mx-auto"/>
           <p className="my-4">HTML</p>
        </div>
        

        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500">
           <img src={CSS} alt="CSS Logo" className="w-20 mx-auto"/>
           <p className="my-4">CSS</p>
        </div>
        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500">
           <img src={JavaScript} alt="JavaScript Logo" className="w-20 mx-auto"/>
           <p className="my-4">JavaScript</p>
        </div>
        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500">
           <img src={ReactImg} alt="React Logo" className="w-20 mx-auto"/>
           <p className="my-4">React</p>
        </div>
        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500">
           <img src={GitHub} alt="GitHub Logo" className="w-20 mx-auto"/>
           <p className="my-4">GitHub</p>
        </div>
        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500">
           <img src={Tailwind} alt="Tailwind Logo" className="w-20 mx-auto"/>
           <p className="my-4">Tailwind</p>
        </div>
        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500">
           <img src={Node} alt="Node-js Logo" className="w-20 mx-auto"/>
           <p className="my-4">Node-js</p>
        </div>
        <div className=" rounded-lg shadow-md shadow-gray-800 hover:scale-110 duration-500">
           <img src={Next} alt="Next-js Logo" className="w-20 mx-auto"/>
           <p className="my-4">Next-js</p>
        </div>
      </div>
        </div>
    </div>
  );
};
export default Skills