import AddProducts from './components/AddProducts';
import Login from './components/Login';
import Products from './components/Products';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div >
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
