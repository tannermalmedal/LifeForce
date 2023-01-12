import React from "react";
import SmallButton from "./SmallButton";
import MedButton from "./MedButton";
import BigButton from "./BigButton";


const ButtonPyramid = (props) => {
    const { currentTask, toggleSmallState, setSmallToggleState, toggleMedState, setMedToggleState, toggleBigState, setBigToggleState } = props;

    return (
            <div className='btn-container'>
                <SmallButton currentTask = {currentTask} toggleSmallState={toggleSmallState} setSmallToggleState= {setSmallToggleState}></SmallButton>
                <MedButton currentTask = {currentTask} toggleMedState={toggleMedState} setMedToggleState={setMedToggleState}></MedButton>
                <BigButton currentTask = {currentTask} toggleBigState={toggleBigState} setBigToggleState={setBigToggleState}></BigButton>
            </div>
    )
}

export default ButtonPyramid;