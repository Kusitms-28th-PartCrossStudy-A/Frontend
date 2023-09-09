import { Route, Routes } from 'react-router-dom';
import Create from '../pages/Create';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Create />}></Route>
    </Routes>
  );
}

export default Router;
