import React from 'react'
import "./Api.css"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Fakeapi({fakeApi , getFakeProducts , addToCart , addToharet }) {
  return (
    <div className='api container my-5'>
        <h2 className='cop_title text-center mb-4 fs-1'>Fake Products</h2>
        <p className=' text-center mx-auto mb-4 opacity-50 bb'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>
        <div className="row g-3">

        {fakeApi.map(( val , kay)=>{
          return(

            <div className='col-lg-3 col-md-6 col-sm-12' key={kay}>
            <div className='product_1'>
                <Link to={`products/${val.id}`} className='card_img'>
                  <img src={val.image} alt="" />
                </Link>
                <div className='card_body'>
                  <b className='fs-5'>{val.title.slice(0 , 10)}</b>
                  <div className="proccess">
                    <div className='icone' onClick={()=>{addToharet(val)}}>
                    <FaHeart  />
                    </div>
                    <div className='icone' onClick={ ()=>{addToCart(val)}}>
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

export default Fakeapi