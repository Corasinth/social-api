const {Schema, model} = require('mongoose');

//Formats the timestamp
function dateFormatter(timestamp) {
    let dateArray = timestamp.toString().split(' ')
    return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]} at ${dateArray[4]}`
}

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
            get: dateFormatter
        }
    }, 
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

module.exports = {reactionSchema, dateFormatter};