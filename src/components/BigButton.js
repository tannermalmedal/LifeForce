import React from "react";
import { useState } from "react";

const BigButton = (props) => {
    const{ toggleSmallState, toggleMedState, toggleBigState, setBigToggleState } = props;

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
            console.log("You've made a PUT request @ BIG button",data);
            
            //toggles class based on status of DB
            data.yourBody === true ? setBigToggleState(true) : setBigToggleState(false);
            
          })
          .catch(err => console.error(err));
    }

    return(
        <>
            {/* <div className = {toggleSmallState || toggleMedState || toggleBigState ? 'change-flex' : null}> */}
                <button className={ toggleBigState ? 'completed main-btn trap-btn bigger-trap-btn' : 'main-btn trap-btn bigger-trap-btn incomplete'} onClick={clickHandler}>
                    <span className='big-btn-text'>Your Body</span>
                </button>
                {/* {toggleBigState ? <input className="info-input"></input> : null} */}
            {/* </div> */}
        </>
    )
}

export default BigButton;