const User = require("../sys_2_models/models_users");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render("users", { users });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.getUserByName = async (req, res) => {
    try {
        const users = await User.find({ name: req.params.name });

        res.render("users", { users });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.searchUsers = async (req, res) => {
    try {
        const namesParam = req.query.names;

        if (!namesParam) {
            return res.status(400).send("names query parameter is required");
        }

        const namesArray = namesParam.split(",");

        const users = await User.find({
            name: { $in: namesArray }
        });

        res.render("users", { users });

    } catch (error) {
        res.status(500).send(error.message);
    }
};