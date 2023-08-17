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
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Product />} />
          <Route path="/" element={<Products />} />
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<Order />} />
          <Route path="/" element={<Orders />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
