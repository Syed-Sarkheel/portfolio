import React from "react"
const About = () => {
  return (
    <div name='about' className="w-full h-screen  text-gray-300 bg-gradient-to-r from-black to-gray-900">
     <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
            </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
               <div className="sm:text-right text-4xl font-bold">
                <p>
                Hello there! I'm a dedicated front-end web developer with a deep love for the fascinating world of UI/UX.
                </p>
               </div>
         <div>
         <p className="">
         With a creative mindset and a strong attention to detail, I thrive on transforming complex concepts into visually stunning and user-friendly interfaces. I believe in the power of design to elevate user experiences, and I'm constantly seeking ways to make the digital realm more intuitive and engaging. By combining my technical skills with a strong understanding of user behavior, I strive to create seamless and delightful interactions that leave a lasting impression.

         I'm well-versed in HTML, CSS, and JavaScript, and I continuously explore frameworks and libraries like React, Next.js, and Angular to elevate my skills. I understand the importance of responsive design, accessibility, and performance optimization, ensuring that my creations reach a diverse audience.
         
         </p>
         </div>

                </div>
        </div>
     </div>
  
  )
}
export default About