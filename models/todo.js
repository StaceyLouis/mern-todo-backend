const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    post:{
        required: true,
        type: String
    },
    checked:{
        type: Boolean
    }
})

module.exports = mongoose.model("Todo", todoSchema)
