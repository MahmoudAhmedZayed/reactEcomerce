import React from 'react'
import "./Product.css"
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import product_api from './Products';




function Product({addToCart , addToharet}) {
  return (
    <div className='Product container my-5'>
      <p className='h1 toop_name text-center'>PRODUCTS</p>
      <div className="row g-3">
        {product_api.map((val , key)=>{
          return(
            <div className='col-lg-3 col-md-6 col-sm-12' key={key}>
            <div className='product_1'>
                <div className='card_img'>
                  <img src={val.img} alt="" />
                </div>
                <div className='card_body'>
                  <b className='fs-5'>{val.title}</b>
                  <p>${val.price}<del>${val.sale}</del></p>
                  <div className='stars'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  </div>
                  <div className="proccess">
                    <div className='icone' onClick={()=>{addToharet(val)}}>
                    <FaHeart  />
                    </div>
                    <div className='icone' onClick={ ()=>{ addToCart(val) } }>
                    <FaShoppingCart  />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          )
        })}
       
      </div>
      </div>
  )
}

export default Product