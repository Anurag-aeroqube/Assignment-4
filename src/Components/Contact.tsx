import React from "react";

function Contact() {
  return (
    <div className="relative items-center px-60 py-20" >
      
      {/* Contact Form Section with Blue Background */}
      <div className="contact-container flex flex-col md:flex-row items-center justify-center gap-10 p-20 bg-[#e2eaff] relative">
        
        {/* Contact Details Box (Half Inside & Half Outside the Left Side of the Blue Box) */}
        <div className="contact-details absolute bg-white shadow-xl p-10 md:w-1/2 
                        left-[-5%] top-1/2 transform -translate-y-1/2 z-80
                         border border-gray-200 pt-8 pr-50 py-20 h-[518px] w-[530px]" >
                          <div className="">
                          <h3 className=" font-kanit text-[32px] text-[#002856] font-medium mb-4 text-left">Contact Details</h3>
          <div className=" space-y-3 text-center">
            <p className=" text-[#4b4b6d] text-left font-mulish text-[24px]  ">📍 1187 Lake Forest City,<br /> Uttarakhand, 110006, India</p>
            <p className="text-[#4b4b6d] text-left font-mulish text-[24px]">✉️ support@villacrest.in</p>
            <p className="text-[#4b4b6d] text-left font-mulish text-[24px]">📞 +91-9910014421, 9891149697</p>
          </div>

          <div className="flex justify-center space-x-4 mt-4 items-left">
            <span className="text-lg">📷</span>
            <span className="text-lg">🎥</span>
            <span className="text-lg">📘</span>
          </div>
        </div>

                          </div>
         

        <div className="w-1/2 p-10"></div>
        <div className="p-6   w-1/2 ">
          <h2 className=" font-kanit text-[#002856] text-[42px] font-medium">Get in Touch</h2>
          <p className="mb-5 sm:text-lg font-bold text-gray-600 mt-5">Feel free to drop your message below!</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border bg-[#ffffff] rounded" />
            <input type="text" placeholder="Your Mobile Number" className="w-full p-2 bg-[#ffffff]  rounded" />
            <input type="email" placeholder="Your Email Address" className="w-full p-2  bg-[#ffffff]  rounded" />
            <textarea placeholder="Enter your message here.." className="w-full p-2  bg-[#ffffff]  rounded"></textarea>
            <button type="submit" className="bg-[#6d87cb] text-white px-4 py-2 rounded-3xl hover:bg-blue-700 w-1/3">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
