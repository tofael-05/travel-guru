import React from 'react';
import Banner from '../Pages/Header/Banner';
import { BsArrowRight } from 'react-icons/bs';
import Navbar from '../Pages/Header/Navbar';
import image from '../assets/images/Rectangle 1.png'


const Booking = () => {
    return (
        <main className="relative">
            <div className="w-full h-screen before:block before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[#00000099] relative">
                <img className="absolute w-full h-screen -z-10 top-0 left-0 right-0" src={image} alt="" />
            </div>
            <div className="max-w-[1240px] mx-auto absolute left-0 right-0 top-0">
                <Navbar></Navbar>
            </div>
            <div className="max-w-[1240px] mx-auto">
            <div className='flex absolute top-[70px] h-[80vh] justify-center flex-col md:w-[30%] text-white'>
                <h2 className='text-[75px] font-bold'>Cox's bazar</h2>
                <p className="my-6">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                {/* <button className='bg-[#F9A51A] justify-center flex w-[40%] h-[45px] rounded items-center gap-4 text-black font-semibold'>Booking <span><BsArrowRight/></span></button> */}

            </div>
            </div>
        </main>
    );
};

export default Booking;