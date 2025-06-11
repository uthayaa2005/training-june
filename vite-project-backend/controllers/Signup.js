const express = require('express')
const router = express.Router();

router.post('/signup',(req,res) =>{
    const {name,email} = res.body;
})