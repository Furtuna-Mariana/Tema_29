import './style.css'

const Checkbox = ({value, toggle}) => {

    const handleChange = () => {
        toggle(!value)
    }

    return <input className='checkbox' type='checkbox' toggle={toggle} onChange={handleChange} />
}

export default Checkbox