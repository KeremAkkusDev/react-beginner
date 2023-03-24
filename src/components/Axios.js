import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {
    const [data,setData] = useState();
    const [id,setId] = useState(1);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> setData(res.data[id].title))
        .catch(err=>console.log(err))
    },[data, id])

  return (
    <div>
        <h1>{data}</h1>
        <p>
            <input type="text" placeholder="Lütfen id girin" value={id} onChange={e=>setId(e.target.value)} />
        </p>
    </div>
  )
}

export default Axios