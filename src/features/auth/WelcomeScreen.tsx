import { Link } from "react-router-dom";

import useAuth from "@/hooks/useAuth";


/**
 * Loads a welcome screen.
 */
const WelcomeScreen = () => {
  const { username, isExecutive, isAdmin } = useAuth();

  return (
    <section className="welcome">
      <p>{new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())}</p>
      <h1>Welcome {username}!</h1>

      {/* Users */}

      
      {/* Admin */}
      {(isExecutive || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}
      {(isExecutive || isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>}
    </section>
  );
};

export default WelcomeScreen;
