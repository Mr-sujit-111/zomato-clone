import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function CollectionCard(props) {
    const { image, heading, numberOfPlaces } = props;
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card card category__card">
                    <img className="card-img-top category__image" src={`./images/${image}`} alt="Category" />
                    <div className="text-block">
                        <h4>{heading}</h4>
                        <p className="collection__number">{numberOfPlaces}<ArrowRightIcon /></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionCard