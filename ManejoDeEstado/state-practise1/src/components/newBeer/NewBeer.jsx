import React from 'react'
import { useState } from 'react'
const NewBeer = ({addNewBeer}) => {
    const [newBeerName, setnewBeerName] = useState('') 
    const [newBeerStyle, setnewBeerStyle] = useState('') 
    const [newBeerPrice, setnewBeerPrice] = useState(0) 
    const [counter, setcounter] = useState(99) 

    const onSubmit123 = (event) => (
        event.preventDefault()
    )

    const handlenewBeerName = (event) => (
        setnewBeerName(event.target.value)
    )
    const handlenewBeerStyle = (event) => (
        setnewBeerStyle(event.target.value)
    )
    const handlenewBeerPrice = (event) => (
        setnewBeerPrice(event.target.value)
    )

    const newBeerAdd = () => {
        // console.log(newBeerName)
        // console.log(newBeerStyle)
        // console.log(newBeerPrice)
           const beerSended = {
            id: counter,
            beerName: newBeerName,
            beerStyle: newBeerStyle,
            price: newBeerPrice,
            available: true,
        }
        // setcounter(counter+=1)
        addNewBeer(beerSended)
    }
  return (
    <form onSubmit={onSubmit123}>
        <h5>Cerveza: </h5>
        <input type="text" value={newBeerName} onChange={handlenewBeerName}/>
        <h5>Estilo: </h5>
        <input type="text" value={newBeerStyle} onChange={handlenewBeerStyle}/>
        <h5>Precio: </h5>
        <input type="number" value={newBeerPrice} onChange={handlenewBeerPrice}/>
        <button onClick={newBeerAdd}>Añadir</button>
    </form>    
)
}

export default NewBeer