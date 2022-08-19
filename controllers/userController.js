const {User, Thought} = require ('../models');

//Get all users
async function findAllUsers (req, res) {
    try {
        const userData = await User.find();
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
};

//Get a user by given ID
async function findUser (req, res) {
    try {
        const userData = await User.findById(req.params.userId)
        .select('-__v')
        .populate('thoughts')
        .populate('friends');

        if (!userData) {
            res.status(404).json('No user found!');
        };

        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
};

async function createUser (req, res) {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
};

async function updateUser (req, res) {
    try {
        const userData = await User.updateOne({_id: req.params.userId}, req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
};

async function deleteUser (req, res) {
    try {
        const userData = await User.findById(req.params.userId)
        await User.deleteOne({_id: req.params.userId});
        await Thought.deleteMany({username: userData.username})
        res.status(200).json(userData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    };
};

async function addFriend (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};


async function removeFriend (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

module.exports = {findAllUsers, findUser, createUser, updateUser, deleteUser, addFriend, removeFriend}