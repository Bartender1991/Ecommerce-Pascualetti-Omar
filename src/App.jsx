import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBarBS';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from './components/ToastProvider';
// import Checkout from './components/Checkout';
import CheckoutHookForm from './components/CheckoutHookForm';



function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBS />
        <ToastProvider/>
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje='Bienvenidos a TecnoShop' />} />
          <Route path='/categories/:category' element={<ItemListContainer mensaje='Bienvenido a nuestra categoria' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/checkout' element={<CheckoutHookForm/>}/>
          <Route path='/*' element={<ErrorComponent />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

  )
}

export default App
