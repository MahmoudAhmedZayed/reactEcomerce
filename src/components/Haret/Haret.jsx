import React from 'react'
import "./Haret.css"
import { FaXmark } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function Haret({haret ,addToCart ,deletProducts}) {

  return (
    <div className='api container my-5'>
    <div className="row g-3">

      {haret.length > 0 ?
      <>
      {haret.map((val , key )=>{
        return(
        <div className='col-lg-3 col-md-6 col-sm-12' key={key}>
        <div className='product_1'>
            <div className='card_img'>
              <img src={val.img || val.image || val.thumbnail} alt="" />
            </div>
            <div className='card_body'>
              <b className='fs-5'>{val.title.slice(0 ,10)}</b>
              <div className="proccess">
                <div className='icone bg-danger' onClick={()=>{deletProducts(key)}}>
                <FaXmark />
                </div>
                <div className='icone' onClick={()=>{addToCart(val)}}>
                <FaShoppingCart />
                </div>
              </div>
            </div>
        </div>
      </div>
          
        )
      })}
      </>:
              <div className=' text-center text-danger h1 p-5'> Threre Is NO Product Here  </div>


    }
   
   
  </div>
</div>
  )
}

export default Haret