const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
