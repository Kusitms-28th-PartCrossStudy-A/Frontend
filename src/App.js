import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { GlobalStyle } from './global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </div>
  );
}

export default App;
