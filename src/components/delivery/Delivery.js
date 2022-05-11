import { Avatar, Button } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../css/Delivery.css';
import 'top-loader-service/TopLoaderService.css';
import TopLoaderService from 'top-loader-service';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from './Slider'
import FoodCardList from './FoodCardList';
import Category from '../Category';
import zomatoContext from '../../context/context';

function Delivery() {
    const filterContext = useContext(zomatoContext);
    const { applyFilterTime, filterByRating } = filterContext;

    useEffect(() => {
        TopLoaderService.start();
        setTimeout(() => {
            TopLoaderService.end();
        }, 3000)
    }, [])

    const [currentcategogy, setCurrentcategogy] = useState('first')
    const category1Border = useRef();
    const category2Border = useRef();

    const category2Click = () => {
        TopLoaderService.start();
        setTimeout(() => {
            if (category1Border.current.classList.contains("category__border")) {
                category1Border.current.classList.remove("category__border");
                category2Border.current.classList.add("category__border");
                setCurrentcategogy('second')
            }
            TopLoaderService.end();
        }, 3000);
    }
    const category1Click = () => {
        TopLoaderService.start();
        setTimeout(() => {
            if (category2Border.current.classList.contains("category__border")) {
                category2Border.current.classList.remove("category__border");
                category1Border.current.classList.add("category__border");
                setCurrentcategogy('first')
            }
            TopLoaderService.end();
        }, 3000);
    }
    const filter = (e) => {
        if (e.target.classList.contains("bg__red")) {
            e.target.classList.remove("bg__red");
        } else {
            e.target.classList.add("bg__red");
        }
        const filterName = e.target.getAttribute("data-name");
        if (filterName === "time") {
            applyFilterTime(filterName)
        } else {
            filterByRating()
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div ref={category1Border} className="col-lg-6 d-flex category__border cursor__pointer" onClick={category1Click}>
                                <span className="top__category" alt="" >
                                    <Avatar className="category1__avatar" alt="Remy Sharp" src="images/online.jpg" />
                                </span>
                                <h5 className="top__category__name">Delivery</h5>
                            </div>
                            <div ref={category2Border} className="col-lg-6 d-flex cursor__pointer" onClick={category2Click}>
                                <span className="top__category2" alt="" >
                                    <Avatar alt="Remy Sharp" className="category2__avatar" src="images/rastaurant.jpg" />
                                </span>
                                <h5 className="top__category__name">Dining Out</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {currentcategogy === "first" ? <div className="row">
                    <div className="col-lg-12 mt-4 mx- filter__btn ">
                        <Button className="m-3" variant="outlined">Filter</Button>
                        <Button className="m-3" data-name="time" variant="outlined" onClick={filter}>Delivery Time</Button>
                        <Button className="m-3" variant="outlined" data-name="rating" onClick={filter}>Rating</Button>
                        <Button className="m-3" variant="outlined" >Pure Veg</Button>
                        <Button className="m-3" variant="outlined">Cuisines
                            <KeyboardArrowDownIcon />
                        </Button>
                        <Button className="mx-3" variant="outlined">More filters
                            <KeyboardArrowDownIcon />
                        </Button>
                    </div>
                </div> :
                    <>
                        <div className="__category">
                            <Category sectionName="Collections Section" />
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                                <h3>Sorry, no results found</h3>
                                <h5>No restaurants deliver to your current location at this time</h5>
                            </div>
                            <div className="col-lg-2 error__msg">
                                <img src="https://b.zmtcdn.com/web/assets/f0b1bdc4cdae3c9e54964d791e83be401614320771.jpeg" className="error__image" alt="error" />
                            </div>
                        </div>
                    </>
                }
            </div>
            {currentcategogy === "first" &&
                <><div className="container-fluid mt-3">
                    <div className="container">
                        <Slider title="Inspiration for your first order" typeOfSlider="food" />
                    </div>
                </div>
                    <div className="container">
                        <Slider title="Top brands for you" typeOfSlider="brands" />
                        <FoodCardList />
                        <div className="__category">
                            <Category sectionName="Collections Section" />
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default Delivery