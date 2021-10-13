import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express(); // express app 생성
const logger = morgan("dev");

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

const home = (req, res) => {
    return res.send("hello");
};

const login = (req, res) => {
    return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);