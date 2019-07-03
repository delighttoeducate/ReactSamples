import React from 'react'

function ErrorTry(props) {
    if(props.name!="Bannu")
        throw new Error("value not a Bannu")
    return (
        <div>
            {props.name}
        </div>
    )
}

export default ErrorTry
