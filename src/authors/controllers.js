const Author = require ("./model")
const Book = require("../books/model");

////////////////////////////////////////////////////////
const addAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json({message:"success", author: author});
    }
    catch (error){   
    res.status(501).json({errorMessage:error.message, error: error});
    }
}
/////////////////////////////////////////////////////////
// {
//     "authorName":"craig"
//   }
///////////////////////////////////////////////////////
const getAuthorAndBooks = async (req, res) => {
    try{
        const author = await Author.findOne ({
            where: { authorName:req.params.author},
            include: Book,
        });
        res.status(200).json({message:"success", author: author});
    }
    catch(error){
    res.status(501).json({errorMessage: error.message, error: error});
        }
    }
////////////////////////////////////////////////////////
module.exports = {
    addAuthor,
    getAuthorAndBooks,
}