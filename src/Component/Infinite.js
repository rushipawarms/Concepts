import React,{useState,useEffect} from 'react'

function Infinite() {
    const [count,setCount]=useState(0);

 useEffect(()=>{
    console.log("useEffect called");
    document.title=`button click ${count} times`
    //side effect work done here eg.API call
    //here set a state using random num so it will reult into infinite call
    let num=Math.random();
    setCount(num);
   
})
console.log("render called")
    return (
      
        <div>
           <h1>Current count={count}</h1> 
           <button onClick={()=>setCount(count+1)}>add</button>
        </div>
    )
}

export default Infinite
