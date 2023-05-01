import React from 'react';
import Slider from './Slider';

const SliderCard = ({slider}) => {
    const {img, name} = slider;
    return (
        <div>
            <img className="w-[270px] h-[420px] ml-10" src={img} alt="" />
        </div>
    );
};

export default SliderCard;