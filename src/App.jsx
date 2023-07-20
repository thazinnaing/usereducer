import React from "react";
import { useReducer } from "react";

const reducer=(state, action)=>{
  if(action.type === 'increment-age'){
    return {
      age: state.age+1
    }
  }
  else{
    return{
      age: state.age-1
    }
  }
  
}

const App=()=>{
  const [state, dispatch]=useReducer(reducer, {age: 4});


  return(
    <>
    <button onClick={()=>{
      dispatch({type: 'increment-age'})
    }}>
      Increment age
    </button>
    <button onClick={()=>{
      dispatch({type: 'decrement-age'})
    }}>
      Decrement age
    </button>
    <p>Hello! Your age is {state.age}</p>
    
    
    
    </>




  )
}

export default App;