import React from 'react';
import { Button } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';


function CountryIcon(props) {
  const { name, countryCode, handleIconClick } = props
  return (
    <>
      <div className="col-lg-3" onClick={handleIconClick} data-iconname={name}>
        <Button variant="text" color="inherit" >
          <ReactCountryFlag countryCode={countryCode} svg className="country__flag mx-3"
            title={name}
          />
          {name}
        </Button>
      </div>
    </>
  )
}

export default CountryIcon