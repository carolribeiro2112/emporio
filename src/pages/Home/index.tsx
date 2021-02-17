import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../../components/Header';

import {Cards, Card} from './styles';

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
       <Cards>
        {
          beers !== null &&
          beers.map((item:any)=>(
            <Card key={item.id}>
              <img src={item.image} alt={item.title}/>
              <p>{item.description}</p>
              <h2>{item.title}</h2>
              <h3>{item.price}</h3>
              <button>Adicionar</button>
            </Card>  
          ))
        }
      </Cards>
    </>
  )
}

export default Home;

