import React from 'react';
import PropTypes from "prop-types";

let beersIPA = 0;
let beersRed = 0;
const CounterBeerStyle = ({beer}) => {
    console.log(beer.length)
 
    beer.forEach(beerItem => {
        console.log(beerItem.beerStyle)
        
        switch (beerItem.beerStyle){
            case "IPA":
                beersIPA++;
                break;
            case "Red":
                 beersRed++;
                 break;
        }
    });
        
  return (
    <h2>Red: {beersRed} | IPA: {beersIPA}</h2>
  )
}

CounterBeerStyle.propTypes = {
    beer: PropTypes.array
}

export default CounterBeerStyle