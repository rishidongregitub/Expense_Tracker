import { Categories, Transaction } from "../Models/model.js"; // Import your models

// Create Category
export async function create_Categories(req, res) {
  try {
    const newCategory = new Categories({
      type: "Investment",
      color: "#FCBE44",
    });

    // Save the category and return the result
    const savedCategory = await newCategory.save();
    return res.json(savedCategory);
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Error while creating category: ${err.message}` });
  }
}

// Get Categories
export const get_Categories = async (req, res) => {
  try {
    const categories = await Categories.find({});
    const filteredCategories = categories.map((category) => ({
      type: category.type,
      color: category.color,
    }));
    return res.json(filteredCategories);
  } catch (error) {
    console.error("Error while getting categories:", error);
    return res
      .status(400)
      .json({ message: "Error while getting categories", error });
  }
};

// Create Transaction
export const create_Transaction = async (req, res) => {
  try {
    const { name, type, amount } = req.body;

    if (!name || !type || !amount) {
      return res
        .status(400)
        .json({ message: "All fields (name, type, amount) are required." });
    }

    const newTransaction = new Transaction({
      name,
      type,
      amount,
      date: new Date(),
    });

    const savedTransaction = await newTransaction.save();
    return res.json(savedTransaction);
  } catch (error) {
    console.error("Error while creating transaction:", error);
    return res
      .status(400)
      .json({ message: "Error in transaction creation", error });
  }
};

// Get Transactions
export const get_Transaction = async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    return res.json(transactions);
  } catch (error) {
    console.error("Error while getting transactions:", error);
    return res
      .status(400)
      .json({ message: "Error while getting transactions", error });
  }
};

// Delete Transaction
export const delete_Transaction = async (req, res) => {
  try {
    const result = await Transaction.deleteOne(req.body);
    return res.json({ message: "Record Deleted" });
  } catch (error) {
    console.error("Error while deleting transaction:", error);
    return res
      .status(400)
      .json({ message: "Error while deleting transaction", error });
  }
};

// Get Labels
export const get_Labels = async (req, res) => {
  try {
    // Perform aggregation
    const result = await Transaction.aggregate([
      {
        $lookup: {
          from: "categories", // Ensure this matches the actual collection name
          localField: "type", // Field in the Transaction collection
          foreignField: "type", // Field in the Categories collection
          as: "categories_info",
        },
      },
      { $unwind: "$categories_info" },
      {
        $project: {
          name: 1,
          type: 1,
          amount: 1,
          date: 1,
          categories_info: 1,
        },
      },
    ]);

    // Map the result to include the desired fields
    const data = result.map(v => ({
      _id: v._id,
      name: v.name,
      type: v.type,
      amount: v.amount,
      color: v.categories_info.color, // Extracting the color field
    }));

    return res.json(data);
  } catch (error) {
    console.error("Error while getting labels:", error);
    return res.status(400).json({ message: "Error while getting labels", error });
  }
};
