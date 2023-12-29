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
    web_token : {
        type: String,
        required: false
    },
    billing_code : {
        type: String,
        required: false
    },
    billing_description : {
        type: String,
        required: false
    },
    billing_type : {
        type: String,
        required: false
    },
    menu : {
        menu_items : [
            {
                type : {
                    type: String,
                    required: true
                },
                properties : {
                    url : {
                        type: String,
                        required: true
                    },
                    app_url : {
                        android : {
                            type: String,
                            required: false
                        },
                        ios : {
                            type : String,
                            required: false
                        }
                    },
                    fallback_url : {
                        android : {
                            type: String,
                            required: false
                        },
                        ios : {
                            type: String,
                            required: false
                        }
                    },
                    external_browser : {
                        type: Boolean,
                        required: false
                    },
                    authenticate : {
                        type: Boolean,
                        required: false
                    },
                    metadata_form_code : {
                        type: String,
                        required: false
                    },
                    scan_type : {
                        type: String,
                        required: false
                    },
                    add_page_uses_document_type : {
                        type: Boolean,
                        required: false
                    },
                    form_code : {
                        type: String,
                        required: false
                    },
                    library : {
                        type: String,
                        required: false
                    },
                    news_feed : {
                        type: String,
                        required: false
                    },
                    screen_code : {
                        type: String,
                        required: false
                    },
                    telephone_number : {
                        type: String,
                        required: false
                    },
                    batch : {
                        type: Boolean,
                        required: false
                    },
                    batch_copy_properties : {
                        type: Array,
                        required: false
                    },
                    bath_prompt : {
                        text : {
                            type: String,
                            required: false
                        },
                        affirmative_caption : {
                            type: String,
                            required: false
                        },
                        negative_caption : {
                            type: String,
                            required: false
                        }
                    }
                },
                label : {
                    type: String,
                    required: false
                },
                icon_ref : {
                    type: String,
                    required: false
                }
            }
        ]
    },
    menu_code : {
        type: String,
        required: false
    },
    dashboard : {
        logo_ref : {
            type: String,
            required: false
        },
        dashboard_items : [
            {
                type : {
                    type: String,
                    required: true
                },
                header : {
                    type: String,
                    required: false
                },
                icon_ref : {
                    type: String,
                    required: false
                },
                properties : {
                    status_summaries : [
                        {
                            label : {
                                type: String,
                                required: true
                            },
                            code : {
                                type: String,
                                required: true
                            }
                        }
                    ],
                    news_feed : {
                        type: String,
                        required: false
                    },
                    truck_locator_label : {
                        type: String,
                        required: false
                    },
                    payroll_summary : [
                        {
                            label : {
                                type: String,
                                required: true
                            },
                            label_type : {
                                type: String,
                                required: false
                            },
                            value : {
                                type: String,
                                required: false
                            },
                            value_type : {
                                type: String,
                                required: false
                            }
                        }
                    ],
                    text : {
                        type: String,
                        required: false
                    },
                    info_image : {
                        position : {
                            type: String,
                            required: false
                        },
                        url : {
                            type: String,
                            required: true
                        }
                    },
                    action_codes : {
                        type: String,
                        required: false
                    },
                    carousel : {
                        rotation_time : {
                            type: Number,
                            required: false
                        }
                    },
                    show_current_load : {
                        type: Boolean,
                        required: false
                    },
                    show_current_stop : {
                        type: Boolean,
                        required: false
                    }
                }
            }
        ]
    },
    dashboard_code : {
        type : String,
        required: false
    },
    custom_settings_form_code : {
        type: String,
        required: false
    },
    telematics : {
        provider : {
            type: String,
            required: true
        },
        legacy_geotab : {
            type: Boolean,
            required: false
        },
        confirm_license : {
            type: Boolean,
            required: false
        },
        username : {
            type: String,
            required: false
        },
        security_group : {
            type: String,
            required: false
        },
        license_number : {
            type: String,
            required: false
        },
        license_state : {
            type: String,
            required: false
        },
        dot_number : {
            type: String,
            required: false
        },
        authority_name : {
            type: String,
            required: false
        },
        authority_address : {
            type: String,
            required: false
        },
        company_name : {
            type: String,
            required: false
        },
        company_address : {
            type: String,
            required: false
        },
        prompt_on_logout : {
            type: Boolean,
            required: false
        },
        team_drivers_enabled : {
            type: Boolean,
            required: false
        },
        manage_shipments : {
            type: Boolean,
            required: false
        },
        hours_of_service_rules : {
            type: String,
            required: true
        }
    },
    bypass : {
        provider : {
            type: String,
            required: true
        },
        server_url : {
            type: String,
            required: true
        },
        //CONTINUE HERE!!!!!
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
            delete password;
        },
        versionKey: false,
    },
    collection: 'authentication'
})

module.exports = USERS = mongoose.model('Users', UsersSchema)