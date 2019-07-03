import React,{ useState,useEffect} from 'react'

function EffectHookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(()=>{
        console.log("Updating document Title")
        
        document.title=`You Clicked ${count} Times`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Clicked {count} Times</button>
        </div> 
    )
}

export default EffectHookCounterOne
