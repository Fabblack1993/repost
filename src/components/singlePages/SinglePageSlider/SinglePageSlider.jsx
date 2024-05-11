import React from 'react'
import Slider from "react-slick"
import "./SinglePageSlider.css"
import { popular } from '../../../dummyData'



const SinglePageSlider = () => {
    const settings = {
        infinite: true,
        slidesToScroll: 2,
        speed: 500,
        slidesToShow: 7,
        dots: false,
        responsive: [
            {
                breakpoint: 800,
                settings : {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                   
                },
            },
        ],
    }
  return (
    <>
    <section className="singlePopular">
       
        <Slider {... settings}>
        {popular.map((val) => {
          return (
            <div className="items">
              <div className="box">
                <div className="images">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  
                </div>
                <div className="text">
                  <h1 className="title">{val.title}</h1>
                  
                </div>
              </div>
            </div>
            
          )
        })}
        </Slider>
      </section>
     
       
       
    </>
  )
}

export default SinglePageSlider