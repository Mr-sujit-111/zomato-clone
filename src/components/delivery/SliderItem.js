import React from 'react';
import '../../css/Slider.css';

function SliderItem(props) {
    const { image, name } = props
    return (
        <>
            <div className="col-lg-12 text-center cursor__pointer">
                <img src={image} className="slider__image" alt="" />
                <h4>{name}</h4>
            </div>
        </>
    )
}

export default SliderItem