import React from 'react'
import "./Header.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";


function Header() {
  var settings = {
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
  };



  return (
    <div className='Header container my-5'>
      <div className='row g-3'>
        <div className=' col-lg-8 col-md-12'> 
          <Slider {...settings} className='sliding'>
            <div className='men'>
              <div>
                <b>Men Fashon</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos autem rem placeat adipisci animi fugit ipsum vitae illo repudiandae veritatis minus libero vel, totam quidem! Voluptatem, eveniet ipsam! Dolorum?</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className='women'>
              <div>
                <b>Men Fashon</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos autem rem placeat adipisci animi fugit ipsum vitae illo repudiandae veritatis minus libero vel, totam quidem! Voluptatem, eveniet ipsam! Dolorum?</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className='kids'>
              <div>
                <b>Men Fashon</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos autem rem placeat adipisci animi fugit ipsum vitae illo repudiandae veritatis minus libero vel, totam quidem! Voluptatem, eveniet ipsam! Dolorum?</p>
                <button>Shop Now</button>
              </div>
            </div>

          </Slider>
        </div>

        <div className=' col-lg-4 col-md-12'>
            <div className='detals'>
              <div className='card1'>
                <span>Save 20%</span> 
                <p>Secial offer</p>
                <button className='bbtnn'> Click here </button>
              </div>
              <div className='card2'>
                <span>Save 20%</span> 
                <p>Secial offer</p>
                <button className='bbtnn'> Click here </button>
              </div>
            </div>
        </div>
      </div>
      
      </div>
  )
}  

export default Header