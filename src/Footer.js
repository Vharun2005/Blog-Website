import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-dark w-100 p-1 mt-3 text-center'>
        <h4 className='pt-3 pb-3 ps-2'><span className='text-white'> <i className="bi bi-amd"></i> Code-Blogs</span></h4>
        <div>
            <span className='text-white fs-5 '><IoLogoFacebook className='fs-4 cursor'/><FaTwitter  className='ms-3 cursor fs-4'/><FaWhatsapp  className='ps-2 ms-3 cursor fs-3'/></span>
            <p className='text-white mt-3 mb-1'>codeblogs@gmail.com</p>

        </div>


    </section>
  )
}

export default Footer