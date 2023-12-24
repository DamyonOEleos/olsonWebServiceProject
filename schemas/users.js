const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    full_name : {
        type: String,
        required: true
    },
    api_token : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: false
    },
    password : {
        type: String,
        required: false
    }
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret._id;
        },
        versionKey: false,
    },
})

module.exports = USERS = mongoose.model('Users', UsersSchema)