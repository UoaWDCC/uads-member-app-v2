import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
}, {
    timestamps: {},
});

const Event = model('Event', eventSchema);

export default Event;
