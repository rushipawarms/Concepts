
//2nd case , here we use empty array so its work as componentDidmount
// so here nly fiestlyrender and useEffect called 

// import React,{useState,useEffect} from 'react'

// function Ue2() {
//     const [count,setCount]=useState(0);

//  useEffect(()=>{
//     console.log("useEffect called");
//     document.title=`button click ${count} times`
//     //side effect work done here eg.API call
   
// },[])
// console.log("render called")
//     return (
      
//         <div>
//            <h1>Current count={count}</h1> 
//            <button onClick={()=>setCount(count+1)}>add</button>
//         </div>
//     )
// }

// export default Ue2



// Now we remove empty array and set state in useEffect then iy=t not called infinite times because its check whether previous state is same or differnt
import React,{useState,useEffect} from 'react'

function Ue2() {
    const [count,setCount]=useState(0);

 useEffect(()=>{
    console.log("useEffect called");
    document.title=`button click ${count} times`
    //side effect work done here eg.API call
    //here set a state
    setCount(100);
   
})
console.log("render called")
    return (
      
        <div>
           <h1>Current count={count}</h1> 
           <button onClick={()=>setCount(count+1)}>add</button>
        </div>
    )
}

export default Ue2


//op=> render called
// Ue2.js:37 useEffect called
// Ue2.js:44 render called
// Ue2.js:37 useEffect called
// Ue2.js:44 render called