import React, { useEffect, useState } from 'react'
import './trend.css'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import {Autoplay} from 'swiper/modules'
import TrendCard from '../components/TrendCard'

function Trend() {
const [slides,setSlides] = useState([]);

const fetchData = ()=>{
    fetch('http://localhost:3000/data/movieData.json').then(res=>res.json()).then(data=>setSlides(data))
    .catch(e=>console.log(e.message));
  };

  useEffect(()=>{fetchData()},[])

  return (
    <section id="trend" className='trend'>
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Cooming Soon</h4>
            </div>
            <div className="row">
                <Swiper>
                    
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Trend