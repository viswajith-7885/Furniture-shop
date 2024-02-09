
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Viewproduct from './Components/Viewproduct';
import Header from './Components/Navbar';
import Beds from './Components/Beds';
import Sofas from './Components/Sofas';
import { Context } from './Components/Context';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [products,setproducts]=useState([])

  console.log(products)

   useEffect(()=>{
        axios.get("http://localhost:3032/Products")
        .then(res=>setproducts(res.data))
        .catch(err=>console.log(err))
    },[])


  const data ={
    products,
    setproducts,
  }

  return (
   
    <BrowserRouter>
    <Header/>
    <Context.Provider value={data}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view/:id' element={<Viewproduct/>}/>
        <Route path='/beds' element={<Beds/>}/>
        <Route path='/sofas' element={<Sofas/>}/>
      </Routes>
      </Context.Provider>
    </BrowserRouter>
    
  );
}

export default App;
