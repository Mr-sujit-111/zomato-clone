import React, { useState } from 'react';
import '../css/MobilenumberBox.css'

function MobilenumberBox() {
    const [number, setNumber] = useState('');
    const handleChange = (e) => {
        setNumber(e.target.value);
    }
    return (
        <div className="container">

            <form action="" className="billingform">
                <div className="form-group md-group show-label">
                    <label htmlFor="">Telephone</label>
                    <input onChange={handleChange} className="form-control" type="tel" id="phone" placeholder="e.g. +1 702 123 4567" value={`${number}`} />
                </div>
            </form>
        </div>
    )
}

export default MobilenumberBox