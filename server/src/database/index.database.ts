// Library imports.
import mongoose from 'mongoose';

import { dbUrl } from '../configs/env.configs';

mongoose.set('strictQuery', false);

const db = mongoose.connect(dbUrl)
  .then(() => console.log(`[Database]: Connected to database on ${dbUrl}`))
  .catch(err => console.error('[Database]: Failed to connect to MongoDB', err.message));

export default db;
