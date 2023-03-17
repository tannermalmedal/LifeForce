import React from 'react';
import { useRef, useState } from 'react';

const InputField = (props) => {

    const inputRef = useRef(null); 
    
    const clickHandler = (e) => {
        console.log(props);

        const sendingObj = {
            currentTask: currentTask,
            message: inputRef.current.value,
        }

        fetch(`/dailytasks/updateMessage/${props.currentTask._id}`,{
            method: 'PUT',
            body: JSON.stringify(sendingObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
        <div className="input-flex">
                <h3 className="input-heading">Journal Entry</h3>
                <textarea ref={inputRef} className="info-input"></textarea>
                <button className="submit-btn" onClick={clickHandler}>Submit</button>
        </div>
    )


}

export default InputField;