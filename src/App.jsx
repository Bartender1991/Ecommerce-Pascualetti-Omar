import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBarBS';



function App() {

  return (
    <>
      <NavBarBS />
      <ItemListContainer mensaje='Bienvenidos a mi E-commerce'/>

    </>

  )
}

export default App
