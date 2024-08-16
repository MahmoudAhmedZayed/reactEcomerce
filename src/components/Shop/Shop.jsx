import React from 'react'
import "./Shop.css"
import Product from "../Product/Product"

function Shop({addToCart ,addToharet}) {
  return (
    <div className='Shop'>
      <Product addToCart={addToCart} addToharet={addToharet} />
      
      </div>
  )
}

export default Shop