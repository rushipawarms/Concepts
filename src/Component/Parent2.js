
import React,{useContext} from 'react'
//here we used useContext hook for getting value from Contect API (global stoe for our app)
import context from './ContextApi';
import Child from './Child';
function Parent2() {
    const val=useContext(context);
    console.log("parent 2 is called")
    return (
        <div className={val?"light":"dark"}>
            PArent 2
           <Child/>
        </div>
    )
}
export default Parent2