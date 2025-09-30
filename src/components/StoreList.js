import React from 'react';

export default function StoreList({ stores, selectStore }) {
  return (
    <div>
      <h2>Выберите заведение</h2>
      {stores.map(store => (
        <div key={store.id} style={{ marginBottom: 10 }}>
          <button onClick={() => selectStore(store)}>{store.name}</button>
        </div>
      ))}
    </div>
  );
}
