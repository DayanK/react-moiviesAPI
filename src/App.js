import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import UserList from './pages/UserList'
import NotFound from './pages/NotFound'
import "./styles/index.scss"

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coup-de-coeur" element={<UserList />} />
      {/* <Route path="/*" element={<Home />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
  );
};

export default App;