import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Function - Clicked the Button")
    }
    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    )
}

export default FunctionClick
