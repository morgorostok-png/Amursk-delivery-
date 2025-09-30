import React from 'react';

export default function Menu({ store, addToCart }) {
  if (!store) return <p>Выберите заведение</p>;

  return (
    <div>
      <h2>{store.name} — Меню</h2>
      {store.menu.map(item => (
        <div key={item.id} style={{ marginBottom: 5 }}>
          <span>{item.name} — {item.price} ₽ </span>
          <button onClick={() => addToCart(item)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
}
