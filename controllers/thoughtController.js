const {User, Thought} = require ('../models');

// Finds all thoughts
async function findAllThoughts (req, res) {
    try {
        const thoughtData = await Thought.find();
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    };
};

// Find a single thought by id
async function findThought (req, res) {
    try {
        const thoughtData = await Thought.findById(req.params.thoughtId);
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    };
};

// Create a new thought and add it to a users thought list
async function createThought (req, res) {
    try {
        const thoughtData = await Thought.create(req.body);
        await User.updateOne(
            { username: req.body.username },
            { $addToSet: { thoughts: thoughtData._id } }
        )
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    };
};

// Updates a thought's content
async function updateThought (req, res) {
    try {
        const thoughtData = await Thought.updateOne({_id: req.params.thoughtId}, req.body);
        res.status(200).json({message: 'Thought updated!'});
    } catch (err) {
        res.status(500).json(err);
    };
};

// Deletes a thought and removes it from a users thought list
async function deleteThought (req, res) {
    try {
        const thoughtData = await Thought.findById({_id: req.params.thoughtId})
        await Thought.deleteOne({_id: req.params.thoughtId})
        await User.updateOne(
        {username: thoughtData.username},
        {$pull: {thoughts: thoughtData._id}}
        ) 
        res.status(200).json({message: 'Thought deleted!'});
    } catch (err) {
        res.status(500).json(err);
    };
};

// Adds a reaction to the thought's reaction array
async function addReaction (req, res) {
    try {
        const thoughtData = await Thought.updateOne(
            {_id: req.params.thoughtId}, 
            {$addToSet: {reactions: req.body}}
        )
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err);
    };
};

// Removes the reaction from the thought's reaction array
async function deleteReaction (req, res) {
    try {
        const thoughtData = await Thought.updateOne(
            {_id: req.params.thoughtId}, 
            {$pull: {reactions: {_id: req.body.reactionId}} }
        )
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err);
    };
};

module.exports = {findAllThoughts, findThought, createThought, updateThought, deleteThought, addReaction, deleteReaction}