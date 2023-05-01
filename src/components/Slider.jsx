import React from 'react';
import img1 from "../../src/assets/images/Sajek.png"
import img2 from "../../src/assets/images/sundorbon.png"
import img3 from "../../src/assets/images/Sreemongol.png"
import SliderCard from './SliderCard';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const Slider = () => {
    const sliderData = [
        {
            img: img1,
            name: "Sajek.png"
        },
        {
            img: img2,
            name: "sundorbon.png"
        },
        {
            img: img3,
            name: "Sreemongol.png"
        }
    ]
    return (
        <section>
            <div className="flex">
            {
              sliderData.map((slider, i) => <SliderCard key={i} slider={slider}></SliderCard>) 
            }
        </div>
        <div className='flex gap-3 cursor-pointer text-3xl mt-8 ml-10'>
                <BiLeftArrow></BiLeftArrow>
                <BiRightArrow></BiRightArrow>
               
            </div>
        </section>
        
    );
};

export default Slider;