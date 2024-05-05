import express from "express"
import { Book } from "../models/book.models.js"

app.post("/", async (req, res) => {

    try {
        
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Fill all the required items"
            })
        } 

        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        }

        const book = await Book.create(newBook);
        return res.status(201).send(book);

    } catch (error) {
        console.log("Error Message", error.message);
        return res.status(500).send("Error Message:", error.message)
    }
})

app.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(201).send({
            count: books.length,
            data: books
        })

    } catch (error) {
        return res.status(500).send(error)
    }
})

app.get("/:id", async (req, res) => {
    try {

        const {id} = req.params;
        const books = await Book.findById(id);
        return res.status(201).send({books})

    } catch (error) {
        return res.status(500).send(error)
    }
})

app.put("/:id", async (req, res) => {
    try {

        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({message: "All Fields are requierd !"})
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({Message: "Book not found"})
        }
        
        return res.status(200).send({Message: "Book updated successfully !"})


    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message})
    }
})

app.delete("/:id" , async (req, res) => {

    try {
        const {id} = req.params ;
        const deletedBook = await Book.findByIdAndDelete(id)

        if (!deletedBook) {
            return res.status(404).json("No book found")
        }
        
        return res.status(500).send({message: "Book deleted successfully"})
        
    } catch (error) {
        return res.status(404).send("Error while deleting book ! Please try again..")
    }
})