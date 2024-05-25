import React, { useState } from 'react';
import './App.css';

function MilkTeaShop() {
  const [order, setOrder] = useState({
    flavor: '',
    size: 'regular',
    toppings: [],
    quantity: 1
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder(prevOrder => ({
      ...prevOrder,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setOrder(prevOrder => ({
        ...prevOrder,
        toppings: [...prevOrder.toppings, name]
      }));
    } else {
      setOrder(prevOrder => ({
        ...prevOrder,
        toppings: prevOrder.toppings.filter(topping => topping !== name)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (order.flavor && order.size && order.quantity > 0) {
      setSubmitted(true);
    } else {
      alert("Please fill up all required fields properly before placing the order.");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="form-container">
          <h1>Milk Tea Shop</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Flavor:</label>
              <select name="flavor" value={order.flavor} onChange={handleInputChange}>
                <option value="">Select Flavor</option>
                <option value="original">Original</option>
                <option value="strawberry">Strawberry</option>
                <option value="matcha">Matcha</option>
                <option value="taro">Taro</option>
                <option value="mango">Mango</option>
                <option value="chocolate">Chocolate</option>
              </select>
            </div>
            <div className="form-group">
              <label>Size:</label>
              <select name="size" value={order.size} onChange={handleInputChange}>
                <option value="regular">Regular</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="form-group">
              <label>Toppings:</label>
              <div>
                <label>
                  <input type="checkbox" name="pearls" checked={order.toppings.includes('pearls')} onChange={handleCheckboxChange} />
                  Pearls
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="pudding" checked={order.toppings.includes('pudding')} onChange={handleCheckboxChange} />
                  Pudding
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="jelly" checked={order.toppings.includes('jelly')} onChange={handleCheckboxChange} />
                  Jelly
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input type="number" name="quantity" value={order.quantity} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Place Order</button>
          </form>
        </div>
        {submitted && (
          <div className="form-container order-summary">
            <h2>Order Summary</h2>
            <p>Flavor: {order.flavor}</p>
            <p>Size: {order.size}</p>
            <p>Toppings: {order.toppings.join(', ')}</p>
            <p>Quantity: {order.quantity}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MilkTeaShop;
