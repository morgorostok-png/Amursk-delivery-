import React, { useState } from 'react';
import StoreList from './components/StoreList';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { stores } from './data/stores';

export default function App() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = item => setCart([...cart, item]);
  const removeFromCart = index => setCart(cart.filter((_, i) => i !== index));

  return (
    <div style={{ padding: 20 }}>
      <h1>🚚 Доставка в Амурске</h1>
      <StoreList stores={stores} selectStore={setSelectedStore} />
      <Menu store={selectedStore} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
