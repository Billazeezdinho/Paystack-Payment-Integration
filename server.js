const express = require('express');
require('./config/database');
const PORT = 8055
const transactionRouter = require('./routes/transactionRoute')
const app = express()

app.use(express.json())
app.use('/api/v1/', transactionRouter);
app.listen(PORT,()=>{
    console.log(`Server is listening to PORT: ${PORT}`);
     
})