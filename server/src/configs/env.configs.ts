export const host  = process.env.HOST || 'localhost';
export const port  = process.env.PORT || 3001;

export const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/ubc-dsc';

export const jwtSecret = process.env.JWT_SECRET || 'secret';
export const jwtExpire = process.env.JWT_EXPIRE || '1d';

export const username = process.env.DSCI_USER || 'username';
export const password = process.env.DSCI_PASS || 'password';
