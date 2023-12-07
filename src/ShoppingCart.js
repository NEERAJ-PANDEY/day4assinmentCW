import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item) => {
    setCartItems([...cartItems, item]);
  };

  const onRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      Total: {total}
    </div>
  );
};

export default ShoppingCart;