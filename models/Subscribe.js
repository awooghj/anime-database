const mongoose = require("mongoose");

const SubscribeSchema = new mongoose.Schema({
  mal_id: {
    type: Number,
  },
  title: {
    type: String,
  },

  image_url: { type: String },
  airing: {
    type: Boolean,
  },
  synopsis: {
    type: String,
  },
  type: {
    type: String,
  },
  episodes: {
    type: Number,
  },
  score: {
    type: Number,
  },
  subsribers: {
    type: Number,
  },
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
});
module.exports = mongoose.model("Subscribe", SubscribeSchema);
