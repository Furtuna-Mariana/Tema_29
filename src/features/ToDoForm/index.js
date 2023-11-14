import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import './style.css'
import { useEffect } from "react"

const ToDoForm = ({handleChange, value}) => {
    const [toDo, setToDo] = useState(value)

    const handleEditToDo = () => {
       handleChange(toDo)
       setToDo('')
    }

    useEffect(() => {
        console.log()
        setToDo(value)
    }, [value])

    return (
        <div className="formContainer" >
            <Input value={toDo} setValue={setToDo}/>
            <Button name='Add to do' onClick={handleEditToDo} />
        </div>
    )
}

export default ToDoForm