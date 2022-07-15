const User = require("../model/model");

const UserController = {

    getAllUser : async (req, res) => {
        try{
            const Users = await User.find();
            res.status(200).json(Users);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    
    createUser : async (req, res) => {
        try{
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    getUser : async (req, res) => {
        try {
            const User = await User.findById(req.params.id)
            res.status(200).json(User);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    updateUser : async (req, res) => {
        try {
            const User = await User.findById(req.params.id);
            await User.updateOne({$set : req.body});
            res.status(200).json("Update Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },

    deleteUser : async (req, res) => {
        try {
            const User = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    }
};

module.exports = UserController
