const PlantController = require('../controllers/plant.controller');

module.exports = function(app){
    app.get('/api', PlantController.index);
    app.post('/api/newplant', PlantController.createPlant);
}