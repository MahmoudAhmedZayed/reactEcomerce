import React from 'react'
import "./Cart.css"

function Cart({cart , deletProduct , increase , decrease}) {
  let totalll = 0
  return (
    <div className='Cart container my-5'>
       <div className="row g-3">

        { cart.length > 0 ?
        <>

        {cart.map((val , kay)=>{
           return(
            <div className="col-lg-12" key={kay}>
               <span style={{display:'none'}}>{totalll += val.price * val.amount}</span>
              <div className='one'>
                <b className='h5'>{val.title.slice(0 , 10 )}</b>
                <img src={val.img || val.image || val.thumbnail} alt="" />
                <div>
                  <p>{val.price}</p>
                  <b> ${(val.price * val.amount).toFixed(2)} </b>
                </div>
                <div className="">
                  <button onClick={()=>{increase(val)}}>+</button>
                  <span> {val.amount} </span>
                  <button onClick={()=>{decrease(val)}}>-</button>
                </div>
                <button className='btn btn-danger' onClick={()=>{ deletProduct(kay) }}>Remove From Cart</button>
              </div>
            </div>

           )


        })}


        <div className="col lg-8 mx-auto">
          <div className='totall p-3 rounded-3 sticky-bottom'>
            <b> Totall Price : </b>
            <b> ${totalll.toFixed(2)}</b>


          </div>
        </div>
        </>
        :
          <div className=' text-center text-danger h1 p-5'> Threre Is NO Product Here  </div>

        }
       </div>
      </div>
  )
}

export default Cart