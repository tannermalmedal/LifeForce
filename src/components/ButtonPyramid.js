import React from "react";

const ButtonPyramid = () => {


    return (
            <div className='btn-container'>
                <button className='triangle-btn'><span className="small-btn-text">You</span></button>
                <button className='main-btn trap-btn'><span className='med-btn-text'>Others</span></button>
                <button className='main-btn trap-btn bigger-trap-btn'><span className='big-btn-text'>Your Body</span></button>
            </div>
    )
}

export default ButtonPyramid;