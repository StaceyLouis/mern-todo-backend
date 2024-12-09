const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type: String
    },
    checked:{
        type: Boolean
    }
}, {collection: "posts"})


module.exports = mongoose.model("Todo", todoSchema)


