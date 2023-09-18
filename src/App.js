import './App.css';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Nav from './components/navbar/nav';
import Home from './components/home/home';
import Product from './components/product/product';
import ContactUs from './components/contact-us/contactus';
import Order from './components/order/order';
import Orders from './components/orders/orders';
import Products from './components/products/products';
import Profile from './components/profile/profile';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import About from './components/about/about';
import { useEffect } from 'react';
import useValidate from './validate';
import AddProduct from './components/addProduct/addProduct';

function App() {
  const validate = useValidate();
  useEffect( () => {
    validate();
  }, []);

  const signedIn = useSelector(state => state.signedIn);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={signedIn ? <Profile /> : <SignIn/>} />
          <Route path="/order" element={signedIn ? <Order /> : <SignIn/>} />
          <Route path="/orders" element={signedIn ? <Orders /> : <SignIn/>} />
          <Route path="/signin" element={signedIn ? <Home/> : <SignIn />} />
          <Route path="/signup" element={signedIn ? <Home /> : <SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path='/addproduct' element={<AddProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
