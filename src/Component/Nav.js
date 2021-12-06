import React,{useContext} from 'react'
//here we used useContext hook for getting value from Contect API (global stoe for our app)
import context from './ContextApi';
function Nav() {
    const val=useContext(context);
    console.log("nav bar called");
    return (
        <div className={val?"light":"dark"}>
            NAV
        </div>
    )
}

export default Nav
