// models/QrImage.js
const mongoose = require("mongoose");

const qrSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true }
}, { timestamps: true });

// This makes sure only ONE document exists ever
qrSchema.statics.getOrCreate = async function() {
  let qr = await this.findOne();
  if (!qr) {
    qr = await this.create({ imageUrl: "" });
  }
  return qr;
};

module.exports = mongoose.model("QrImage", qrSchema);