import React from 'react'

function PlaceBox(props) {
    const {city, number} = props;
    return (
        <>
            <div className="place__box mx-1 col-lg-4">
                <div className="box">
                    <h5 className="name">{`${city} (${number} places)`}</h5>
                </div>
            </div>
        </>
    )
}

export default PlaceBox