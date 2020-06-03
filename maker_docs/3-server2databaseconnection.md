# > maker_docs/3-server2databaseconnection.md

<!-- _Note: For all ```commands``` below, type them into terminal, unless it specifies to insert them into a file._ -->

#### 1. Notes

* 

	```//```

#### 2. Mongoose configuration
* 
	
	```
	const mongoose = require('mongoose');
	mongoose.connect("mongodb://localhost/plantshopdb", {
	    useNewUrlParser: true,
	    useUnifiedTopology: true,
	})
	    .then(() => console.log("Established a connection to the database"))
	    .catch(err => console.log("Something went wrong when connecting to the database", err));
	```

#### 3. Models file configuration
* 
	
	```
	const mongoose = require('mongoose');
	const PersonSchema = new mongoose.Schema({
	    firstName: { type: String },
	    lastName: { type: String }
	}, { timestamps: true });
	module.exports.Person = mongoose.model('Person', PersonSchema);
	```

#### 4. Server.js re-configuration
* 
	
	```
	const express = require('express');
	const cors = require('cors');
	const app = express();
	require('./server/config/mongoose.config'); // This is new
	app.use(cors());
	app.use(express.json()); // This is new
	app.use(express.urlencoded({ extended: true })); // This is new
	require('./server/routes/person.routes')(app);
	app.listen(8000, () => {
	    console.log("Listening at Port 8000")
	})
	```

#### 5. Controllers file configuration
* 
	
	```
	const { Person } = require('../models/person.model');
	module.exports.index = (request, response) => {
	    response.json({
	        message: "Hello World"
	    });
	}
	    // The method below is new
	module.exports.createPerson = (request, response) => {
	    const { firstName, lastName } = request.body;
	    Person.create({
	        firstName,
	        lastName
	    })
	        .then(person => response.json(person))
	        .catch(err => response.json(err));
	}
	```

#### 6. Routes file configuration
* 
	
	```
	const PersonController = require('../controllers/person.controller');
	module.exports = function(app){
	    app.get('/api', PersonController.index);
	    app.post('/api/people', PersonController.createPerson);
	}
	```

#### 7. Summary
* 	