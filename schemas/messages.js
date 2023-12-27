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
    },
    body : {
        type: String,
        required: false
    },
    form_code : {
        type: String,
        required: false
    },
    contact_code : {
        type: String,
        required: false
    },
    composed_at : {
        type: Date,
        required: false
    },
    read_at : {
        type: Date,
        required: false
    },
    deleted_at : {
        type: Date,
        required: false
    },
    in_reply_to_handle : {
        type: String,
        required: false
    },
    workflow_action : {
        type: Boolean,
        requird: false
    },
    telemantics : {
        tractor : {
            type: String,
            required: false
        },
        trailers : {
            type: Array,
            required: false
        },
        odometer : {
            type: Number,
            required: false
        },
        location : {
            latitude : {
                type: Number,
                required: false
            },
            longitude : {
                type: Number,
                requird: false
            }
        }
    },
    server_validation_request : {
        type: Boolean,
        required: false
    },
    server_validation_status : {
        type: String,
        requird: false
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

module.exports = MESSAGES = mongoose.model('Messages', MessagesSchema)