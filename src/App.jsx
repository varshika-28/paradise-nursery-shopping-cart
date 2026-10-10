import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<MainApp />} />
        </Routes>
      </div>
    </Router>
  );
}

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-desc">Your one-stop shop for all things green and beautiful. We bring nature to your doorstep.</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
}

function MainApp() {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" style={{color: 'white', textDecoration: 'none', fontSize: '1.5rem'}}>Paradise Nursery</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart" className="cart-icon">
            Cart
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
          </Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/products" element={
          <div>
            <AboutUs />
            <ProductList />
          </div>
        } />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
