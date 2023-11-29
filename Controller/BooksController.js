const express = require('express');
const Books = require('../Model/model');

// Show the list of Books
const index = (req, res, next) => {
    Books.find().then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: "An error Occurred!" + error
        })
    })
}

// Find only one person
const getData = async (req, res, next) => {
    let ISBN = req.body.ISBN
    Books.findById(ISBN).then(response => {
        res.json({
            response
        })
    }).catch((err) => {
        res.json({
            message: `An error occurred!`
        })
    })
}

// Adding data 
const createData = (req, res, next) => {
    // Use a different name for the instance of the model
    let newBook = new Books({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publication_Year: req.body.publication_Year,
        ISBN: req.body.ISBN
    })
    newBook.save().then(response => {
        res.json({
            message: `Books added Successfully!!`
        })
    }).catch(error => {
        res.json({
            message: `An error Occurred!`
        })
    })
}

// Update 
const updateData = (req, res, next) => {
    let bookID = req.body.bookID

    let updatedData = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publication_Year: req.body.publication_Year,
        ISBN: req.body.ISBN
    }

    Books.findByIdAndUpdate(bookID, { $set: updatedData })
        .then(() => {
            res.json({
                message: `Books updated successfully`
            })
        }).catch(error => {
            res.json({
                message: `An error Occurred`
            })
        })
}

// Delete 
const deleteData = (req, res, next) => {
    let bookID= req.body.bookID
    Books.findOneAndDelete(bookID).then(() => {
        res.json({
            message: `Books deleted successfully`
        })
    }).catch(error => {
        res.json({
            message: `An error occurred!!` + error
        })
    })
}

module.exports = {
    index, getData, createData, updateData, deleteData
}
