import React, { useState } from 'react'
import BeersItem from '../beersItem/BeersItem';
import ChangeDollar from '../changeDollar/ChangeDollar';
import NewBeer from '../newBeer/NewBeer';


const Beers = ({ }) => {
    const beers = [
        {
            id: 1,
            beerName: "American",
            beerStyle: "IPA",
            price: 3,
            available: true,
        },
        {
            id: 2,
            beerName: "Argenta",
            beerStyle: "IPA",
            price: 4,
            available: false,
        },
        {
            id: 3,
            beerName: "Irish",
            beerStyle: "Red",
            price: 4,
            available: true,
        },
        {
            id: 4,
            beerName: "Scotish",
            beerStyle: "Red",
            price: 3,
            available: true,
        },
        {
            id: 5,
            beerName: "DeEssoCiTratta",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 6,
            beerName: "Santa APA",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 7,
            beerName: "German",
            beerStyle: "Pilsen",
            price: 1,
            available: true,
        },
        {
            id: 8,
            beerName: "London Porter",
            beerStyle: "Porter",
            price: 2,
            available: false,
        },
        {
            id: 9,
            beerName: "Scotish ALE",
            beerStyle: "Red",
            price: 5,
            available: false,
        },
    ];
    const [beersArray , setbeersArray ] = useState(beers);
    let dollarPrice = 1
    
    const handleDollarPrice = (dollarPrice) =>{
       const updatedBeers = beers.map(beer => {
            return {
                ...beer,price: beer.price * dollarPrice
            };
        })
        setbeersArray(updatedBeers)
    }

    const addNewBeer = (newBeerArray) => {
        const newBeerGetted = [...beersArray , newBeerArray]
        setbeersArray(newBeerGetted)
    }
    
    return (
        <>
            <div>
                <h4>{dollarPrice}</h4>
                {beersArray.map(beer => (
                    <BeersItem
                    key={beer.id}
                    beerName={beer.beerName} 
                    beerStyle={beer.beerStyle} 
                    price={beer.price} 
                    available={beer.available}
                    dollarPrice={dollarPrice}
                    />
                ))}
                <ChangeDollar handleDollarPrice={handleDollarPrice}/>
                <NewBeer addNewBeer={addNewBeer}/>
            </div>
        </>
    )
}


export default Beers