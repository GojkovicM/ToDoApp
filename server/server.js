const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();                                                   
const PORT = process.env.PORT || 5000;                                   
   
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// Middleware

app.use(bodyParser.json());                                             

// Enable CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');      //when a cross-origin request is made but the server doesn't return the required headers in the response
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// SQLite database connection

const db = new sqlite3.Database('./db/todo.db', (err) => {                  //We create a new SQLite database connection using the sqlite3 module. The Database constructor takes the path to the SQLite database file (todo.db in the db folder).
  if (err) {                                                                //The callback function is executed once the connection is established (or if there's an error).
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');

    
                                                                        
    db.run(`CREATE TABLE IF NOT EXISTS tasks (                          
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT,
      taskName TEXT,
      description TEXT,
      time TEXT,
      done BOOLEAN
    )`, (err) => {                                                                           //We execute a SQL CREATE TABLE statement using the db.run() method.                 
      if (err) {                                                                             //The statement creates a table named tasks if it doesn't already exist.
        console.error('Error creating tasks table:', err.message);                           //The callback function is executed once the SQL statement is executed (or if there's an error).
      } else {  
        console.log('Tasks table created successfully.');
      }
    });
  }
});


//Routes

app.post('/tasks', (req, res) => {                                                                                           //This route handles HTTP POST requests to the /tasks endpoint. When a POST request is received, the callback function is executed.
    const { user, taskName, description, time, done } = req.body;                                                                //Extracts taskname, description, and done fields from the request body using object destructuring.
    if (!taskName || !description || !Array.isArray(description)) {                                                                            //Checks if taskname and description are provided in the request body. If not, it returns a 400 status response with an error message.   
      return res.status(400).json({ error: 'Taskname and description are required' });
    }

    const descriptionsString = JSON.stringify(description)

    db.run('INSERT INTO tasks (user, taskName, description, time, done) VALUES (?, ?, ?, ?, ?)', [user, taskName, descriptionsString, time, done || false], function(err) {            //Executes an SQL INSERT statement to insert a new row into the tasks table with the provided taskname, description, and done values.
        if (err) {                                                                                                                                                                     //done || false ensures that if done is not provided in the request body, it defaults to false.
          console.error('Error creating task:', err.message);                                                                                                                          //The db.run() method is used to execute the SQL query
          return res.status(500).json({ error: 'Internal Server Error' });                                                                                                              //Handles any errors that occur during the database operation.
        }
        console.log('New task created with id:', this.lastID);
        res.status(201).json({ id: this.lastID, user, taskName, description: JSON.parse(descriptionsString), time, done });                                                                      //If the task is successfully created, it logs the ID of the newly created task and sends a 201 status response with the details of the created task (including its ID) in JSON format.
      });
    });


    // GET /tasks 

  app.get('/tasks', (req, res) => {                                                                                   //This route handles HTTP GET requests to the /tasks endpoint.
    db.all('SELECT * FROM tasks', (err, rows) => {                                                                   //The db.all() method is used to execute the SQL query and retrieve all rows as an array of objects.
      if (err) {
        console.error('Error fetching tasks:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(rows);                                                                                                //Sends a JSON response with the array of tasks retrieved from the database.
    });
  });


  // GET /tasks/:id 

app.get('/tasks/:id', (req, res) => {                                                                                   //Extracts the task ID from the request parameters (req.params.id).
    const { id } = req.params;                                                                                          //Executes an SQL query to retrieve the task with the specified ID from the tasks table.
    db.get('SELECT * FROM tasks WHERE id = ?', [id], (err, row) => {                                                    //If the task is found, it sends a JSON response with the task details.
      if (err) {                                                                                                        //f the task is not found, it sends a 404 status response with an error message.
        console.error('Error fetching task:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!row) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(row);
    });
  });

  // PUT /tasks/:id 

  app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { taskName, description, done } = req.body;
    const descriptionString = JSON.stringify(description);       
    
    db.run('UPDATE tasks SET taskName = ?, description = ?, done = ? WHERE id = ?', [taskName, descriptionString, done, id], function(err) {
      if (err) {
        console.error('Error updating task:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      console.log('Task updated with id:', id);
      res.status(200).json({ id, taskName, description, done });
    });
  });

  // DELETE /tasks/:id 

app.delete('/tasks/:id', (req, res) => {                                                                                                        //Extracts the task ID from the request parameters (req.params.id).
    const { id } = req.params;                                                                                                                  //Executes an SQL query to delete the task with the specified ID from the tasks table.
    db.run('DELETE FROM tasks WHERE id = ?', [id], function(err) {                                                                              //If the task is successfully deleted, it sends a 204 status response indicating success with no content.
      if (err) {                                                                                                                                //If the task is not found, it sends a 404 status response with an error message.
        console.error('Error deleting task:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      console.log('Task deleted with id:', id);
      res.sendStatus(204);
    });
  });