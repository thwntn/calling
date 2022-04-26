import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Phone from './component/social/Phone.js';
import Login from './component/login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/homepage' element={<Phone></Phone>}></Route>
    </Routes>
  );
}

export default App;
