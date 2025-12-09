const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  location: String,
  country: String,
  image: {
    filename: {
      type: String,
      set: (v) => 
        v===""
      ? "https://unsplash.com/photos/misty-forest-with-bare-trees-at-dawn-PtIizuxAk2k"
      : v,
  
    },
      url: {
      type: String,
    
    }
  }
});

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;



