  
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Carrinho from '../pages/Carrinho';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Cadastro}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/carrinho" exact component={Carrinho}/>
    </Switch>
  )
}

export default Routes;