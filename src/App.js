import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import SayWord from './components/SayWord';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<h1>Welcome</h1>}></Route>
        <Route path='/:word/:color' element={<SayWord/>}></Route>
        <Route path='/:word' element={<SayWord/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
