const express = require("express");
const DataBase = require("./config/DataBase");

const app = express();
const router = require("./routes");
app.use(express.json());
app.use(router);

DataBase();
const port = 3000;

app.listen(port, () => {
	console.log(`App rodando na porta ${port}`);
});
