const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    genre:{
        type: String
    },
    publication_Year:{
        type: Number
    },
    ISBN:{
        type: Number
    }
} , {timestamps: true})

const Books = mongoose.model('Books',BooksSchema);
module.exports = Books;