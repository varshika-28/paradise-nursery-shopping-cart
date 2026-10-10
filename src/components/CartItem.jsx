import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';
import { Link } from 'react-router-dom';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Your cart is empty.</p>
          <Link to="/products" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            {cartItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Unit Price: ${item.cost}</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button onClick={() => handleDecrease(item)} style={{ padding: '5px 10px', cursor: 'pointer' }}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)} style={{ padding: '5px 10px', cursor: 'pointer' }}>+</button>
                </div>
                
                <div>
                  <p style={{ fontWeight: 'bold' }}>Total: ${item.cost * item.quantity}</p>
                  <button onClick={() => handleRemove(item.name)} style={{ padding: '5px 10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginTop: '5px' }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'right', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Total Cart Amount: ${calculateTotal()}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/products" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
              Continue Shopping
            </Link>
            <button 
              onClick={() => alert('Coming Soon!')}
              style={{ padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
