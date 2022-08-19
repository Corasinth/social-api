const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: [true, 'You must have an actual reaction'],
            max: [280, 'Exceeded maximum character limit of 280']
        },
        username: {
            type: String,
            required: [true, 'There must be an originating user']
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: new Date().toLocaleDateString()
        }
    }, 
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const Reaction = model('reaction', reactionSchema);
module.exports = Reaction;