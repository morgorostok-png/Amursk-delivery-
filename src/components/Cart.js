import React from 'react';

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Корзина</h2>
      {cart.length === 0 && <p>Корзина пуста</p>}
      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: 5 }}>
          <span>{item.name} — {item.price} ₽ </span>
          <button onClick={() => removeFromCart(index)}>❌</button>
        </div>
      ))}
      {cart.length > 0 && <p>Итого: {total} ₽</p>}
    </div>
  );
}
