import React,{ useState } from 'react';

const Input = (props) => {

    const [ inputText, setinputtext ] = useState("");

    const handlechange = (event) => {
        const value = event.target.value;
        setinputtext(value);
    }
    
  return (
    <div className='form'>
        <input type='text' value={inputText} onChange={handlechange}/>
        <button onClick={()=>{
            props.additems(inputText);
            setinputtext("");
        }}>
            <span>Add</span>
        </button>
    </div>
  )
}

export default Input;