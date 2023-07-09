const mongoose = require('mongoose');
const schema = mongoose.Schema

const ClientSchema = new schema({
    name: {
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
})

const ClientModel = mongoose.model('ClientModel',ClientSchema)

module.exports  = ClientModel;