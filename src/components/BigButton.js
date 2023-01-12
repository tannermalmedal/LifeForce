import React from "react";
import { useState } from "react";

const BigButton = (props) => {
    const{ toggleBigState, setBigToggleState } = props;

    const id = props.currentTask._id;

    const clickHandler = (e) => {
        

        //toggles "yourBody" completion in DB
        fetch(`http://localhost:3000/dailytasks/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({location: "yourBody"}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            data.yourBody === true ? setBigToggleState(true) : setBigToggleState(false);
            
          })
          .catch(err => console.error(err));
    }

    return(
        <button className={ toggleBigState ? 'completed main-btn trap-btn bigger-trap-btn' : 'main-btn trap-btn bigger-trap-btn incomplete'} onClick={clickHandler}>
            <span className='big-btn-text'>Your Body</span>
        </button>
    )
}

export default BigButton;