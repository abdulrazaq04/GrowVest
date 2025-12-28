const {model} = require("mongoose");
const {BalanceSchema} = require("../schema/BalanceSchema");

const BalanceModel = new model("balance", BalanceSchema);

module.exports = {BalanceModel};