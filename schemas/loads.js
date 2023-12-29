const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LoadsSchema = new Schema({
    id : {
        type: String,
        required: true
    },
    form_codes : {
        type: Array,
        required: false
    },
    display_identifier : {
        type: String,
        required: true
    },
    display_identifier_title : {
        type: String,
        required: false
    },
    sort : {
        type: Number,
        required: true
    },
    order_number : {
        type: String,
        required: true
    },
    dispatch : {
        type: String,
        required: false
    },
    load_status : {
        type: String,
        required: true
    },
    load_status_label : {
        type: String,
        required: true
    },
    load_status_title : {
        type: String,
        required: false
    },
    active : {
        type: Boolean,
        required: true
    },
    current : {
        type: Boolean,
        required: true
    },
    hazmat : {
        type: Boolean,
        required: false
    },
    check_date : {
        type: Date,
        required: false
    },
    customer_name : {
        type: String,
        required: false
    },
    special_notes : {
        type: String,
        required: false
    },
    pickup_title : {
        type: String,
        required: false
    },
    stop_list_label : {
        type: String,
        required: false
    },
    shipper : {
        stop_number : {
            type: String,
            required: true
        },
        stop_type : {
            type: String,
            required: true
        },
        stop_type_label : {
            type: String,
            required: true
        },
        current : {
            type: Boolean,
            required: false
        },
        stop_status : {
            type: String,
            required: false
        },
        name : {
            type: String,
            required: true
        },
        address : {
            type: String,
            required: false
        },
        city : {
            type: String,
            required: true
        },
        state : {
            type: String,
            required: true
        },
        postal_code : {
            type: String,
            required: false
        },
        location : {
            latitude : {
                type: Number,
                required: true
            },
            longitude : {
                type: Number,
                required: true
            }
        },
        product : {
            type: String,
            required: false
        },
        pieces : {
            type: Number,
            required: false
        },
        pallets : { 
            type: Number,
            required: false
        },
        show_current_location : {
            type: Boolean,
            required: false
        },
        prevent_navigation : {
            type: Boolean,
            required: false
        },
        prevent_location_changes : {
            type: Boolean,
            required: false
        },
        enable_map_interaction_in_navigation : {
            type: Boolean,
            required: false
        },
        allow_reporting_issue_in_navigation : {
            type: Boolean,
            required: false
        },
        time_window : {
            from : {
                type: Date,
                required: true
            },
            to : {
                type: Date,
                required: true
            }
        },
        identifiers : [
            {
                label : {
                    type: String,
                    required: true
                },
                value : {
                    type: String,
                    required: true
                }
            }
        ],
        contact : {
            name : {
                type: String,
                required: false
            },
            phone_number : {
                type: String,
                required: false
            }
        },
        truck : {
            type : {
                type: String,
                required: false
            },
            height : {
                type: Number,
                required: false
            },
            width : {
                type: Number,
                required: false
            },
            length : {
                type: Number,
                required: false
            },
            limited_weight : {
                type: Number,
                required: false
            },
            weight_per_axle :{
                type: Number,
                required: false
            },
            trailer_count : {
                type: Number,
                required: false
            },
            tunnel_category : {
                type: String,
                required: false
            },
            hazardous_types : {
                type: Array,
                required: false
            },
            traffic_rerouting : {
                type: Boolean,
                required: false
            }
        },
        route_options : {
            avoid_dirt_roads : {
                type: Boolean,
                required: false
            },
            avoid_toll_roads : {
                type: Boolean,
                required: false
            },
            avoid_tunnels : {
                type: Boolean,
                required: false
            }
        }
    },
    stops : [
        {
            stop_number : {
                type: Number,
                required: true
            },
            stop_type : {
                type: String,
                required: true
            },
            stop_type_label : {
                type: String,
                required: false
            },
            current : {
                type: Boolean,
                required: false
            },
            stop_status : {
                type: String,
                required: false
            },
            name : {
                type: String,
                required: true
            },
            address : {
                type: String,
                required: false
            },
            city : {
                type: String,
                required: true
            },
            state : {
                type: String,
                required: true
            },
            postal_code : {
                type: String,
                required: false
            },
            location : {
                latitude : {
                    type: Number,
                    required: true
                },
                longitude : {
                    type: Number,
                    required: true
                }
            },
            product : {
                type: String,
                required: false
            },
            pieces : {
                type: Number,
                required: false
            },
            pallets : {
                type: Number,
                required: false
            },
            show_current_location : {
                type: Boolean,
                required: false
            },
            prevent_navigation : {
                type: Boolean,
                required: false
            },
            prevent_location_changes : {
                type: Boolean,
                required: false
            },
            enable_map_interaction_in_navigation : {
                type: Boolean,
                required: false
            },
            allow_reporting_issue_in_navigation : {
                type: Boolean,
                required: false
            },
            time_window : {
                from : {
                    type: Date,
                    required: true
                },
                to : {
                    type: Date,
                    required: true
                }
            },
            identifiers : [
                {
                    label : {
                        type: String,
                        required: true
                    },
                    value : {
                        type: String,
                        required: true
                    }
                }
            ],
            contact : {
                name : {
                    type: String,
                    required: false
                },
                phone_number : {
                    type: String,
                    required: false
                }
            },
            truck : {
                type : {
                    type: String,
                    required: false
                },
                height : {
                    type: Number,
                    required: false
                },
                width : {
                    type: Number,
                    required: false
                },
                length : {
                    type: Number,
                    required: false
                },
                limited_weight : {
                    type: Number,
                    required: false
                },
                weight_per_axle : {
                    type: Number,
                    required: false
                },
                trailer_count : {
                    type: Number,
                    required: false
                },
                tunnel_category : {
                    type: String,
                    required: false
                },
                hazardous_types : {
                    type: Array,
                    required: false
                },
                traffic_rerouting : {
                    type: Boolean,
                    required: false
                }
            },
            route_options : {
                avoid_dirt_roads : {
                    type: Boolean,
                    required: false
                },
                avoid_toll_roads : {
                    type: Boolean,
                    required: false
                },
                avoid_tunnels : {
                    type: Boolean,
                    required: false
                }
            }
        }
    ],
    consignee : {
        stop_number : {
            type: Number,
            required: true
        },
        stop_type : {
            type: String,
            required: true
        },
        stop_type_label : {
            type: String,
            required: false
        },
        current : {
            type: Boolean,
            required: false
        },
        stop_status : {
            type: String,
            required: false
        },
        name : {
            type: String,
            required: true
        },
        address : {
            type: String,
            required: false
        },
        city : {
            type: String,
            required: true
        },
        state : {
            type: String,
            required: true
        },
        postal_code : {
            type: String,
            required: false
        },
        location : {
            latitude : {
                type: Number,
                required: true
            },
            longitude : {
                type: Number,
                required: true
            }
        },
        product : {
            type: String,
            required: false
        },
        pieces : {
            type: Number,
            required: false
        },
        pallets : {
            type: Number,
            required: false
        },
        show_current_location : {
            type: Boolean,
            required: false
        },
        prevent_location_changes : {
            type: Boolean,
            required: false
        },
        enable_map_interaction_in_navigation : {
            type: Boolean,
            required: false
        },
        allow_reporting_issue_in_navigation : {
            type: Boolean,
            required: false
        },
        time_window : {
            from : {
                type: String,
                required: true
            },
            to : {
                type: String,
                required: true
            }
        },
        identifiers : {
            label : {
                type: String,
                required: true
            },
            value : {
                type: String,
                required: true
            }
        },
        contact : {
            name : {
                type: String,
                required: false
            },
            phone_number : {
                type: String,
                required: false
            }
        },
        truck : {
            type : {
                type: String,
                required: false
            },
            height : {
                type: Number,
                required: false
            },
            width : {
                type: Number,
                required: false
            },
            length : {
                type: Number,
                required: false
            },
            limited_weight : {
                type: Number,
                required: false
            },
            weight_per_axle : {
                type: Number,
                required: false
            },
            trailer_count : {
                type: Number,
                required: false
            },
            tunnel_category : {
                type: String,
                required: false
            },
            hazardous_types : {
                type: Array,
                required: false
            },
            traffic_rerouting : {
                type: Boolean,
                required: false
            }
        },
        route_options : {
            avoid_dirt_roads : {
                type: Boolean,
                required: false
            },
            avoid_toll_roads : {
                type: Boolean,
                required: false
            },
            avoid_tunnels : {
                type: Boolean,
                required: false
            }
        }
    },
    fields : [
        {
            label : {
                type: String,
                required: true
            },
            value : {
                type: String,
                required: true
            }
        }
    ],
    attachments : [
        {
            id : {
                type: String,
                required: false
            }
        }
    ],
    truck : {
        type : {
            type: String,
            required: false
        },
        height : {
            type: Number,
            required: false
        },
        width : {
            type: Number,
            required: false
        },
        length : {
            type: Number,
            required: false
        },
        limited_weight : {
            type: Number,
            required: false
        },
        weight_per_axle : {
            type: Number,
            required: false
        },
        trailer_count : {
            type: Number,
            required: false
        },
        tunnel_category : {
            type: String,
            required: false
        },
        hazardous_types : {
            type: Array,
            required: false
        },
        traffic_rerouting : {
            type: Boolean,
            required: false
        }
    },
    prevent_navigation : {
        type: Boolean,
        required: false
    },
    prevent_trip_edits : {
        type: Boolean,
        required: false
    },
    route_options : {
        avoid_dirt_roads : {
            type: Boolean,
            required: false
        },
        avoid_toll_roads : {
            type: Boolean,
            required: false
        },
        avoid_tunnels : {
            type: Boolean,
            required: false
        },
        hide_total_miles : {
            type: Boolean,
            required: false
        }
    },
    hide_total_miles : {
        type: Boolean,
        required: false
    },
    trip_planner_enabled : {
        type: Boolean,
        required: false
    },
    enable_location_updates : {
        type: Boolean,
        required: false
    },
    location_updates_interval : {
        type: Boolean,
        required: false
    },
    location_updates_display_name : {
        type: String,
        required: false
    },
    allow_background_location_updates : {
        type: Boolean,
        required: false
    },
    stickers : [
        {
            icon_ref : {
                type: String,
                required: true
            },
            label : {
                type: String,
                required: true
            },
            color : {
                type: String,
                required: false
            }
        }
    ],
    include_in_compliance_report : {
        type: Boolean,
        required: false
    },
    workflow_code : {
        type: String,
        required: false
    },
    poi_search_layers : {
        type: Array,
        required: false
    },
    lobal_poi_search_layers : {
        type: Array,
        required: false
    },
    trip_policies : [
        {
            code : {
                type: String,
                required: true
            },
            mute_reason_required : {
                type: Boolean,
                required: false
            }
        }
    ],
    router : {
        engine : {
            type: String,
            required: true
        },
        enable_fallback : {
            type: Boolean,
            required: false
        },
        route_failure_message : {
            type: String,
            required: false
        }
    },
    enable_map_interaction_in_navigation : {
        type: Boolean,
        required: false
    },
    llow_reporting_issue_in_navigation : {
        type: Boolean,
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

module.exports = LOADS = mongoose.model('Loads', LoadsSchema)