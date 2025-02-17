import React from "react";

function Contact() {
  return (
    <div className="relative items-center px-20  ">

      <div className="px-[-10]">
        <div className="contact-details absolute bg-white shadow-lg mt-30 p-6 w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 ">Contact Details</h3>
          <div className="space-y-5">
            <p className="sm:text-lg opacity-70">📍 1187 Lake Forest City,<br></br> Uttarakhand, 110006, India</p>
            <p className="sm:text-lg opacity-70" >✉️ support@villacrest.in</p>
            <p className="sm:text-lg opacity-70" >📞 +91-9910014421, 9891149697</p>
          </div>

          <div className="flex space-x-4 mt-4">
            <span className="text-lg">📷</span>
            <span className="text-lg">🎥</span>
            <span className="text-lg">📘</span>
          </div>
        </div>
      </div>





      <div className="contact-container flex flex-col md:flex-row mt-6 items-center justify-center gap-10 p-20 bg-blue-100">
        <div className="w-1/2 p-10 px-30">
        </div>
        <div className=" p-6 rounded-lg w-1/2">
          <h2 className="text-xl sm:text-4xl font-bold ">Get in Touch</h2>
          <p className="mb-5 sm:text-lg font-bold text-gray-600 mt-5">Feel free to drop your message below!</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 bg-white" />
            <input type="text" placeholder="Your Mobile Number" className="w-full bg-white p-2 " />
            <input type="email" placeholder="Your Email Address" className="w-full bg-white p-2 " />
            <textarea placeholder="Enter your message here.." className="w-full bg-white p-2 "></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-1/3">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
