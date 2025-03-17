require('dotenv').config()
const mongoose = require('mongoose');
const DATABASE = process.env.DATABASE_URL

mongoose.connect(DATABASE).then(()=>{
    console.log("Database Connection Established Successfully");
    
}).catch((error)=>{
    console.log("Unable to Connect to Database" + error.message);
    
})