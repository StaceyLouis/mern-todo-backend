const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type: String
    },
    checked:{
        type: Boolean
    }
}, {collection: "posts"})

const MyModel = mongoose.model("Todo", todoSchema)

module.exports = MyModel


