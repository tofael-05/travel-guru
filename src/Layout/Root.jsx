import React from 'react';
import Header from '../Pages/Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
           <Outlet/>
        </div>
    );
};

export default Root;