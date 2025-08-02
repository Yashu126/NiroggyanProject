import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DoctorProfile from './pages/DoctorProfile';
import { AppointmentProvider } from './context/AppointmentContext';

function App() {
  return (
    <AppointmentProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
          </Routes>
        </Layout>
      </Router>
    </AppointmentProvider>
  );
}

export default App;