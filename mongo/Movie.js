const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rating: {
        type:Number,
        min: 1,
        max: 5
    },
    genre: [String],
    language: String,
    createdAt: {
        type: Date,
        immutable: true,//never change the created date we cann't manually change
        default: () => Date.now(),
    },                                                                                                                                                                                                                                                                                                              
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },                       
})

module.exports = mongoose.model("Movie", movieSchema)