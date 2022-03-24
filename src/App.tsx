import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Button from './components/Button';

// Pages
import Profile from './pages/Profile';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Video from './pages/Video';
import Feed from './pages/Feed';

export default function App({ num = 0 }: { num?: number }) {
  return (
    <div className="flex justify-center">
      {/* <header>asdasd</header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/video/:cid" element={<Video />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
