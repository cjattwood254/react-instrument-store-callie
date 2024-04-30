import React, {useState} from "react";
import InstrumentList from "./components/InstrumentList"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App = () => {

  const [instrumentItems, setInstrumentItems] = useState[ 
    { id: 1, category: "Guitar", name: "Fender Stratocaster" }, 
    { id: 2, category: "Keyboard", name: "Yamaha P-125" }, 
    { id: 3, category: "Drum", name: "DW Collector's Series" } 
  ];

  const [cart, setCart] = useState([]);

  const [message, setMessage] = useState("");

  const addToCart = (item) =>{
    setCart([...cart, item]);
    setMessage(`Added ${item.title} to the cart.`);
  };

  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id != item.id));
    setMessage(`Removed ${item.title} from the cart.`);
  };

  const toggleFavorite = (item) => {
    const updatedItems = instrumentItems.map(instrumentItem =>
      instrumentItem.id === item.id ? {...instrumentItem, isFavorite: !instrumentItem.isFavorite} : instrumentItem
      );
      setInstrumentItems(updatedItems);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Guitar">Guitars</Link>
          <Link to="/Keyboard">Keyboards</Link>
          <Link to="/Drum">Drums</Link>
          <Link to="/Cart">Cart</Link>
        </nav>
        {message && <div>{message}</div>}
        <h1>Welcome to our Retro Media Store!</h1>
        <Routes>
          <Route path="/" element= {<InstrumentList instrumentItems={instrumentItems} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} />} exact/>
          <Route path="/Guitar" element= {<InstrumentList instrumentItems={instrumentItems.filter(item => item.category === "Guitar")} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} />} />
          <Route path="/Keyboard" element= {<InstrumentList instrumentItems={instrumentItems.filter(item => item.category === "Keyboard")} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} />} />
          <Route path="/Drum" element= {<InstrumentList instrumentItems={instrumentItems.filter(item => item.category === "Drum")} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} />} />
          <Route path="/Cart" element= {<InstrumentList instrumentItems={setCart(item)} />} />
        </Routes>
        <InstrumentList instrumentItems={instrumentItems} addToCart={addToCart} />
      </div>
    </Router>
  );

}

export default App;

