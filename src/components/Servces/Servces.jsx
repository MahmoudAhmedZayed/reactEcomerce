import React from 'react'
import "./Servces.css"
import { MdDone } from "react-icons/md";
import { FaTruck } from "react-icons/fa";



function Servces() {
  return (
    <div className='Servces container my-5'>
      <div className="row g-3">
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <div className='p-4 sr-card'>
          <MdDone className='icon' />
          Quality Product
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <div className='p-4 sr-card'>
          <FaTruck className='icon' />
          Free Shipping
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <div className='p-4 sr-card'>
          <MdDone className='icon' />
          14-Day Return
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">
          <div className='p-4 sr-card'>
          <FaTruck className='icon' />
          24/7 Support
          </div>
        </div>
      </div>
      </div>
  )
}

export default Servces