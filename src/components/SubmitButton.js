import React from "react";



const SubmitButton = (props) => {

    const { currentTask, setCurrentTask, getCurrentTask } = props;

    const id = currentTask._id;

    const clickHandler = () => {
        // this makes a put request to update the specific element to completed
        fetch(`http://localhost:3000/dailytasks/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({location: "complete"}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
            console.log("You've made a PUT request @ submit button",data);
            if(data.complete === true){
                return getCurrentTask()
            }

          })
          .catch(err => console.error(err));
    }

    return(
        <button className="submit-btn" onClick={clickHandler}>Submit</button>
    )

}

export default SubmitButton;