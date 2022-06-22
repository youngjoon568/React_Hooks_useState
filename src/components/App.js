import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TextUpload from './view/TextUpload';
import TimeUp from './view/TimeUp';
import "./css/main.css";

export default function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/timeup">time up</Link>
      <Link to="/textupload">text upload</Link>
      <Routes>
        <Route path='/timeup' element={<TimeUp />} />
        <Route path='/textupload' element={<TextUpload />} />
      </Routes>
    </BrowserRouter>
  );
};
