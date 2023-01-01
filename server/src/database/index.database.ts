// Library imports.
import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/ubc-dsc';

mongoose.set('strictQuery', false);

const db = mongoose.connect(MONGODB_URI)
  .then(() => console.log(`[Database]: Connected to database on ${MONGODB_URI}`))
  .catch(err => console.error('[Database]: Failed to connect to MongoDB', err.message));

export default db;
