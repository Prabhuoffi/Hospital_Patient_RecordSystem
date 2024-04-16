const User = require("../models/userModel");

exports.loginUser = function(req, res) {
    const { email, password } = req.body;
    User.findOne({ email: email }).then(function(user) {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login success", user: user });
            } else {
                res.send({ message: "Wrong credentials" });
            }
        } else {
            res.send("Not registered");
        }
    }).catch(function(err) {
        res.status(500).send("Internal server error");
    });
};

exports.registerUser = function(req, res) {
    const { name, email, password } = req.body;
    User.findOne({ email: email }).then(function(user) {
        if (user) {
            res.send({ message: "User already exists" });
        } else {
            const newUser = new User({ name, email, password });
            newUser.save().then(function() {
                res.send({ message: "Successfully registered" });
            }).catch(function(err) {
                res.status(500).send("Internal server error");
            });
        }
    }).catch(function(err) {
        res.status(500).send("Internal server error");
    });
};
