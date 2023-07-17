import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';


/**
 * Template for all pages (this is a wrapper for all pages).
 * @param props.title - The title of the page.
 * @param props.description - An optional description for the page.
 * @param props.children - Page content.
 */
const Page = (props: {title : string, description? : string, children: React.ReactElement}) => {
  return (
    <>
      <Helmet>
        <title>
          {props.title} &ndash; UBC Data Science Club
        </title>
        <meta
          name="description"
          content={ props.description ? props.description : "AMS UBC Data Science Club"}
        />
      </Helmet>

      <motion.div
        className="PageContainer"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        { props.children }
      </motion.div>
      
      {/* <NewsletterForm /> */}
    </>
  );
}

export default Page;
