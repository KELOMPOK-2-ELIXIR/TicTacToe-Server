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
    static signin(req, res, next){
        let {email, password} = req.body;
        
        User.findOne({
          where: {
            email
          }
        })
        .then(result => {
          if(result){
            let compare = checkPassword(password, result.password);
            
            console.log(compare)
            if(compare){
                    let token = generateToken({
                        id: result.id,
                        email: result.email
                    })
                    res.status(200).json({
                        token
                    })
                }
                else{
                    return next({
                        name: "BadRequest",
                        errors: [{message: "Invalid email or password"}]
                    })
                }
            }
            else{
                return next({
                    name: "BadRequest",
                    errors: [{message: "Invalid email or password"}]
                })
            }
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