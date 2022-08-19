const {User, Thought} = require ('../models');

async function findAllUsers (req, res) {
    try {
        let userData = await User.find();
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
};

async function findUser (req, res) {
    try {
        let userData = await User.findById(req.params.userId)
    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};


async function getUsers (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};



module.exports = {}