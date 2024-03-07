import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import router from "./routes/DataRoute.js";
import dotenv from 'dotenv';

dotenv.config({path: './.env'});

const app = express();
app.use(cors());


const port = process.env.PORT;
const DATABASE_URL = process.env.DB_URL;

connectDB(DATABASE_URL);
app.use(express.json());

//Load routes
app.use("/api/reg/", router);


app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`);
});