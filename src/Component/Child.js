import React from 'react'

function Child() {
    console.log("Child is called")
    return (
        <div>
            I am child
        </div>
    )
}
//here we use React.memo()for optimize our renderring, react has inbuilt nature to render child componet .
//if use React.meme() then child component is called only when there is change in child component
export default React.memo(Child)
