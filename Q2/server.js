const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://poovikamurugesan_db_user:Poovi2709@ac-hiha3lu-shard-00-00.cpxxjyf.mongodb.net:27017,ac-hiha3lu-shard-00-01.cpxxjyf.mongodb.net:27017,ac-hiha3lu-shard-00-02.cpxxjyf.mongodb.net:27017/?ssl=true&replicaSet=atlas-amo3hx-shard-0&authSource=admin&appName=Cluster0")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const Book = mongoose.model("Book", {
    bookId: String,
    title: String,
    author: String,
    category: String,
    price: Number,
    availableCopies: Number
});

// Insert
app.post("/books", async (req, res) => {

    const book = new Book({
        bookId: "B101",
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        price: 350,
        availableCopies: 5
    });

    await book.save();

    res.send("Book inserted successfully");
});

// Update
app.put("/books/B101", async (req, res) => {

    await Book.findOneAndUpdate(
        { bookId: "B101" },
        { availableCopies: 10 }
    );

    res.send("Book updated successfully");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});