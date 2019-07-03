import React,{useState,useEffect}from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    // const Tik=()=>{
    //     setCount(prevCount=>prevCount+1)
    // }

    const Tik=()=>{
        setCount(count+1)
    }


    useEffect(()=>{
        const interval = setInterval(Tik,1000)
        return()=>{
            clearInterval(interval)
        }
    },[count])
    
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounter
