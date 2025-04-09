import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/scrolltotop';
import Whatsapp from './components/Whatsapp';
import Hero from './components/Hero'; // If needed globally, else lazy-load it too

// Lazy load pages
import Home from './pages/Home';
const Aboutus = lazy(() => import('./pages/Aboutus'));
const Contactus = lazy(() => import('./pages/Contactus'));
const Ourclients = lazy(() => import('./pages/Ourclients'));
const Ourprojects = lazy(() => import('./pages/Ourprojects'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/Servicesdetails'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogsDetails = lazy(() => import('./pages/Blogsdetails'));
const Account = lazy(() => import('./pages/Account'));

function App() {
  return (
    <Router>
      <div className="bg-[#000000] min-h-screen">
        <Header />
        <Suspense fallback={<div className="text-white text-center p-10">Loading...</div>}>
          <Routes>
            {/* Redirect root path to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Static routes with Hero */}
            <Route path="/home" element={<><Hero /><Home /></>} />
            <Route path="/aboutus" element={<><Hero /><Aboutus /></>} />
            <Route path="/blogs" element={<><Hero /><Blogs /></>} />
            <Route path="/contactus" element={<><Hero /><Contactus /></>} />
            <Route path="/ourclients" element={<><Hero /><Ourclients /></>} />
            <Route path="/ourprojects" element={<><Hero /><Ourprojects /></>} />
            <Route path="/services" element={<><Hero /><Services /></>} />

            {/* Dynamic details route */}
            <Route path="/services/:serviceSlug" element={<><Hero /><ServiceDetail /></>} />
            <Route path="/blog/:id" element={<BlogsDetails />} />

            {/* Extra pages */}
            <Route path="/account" element={<Account />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollToTopButton />
        <Whatsapp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
