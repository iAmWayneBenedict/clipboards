const express = require("express");

const app = express();

const SERVER_URL = "127.0.0.1";
const PORT = 8080;

app.listen(PORT, SERVER_URL, () => {
	console.log(`Listening to URL ${SERVER_URL} and port ${PORT}`);
});

app.get("/", (req, res) => {
	res.send({response: "success"})
})
