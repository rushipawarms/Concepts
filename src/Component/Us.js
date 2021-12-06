import React,{useState} from 'react'
function Us() {
    const [count, setCount] = useState(0);
    const [obj,setobj]=useState({name:'hello'})
    return (
        <div>
           <h1>Current count={count}</h1> 
           <button onClick={()=>setCount(count+1)}>add</button>
           <input type="text" onChange={(e)=>setobj({name:e.target.value})}/>
           <h1>{obj.name}</h1>
        </div>
    )
}

export default Us
