"use strict"

const Model = require("../models/index.js");

const User = Model.User;

class ControllerUser{
    static signup(req, res, next){
        let {username} = req.body;
        let inputRoom = null;
        let input = null;
        User.findAll()
            .then(data => {
                if(data.length == 0){
                    inputRoom = 1;
                    input = {
                        username,
                        room: inputRoom
                    }
                }
                else if(data.length == 1){
                    inputRoom = Number(data[0].room)
                    input = {
                        username,
                        room: inputRoom
                    }
                }
                else if(data[data.length-1].room == data[data.length-2].room) {
                    inputRoom = Number(data[data.length-1].room) + 1
                    input = {
                        username,
                        room: inputRoom
                    }
                }
                else if(data[data.length-1].room != data[data.length-2].room){
                    inputRoom = Number(data[data.length-1].room)
                    input = {
                        username,
                        room: inputRoom
                    }
                }
                return User.create(input)
            })
            .then(result => {
                res.status(201).json({
                    user: result
                })
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }

    // static fetchDataBoard(req, res, next){
    //     let { roomId } = req.params
    //     let options = {
    //         where: {
    //             room: roomId
    //         }
    //     }
    //     User.findAll(options)
    //         .then(data => {
    //             res.status(200).json({
    //                 data
    //             })
    //         })
    //         .catch(err => {
    //             return next({
    //                 name: "InternalServerError",
    //                 errors: [{message: err}]
    //             });
    //         })
    // }

    static delete(req, res, next){
        let { id } = req.body
        User.destroy({
            where: {
                id
            }
        })
            .then(_ => {
                res.status(200).json({
                    message: `berhasil dihapus`
                })
            })
            .catch(err => {
                err
            })
    }

    // static updateUserBoard(req, res, next){

    // }

}
module.exports = ControllerUser;