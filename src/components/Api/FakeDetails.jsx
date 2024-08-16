import React, { useEffect, useState } from 'react'
import "./Api.css"
import { FaShoppingCart } from "react-icons/fa";
import {useParams} from "react-router-dom"
import axios from "axios"
 
function FakeDetails() {
    let {id} = useParams()
    let [fakeapi , setFakeapi] = useState({})
      
    let details_url = `https://fakestoreapi.com/products/${id}`

    async function getDetailsApi() {
        let {data} = await axios.get(details_url)
        setFakeapi(data)
    } 
    useEffect(()=>{
        getDetailsApi()
    } , [])

  return (
    <div className='ditails container my-5'>
        <div className='row'>
            <div className=' col-lg-5 col-md-12'>
                <div className='card_images'>
                    <img src={fakeapi.image} alt="" />
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <div className='details_title'>
                    <b className=' text-center fs-4'>( {fakeapi.category} )</b>
                    <strong>product Name : <span> {fakeapi.title}</span> </strong>
                    <p>{fakeapi.description}</p>
                    <b> Price : ${fakeapi.price}.00</b>
                    <button><FaShoppingCart /> Add to cart</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FakeDetails