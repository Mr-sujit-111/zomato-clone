import React, { useState } from 'react';
import '../css/Footer.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';


function Footer() {
    const [inputType, setInputType] = useState("email")

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === "email") {
            setInputType("email")
        } else {
            setInputType("mobile")
        }
    }
    return (
        <>
            <div className="col-lg-5 text-center">
                <img src="./images/app.jpg" alt="" />
            </div>
            <div className="col-lg-5 ml-3 text-center">
                <div className="col">
                    <h2 className="footer__heading">get the zomato app</h2>
                </div>
                <div className="col Footer__description">
                    <p>We will send you a link, open it on your phone to download the app</p>
                </div>
                <div className="col">
                    <FormControl>
                        <RadioGroup
                            onChange={handleChange}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel name="radio" value="email" control={<Radio />} label="E-mail" />
                            <FormControlLabel name="radio" value="mobile" control={<Radio />} label="mobile" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="col">
                    {inputType === "email" ? <input type="email" placeholder="Email" /> :
                        <input type="number" placeholder="mobile" />}
                </div>
                <div className="col mt-3">
                    <Button variant="contained" color="error">Share App Link</Button>
                </div>
            </div>
        </>
    )
}

export default Footer