import React, { useState } from 'react';
import '../css/Footer.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';

import PhoneInput from 'react-phone-number-input';


function Footer() {
    const [inputType, setInputType] = useState("email")
    const [value, setValue] = useState('')

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
                            <FormControlLabel name="radio" value="mobile" control={<Radio />} label="Phone" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="col">
                    {inputType === "email" ? <TextField id="outlined-basic" label="Email" variant="outlined" /> :
                        <PhoneInput countrySelectProps={{ unicodeFlags: true }} value={value} onChange={setValue} placeholder="+91 9999999999" />}

                </div>
                <div className="col mt-3">
                    <Button variant="contained" style={{ backgroundColor: "#ef4f5f" }}>Share App Link</Button>
                </div>
            </div>
        </>
    )
}

export default Footer