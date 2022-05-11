import React, { useContext, useEffect, useState } from 'react';
import Foodcard from './Foodcard';
import '../../css/FoodCard.css';
import TopLoaderService from 'top-loader-service';
import zomatoContext from '../../context/context';


function FoodCardList() {
    const ZomatoCardData = useContext(zomatoContext)
    const { foodCardData } = ZomatoCardData
    const [datasets, setDatasets] = useState([])

    useEffect(() => {
        TopLoaderService.start();
        setDatasets(foodCardData)
        TopLoaderService.end();
    }, [foodCardData]);

    const images = ["category1.jpg", "category2.jpg", "category3.jpg", "category4.jpg",]
    return (
        <>
            <div className="row">
                <div className="col-lg-12"><h3 className="foodCardList">Best Food In Surat</h3></div>
                {datasets.length > 0 ?
                    datasets.map((item, index) => {
                        return <Foodcard key={index} offertitlepr={item.offertitle} offer_pr={item.offerpr} offer_rs={item.offerrs} time={item.time} rastaurant_name={item.RastaurantName} category={item.category} ratting={item.rating} price={item.price} image={images[Math.floor(Math.random() * images.length)]} />
                    }) : "Processing..."
                }
            </div>
        </>
    )
}

export default FoodCardList