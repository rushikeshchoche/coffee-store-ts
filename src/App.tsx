import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home/Home';
import { FullLayout } from './component/layout/FullLayout/FullLayout';
import { Payments } from './component/Payments/Payments';
import { Prices } from './component/Prices/Prices';
import { StoreProvider } from './provider/StoreProvider/StoreProvider';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FullLayout />}>
              <Route index element={<Home />} />
              <Route path="prices" element={<Prices />} />
              <Route path="payments" element={<Payments />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
