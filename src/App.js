import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import { GlobalStyle } from './global';
// import Router from './router/router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
