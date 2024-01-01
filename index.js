const express =require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const notesRoutes=require('./routes/notes.js');

const app = express();
const PORT=3000;

// connect to mongoose server
connectDB();

// middleware
app.use(bodyParser.json());
app.use('/notes',notesRoutes);

app.use(express.static('public'))


app.listen(PORT, ()=>{
console.log(`server listening on port: ${PORT}`);
})
