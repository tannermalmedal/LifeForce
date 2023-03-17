import React from "react";
import SmallButton from "./SmallButton";
import MedButton from "./MedButton";
import BigButton from "./BigButton";
import InputField from "./InputField";


const ButtonPyramid = (props) => {
    const { currentTask, toggleSmallState, setSmallToggleState, toggleMedState, setMedToggleState, toggleBigState, setBigToggleState } = props;

    return (
        <div className={toggleSmallState || toggleBigState || toggleMedState ? "change-flex" : null}>
            <div className='btn-container'>
                <SmallButton currentTask = {currentTask} toggleSmallState={toggleSmallState} toggleMedState={toggleMedState} toggleBigState={toggleBigState} setSmallToggleState= {setSmallToggleState}></SmallButton>
                <MedButton currentTask = {currentTask} toggleSmallState={toggleSmallState} toggleMedState={toggleMedState} toggleBigState={toggleBigState} setMedToggleState={setMedToggleState}></MedButton>
                <BigButton currentTask = {currentTask} toggleSmallState={toggleSmallState} toggleMedState={toggleMedState} toggleBigState={toggleBigState} setBigToggleState={setBigToggleState}></BigButton>
            </div>
            {toggleSmallState || toggleBigState || toggleMedState ?
              <InputField props = {props}></InputField>
              : null}
        </div>  
    )
}

export default ButtonPyramid;