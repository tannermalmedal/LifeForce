import React from "react";


const NewButton = (props) => {

    const { currentTask, setCurrentTask, getCurrentTask } = props;

    const id = currentTask._id;

    const clickHandler = () => {
        // this makes a put request to update the specific element to completed
        fetch(`http://localhost:3000/dailytasks/delete/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
            console.log("You've made a DELETE request @ delete button",data);
            return getCurrentTask();
        

          })
          .catch(err => console.error(err));
    }


    return (
        <button className = 'submit-btn new-btn' onClick={clickHandler}>New</button>
    )

}

export default NewButton;