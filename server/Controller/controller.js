import { model } from "mongoose";
import { Categories,Transaction} from "../Models/model.js"; // Import your Categories model

// Create Categories
export async function create_Categories(req, res) {
  try {
    const newCategory = new Categories({
      type: "Investment",
      color: "#FCBE44",
    });

    // Save the category and wait for the result
    const savedCategory = await newCategory.save();

    // Send the saved category as the response
    return res.json(savedCategory);
  } catch (err) {
    // Handle errors and send a response
    return res
      .status(400)
      .json({ message: `Error while creating category: ${err.message}` });
  }
}

// Get Categories
export const get_Categories = async (req, res) => {
  try {
    const category = await Categories.find({});
    const filter = await category.map((v) =>
      Object.assign({}, { type: v.type, color: v.color })
    );
    return res.json(filter);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: false,
      error,
      message: `Error while getting category`,
    });
  }
};

// Create Transaction
export const create_Transaction = async (req, res) => {
    try {
      // Destructure input data from request body
      const { name, type, amount } = req.body;
  
      // Validate input data (basic validation example)
      if (!name || !type || !amount) {
        return res.status(400).json({ message: 'All fields (name, type, amount) are required.' });
      }
  
      // Create a new transaction instance
      const newTransaction = new Transaction({
        name,
        type,
        amount,
        date: new Date(),
      });
  
      // Save the transaction to the database
      const savedTransaction = await newTransaction.save();
  
      // Send the saved transaction as the response
      return res.json(savedTransaction);
    } catch (error) {
      console.error('Error while creating transaction:', error);
      res.status(400).send({
        status: false,
        error,
        message: 'Error in transaction creation',
      });
    }
  };

  //GEt Transaction
  export const get_Transaction = async (req, res) => {
    try {
      const transaction = await Transaction.find({});
      return res.json(transaction);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: false,
        error,
        message: `Error while getting transaction`,
      });
    }
  };

  export const delete_Transaction = async (req, res) => {
    try {
      // Check if ID is provided in the request body
      if (!req.body || !req.body.id) {
        return res.status(400).json({ message: 'Request body or ID not found' });
      }
  
      // Delete the transaction by ID
      const result = await Transaction.deleteOne({ _id: req.body.id });
  
      // Check if a document was deleted
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Transaction not found.' });
      }
  
      // Return success response
      return res.json({ message: 'Record Deleted' });
    } catch (error) {
      console.error('Error while deleting transaction:', error);
      res.status(400).send({
        status: false,
        error,
        message: 'Error while deleting transaction',
      });
    }
  };