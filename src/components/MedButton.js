import React from "react";
import { useState } from "react";

const MedButton = (props) => {
    const [toggleMedState, setMedToggleState] = useState(false)

    const id = props.currentTask._id;

    const clickHandler = (e) => {
        //toggles class

        //toggles current buttons 'others' completion in DB
        fetch(`http://localhost:3000/dailytasks/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({location: "others"}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
            console.log(data);
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