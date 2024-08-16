import React, { useEffect, useState } from 'react'
import "./App.css"
import Home from "./components/Home/Home"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import About from './components/About/About'
import Shop from "./components/Shop/Shop"
import Fakeapi from './components/Api/Fakeapi'
import Dummyapi from "./components/Api/Dummyapi"
import FakeDetails from './components/Api/FakeDetails'
import DummyDetails from "./components/Api/DummyDetails"
import Cart from "./components/Cart/Cart"
import axios from "axios"
import Swal from 'sweetalert2'
import Contact from "./components/Contact/Contact"

import { BrowserRouter , Routes , Route , Outlet} from "react-router-dom"
import Haret from './components/Haret/Haret'
function App() {

// ............start api........


let fakeurl = "https://fakestoreapi.com/products"
let dummyurl = "https://dummyjson.com/products"

const [ fakeApi , setFakeApi] = useState([])
const [ dummyApi , setDummyApi] = useState([])

async function getFakeProducts(){
  
  let {data} = await axios.get(fakeurl)
  setFakeApi(data)
}
async function getDummyProducts(){
  
  let {data} = await axios.get(dummyurl)
  setDummyApi(data.products)
}

useEffect(()=>{
  getDummyProducts()
  getFakeProducts()
} , [])

// ............end api........




// ............start cart and haret........
let [ cart , setCart] = useState([])
let [haret , setHaret ] = useState([])
useEffect(()=>{
  let cehckk = localStorage.getItem("cart") 
  let cehcck = localStorage.getItem("haret") 
  if(cehckk){
    setCart( JSON.parse(localStorage.getItem("cart") ) )
  }
  if(cehcck){
    setHaret(JSON.parse(localStorage.getItem("haret") ) )
  }
} ,[])


function addToharet(pro) {
  let prorr = haret.find((item)=> item.title == pro.title )
  if( prorr ){
    Swal.fire({
      title: "This Product is Already Added",
      text: "You clicked the button!",
      icon: "info",
      showConfirmButton : false ,
      timer: 1000,
    });
  }else{
    Swal.fire({
      title: `Yor Product (<span class=' text-primary'> ${ pro.title.slice(0,10 )} </span>) Added Successfully!`,
      text: "You clicked the button!",
      icon: "success", 
      showConfirmButton : false ,
      timer: 1000,
      
    });
    setHaret([...haret , pro ])
  }
  
  
  
}

function addToCart(pro) {
  let productSelct= cart.find((item)=> item.title == pro.title)
  if( productSelct ){
    Swal.fire({
      title: "This Product is Already Added",
      text: "You clicked the button!",
      icon: "info",
      showConfirmButton : false ,
      timer: 1000,
    });
  }else{
    
    Swal.fire({
      title: `Yor Product (<span class=' text-primary'> ${ pro.title.slice(0,10 )} </span>) Added Successfully!`,
      text: "You clicked the button!",
      icon: "success", 
      showConfirmButton : false ,
      timer: 1000,
      
    });
    setCart([...cart , {...pro , amount: 1}])
  }
  
}


function deletProduct( key){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        showConfirmButton : false ,
        timer: 1000,
        
      });
      
      cart.splice( key , 1 )
      setCart([...cart])
    }
  });
  
}
function deletProducts( key){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        showConfirmButton : false ,
        timer: 1000,
        
      });
      
      haret.splice( key , 1 )
      setHaret([...haret])
    }
  });
  
}
function increase(pro){
  ++pro.amount
  setCart([...cart]) 
}
function decrease(pro){
  if( pro.amount > 1){
    --pro.amount
  }else{
    deletProduct()
  }
  setCart([...cart])     
  
}


useEffect(()=>{
  localStorage.setItem( "cart" , JSON.stringify(cart))
  localStorage.setItem( "haret" , JSON.stringify(haret))
} ,[cart , haret])
// ............end cart and haret........






// ............start dark mood........


let [dark , setDark ] = useState(false)

function darkMood (){
  setDark(!dark)
}

// ............end dark mood........



return (
  <div className={ dark ? "dark BODY" : "BODY"}>

    <BrowserRouter>
        <Navbar cart={cart} haret={haret} darkMood={darkMood}/>
              <Routes>
                <Route path='' element={<Home addToCart={addToCart} addToharet={addToharet}/>} />
                <Route path='about' element={<About/>} />
                <Route path='shop' element={<Shop addToCart={addToCart} addToharet={addToharet} />} />
                <Route path='fakeapi' element={<Outlet/>}>
                <Route path='' element={<Fakeapi fakeApi={fakeApi} getFakeProducts={getFakeProducts  } addToCart={addToCart} addToharet={addToharet}  />}/>
                <Route path='products/:id' element={<FakeDetails/>}/>
                </Route>
                <Route path='dummyapi' element={<Outlet/>}>
              
                  <Route path='' element={<Dummyapi dummyApi={dummyApi} getDummyProducts={getDummyProducts} addToCart={addToCart} addToharet={addToharet} />} />
                  <Route path='dummydetails/:id' element={<DummyDetails/>} />
                </Route>
                <Route path='contact' element={<Contact/>} />
                <Route path='cart' element={ <Cart cart={cart} deletProduct={deletProduct} 
                 increase={increase}  decrease={decrease} />}/>
                 <Route path='haret' element={<Haret haret={haret} addToCart={addToCart} deletProducts={deletProducts} />} />
              </Routes>
        <Footer/>
    </BrowserRouter>



    </div>
  )
}

export default App