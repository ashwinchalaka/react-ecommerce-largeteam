const PlantController = require('../controllers/plant.controller');

module.exports = function(app){
    app.get('/api', PlantController.index);
    app.get('/api/plants', PlantController.getAllPlants);
    app.post('/api/newplant', PlantController.createPlant);
    app.get('/api/plant/:id', PlantController.getPlantByID);
}