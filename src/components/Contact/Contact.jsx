import React from 'react'
import "./Contact.css"
import { MdMyLocation } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


function Contact() {
  return (
    <div className='Contact container my-5'>
       <div className='ditals'>
        <p className='fs-1'>Contact  <span>Us</span></p>
       </div>
        <div className='row g-3'>
          <div className=' col-lg-8 col-md-12 my-5'>
            <div className='imput p-4 '>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='Subject'/>
              <input type="text" placeholder='Message' className='masg'/>
              <button>Send Message</button>
            </div>
          </div>
          <div className=' col-lg-4 col-md-12 my-5'>
            <div className='p-4 ifrm'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13739.596256679159!2d31.520549785023444!3d30.58039466787764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f044ed84e6db%3A0xc970f35c23cfc0a3!2z2KfZhNiy2YLYp9iy2YrZgtiMINin2YTYrdix2YrYsdmK2Iwg2YLYs9mFINij2YjZhCDYp9mE2LLZgtin2LLZitmC2Iwg2YXYrdin2YHYuNipINin2YTYtNix2YLZitip!5e0!3m2!1sar!2seg!4v1722694976368!5m2!1sar!2seg" frameborder="0"></iframe>
            </div>
            <div className='p-4 ditalse mt-3'> 
              <b><MdMyLocation className='me-2 icone'/> Egypt - Sharkia - Zagazig</b>
              <p><FaRegMessage className='me-2 icone'/> bravocoading123@gmail.com</p>
              <span><FaPhoneAlt className='me-2 icone' /> +0123456789</span>
            </div>
          </div>

        </div>

      </div>
  )
}

export default Contact