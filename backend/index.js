import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";


const app = express();

app.get("/", (request, response) => {
    console.log("Homepage Request");
    response.send("Welcome to the homepage !")
})

mongoose.connect(mongodbURL)
.then(() => {
    console.log(`Mongo gone right`);
    app.listen(PORT, () => {
        console.log(`Listenning on PORT Number ${PORT}`);
    })    
}).catch((err) => {
    console.log(`Error connecting with mongo ${err}`);
})