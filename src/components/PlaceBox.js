import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function PlaceBox(props) {
    const { city, number } = props;
    return (
        <>
            <div className="place__box mx-1 col-lg-4">
                <div className="box">
                    <h5 className="name">{`${city} (${number} places)`} <ChevronRightIcon className="flex-row-reverse" /></h5>

                </div>
            </div>
        </>
    )
}

export default PlaceBox