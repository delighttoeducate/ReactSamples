import React,{useState} from 'react'

function HookCounterTwo() {
    const inititalCount=0
    const [count,setCount] = useState(inititalCount)

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            // setCount(count+1) // Wrong
            setCount(prevCount=>prevCount+1)

        }
    }

    return (
        <div>
            Count {count} <br/>
            <button onClick={()=>setCount(inititalCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>incrementFive</button>

        </div>
    )
}

export default HookCounterTwo
