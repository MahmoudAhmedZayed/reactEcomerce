import React from 'react'
import "./Categories.css"
import img_1 from "../../assets/imge/cat-1-Dff_xs0d (1)-Dff_xs0d.jpg"
import img_2 from "../../assets/imge/cat-2-DuslB7R8-DuslB7R8.jpg"
import img_3 from "../../assets/imge/cat-3-CeSXsjz--CeSXsjz-.jpg"
import img_4 from "../../assets/imge/cat-4-Df4eiVwg (1)-Df4eiVwg.jpg"

function Categories() {
  return (
    <div className='Categories container my-5'>
      <h1 className='text-center top_name'>CATEGORIES</h1>
      <div className="row g-3">
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_1} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_2} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_3} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_4} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_4} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_3} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_2} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_1} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_2} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_3} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_4} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12">       
          <div className='cat p-3'>
              <img src={img_1} alt="" />
              <div className=' text-center'>
                   <b className=' fs-6'>Category Name</b>
                   <p>100 Products</p>
              </div>
          </div>
        </div>

      </div>
      </div>
  )
}

export default Categories