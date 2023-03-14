import React from "react";
import { useState } from "react";

const SmallButton = (props) => {

    const{ toggleSmallState, toggleMedState, toggleBigState, setSmallToggleState } = props;

    const id = props.currentTask._id;

    const clickHandler = (e) => {

        // this makes a put request to update the specific element to completed
        fetch(`http://localhost:3000/dailytasks/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({location: "you"}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
            console.log("You've made a PUT request @ small button",data);

            //toggles class based on status of DB
            data.you === true ? setSmallToggleState(true) : setSmallToggleState(false);
          })
          .catch(err => console.error(err));
    }

    return(
        <> 
            {/* <div className = {toggleSmallState || toggleMedState || toggleBigState ? 'change-flex' : null}> */}
                <button className={ toggleSmallState ? 'completed triangle-btn' : 'triangle-btn incomplete'} onClick={clickHandler}>
                    <span className="small-btn-text">You</span>
                </button>
                {/* {toggleSmallState ? <input className="info-input"></input> : undefined} */}
            {/* </div> */}
        </>
    )
}

export default SmallButton;