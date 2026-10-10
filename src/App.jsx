import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
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
  return (
    <>
      <Navbar />
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
