import { Button, IconButton, Tooltip } from '@mui/material';
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
                                return true
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
                                <Tooltip title="Linkedin">
                                    <IconButton size="small">
                                        <LinkedInIcon className="footer__icon" title="LinkedIn" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Tooltip title="Instagram">
                                    <IconButton size="small">
                                        <InstagramIcon className="footer__icon" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Tooltip title="Twitter">
                                    <IconButton size="small">
                                        <TwitterIcon className="footer__icon" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Tooltip title="Youtube">
                                    <IconButton size="small">
                                        <YouTubeIcon className="footer__icon" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Tooltip title="Facebook ">
                                    <IconButton size="small">
                                        <FacebookIcon className="footer__icon" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom clearfix" style={style}>
                <div className="copyright">
                    <div className="copyright text-center">
                        <hr />
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 ©<strong><span>Sujit Bhanderi</span></strong>. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer