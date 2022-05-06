import React from 'react';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { Button } from '@mui/material';
import '../css/Navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="col-lg-6">
                    <MobileFriendlyIcon style={{ color: "white" }} />
                    <Button fontSize="small" style={{ color: "white" }} variant="text">Get the help</Button>
                </div>
                <div className="col-lg-6">
                    <Button style={{ color: "white" }} variant="text">Add your rastaurant</Button>
                    <Button style={{ color: "white" }} variant="text">Log-In</Button>
                    <Button style={{ color: "white" }} variant="text">Sign-up</Button>
                </div>
            </div>
        </>
    )
}

export default Navbar