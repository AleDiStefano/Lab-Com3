import { useState } from 'react'
import propTypes from "prop-types";

const Login = ({ handleUsers }) => {
    const [newUserName, setnewUserName] = useState('')

    const characterValidator = (event) => {
        const value = event.target.value

        setnewUserName(value)
        if (value.toLowerCase().includes('o')) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
            setnewUserName('')
        }
    }

    const onhandleUsers = () => {
        if (newUserName.length === 0) {
            alert("Usuario inválido para registrarse")
        } else {
            const objetUserName = { userName: newUserName }
            handleUsers(objetUserName)
            alert("Usuario registrado correctamente!")
        }
    }
    const onSubmit123 = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <form onSubmit={onSubmit123}>
                <input type="text" value={newUserName} onChange={characterValidator} />
                <button onClick={onhandleUsers}>Agregar</button>
            </form>

        </>
    )
}

export default Login

Login.propTypes = {
handleUsers : propTypes.func,
}