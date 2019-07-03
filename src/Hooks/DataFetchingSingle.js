import React,{useEffect,useState} from 'react'
import Axios from 'axios';

function DataFetchingSingle() {

    const [post, setPost] = useState({})
    const [id,setId]= useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)


    const setIdFromButton=()=>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        Axios.get( `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            setPost(res.data)
            console.log(res)
        })
        .catch(err=>{

        })
    },[idFromButtonClick])
    return (
        <div>
            
                <input type='text' value={id} onChange={e=>setId(e.target.value)} />
                <button type='submit' onClick={setIdFromButton}>Fetch Post</button>
          
            <div>{post.id} - {post.title}</div>        
        </div>
    )
}

export default DataFetchingSingle
