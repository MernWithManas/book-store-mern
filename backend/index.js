import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book.models.js";
import cors from "cors";

mongoose.connect(mongodbURL)
.then(() => {
    console.log(`Mongo gone right`);
    app.listen(PORT, () => {
        console.log(`Listenning on PORT Number n${PORT}`);
    })    
}).catch((err) => {
    console.log(`Error connecting with mongo ${err}`);
})

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5555",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}))

app.get("/", (request, response) => {
    console.log("Homepage Request");
    response.send("Welcome to the homepage !")
})

