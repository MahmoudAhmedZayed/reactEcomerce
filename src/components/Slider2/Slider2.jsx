import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import "./Slider2.css"
import imge1 from "../../assets/imge/aa.jpg"
import imge2 from "../../assets/imge/aaaa (1).jpg"
import imge3 from "../../assets/imge/aaaa (2).jpg"
import imge4 from "../../assets/imge/download.jpg"
import imge5 from "../../assets/imge/vendor-6-CmmiMxIm-CmmiMxIm.jpg"

function Slider2() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  
  var settings = {
    infinite: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='Slider2 container'>
        <Slider {...settings} className='sliding p-5'>
          <div>
            <img src={imge1} alt="" />
          </div>
          <div>
            <img src={imge2} alt="" />
          </div>
          <div>
            <img src={imge3} alt="" />
          </div>
          <div>
            <img src={imge4} alt="" />
          </div>
          <div>
            <img src={imge5} alt="" />
          </div>
        </Slider>
      </div>
  )
}

export default Slider2