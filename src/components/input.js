import { useState } from "react"


const Input = ({value, setValue}) => {
    const handleInput = (event) => {
        setValue(event.target.value)
    }
     
    return (
    <input 
        value={value}
        onChange={handleInput}
        placeholder="Tupe text here" 
    />)
}

export default Input