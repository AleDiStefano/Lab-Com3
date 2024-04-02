import PropTypes from "prop-types"
let dolarPrice = 1000;
const BeersItem = ({ id, beerName, beerStyle,price,avaible }) => {
    console.log(avaible)
    // if (avaible === true) {
        return (
            <div>
                <h1>{beerName}</h1>
                <h2>Estilo {beerStyle} | Precio: ${price * dolarPrice}</h2>
                <h4>
                    {id}
                    {avaible}
                </h4>
            </div>
        )
    // } else {
    //     return (
    //         <div>
    //             <h1>avaible? {avaible}</h1>
    //         </div>
    //     )
    // }
}

BeersItem.propTypes = {
    id: PropTypes.number,
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    avaible: PropTypes.bool,
}

export default BeersItem
