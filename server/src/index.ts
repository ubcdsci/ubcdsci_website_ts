import https from "https";

import app, { httpsParams } from "@/configs/server.configs";
import database from "@/database/index.database";
import router from "@/router/index.router";


database();
app.use("/", router);

let server: any = https.createServer(httpsParams, app);

server.listen(process.env.PORT, () => {
	console.log(
		`[Server]: Server is running at http${process.env.HTTPS ? "s" : ""}://${
			process.env.HOST
		}:${process.env.PORT}`
	);
});
