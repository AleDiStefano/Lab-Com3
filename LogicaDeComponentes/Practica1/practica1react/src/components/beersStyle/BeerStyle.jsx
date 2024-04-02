import React from 'react'
import PropTypes from "prop-types";

const BeerStyle = ({ beer }) => {
    let BeerStyleList = [];
    let stylesToShow = '';
    beer.forEach(beerItem => {
        if (!BeerStyleList.includes(beerItem.beerStyle)) {
            BeerStyleList.push(beerItem.beerStyle)
            if (stylesToShow.length === 0){
                stylesToShow += beerItem.beerStyle
            } else {
                stylesToShow += " | " + beerItem.beerStyle 
            }
        }
    });

    return(
        <h1>{stylesToShow}</h1>
    )
}


BeerStyle.propTypes = {
    beer: PropTypes.array
}
export default BeerStyle