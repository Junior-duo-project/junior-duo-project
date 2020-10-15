const mongoose = require("mongoose");
let blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    description: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});



module.exports  = mongoose.model('Blog', blogSchema);