import React from 'react';
import Navbar from './Header/Navbar';
import image from '../assets/images/Rectangle 1.png'
import Banner from './Header/Banner';
import Login from '../Log-Res-Form/Login';

const Home = () => {
    return (
        <main className="relative">
            <div className="w-full h-screen before:block before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[#00000099] relative">
                <img className="absolute w-full h-screen -z-10 top-0 left-0 right-0" src={image} alt="" />
            </div>
            <div className="max-w-[1240px] mx-auto absolute left-0 right-0 top-0">
                <Navbar></Navbar>
            </div>
            <div className="max-w-[1240px] mx-auto">
                <Banner />
            </div>
        </main>
    );
};

export default Home;