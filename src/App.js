import { useEffect, useState } from 'react';
import './App.css';
import ListItem from './features/ListItem';
import ToDoForm from './features/ToDoForm';
import getToDoList from './api/getToDo'
import addToDoToBe from './api/addToDoToBe';
import Modal from './components/Modal';
import Button from './components/Button';
import Icon from './components/Icon';


const users = ['Alex', 'Victor', 'Boris', 'Vasile']

function App() {

  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [editToDo, setEditToDo] = useState('')
  const [sortDoneToDo, setSortDoneToDo] = useState('asc')
  const [sortIncompleteToDo, setSortIncompleteToDo] = useState('asc')
  const [selectedUser, setSelectedUser] = useState(users[0])

const changeSelectedUser = (user) => {
  setSelectedUser(user)
}




  const addToDo = (title) => {
    const found = list.find((toDo) => toDo.title === title) 
    if(found || !title) return alert(found ? 'To be should be unique' : 'Title should not be empty')
    
    const newList = [...list, {title: title, checked: false}]
    setList(newList)
    addToDoToBe(newList, selectedUser) 
    setIsOpen(false)
  };

  const openEditModal = (title) => {    
    setEditToDo(title)
  }

  const handleEditToDo = (title) => {
    const newList = list.map((toDo) => {
      if(toDo.title === editToDo) {
        return {...toDo, title}
      }
      return toDo
    })

    setList(newList)
    addToDoToBe(newList, selectedUser) 
    setEditToDo('')
  }

  const toggleTodo = (title) => {
    const newArr = list.map((toDo) => {
      if(toDo.title === title) {
        return {...toDo, checked: !toDo.checked}
      }
      return toDo
    })
      setList(newArr)
      addToDoToBe(newArr, selectedUser) 
    }

    
    const handleDelete = (title) => {
      const newArr = list.filter((element) => element.title !== title)
      setList(newArr)
      addToDoToBe(newArr, selectedUser)
    }


  const changeSortDirectionDone = () => {
    const newSort = sortDoneToDo === 'desc' ? 'asc' : 'desc'
    setSortDoneToDo(newSort)
  }
  

  const changeSortDirectionIncomplete = () => {
    const newSort = sortIncompleteToDo === 'asc' ? 'desc' : 'asc'
    setSortIncompleteToDo(newSort)
  }

  const renderDoneToDo = list
   .filter(item => item.checked)
   .sort((a, b) => {
    if(sortDoneToDo === 'asc') {
      return a.title > b.title ? -1 : 1
    }
      return a.title < b.title ? -1 : 1
  })
   .map((item) => {
    return  <ListItem 
    title={item.title} 
    checked={item.checked}
    toggle={toggleTodo}
    edit={openEditModal}
    deleteToDo={handleDelete}
    key={item.title} />
  });

  const renderIncompliteToDo = list
  .filter(item => !item.checked)
  .sort((a, b) => {
    if(sortIncompleteToDo === 'asc') {
      return a.title < b.title ? -1 : 1
    }
      return a.title > b.title ? -1 : 1
  })
  .map((item) => {
    return  <ListItem 
    title={item.title} 
    checked={item.checked}
    toggle={toggleTodo}
    edit={openEditModal}
    deleteToDo={handleDelete}
    key={item.title} />
  })
  

  useEffect (() => {
    const result = getToDoList(selectedUser)
    setList(result)
  }, [selectedUser])



   return (
    <div>
      <div className='header'>
        {users.map((item) => {
          return (
          <div className={selectedUser === item ? 'selected' : ''} key={item} onClick={(event) => {
            changeSelectedUser(event.target.id)
          }}>
          <h1 id={item} >{item}</h1>
          </div>
        )         
        })}

      </div>
      <div>
        <Button  name={'Add to do'} onClick={() => {
          setIsOpen(true)
        }}/>
      </div>

      <div className='toDoListWrraper'>
        <div>
          <div className='toDoListHeader'>
            <h1>In progress:</h1>
            <div className='headerIcon' onClick={changeSortDirectionIncomplete}>
              <Icon className={`ri-sort-${sortIncompleteToDo}`} />
            </div>
          </div>   
          <div className='toDoList'>
            {renderIncompliteToDo}
          </div>
        </div>
        <div>
          <div className='toDoListHeader'>
            <h1>Done:</h1>
           <div className='headerIcon' onClick={changeSortDirectionDone}>
           <Icon className={`ri-sort-${sortDoneToDo}`} />
           </div>
          </div>      
          <div className='toDoList'>
            {renderDoneToDo}
          </div>
        </div>
      </div>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ToDoForm handleChange={addToDo} value='' />
      </Modal>
      <Modal isOpen={editToDo} setIsOpen={setEditToDo}>
        <ToDoForm handleChange={handleEditToDo} value={editToDo} />
      </Modal>
    </div>
  );
}

export default App;
