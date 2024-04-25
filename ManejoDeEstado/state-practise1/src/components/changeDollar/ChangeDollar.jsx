import React from 'react'
import { useState } from 'react';
const ChangeDollar = ({ handleDollarPrice }) => {

  const [newDollarValue, setNewDollarValue] = useState(1)

  const onHandleDollarPrice = (e) => {
    const value = e.target.value
    setNewDollarValue(value)
    handleDollarPrice(value)
  };
  
  const onSubmit123 = (event) =>{
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit123}>
        <h4>Valor del dolar:</h4>
        <input type="number" value={newDollarValue} onChange={onHandleDollarPrice} />
      </form>
    </div>
  )
}


export default ChangeDollar