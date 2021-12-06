
import React,{useContext} from 'react'
//here we used useContext hook for getting value from Contect API (global stoe for our app)
import context from './ContextApi';
function Parent1() {
    const val=useContext(context);
    console.log('parent1 called')
    return (
        <div className={val?"light":"dark"}>
             Parent 1
        </div>
    )
}

export default Parent1