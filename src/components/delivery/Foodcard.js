import React from 'react';

function Foodcard(props) {
    const { offertitlepr, offer_pr, offer_rs, time, rastaurant_name, category, ratting, price, image } = props
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                <div className="cards-container cursor__pointer">
                    <div className="card">
                        <div className="card-media" style={{ backgroundImage: `url(./images/${image})` }}>
                            <div className="pro-discount">pro Upto {offertitlepr} % off</div>
                            <div className="discount">{offer_pr}% OFF<p>Up to &#x20b9;{offer_rs} </p></div>
                            <div className="delivery-time">{time}mins</div>
                            <div className="bookmark"></div>
                        </div>
                        <div className="card-description">
                            <div className="about-place">
                                <div className="place">
                                    <p className="place-name">{rastaurant_name}</p>
                                    <p className="place-speciality">{category}</p>
                                </div>
                                <div className="place-review">
                                    <p className="rating">{ratting} &#x2605;</p>
                                    <p className="per-person"> &#x20b9; {price} per one</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foodcard