import React from 'react';
import PropTypes from "prop-types";


const Table = ({ companiesData }) => {
    let average = 0;
    const total = companiesData.reduce((accumulator, companiy) => {
        return accumulator + companiy.income;
      }, 0);
    average = total / companiesData.length;

    return (
        <div>
             <table>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso neto</th>
                </tr>
                {companiesData.map(singularBrand => (
                <tr key={singularBrand.brand}>
                    <td>{singularBrand.brand}</td>
                    <td>{singularBrand.income}</td>
                </tr>
                ))}
            </table> 
            
            <p>El promedio de ganancias es de: {average.toFixed(2)}</p>
        </div>
    )
}

export default Table

Table.PropTypes = {
    companiesData: PropTypes.array,
}
