import app from "@/configs/server.configs";
import env from "@/configs/env.configs";
import database from "@/database/index.database";
import router from "@/router/index.router";


database();
app.use("/", router);

app.listen(env.PORT, () => {
	console.log(`[Server]: Server is running at https://${env.HOST}:${env.PORT}`);
});
