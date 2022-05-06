import React from 'react';
import '../css/populer.css';
import PlaceBox from './PlaceBox';

function PopulerLocation() {
    return (
        <>
            <div className="row text-center">
                <h2 className="col">Popular localities in and around Surat</h2>
            </div>
            <div className="row text-center">
                <PlaceBox city="Vesu" number="12" />
                <PlaceBox city="Piplod" number="18" />
                <PlaceBox city="AdajanGam" number="20" />
                <PlaceBox city="Nanpura" number="22" />
                <PlaceBox city="CityLight" number="26" />
                <PlaceBox city="Dummas" number="8" />
                <PlaceBox city="KatarGam" number="30" />
                <PlaceBox city="Hirabag" number="14" />
                <PlaceBox city="MotaVarachha" number="16" />
            </div>
        </>
    )
}

export default PopulerLocation