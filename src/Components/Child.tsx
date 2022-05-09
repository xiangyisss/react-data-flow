import React, { useState } from "react";

export const Child = (props: any) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value.includes('@') ? props.giveValue(e.target.value) : props.giveValue('This is not Valid!')
    }
    return (
        <div>
            <h3 >Child component</h3>
            <input onChange={handleInputChange}/>
        </div>
    )
}