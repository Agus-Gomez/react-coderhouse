import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// importo los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './layouts/navBar/navBar';
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer.js';
// import ItemCount from './components/ItemCount/ItemCount.js';
function App() {

  // const onAdd = (quantity) => {
  //   console.log(`Has agregado ${quantity} unidades`);
  // }


  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBar />}>
         <Route index element={ <Home /> } />
         <Route path='about' element={ <About /> } />
         <Route path='contact' element={ <Contact /> } />
        
        <Route path='*' element={ <Navigate replace to='/'/> }/>
        </Route>
      </Routes>
      </BrowserRouter>
      <navBar />
      <ItemListContainer/>
      {/* < ItemCount initial ={1} stock={5} onAdd={onAdd} /> */}
      <ItemDetailContainer/> 
    </div>
  
  );
}

export default App;
