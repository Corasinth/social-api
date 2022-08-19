const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Looks like you have no thoughts!'],
            min: [1, 'Your thought is too short'],
            max: [280, 'Your thought is too long']
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: new Date().toLocaleString()
        },
        username: {
            type: String,
            required: [true, 'A user is required to have a thought'],
            reactions: []
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
    }
)

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);
module.exports = Thought;