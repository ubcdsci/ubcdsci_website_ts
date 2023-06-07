import app from "@/configs/server.configs";
import database from "@/database/index.database";
import router from "@/router/index.router";

const isSecure = process.env.HTTPS === "true" ? true : false;

database();
app.use("/api", router);

app.listen(process.env.PORT, () => {
	console.log(
		`[Server]: Server is running at http${isSecure ? "s" : ""}://${
			process.env.HOST
		}:${process.env.PORT}`
	);
});
