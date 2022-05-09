import { Button } from '@mui/material';
import React, { useState } from 'react';
import '../css/Footer.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CountryIcon from './CountryIcon';
import { Country } from 'country-state-city';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    const [countryList, setCountryList] = useState(false)
    const [country, setCountry] = useState("India")
    const countryData = Country.getAllCountries();

    const handleClick = () => {
        console.log("clicked");
        setCountryList(!countryList);
    }

    const style = {
        paddingTop: "30px",
        paddingBottom: "30px",
    }

    return (
        <>
            <div className="row">
                <div style={{ position: "relative" }}>
                    <div className="country__options" style={{ visibility: countryList ? "visible" : "hidden" }}>
                        <div className="row flag__list" >
                            {countryData.map((item, index) => {
                                const handleIconClick = (e) => {
                                    const updatedcountry = e.target.parentElement.getAttribute("data-iconname");
                                    setCountry(updatedcountry)
                                    setCountryList(false);
                                }
                                if (item.name.length < 7) {
                                    return <CountryIcon key={index} handleIconClick={handleIconClick} name={item.name} countryCode={item.isoCode} />
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 zomato__text">
                        Zomato
                    </div>
                    <div className="col-lg-6 d-flex flex-row-reverse  zomato__text">
                        <Button variant="outlined" color="inherit" onClick={handleClick} startIcon={<AddBoxIcon />}>
                            {country}
                        </Button>
                    </div>
                </div>
                <div className="row mt-5 footer__Links">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="cursor__pointer">About Zomato</h5>
                        <span className="cursor__pointer">Who are we</span><br />
                        <span className="cursor__pointer">Blog</span><br />
                        <span className="cursor__pointer">Work With Us</span><br />
                        <span className="cursor__pointer">Investor Relations</span><br />
                        <span className="cursor__pointer">Report Fraud</span><br />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="cursor__pointer">Zomaverse</h5>
                        <span className="cursor__pointer">Zomato</span><br />
                        <span className="cursor__pointer">Feeding India</span><br />
                        <span className="cursor__pointer">Hyperpure</span><br />
                        <span className="cursor__pointer">Zomaland</span><br />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="cursor__pointer"> FOR RESTAURANTS</h5>
                        <span className="cursor__pointer">Partner With Us</span><br />
                        <span className="cursor__pointer">Apps For You</span><br /><br />
                        <h5 className="cursor__pointer">FOR ENTERPRISES</h5>
                        <span className="cursor__pointer">Zomato For Work</span><br />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="cursor__pointer">Social Links</h5>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <LinkedInIcon className="footer__icon" title="LinkedIn" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <InstagramIcon />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <TwitterIcon />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <YouTubeIcon />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <FacebookIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom clearfix" style={style}>
                <div className="copyright">
                    <div className="copyright text-center">
                        © Copyright <strong><span>Sujit Bhanderi</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer