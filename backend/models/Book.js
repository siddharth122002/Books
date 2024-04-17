const mongoose = require('mongoose');
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image:{
      type:String,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    summary:{
      type:String,
    },
    genre:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;