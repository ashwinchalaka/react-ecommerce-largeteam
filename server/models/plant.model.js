const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    plant_name: { type: String },
    plant_description: { type: String },
    plant_price: { type: String }
}, { timestamps: true });

module.exports.Plant = mongoose.model('Plant', PlantSchema);
