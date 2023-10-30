/*
Schema for loads service
*/

const mongoose = require('mongoose')

const LoadsSchema = new schema({
    id: {
        type: String,
        required: true
    },
    display_identifier: {
        type: String,
        required: true
    },
    sort: {
        type: Number,
        required: true
    },
    order_number: {
        type: String,
        required: true
    },
    load_status: {
        type: String,
        required: true
    },
    load_status_label: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    current: {
        type: Boolean,
        required: true
    },
    stops: [
        {
            stop_number: {
                type: Number,
                required: true
            },
            stop_type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            location: {
                latitude: {
                    type: Number,
                    required: true
                },
                longitude: {
                    type: Number,
                    required: false
                },
                _id: false
            },
            _id: false,
            identifiers: [{
                lable: {
                    type: String,
                    required: true
                },
                value: {
                    type: String,
                    required: true
                },
                _id: false
            }]
        },
    ],
    trip_planner_enabled: {
        type: Boolean,
        required: false
    }
}, {
    toJSON: {
        transform(doc, rec) {
            delete ret._id;
        },
        versionKey: false,
    },
})