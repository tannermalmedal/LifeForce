import React, { Component } from 'react';
import { useState, useEffect} from 'react';
import PageHeader from './PageHeader';
import ButtonPyramid from './ButtonPyramid';



function App(){
    const [currentTask, setCurrentTask] = useState({});
    const [toggleSmallState, setSmallToggleState] = useState(false);
    const [toggleMedState, setMedToggleState] = useState(false);
    const [toggleBigState, setBigToggleState] = useState(false);
    const [youMessage, setYouMessage] = useState('');
    const [yourBodyMessage, setYourBodyMessage] = useState('');
    const [othersMessage, setOthersMessage] = useState('');
    //can grab current task by selecting a task in database based on if it's completed or not
        //this works, because if it's complete we would create a new one, and if we delete it's just a hard delete
    

    //this will check and see if we have an incomplete task in the db
        //if we do, that is our current, so we will make that our current
        //if not we will create a new task and make that our current
    const getCurrentTask = () => {
        fetch('http://localhost:3000/dailytasks/current')
        .then(res => res.json())
        .then(data => {
            if(data === null){
                fetch('http://localhost:3000/dailytasks/new',{
                    method: 'POST',
                    body: JSON.stringify({}),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(res => res.json())
                  .then(data => {
                    //take newly created task and make it current task
                    console.log("You've created a new task and set it as current", data);
                    setCurrentTask(data);

                    //sets relative initial state on buttons
                    setSmallToggleState(data.you);
                    setMedToggleState(data.others);
                    setBigToggleState(data.yourBody);
                    setOthersMessage(data.othersMessage);
                    setYourBodyMessage(data.othersBodyMessage);
                    setYouMessage(data.youMessage);
                    
                  })
                  .catch(err => console.error(err));
            }else{
                console.log("You're previous task is still current", data)
                //initializes current task if it already exists
                setCurrentTask(data);

                //sets relative initial state on buttons
                setSmallToggleState(data.you);
                setMedToggleState(data.others);
                setBigToggleState(data.yourBody);
                setOthersMessage(data.othersMessage);
                setYourBodyMessage(data.othersBodyMessage);
                setYouMessage(data.youMessage);
            } 
        })
        .catch(err => {
            console.error(err);
        })
    }

    useEffect(() => {
        getCurrentTask();
    },[]);

    return(
        <div className='app'>
            <PageHeader currentTask={currentTask} setCurrentTask={setCurrentTask} getCurrentTask={getCurrentTask}></PageHeader>
            <ButtonPyramid currentTask={currentTask} toggleSmallState={toggleSmallState} setSmallToggleState={setSmallToggleState} toggleMedState={toggleMedState} setMedToggleState={setMedToggleState} toggleBigState={toggleBigState} setBigToggleState={setBigToggleState}></ButtonPyramid>
        </div>
    )
 }

export default App;