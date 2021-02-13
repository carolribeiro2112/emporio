import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {

  const token = localStorage.getItem("token")
  
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const [category, setCategory] = useState<any>([])
  
  useEffect(()=>{
    axios.get('http://localhost:4000/categories', {headers:headers})
      .then(response => setCategory(response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <>
      <h1>Logo</h1>

      <ul>
        {
          category!==undefined &&
          category.map((item:any)=>(
            <li key={item.id}>item.title</li>
          ))
        }
        <li></li>
      </ul>
    </>
  )
}

export default Header; 