import React from 'react'
import "./Home.css"
import Header from "./../Header/Header"
import Servces from '../Servces/Servces'
import Categories from "../Categories/Categories"
import Product from "../Product/Product"
import Slider2 from "../Slider2/Slider2"



function Home({addToCart ,addToharet}) {
  return (
    <div className='Home'>
        <Header/>
        <Servces/>
        <Categories/>
        <Product addToCart={addToCart} addToharet={addToharet} />
        <Slider2/>
    </div>
  )
}

export default Home