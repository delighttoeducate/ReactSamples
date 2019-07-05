import React from 'react'
import styled,{css} from 'styled-components'
function StyledComponent() {
    const Button=styled.button`
    color:${props=>props.disabled ? 'white': 'red'};
    ${props=>props.primary && css`
    color:white;
    background-color:green;
    
    `}
    `
    return (
        <div>
            <Button disabled={false} primary={false}>Submit</Button>
        </div>
    )
}

export default StyledComponent
