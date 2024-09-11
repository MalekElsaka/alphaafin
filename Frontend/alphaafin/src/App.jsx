import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/views/Home';
import Navbar from './components/navbar/Navbar';
const AboutUs = lazy(() => import('./components/views/AboutUs'));
const Faqs = lazy(() => import('./components/views/Faqs'));
const Services = lazy(() => import('./components/views/Services'));

const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Router basename="/alphaafin">
      <div className="w-full h-full bg-white flex flex-col">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;