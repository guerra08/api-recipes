import express from "express";
import router from "./routes/routes";

const PORT = 8000;
const app = express();

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
