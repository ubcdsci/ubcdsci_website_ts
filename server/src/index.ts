import app from './configs/index.configs';
import { host, port } from './configs/env.configs';

import './database';
import router from './router/index.router';

app.use('/api', router);

app.listen(port, () => {
  console.log(`[Server]: Server is running at https://${host}:${port}`);
});
