const {Router} = require("express");

const bookRouter = Router();

const {addBook, getAllBooks, getSingleBookByTitle, deleteBook, deleteAllBooks, updateBook} = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/books/getbook/:title", getSingleBookByTitle)
bookRouter.delete("/books/deletebook", deleteBook)
bookRouter.delete("/books/deleteallBooks", deleteAllBooks)
bookRouter.put("/books/updatebook", updateBook)


module.exports = bookRouter;