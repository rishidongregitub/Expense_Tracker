import mongoose from 'mongoose';

const { Schema } = mongoose;

// Categories => field => [type, color]
const categories_model = new Schema({
    type: {
        type: String,
        default: "Investment"
    },
    color: {
        type: String,
        default: "#FCBE44"
    }
});

// Transaction => field => [name, type, amount, date]
const transaction_model = new Schema({
    name: {
        type: String,
        default: "Anonymous"
    },
    type: {
        type: String,
        default: "Investment"
    },
    amount: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Categories = mongoose.model('categories', categories_model);
const Transaction = mongoose.model('transaction', transaction_model);

// Export the models
export { Categories, Transaction };
export default Transaction;