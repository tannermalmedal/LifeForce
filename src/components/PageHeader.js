import React from "react";
import SubmitButton from "./SubmitButton";


const PageHeader = () =>{


    return(
        
        <header>
            <SubmitButton></SubmitButton>
                <h1>
                    <span className="life-title">Life</span>Force
                </h1>
            <button className = 'submit-btn'>Submit</button>
        </header>
        
    )
    
}

export default PageHeader;