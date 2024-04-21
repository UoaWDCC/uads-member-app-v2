import { Schema, model } from 'mongoose';

const sponsorSchema = new Schema({
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

const Sponsor = model('Sponsor', sponsorSchema);

export default Sponsor;
