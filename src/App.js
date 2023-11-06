import './App.css';
import Title from './components/Title';
import Input from './components/input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  
 
const showValue = () => {
  console.log('Input value: ' + value)
}
 
  return (
    <div className='wrraper'>
     <Title title='Hello World!' subTitle='sub title'/>
     <Input value={value} setValue={setValue} />
     <Button name='Show input value' onClick={showValue}/>
    </div>
  );
}

export default App;
