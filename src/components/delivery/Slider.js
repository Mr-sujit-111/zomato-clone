import React from 'react'
import SliderItem from './SliderItem';
import Carousel from "react-elastic-carousel";
import '../../css/Slider.css';

function Slider(props) {
    const { title, typeOfSlider } = props
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3, itemsToScroll: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 }
    ];

    const firstSlider = [
        {
            name: "Ice-cream",
            image: "category1.jpg"
        },
        {
            name: "Pizza",
            image: "category4.jpg"
        },
        {
            name: "Burger",
            image: "category2.jpg"
        },
        {
            name: "sandwich",
            image: "category3.jpg"
        },
        {
            name: "snake",
            image: "category1.jpg"
        },
        {
            name: "chaat",
            image: "category3.jpg"
        },
        {
            name: "samosa",
            image: "category4.jpg"
        },
    ]
    const secondSlider = [
        {
            name: "La Pino'z PizzaIce-cream",
            image: "category4.jpg"
        },
        {
            name: "McDonald's",
            image: "category3.jpg"
        },
        {
            name: "Radhe Dhokla",
            image: "category2.jpg"
        },
        {
            name: "Bismillah",
            image: "category1.jpg"
        },
        {
            name: "Domino's Pizza",
            image: "category4.jpg"
        },
        {
            name: "Kailash Sweets & Snacks",
            image: "category3.jpg"
        },
        {
            name: "Mahesh Pav Bhaji",
            image: "category1.jpg"
        },
    ]
    return (
        <>
            <div className="slider__component">
                <h3 className="slider__title">{title}</h3>
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {typeOfSlider === "food" ?
                        firstSlider.map((item, index) => {
                            return <SliderItem name={item.name} image={`./images/${item.image}`} />
                        }) :
                        secondSlider.map((item, index) => {
                            return <SliderItem name={item.name} image={`./images/${item.image}`} />
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Slider