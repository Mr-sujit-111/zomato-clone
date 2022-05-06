import React from 'react'

function SearchRastaurantItem(props) {
  return (
    <>
      <div className="row" data-name={props.rastaurantname}>
        <div className="col-lg-5 rastaurant__image">
          <img src={props.image} alt="" style={{ height: "91px" }} />
        </div>
        <div className="col-lg-7">
          <div className="row">
            <div className="col-lg-12">
              {props.rastaurantname}
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  Dining |Delivery
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {props.address}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchRastaurantItem