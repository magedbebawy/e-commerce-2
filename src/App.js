import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/nav';
import Home from './pages/home/home';
import Product from './pages/product/product';
import ContactUs from './pages/contact-us/contactus';
import Order from './pages/order/order';
import Orders from './pages/orders/orders';
import Products from './pages/products/products';
import Profile from './pages/profile/profile';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';
import About from './pages/about/about';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
