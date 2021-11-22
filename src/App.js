
import './App.css';
import HomePage from './Pages/Home/Home-Page';
import {Route, Routes } from 'react-router-dom';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';

function App() {
  
  return (
    <div className="App">
     <Routes >
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/login" element={ <Login />} />
       </Routes>
    </div>
  );
}

export default App;
