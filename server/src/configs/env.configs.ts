// Node Environment.
const NODE_ENV = process.env.NODE_ENV || 'development';

// Server.
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3001';

// Database.
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/ubc-dsc';

// JSON Web Token.
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'secret';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '1d';

// ReCaptcha.
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || 'secret';

// Login.
const DSCI_USER = process.env.DSCI_USER || 'username';
const DSCI_PASS = process.env.DSCI_PASS || 'password';


// Export all the environment variables.
const env = {
  NODE_ENV,
  HOST,
  PORT,
  DATABASE_URL,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  JWT_SECRET,
  JWT_EXPIRE,
  RECAPTCHA_SECRET_KEY,
  DSCI_USER,
  DSCI_PASS,
};

export default env;
