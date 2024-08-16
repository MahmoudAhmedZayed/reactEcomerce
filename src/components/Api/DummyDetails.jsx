import React, { useEffect, useState } from 'react'
import "./Api.css"
import { FaShoppingCart } from "react-icons/fa";
import {useParams} from "react-router-dom"
import axios from "axios"

function DummyDetails() {
    let {id} = useParams()
    let [dummyapi , setDummyapi] = useState({})
      
    let details_url = `https://dummyjson.com/products/${id}`

    async function getDetailsApi() {
        let {data} = await axios.get(details_url)
        setDummyapi(data)
    } 
    useEffect(()=>{
        getDetailsApi()
    } , [])



  return (
    <div className='ditails container my-5'>
        <div className='row'>
            <div className=' col-lg-5 col-md-12'>
                <div className='card_images'>
                    <img src={dummyapi.thumbnail} alt="" />
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <div className='details_title'>
                    <b className=' text-center fs-4'>( {dummyapi.category} )</b>
                    <strong>product Name : <span> {dummyapi.title}</span> </strong>
                    <p>{dummyapi.description}</p>
                    <b> Price : ${dummyapi.price}.00</b>
                    <button><FaShoppingCart /> Add to cart</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DummyDetails