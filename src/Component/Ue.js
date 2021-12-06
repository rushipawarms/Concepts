//useEffet is introduce life-cycle method of class compoent i function component
// useEfect is run after render()

// 1st case act link componentDidMount and componentDidUpdate

// useEffect(()=>{
    
// })

import React ,{useState,useEffect}from 'react'



function Ue() {
 const [count,setCount]=useState(0);

 useEffect(()=>{
    console.log("useEffect called");
    document.title=`button click ${count} times`
    //side effect work done here eg.API call
})
console.log("render called")
    return (
      
        <div>
           <h1>Current count={count}</h1> 
           <button onClick={()=>setCount(count+1)}>add</button>
        </div>
    )
}

export default Ue
