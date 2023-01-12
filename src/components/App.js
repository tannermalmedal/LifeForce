import React, { Component } from 'react';
import { useState, useEffect} from 'react';
import PageHeader from './PageHeader';
import ButtonPyramid from './ButtonPyramid';



function App(){
    const [dailyTasks, setDailyTasks] = useState(['hi']);
    const [currentTask, setCurrentTask] = useState({});
    //can grab current task by selecting a task in database based on if it's completed or not
        //this works, because if it's complete we would create a new one, and if we delete it's just a hard delete
    

    const getDailyTasks = () => {
        fetch('http://localhost:3000/dailytasks')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return setDailyTasks(data);
        })
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getDailyTasks();
        console.log(dailyTasks);
    },[]);

    return(
        <div className='app'>
            <PageHeader></PageHeader>
            <ButtonPyramid></ButtonPyramid>
        </div>
    )
 }

export default App;