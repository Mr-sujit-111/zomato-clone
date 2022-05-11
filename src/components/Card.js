import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css';

function Card(props) {
    const { categoryName, image } = props;
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-12">
                <Link to={"/delivery"}>
                    <div className="card card category__card">
                        <img className="card-img-top category__image" src={`./images/${image}`} alt="Category" />
                        <div className="card-body">
                            <center className="card-text category__text">{categoryName}</center>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card