import React,{useEffect,useState} from 'react'
import axios from 'axios'
function DataFetchig() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setPosts(res.data)
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post=><li key={post.userId}>{post.title}</li>)
                }
            </ul>        
        </div>
    )
}

export default DataFetchig
