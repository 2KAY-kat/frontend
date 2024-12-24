import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Store from './Pages/Store';
import StoreCategory from './Pages/StoreCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>

  <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Store/>}/>
      <Route path='/mens' element={<StoreCategory category="men"/>}/>
      <Route path='/womens' element={<StoreCategory category="women"/>}/>
      <Route path='/kids' element={<StoreCategory category="kid"/>}/>
      <Route path="product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>

    <Footer />

  </BrowserRouter>
      
    </div>
  );
}

export default App;
