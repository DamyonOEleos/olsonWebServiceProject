/* 
Schema for authentication service
*/

const mongoose = require('mongoose')
const Schema = mongoose.schema

const authenticateSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    api_token: {
        type: String,
        required: true
    },
    menu_code: {
        type: String,
        required: false
    },
    dashboard_code: {
        type: String,
        required: false
    },
    custom_settings_form_code: {
        type: String,
        requitrd: false
    },
    username: {
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

module.exports = USER = mongoose.model('user', UserSchema)