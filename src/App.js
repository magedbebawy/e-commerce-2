import './App.css';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
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
import { useEffect } from 'react';
import useValidate from './validate';
import AddProduct from './pages/addProduct/addProduct';

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
