import Checkbox from '../../components/Checkbox/index.js' 
import './style.css'


const ListItem =({checked, title, toggle}) => {
    return (
        <div className='listItemWrapper'>
            <Checkbox value={checked} toggle={toggle} />
            {title}
        </div>
    )
} 

export default ListItem