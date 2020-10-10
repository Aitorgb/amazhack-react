import './App.css';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/login/Login';
import IsAuthenticated from './components/isAuthenticated/IsAuthenticated';
import ProductList from './components/product-list/ProductList';

function App() {
  const [ user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  const onLogin = (user) => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user));
  }

  const logOut = () => {
    setUser(undefined)
    localStorage.removeItem("user");
  }

  return (
    <div className="App">
      <Header user={ user } logOut={logOut}/>
      <Switch>
        <IsAuthenticated 
          path="/products"
          user={user}
          render={(props) => <ProductList {...props} user={user} setUser={setUser} />} 
        />
        <Route 
          path="/login" 
          render={(props) => <Login {...props} user={user} setUser={setUser} onLogin={onLogin}/>} 
        />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
