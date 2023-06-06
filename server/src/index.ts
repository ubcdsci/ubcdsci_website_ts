import app from '@/configs/index.configs';
import env from '@/configs/env.configs';
import db from '@/database/index.database';
import router from '@/router/index.router';

db();
app.use('/api', router);

app.listen(env.PORT, () => {
  console.log(`[Server]: Server is running at https://${env.HOST}:${env.PORT}`);
});
