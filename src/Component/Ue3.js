//this is 3rd case , In this case if we change in text field then we donts want to call useEffect so , only for change in count state we want to 
// call useEffect so in array we mention stae name
import React,{useState,useEffect} from 'react'

function Ue3() {
    const [count,setCount]=useState(0);
    const [text,setText]=useState('');

 useEffect(()=>{
    console.log("useEffect called");
    document.title=`button click ${count} times`
    //side effect work done here eg.API call
    //here set a state
   
},[count])
console.log("render called")
    return (
      
        <div>
           <h1>Current count={count}</h1> 
           <button onClick={()=>setCount(count+1)}>add</button>
           <input onChange={(e)=>setText(e.target.value)}/>
           <h2>{text}</h2>
        </div>
    )
}

export default Ue3
