const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  EventName: {
    type: String,
    require: true,
    unique: true,
  },
  EventDetail: {
    type: String,
    require: true,
  },
  Prize: {
    type: string,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  venue: {
    type: string,
    require: true,
  },
});

const eventModel = new mongoose.model("event", EventSchema);

module.exports = eventModel;
