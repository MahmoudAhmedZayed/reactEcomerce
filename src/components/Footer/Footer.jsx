import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import imeg from "../../assets/imge/download.png"

function Footer() {
  return (
    <div className='Footer mt-5 p-3'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12 alll'>
          <div className='titel pt-5 '>
            <b className='h4'>Get In Touch</b>
            <p className=' pt-5 text-center'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 alll'>
          <div className='titel pt-5'>
            <b className='h4'>QUICK SHOP</b>
            <div className='detals pt-5 text-center'>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Shop</a>
              <a href="#">Contact</a>
              <a href="#">Cart</a>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 alll'>
          <div className='titel pt-5'>
            <b className='h4'>Shop Media</b>
            <div className='detals pt-5 text-center'>
              <FaFacebook  className='icon'/>
              <FaTwitter  className='icon'/>
              <FaInstagram  className='icon'/>
              <FaLinkedin  className='icon'/>
              <FaGithub className='icon' />
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 alll'>
          <div className='titel pt-5 '>
            <b className='h4'>Get In Touch</b>
            <p className=' pt-5 text-center  captal'>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <div className='inapot pt-4 btn-group'>
              <input type="text" placeholder='Your email adress'/>
              <button className=''>button</button>
            </div>
          </div>
        </div>
        <div className='hr'>
        <hr />
        </div>
          <div className=' d-flex align-items-center justify-content-between hhhh p-3 text-white px-5'>
            <p>@ copywrite By Bravo Team , All Right Reserved</p>
            <img src={imeg} alt="" />
          </div>

        
        

      </div>
      </div>
  )
}

export default Footer