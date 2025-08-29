import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBarBS';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>
      <NavBarBS />
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='Bienvenidos a TecnoShop' />} />
        <Route path='/categories/:category' element={<ItemListContainer mensaje='Bienvenido a nuestra categoria' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/*' element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
