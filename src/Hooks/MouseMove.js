import React,{useEffect,useState} from 'react'



function MouseMove() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const changeMove=e=>{
        setX(e.clientX)
        setY(e.clientY)
        console.log(`x-${e.clientX} y-${e.clientY}`);
    }

    useEffect(()=>{
        console.log("useEffect Called");
        window.addEventListener('mousemove',changeMove)
        return ()=>{
            console.log("Component Will unmount cycle")
            window.removeEventListener('mousemove',changeMove)
        }
    },[])

    return (
        <div>
        x-{x}  ; y-{y}        
        </div>
    )
}

export default MouseMove
