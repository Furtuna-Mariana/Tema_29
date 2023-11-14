import Checkbox from '../../components/Checkbox/index.js' 
import './style.css'
import Icon from '../../components/Icon/index.js'


const ListItem =({checked, title, toggle, edit, deleteToDo}) => {
    
  
  

    const handleDelete = () => {
        deleteToDo(title)
    }



    const handleEdit = () => {
        edit(title)
    }
    
    return (
        <div className='listItemWrraper'>
            <div className='listItemSideWrapper'>
                <Checkbox checked={checked} toggle={toggle} title={title}/>
                {title}
            </div>
            <div className='listItemSideWrapper'>
                <div className='itemIcon' onClick={handleEdit}>
                    <Icon className='ri-edit-line' />
                </div>
                <div className='itemIcon' onClick={handleDelete}>
                    <Icon className='ri-delete-bin-2-line' />
                </div>
            </div>  

    





        </div>
    )
} 

export default ListItem