import React from 'react';
import Slider from '../../components/Slider';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <main className='absolute top-[70px] text-white flex h-[80vh] gap-6 items-center'>
            <div className='flex justify-center flex-col md:w-[30%] '>
                <h2 className='text-[75px] font-bold'>Cox's bazar</h2>
                <p className="my-8">Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
                <button className='bg-[#F9A51A]  w-[40%] h-[45px] rounded  gap-4 text-black font-semibold'><Link className="flex justify-center items-center gap-4" to="/booking">Booking <span><BsArrowRight/></span></Link></button>

            </div>
            <Slider />
        </main>

    );
};

export default Banner;