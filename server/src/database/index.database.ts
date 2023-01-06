/* -------------------------------------------------------------------------- */
/*                              EXPORTING MODELS                              */
/* -------------------------------------------------------------------------- */
import User from './models/User.models';
import EventPost from './models/EventPost.models';

export {
  User,
  EventPost,
};


/* -------------------------------------------------------------------------- */
/*                           SETTING UP THE DATABASE                          */
/* -------------------------------------------------------------------------- */
import mongoose from 'mongoose';

import env from '../configs/env.configs';

mongoose.set('strictQuery', false);

const db = async () => {
  try {
    const conn = await mongoose.connect(env.DATABASE_URL);
    console.log(`[Database]: Connected to database on ${conn.connection.host}`);
  } catch (err) {
    console.error('[Database]: Failed to connect to MongoDB', err)
    process.exit(1);
  }
};

export default db;
