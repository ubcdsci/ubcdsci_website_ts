// Library imports.
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

// Component imports.
// import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';

// Pages imports.
import HomeV2 from '@/pages/HomeV2/Home';
import EventsV2 from '@/pages/EventsV2/Event';
import ProjectsV2 from './pages/ProjectsV2/ProjectsV2';


// import Login from '@/features/auth/Login';
// import TwoFactor from '@/features/auth/TwoFactor';
import ErrorPage from '@/pages/PageNotFound';
import ContactUsV2 from './pages/ContactUsV2';
import Team from './pages/Team';



const SITE_URL = "https://www.ubcdsci.com";
const OG_IMAGE = `${SITE_URL}/logo512.png`;

enum Access {
  PUBLIC,
  ADMIN
}

interface RouteConfig {
  path: string;
  name: string;
  description: string;
  element: JSX.Element;
  access: Access;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Main",
    description: "UBC Data Science Club – a student-led club at the University of British Columbia helping students learn data science through hands-on projects, events, and workshops.",
    element: <Navigate replace to="/home" />,
    access: Access.PUBLIC,
  },
  {
    path: "/home",
    name: "Home",
    description: "UBC Data Science Club – a student-led club at the University of British Columbia helping students learn data science through hands-on projects, events, and workshops.",
    element: <HomeV2 />,
    access: Access.PUBLIC,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    description: "Get in touch with the UBC Data Science Club. Reach out for sponsorship inquiries, collaborations, or general questions about our club at UBC.",
    element: <ContactUsV2 />,
    access: Access.PUBLIC,
  },
  {
    path: "/events",
    name: "Events",
    description: "Browse upcoming and past events hosted by the UBC Data Science Club, including workshops, hackathons, speaker panels, and networking sessions.",
    element: <EventsV2 />,
    access: Access.PUBLIC,
  },
  {
    path: "/projects",
    name: "Projects",
    description: "Explore data science projects built by UBC Data Science Club members, covering machine learning, data analysis, visualization, and more.",
    element: <ProjectsV2 />,
    access: Access.PUBLIC,
  },
  {
    path: "*",
    name: "Page Not Found",
    description: "UBC Data Science Club – the page you're looking for could not be found.",
    element: <ErrorPage />,
    access: Access.PUBLIC,
  },
  {
    path: "/team",
    name: "Team",
    description: "Meet the members of the UBC Data Science Club. Learn about our team, their roles, and how they contribute to our club's mission.",
    element: <Team />,
    access: Access.PUBLIC,
  },
];


const TabTitle = (props: { title: string; description: string; path: string }) => {
  const fullTitle = `${props.title} – UBC Data Science Club`;
  const canonicalUrl = `${SITE_URL}${props.path === "/" ? "/home" : props.path}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UBC Data Science Club",
    alternateName: "UBC DSCI",
    url: SITE_URL,
    logo: OG_IMAGE,
    description:
      "A student-led club at the University of British Columbia helping students learn data science through hands-on projects, events, and workshops.",
    sameAs: [
      "https://www.instagram.com/ubcdsci/",
      "https://www.linkedin.com/company/ubcdsci/",
    ],
    memberOf: {
      "@type": "Organization",
      name: "University of British Columbia",
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="UBC Data Science Club" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};


/**
 * Renders all the page routes, with animation.
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  const duration = 0.3;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, name, description, element }) => (
          <Route
            key={name}
            path={path}
            element={
              <>
                <TabTitle title={name} description={description} path={path} />
                <motion.div
                  className="PageContainer"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration }}
                >
                  {element}
                </motion.div>
                {/* <NewsletterForm /> */}
              </>
          } />
        ))}

        {/* <Route path="/login" element={
          <>
            <TabTitle title="Admin Login" />
            <motion.div
              className="PageContainer"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration }}
            >
              <Login />
            </motion.div>
          </> 
        } /> */}

        {/* <Route path="/login/2fa" element={
          sessionStorage.getItem("loginStep2VerificationToken") ?
          <>
            <TabTitle title="Two-Factor Authentication" />
            <motion.div
              className="PageContainer"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration }}
            >
              <TwoFactor />
            </motion.div>
          </> :
          <Navigate to="/login" replace />
        } /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
