
const express = require('express')
const dotenv = require('dotenv')  
const mongoose = require('mongoose')
const Usercontroller = require('./controllers/Usercontroller')

const app =express()

dotenv.config()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('Hello world!!!')
})

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    console.log("📂 Using DB:", mongoose.connection.name);
    
    
  })
.catch((err) => {
    console.error('Error connecting to MongoDB:', err)

})

app.post('/users',Usercontroler.createUser);
app.get('/users', Usercontroller.getAllUsers);