const model = require('../Models/model'); // Import your model

// Get Categories
async function create_Categories(req, res) {
    try {
        const newCategory = new model.Categories({
            type: "Savings",
            color: "#1F3B5C"
        });

        // Save the category and wait for the result
        const savedCategory = await newCategory.save();

        // Send the saved category as the response
        return res.json(savedCategory);
    } catch (err) {
        // Handle errors and send a response
        return res.status(400).json({ message: `Error while creating category: ${err.message}` });
    }
}


// Get Categories

async function get_Categories(req, res) {
    try {
        const data =await model.Categories.find({})
        return res.json(data)
    } catch (err) {
        // Handle errors and send a response
        return res.status(400).json({ message: `Error while getting category: ${err.message}` });
    }
}

module.exports = {
    create_Categories
};
