import React from "react";
import { useState } from "react";

const MedButton = (props) => {

    const{ toggleMedState, setMedToggleState } = props;

    const id = props.currentTask._id;

    const clickHandler = (e) => {

        //toggles current buttons 'others' completion in DB
        fetch(`http://localhost:3000/dailytasks/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({location: "others"}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
            console.log("You've made a PUT request @ Med button",data);

            //toggles class based on status of DB
            data.others === true ? setMedToggleState(true) : setMedToggleState(false);
          })
          .catch(err => console.error(err));
    }

    return(
        <button className={ toggleMedState ? 'completed main-btn trap-btn' : 'main-btn trap-btn incomplete'} onClick={clickHandler}>
            <span className='med-btn-text'>Others</span>
        </button>
    )
}

export default MedButton;