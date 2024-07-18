import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfo from './pages/UserInfo';
import QRScanner from './pages/QRScanner';
import Signature from './pages/Signature';
import Summary from './pages/Summary';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    scannedData: [],
    signature: ''
  });

  return (
    <BrowserRouter basename="/qrcode-form">
      <Routes>
        <Route path="/" element={<UserInfo userData={userData} setUserData={setUserData} />} />
        <Route path="/qrscanner" element={<QRScanner userData={userData} setUserData={setUserData} />} />
        <Route path="/signature" element={<Signature userData={userData} setUserData={setUserData} />} />
        <Route path="/summary" element={<Summary userData={userData} setUserData={setUserData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;