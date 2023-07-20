import React from "react";
import { useReducer } from "react";

 const reducer=(state, action)=>{
  switch(action.type){
    case 'increment-age':{
      return{
        name: state.name,
        age: state.age+1
      };
  }
    case 'decrement-age':{
      return{
        name: state.name,
        age: state.age-1
      };
    }
    case 'changed-name':{
      return{
        name: action.nextName,
        age: state.age
      }
    }
  }

  }
  
const App=()=>{
  const [state, dispatch]=useReducer(reducer, {age: 4, name:"thazin"});

  const handleInput=(e)=>{
    dispatch({
      type:"changed-name",
      nextName: e.target.value
    });
  }

  return(
    <>
      <input
        value={state.name}
        onChange={handleInput}
      />
    <button 
      onClick={()=>{dispatch({type: 'increment-age'})}}
      >
      Increment age
      </button>
      <button 
       onClick={()=>{dispatch({type: 'decrement-age'})}}
      >
        Decrement age
      </button>
      <p>Hello! {state.name} Your age is {state.age}</p>
    
    </>
  )
}

export default App;