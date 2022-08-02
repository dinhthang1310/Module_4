const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();

app.set('view engine','ejs');
app.set('views','./views');
app.get('/',(req,res)=> {
    res.render("create")
});
const arrEmployee = [];
app.post('/employee/create',upload.none(),(req,res)=> {
    if (req.body.name && req.body.age) {
        const employee = {
            name : req.body.name,
            age : req.body.age
        }
        arrEmployee.push(employee);
        res.render("view",{employee:employee});
    }else {
        res.render('err')
    }
})

app.listen(port,()=> {
    console.log('Example app listening on port 3000 ')
})