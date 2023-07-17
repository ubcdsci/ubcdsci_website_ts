import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { ROUTES } from '@/configs/routes';

// import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';

import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import AdminPanel from '@/pages/AdminPanel';
import Projects from '@/pages/Projects';
import Events from '@/pages/Events';
import EventPost from '@/pages/EventPost';
import ContactUs from '@/pages/ContactUs';
import SearchResult from '@/pages/SearchResult';
import Login from '@/pages/Login';
import ErrorPage from '@/pages/PageNotFound';


/**
 * Renders all the page routes, with animation.
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path={ROUTES.ROOT} element={<Navigate replace to="/home" />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
        <Route path={ROUTES.EVENTS} element={<Events />} />
        <Route path={ROUTES.EVENT_POST} element={<EventPost />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.SEARCH_RESULT} element={<SearchResult />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />

        {/* Private Routes */}
        <Route path={ROUTES.DASHBOARD} element={<AdminPanel />} />

        {/* 404 Error */}
        <Route path={ROUTES.ERROR} element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
