import React from "react";
import { useState } from "react";

const SmallButton = (props) => {
    const [toggleSmallState, setSmallToggleState] = useState(false)

    const id = props.currentTask._id;

    const clickHandler = (e) => {
        //this changes the class on click, so the button appears completed

        console.log(id);

        // this makes a put request to update the specific element to completed
        fetch(`http://localhost:3000/dailytasks/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({location: "you"}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            data.you === true ? setSmallToggleState(true) : setSmallToggleState(false);
          })
          .catch(err => console.error(err));
    }

    return(
        <button className={ toggleSmallState ? 'completed triangle-btn' : 'triangle-btn incomplete'} onClick={clickHandler}>
            <span className="small-btn-text">You</span>
        </button>
    )
}

export default SmallButton;