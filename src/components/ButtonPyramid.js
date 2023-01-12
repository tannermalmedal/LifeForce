import React from "react";
import SmallButton from "./SmallButton";
import MedButton from "./MedButton";
import BigButton from "./BigButton";


const ButtonPyramid = (props) => {
    const { currentTask } = props;

    

    return (
            <div className='btn-container'>
                <SmallButton currentTask = {props.currentTask}></SmallButton>
                <MedButton currentTask = {props.currentTask}></MedButton>
                <BigButton currentTask = {props.currentTask}></BigButton>
            </div>
    )
}

export default ButtonPyramid;