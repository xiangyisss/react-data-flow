import React, { useState } from "react";
import { Child } from "./Child";

export const  Parent = () => {
    const [ email, setEmail ] = useState('')
    const changeEmail = (nameInput : string) => {
        setEmail(nameInput)
    }
    const [ userEmail, setUseremail ] = useState('')
    const luckyName = () => {
        setUseremail(email)
    }
    return (
       <div>
           <h3>Parent component</h3>
           <p>Current user email is : { email }</p>
           <p style={{'color' : 'blue'}}>Post this email address : { userEmail }</p>
           <button onClick={ luckyName }>Add name</button>
           <hr />
           <Child giveValue={changeEmail}/>

       </div> 
    )
}