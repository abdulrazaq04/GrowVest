const {Schema} = require("mongoose");

const BalanceSchema = new Schema({
    amount: {
        type: Number,
        required: true
    }
});

module.exports = {BalanceSchema};