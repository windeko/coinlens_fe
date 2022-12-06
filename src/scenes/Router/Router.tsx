import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from '../../scenes/Mainpage/Mainpage';

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage />} />
    </Routes>
  </BrowserRouter>
);
