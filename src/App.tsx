import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Profile from './pages/Profile';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Video from './pages/Video';
import Feed from './pages/Feed';
import DesignSystem from './pages/DesignSystem';

export default function App() {
  return (
    <div className="flex flex-col grow">
      <Header />
      <section className="grow flex justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/topic" element={<Topic />} />
            <Route path="/video/:cid" element={<Video />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/design-system" element={<DesignSystem />} />
          </Routes>
        </BrowserRouter>
      </section>
      <Footer />
    </div>
  );
}
