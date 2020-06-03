const { Plant } = require('../models/plant.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createPlant = (request, response) => {
    const { plant_name, plant_description, plant_price } = request.body;
    Plant.create({
        plant_name,
        plant_description,
        plant_price
    })
        .then(plant => response.json(plant))
        .catch(err => response.json(err));
}