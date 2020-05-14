"use strict"

const Model = require("../models/index.js");

const User = Model.User;

class ControllerUser{
    static signup(req, res, next){
        let {username} = req.body;

        User.create({
            username
        })
        .then(data => {
            res.status(201).json({
                username: data.username
            })

        })
        .catch(err => {
            return next({
                name: "InternalServerError",
                errors: [{message: err}]
            });
        })
    }
}
module.exports = ControllerUser;