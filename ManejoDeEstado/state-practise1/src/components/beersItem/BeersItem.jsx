import React from 'react'
import PropTypes from "prop-types";

const BeersItem = ({beerName,beerStyle,price,available,dollarPrice}) => {
  return (
    <>
      <h5>Birra: {beerName} | Precio: {price}</h5>  
      {/* <h5>Estilo:{beerStyle}</h5>   */}
      {/* <h5>{price}</h5>   */}
      {/* <h5>{available}</h5>   */}
    </>
  )
}

BeersItem.propTypes = {
    beerName: PropTypes.string,
    beerStyle : PropTypes.string,
    price : PropTypes.number,
    available : PropTypes.bool
}
export default BeersItem