/*
Schema for messages service
*/

const mongoose = require('mongoose')
const { any } = require('webidl-conversions')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    direction: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    message_type: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    form_code: {
        type: String,
        required: false
    },
    form_data: [{
        property_name: {
            type: any,
            required: false
        },
    }],
    contact_code: {
        type: String,
        required: false
    },
    composed_at: {
        type: Date,
        required: false
    },
    read_at: {
        type: Date,
        required: false
    },
    deleted_at: {
        type: Date,
        required: false
    },
    in_reply_to_handle: {
        type: String,
        required: false
    },
    workflow_action: {
        type: Boolean,
        required: false
    },
    telemantics: [{
        tractor: {
            type: String,
            required: false
        },
        trailers: {
            type: String,
            required: false
        },
        odometer: {
            type: String,
            required: false
        },
        location: [{
            latitude: {
                type: Number,
                required: false
            },
            longitude: {
                type: Number,
                required: false
            },
        }],
    }],
    server_validation_request: {
        type: Boolean,
        required: false
    },
    server_validation_status: {
        type: String,
        required: false
    },
})