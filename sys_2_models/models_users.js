const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String
}, {
    collection: "tbl_users"
});

module.exports = mongoose.model("User", userSchema);