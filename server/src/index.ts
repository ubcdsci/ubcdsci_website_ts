import app from './configs/index.configs';
import { host, port } from './configs/env.configs';

import './database';
import './routes';


app.listen(port, () => {
  console.log(`[Server]: Server is running at https://${host}:${port}`);
});
