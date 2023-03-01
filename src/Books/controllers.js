const Book = require("./model")

const addBook = async (req, res) => {
    try {
        // const book = await Book.create({
        //     title: req.body.titl, 
        //     author:req.body.author,
        //     genre:req.body.genre,
        // })
        const book = await Book.create(req.body);
        console.log(book);
        // const successResponse = {
        //     message: "success",
        //     newBook: book,
        // };
        // res.status (201).json({})
        res.status(201).json({message:"success", newBook:book})
    }

    catch (error){
    console.log(error);
    // const errorResponse = {
    //     errorMessage: error.message,
    //     error: error,
    // };
    // res.status(501).json(errorResponse);
    res.status(501).json({errorMessage:error.message, error: error});
    }
}

module.exports = {
    addBook,
}