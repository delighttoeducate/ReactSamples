import React,{useState} from 'react'
import MouseMove from './MouseMove';

function MouseContainer() {

    const [displayTogggle, setDisplayTogggle] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplayTogggle(!displayTogggle)}>Toggle Display</button>
            { displayTogggle && <MouseMove/>}
        </div>
    )
}

export default MouseContainer
