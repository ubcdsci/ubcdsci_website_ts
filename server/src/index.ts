import app from './configs/index.configs';
import { host, port } from './configs/env.configs';

import './database';
import router from './routes/index.routes';

app.use(router);

app.listen(port, () => {
  console.log(`[Server]: Server is running at https://${host}:${port}`);
});
