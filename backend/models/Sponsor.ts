import { Schema, model } from "mongoose";

const sponsorSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sponsorDescription: {
      type: String,
    },
    discountDescription: {
      type: String,
      required: true,
    },
    sponsorWebsite: {
      type: String,
    },
  },
  {
    timestamps: {},
  }
);

const Sponsor = model("Sponsor", sponsorSchema);

export default Sponsor;
