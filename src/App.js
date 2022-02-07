import {useState,useEffect} from 'react'
import { CartProvider } from "react-use-cart";
import {Switch,Route} from 'react-router-dom';
import './App.css';
import { Cart } from "./Cart";
import { Page } from "./Page";

function App() {
  const [fruits,setfruits]=useState([])

  async function getFruits(){
    const data=await fetch("https://6166c4e513aa1d00170a6713.mockapi.io/fruits")
    const fruts=await data.json()
    setfruits(fruts)
    console.log(fruts)
  }

  useEffect(getFruits,[])
  return (
    <CartProvider>
      <Switch>
        <Route exact path="/"><Page /></Route>
        <Route path="/cart"><Cart /></Route>
      </Switch>
  </CartProvider>
  );
}

export default App;
