import React from "react";
import SubmitButton from "./SubmitButton";
import NewButton from "./NewButton";


const PageHeader = (props) =>{

    const { currentTask, setCurrentTask, getCurrentTask } = props;


    return(
        
        <header>
            <NewButton currentTask={currentTask} setCurrentTask={setCurrentTask} getCurrentTask={getCurrentTask}></NewButton>
                <h1>
                    <span className="life-title">Life</span>Force
                </h1>
            <SubmitButton currentTask={currentTask} setCurrentTask={setCurrentTask} getCurrentTask={getCurrentTask}></SubmitButton>
        </header>
        
    )
    
}

export default PageHeader;