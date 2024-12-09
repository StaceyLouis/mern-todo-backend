const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    checked:{
        type: Boolean
    }
}, {collection: "posts"})

const MyModel = mongoose.model("Todo", todoSchema)

module.exports = MyModel

for (let i = 1; i <= 10; i++) {
    const newDocument = new MyModel({
        title: `Task ${i}`,
        checked: false
    });

    newDocument.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Document ${i} saved`);
        }
    });
}

