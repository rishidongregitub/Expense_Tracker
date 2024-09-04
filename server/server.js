const express =  require('express');
const app = express();
const cors = require('cors');

const PORT = 5000;

//USe Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Sever is running on port: ${PORT}`)
})