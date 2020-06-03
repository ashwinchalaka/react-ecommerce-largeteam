# > maker_docs/2-server2frontendconnection.md

<!-- _Note: For all ```commands``` below, type them into terminal, unless it specifies to insert them into a file._ -->

#### 1. Folder structure setup

* Notes:
	* Now we are going to create our back-end
	* We are organizing it so that it is sustainable for a large project and for a large team
	* We divide up our server files (besides server.js) into 1. configuration, 2. controllers, 3. models, and 4. routes
	* Configuration files
		* 
	* Controller files
		* 
	* Model files
		* 
	* Router files
		* 
	* Example
		* 
	* NOTE: Don't worry about understanding these 100% right away. Anything that comes to mind that makes sense is good for now. We will revisit what each of these do and when you create your files, it will come together one layer at a time.

* Create the following folder structure

	```
	> server
		> config
		> controllers
		> models
		> routes
	```

* Commands:
		
	```
	mkdir server
	cd server
	mkdir config
	mkdir controllers
	mkdir models
	mkdir routes
	```

#### 2. Controllers file for model #1
* 
	
	```
	module.exports.index = (request, response) => {
	    response.json({
	       message: "Hello World"
	    });
	}
	```

#### 3.  Routes file for model #1
* 
	
	```
	const PersonController = require('../controllers/person.controller');
	
	module.exports = function(app){
	    app.get('/api', PersonController.index);
	}
	```

#### 4.  Install cors
* 

	```
	npm install cors
	
	```

#### 5.  Update server.js
* 

	```
	const express = require('express');
	const app = express();
	const cors = require('cors') // This is new
	
	app.use(cors()) // This is new
	
	require('./server/routes/person.routes')(app);
	
	app.listen(8000, () => {
	    console.log("Listening at Port 8000")
	})
	```

#### 6. Front-end configuration
* 
	
	```
	npm install axios
	```
	```
	touch Main.js
	```    
	    
	```
	import React, { useEffect, useState } from 'react'
	import axios from 'axios';
	
	export default () => {
	    const [ message, setMessage ] = useState("Loading...")
	    useEffect(()=>{
	        axios.get("http://localhost:8000/api")
	            .then(res=>setMessage(res.data.message))       
	    }, []);
	    return (
	        <div>
	            <h2>Message from the backend: {message}</h2>
	        </div>
	    )
	}
	```
	    
	```
	import React from 'react';
	import Main from './Main';
	
	function App() {
	  return (
	    <div className="App">
	      <Main />
	    </div>
	  );
	}
	
	export default App;
	```

#### 7.  Test
* 

	```//```
    
#### Summary
*     
