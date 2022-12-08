const express = require('express');
const app = express();
const mysql = require('mysql')
const PORT = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost', 
    password: '0210',
    database: 'PasswordManager'
});

app.post('/addpassword',(req,res)=>{
    
    const {password,title} = req.body

    db.query("INSERT INTO passwords (password,title) VALUES (?,?) ", [password,title], (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else {
            res.send("Success");
        }
    });


});

app.listen(PORT,()=>{

    console.log("Server is running!");
});

