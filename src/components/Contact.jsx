import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen text-white bg-gradient-to-r from-black to-gray-900 flex justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/d4ce1983-6df5-4b94-b95f-e15fe5ca0c08" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Contact Me</p>

                <p className="py-4 mt-7 mb-4 text-xl">Submit the form below or mail me at - syedsarkheelbaseer@gmail.com</p>
            </div>
            <input className="my-4 p-2 bg-[#ccd6f6] text-black font-semibold" type="text" placeholder="Name" name="name"/>

            <input className="my-4 p-2 bg-[#ccd6f6] text-black font-semibold" type="email" placeholder="Email" name="email"/>

            <textarea className="my-4 p-2 bg-[#ccd6f6] text-black font-semibold" type="text" rows="6" placeholder="Message" name="message"/>
            <button className="text-white bg-transparent border border-white rounded-lg px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600" >Let's Collaborate</button>

        </form>
        </div>
  )
}
export default Contact