const Book = require("./model")

////////////////////////////////////////////////////////
const addBook = async (req, res) => {
    try {
        // const book = await Book.create({
        //     title: req.body.title, 
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
        res.status(201).json({message:"success", newBook:book});
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
/////////////////////////////////////////////////////
// {
//     "title": "title1",
//     "author": "author1",
//     "genre": "genre1"
//  }
/////////////////////////////////////////////////////
const getAllBooks = async (req, res) =>{
    try{
        const allBooks = await Book.findAll();
        res.status(200).json({ message: "success", books: allBooks });
    }
    catch(error) {
    //     const errorResponse = {
    //     errorMessage: error.message,
    //     error: error,
    // };
    // res.status(501).json(errorResponse);
    // }
    res.status(501).json({errorMessage:error.message, error: error});
    }
}
/////////////////////////////////////////////////////
const getSingleBookByTitle = async (req, res) => {
try{
    const getSingleBook = await Book.findOne ({where: { title:req.params.title}});
    res.status(200).json({message:"success", book: getSingleBook});
}
catch(error){
res.status(501).json({errorMessage: error.message, error: error});
    }
}
////////////////////////////////////////////////////
const deleteBook = async (req, res) => {
    try{
        const deleteBook = await Book.destroy ({where: { title:req.body.title}});
        res.status(201).json({message:"successfully deleted", book: deleteBook});
    }
    catch(error){
        res.status(501).json({errorMessage: error.message, error: error});
            }
} 
////////////////////////////////////////////////////
const deleteAllBooks = async (req, res) => {
    try{
        const deleteAllBook = await Book.destroy ({truncate: true});
        res.status(202).json({message:"successfully deleted", book: deleteAllBook});
    }
    catch(error){
        res.status(501).json({errorMessage: error.message, error: error});
            }
}
//////////////////////////////////////////////////////////
const updateBook=  async (req, res) => {
    try{
        const updateBook = await Book.update({[req.body.updateKey]: req.body.updateValue}, {where: {title: req.body.title}});
        res.status(201).json({message:"success", book: updateBook});
    }
    catch(error){
        res.status(501).json({errorMessage: error.message, error: error});
            }
}
//////////////////////////////////////////////////////////
// {
//     "title": "BookTitle",
//     "updateKey": "ThingYouWantUpdating",
//     "updateValue": "x"
// }
//////////////////////////////////////////////////////////


module.exports = {
    addBook,
    getAllBooks,
    getSingleBookByTitle,
    deleteBook, 
    deleteAllBooks,
    updateBook,
}