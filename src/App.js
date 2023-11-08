import { useState } from 'react';
import './App.css';
import ListItem from './features/ListItem';
import ToDoForm from './features/ToDoForm';




function App() {

  const [list, setList] = useState([])

  const addToDo = (item) => {
    setList([...list, item]) 
  }

  const renderToDo = list.map((item) => {
    return  <ListItem title={item.title} checked={item.checked} key={item.title} />
  })

   return (
    <div>
     <ToDoForm setItems={addToDo} listItems={list} />
     {renderToDo}
    </div>
  );
}

export default App;
