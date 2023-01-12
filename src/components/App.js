import React, { Component } from 'react';
import { useState, useEffect} from 'react';
import PageHeader from './PageHeader';
import ButtonPyramid from './ButtonPyramid';



function App(){
    const [currentTask, setCurrentTask] = useState({});
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
                    console.log(data);
                    setCurrentTask(data);
                  })
                  .catch(err => console.error(err));
            }else setCurrentTask(data);
        })
        .catch(err => {
            console.error(err);
        })
    }

    useEffect(() => {
        getCurrentTask();
    },[]);

    console.log(currentTask);

    return(
        <div className='app'>
            <PageHeader></PageHeader>
            <ButtonPyramid currentTask={currentTask}></ButtonPyramid>
        </div>
    )
 }

export default App;