import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      required: true,
    },
    eventDescription: {
      type: String,
      required: true,
    },
    dateOfEvent: {
      type: Date,
      required: true,
    },
    eventImage: {
      type: String,
    },
    eventLocation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {},
  }
);

const Event = model("Event", eventSchema);
export default Event;
