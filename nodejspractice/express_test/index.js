const express = require('express');
const Axios = require('axios');
const app = express();
const cors = require('cors');


app.use(cors({
    origin:'http://localhost:3000'
}));

app.get('/', (req,res) => {
    res.send('Now its working!!!')
});

app.get('/api/weather/city/:city',async (req,res)=>{
    res.setHeader('Content-Type','application/json');
    var url= `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=9328b94e7be4310a47cd459b2664068f&units=metric`
    const data = await weathercall(url)
    console.log("response sent using city name");
    res.send(JSON.stringify(data));
    
})

app.get('/api/weather/location/:lat/:lon',async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    
    var url= `http://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=9328b94e7be4310a47cd459b2664068f&units=metric`
    const data = await weathercall(url)
    console.log('response sent using location data');
    res.send(JSON.stringify(data));
})

async function weathercall(url) {
    // console.log(url);
    var responsedata={}
    await Axios.get(url)
        .then(res=>{
            responsedata=res.data
        })        
        .catch(error => {
            if(error.response.status===404){
                alert("enter correct data")
                responsedata=error.response.status
            }
        });
    if(responsedata===404){
        return null;
    }
    // console.log(responsedata);
    return responsedata;
}



const port=process.env.PORT||8080;
app.listen(port, ()=>{
    console.log(`listening at port ${port}...`);
});