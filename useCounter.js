import { useState } from "react";

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue);

  
  const onAdd = ( num ) =>{
    setCounter( ( current ) => current + num )
}
const onReset = () =>{
    setCounter( initialValue )
}
const onSubtract = ( num ) =>{
  if( counter === 1 ) return;
setCounter(( current ) =>  current - num )
}
  
  
  
  return {
    counter,
    onAdd,
    onReset,
    onSubtract,
  }
}
