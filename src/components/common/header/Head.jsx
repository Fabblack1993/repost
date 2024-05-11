import React from 'react'
import { top } from '../../../dummyData'
import Slider from "react-slick"


 const Head = () => {
    const settings = {
        className : "center",
        centerMode: false,
        infinite: true,
       slidesToScroll:1,
        
        
        autoplay:true,
        delay: 3500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 800,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                },
            },
        ],
    }
  
  return (
    <>
     
    <section className='head'>  
        <Slider {... settings}>
        {top.map((val) => {
          return (
            <div className="items">
          
                <div className="images">
                
                  <div className="img">
                    <img src={val.cover} alt="" />
                   
                  </div>
                  
                </div>
                
                </div>
          )
        })}
        </Slider>

      
    </section>
    </>
  );
};
export default Head
