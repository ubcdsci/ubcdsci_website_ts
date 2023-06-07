/* -------------------------------------------------------------------------- */
/*                           SETTING UP THE DATABASE                          */
/* -------------------------------------------------------------------------- */
import mongoose from 'mongoose';
import logger from '@/middlewares/logger.middlewares';


mongoose.set('strictQuery', false);

const database = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL as string);
    console.log(`[Database]: Connected to database on mongodb://${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`);
  } catch (err) {
    console.error('[Database]: Failed to connect to MongoDB', err);
    logger.logEvents(
			`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
			"mongoErrLog.log"
		);
    process.exit(1);
  }
};

export default database;
