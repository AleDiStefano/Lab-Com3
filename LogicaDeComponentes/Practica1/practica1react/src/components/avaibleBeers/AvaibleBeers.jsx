import React from "react";
import PropTypes from "prop-types";

const AvaibleBeers = ({ beerName,avaible }) => {
    console.log(avaible)
    if (avaible) {
        return (<h1>{beerName}{avaible}</h1>)
    } else {
        return null
    }
}

AvaibleBeers.propTypes = {
    beerName: PropTypes.string,
    avaible: PropTypes.bool,
}

export default AvaibleBeers