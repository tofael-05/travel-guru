import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FiSearch } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex justify-between items-center mt-5">
            <Link to="/"><img className="w-32" src={logo} alt="" /></Link>
            <div className="relative h-[40px]">
                <FiSearch className="absolute top-[11px] left-3 text-white"></FiSearch>
                <input className="bg-[#ffffff44] max-w-[500px] w-full outline-0 text-white placeholder:text-white border border-white px-12 rounded h-full" type="text" placeholder="Search your destination" />
            </div>

            <span className="md:hidden">
                {
                    toggle ? <MdOutlineClose onClick={() => { !toggle }} /> : <FiMenu onClick={() => { !toggle }} />
                }
            </span>
            <ul className="flex gap-5 items-center text-white">
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/destination'>Destination</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <Link to='/login'>
                    <button className="px-5 py-2 bg-[#F9A51A] rounded font-semibold text-black">Login</button>
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;