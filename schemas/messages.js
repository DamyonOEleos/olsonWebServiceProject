const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessagesSchema = new Schema({
    direction : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    message_type : {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret._id;
        },
        versionKey: false,
    },
    collection: 'messages'
})

module.exports = MESSAGES = mongoose.model('Messages', UsersSchema)