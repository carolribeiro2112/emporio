import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../../components/Header';

const Home = () => {
  const [beers, setBeers] = useState([]);

  const token = localStorage.getItem("token")
  
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(()=>{
    axios.get(' http://localhost:4000/beers', {headers:headers})
      .then(response => setBeers(response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <>
      <Header/>
      <h1>Home</h1>

      <div>
        {
          beers !== undefined &&
          beers.map((item:any)=>(
            <h1>item.title</h1>
          ))
        }
      </div>
    </>
  )
}

export default Home;

