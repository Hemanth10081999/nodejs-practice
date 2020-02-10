const express = require('express');
const app = express();

const users = [
    {id:1,name:'hemanth'},
    {id:2,name:'ari'},
    {id:3,name:'amirtha'}
];



app.get('/', (req,res) => {
    res.send('Now its working!!!')
});


app.get('/api/users',(req,res)=>{
    res.send(users);
})

app.get('/api/users/:id',(req,res)=>{
    const user = users.find(u => u.id=== parseInt(req.params.id))
    if(!user){
        res.status(404).send('invalid user')
    }
    res.send(user)
})

app.get('/api/users/:id/:session',(req,res)=>{
    // res.send(req.query);
    res.send(req.params);
})

const port=process.env.PORT||3000;
app.listen(port, ()=>{
    console.log(`listening at port ${port}...`);
});