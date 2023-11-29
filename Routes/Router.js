const express = require('express')
const router = express.Router()

const BooksController = require('../Controller/BooksController');
router.get('/',BooksController.index)
router.post('/:id',BooksController.getData)
router.post('/:id',BooksController.createData)
router.patch('/:id',BooksController.updateData)
router.delete('/:id',BooksController.deleteData)
module.exports = router;
