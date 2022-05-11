import React, { useEffect, useState } from 'react';
import '../css/Header.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AllCities from './Data';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import RestaurantData from '../Rastaurant';
import SearchRastaurantItem from './SearchRastaurantItem';

function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [cities, setCities] = useState([]);
    const [rastaurant, setRastaurant] = useState([]);
    const [inputrestaurant, setInputrestaurant] = useState('')
    const [scrollbar, setscrollbar] = useState(false);

    // for the set cities on changing input data //
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        let filterCities = [];
        AllCities.map((item) => {
            if (item.toLowerCase().includes(searchValue)) {
                filterCities.push(item);
            } else {
                setscrollbar(false);
            }
            return true
        })
        setCities(filterCities);
    }

    const rastaurantFieldChange = (e) => {
        setInputrestaurant(e.target.value);
        let filterRastaurant = [];
        RestaurantData.map((item) => {
            if (item.rastaurantname.toLowerCase().includes(inputrestaurant)) {
                filterRastaurant.push(item);
            } else {
                setscrollbar(false);
            }
            return true
        })
        setRastaurant(filterRastaurant);
    }
    // for set scrollbar in option field //
    useEffect(() => {
        const optionCity = document.getElementById('optionCity');
        const numberOfCity = optionCity.children.length;
        if (numberOfCity >= 5) {
            setscrollbar(true)
        }

        const optionRestro = document.getElementById("optionRastaurant");
        const numberOfRastro = optionRestro.children.length;
        if (numberOfRastro >= 5) {
            setscrollbar(true)
        }

    }, [cities, rastaurant]);

    // for find length of city in option field //
    const setUpdatedCity = (e) => {
        var updatedCity = e.target.getAttribute("data-city");
        setSearchValue(updatedCity);
        setCities([])
    }

    const setUpdatedRastaurant = (e) => {
        const parentWithClass = e.target.closest('.rastaurant__card');
        var updatedrastaurant = parentWithClass.getAttribute("data-name");
        setInputrestaurant(updatedrastaurant);
        setRastaurant([]);
    }


    return (
        <>
            <div id="header" className="container header">
                <div className="col">
                    <p className="__Zomato_txt">Zomato</p>
                </div>
                <div className="col">
                    <p className="__Zomato__describe_txt mx-2">Discover the best food & drinks in Surat</p>
                </div>
                <div className="row text-center mx-5">
                    <div className='header__serchbar col-lg-6 col-md-12 col-sm-12 '>
                        <div className="location_icon mx-3">
                            <LocationOnIcon color='error' />
                        </div>
                        <div className="location__select">
                            <input type="text" placeholder="Surat" onChange={handleChange} value={searchValue} />
                        </div>
                        <div className={scrollbar ? "optionCity_field text__scrollBar" : "optionCity_field"} id="optionCity" style={{ visibility: cities.length === 0 ? "hidden" : "visible" }}>
                            {cities.map((item) => {
                                return <><p onClick={setUpdatedCity} data-city={item}> {item} </p></>
                            })}
                        </div>
                        {cities.length === 0 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                        <span className="pipe">|</span>
                        <div className="searchIcon mx-2">
                            <SearchSharpIcon />
                        </div>
                        <div className="restaurant__input">
                            <input type="text" placeholder="Select restaurant" onChange={rastaurantFieldChange} value={inputrestaurant} />
                        </div>
                        <div className={scrollbar ? "optionRastaurant__field text__scrollBar" : "optionRastaurant__field"} style={{ visibility: rastaurant.length === 0 ? "hidden" : "visible" }} id="optionRastaurant">
                            {
                                rastaurant.map((item) => {
                                    const { id, image, address, rastaurantname } = item;
                                    return <>
                                        <div className="rastaurant__card" onClick={setUpdatedRastaurant} data-name={rastaurantname}>
                                            <SearchRastaurantItem key={id} image={image} address={address} rastaurantname={rastaurantname} >
                                            </SearchRastaurantItem>
                                            <hr />
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header