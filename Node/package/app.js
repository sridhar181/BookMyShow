let express = require('express');
let app = express();
let port = 9120
let Mongo = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect,getData,postData, updateData, deleteData} = require('./Controller/dbController');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/',(req,res) => {
    res.send("Hiii From Express")
})

app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})

// get all location
app.get('/Locations', async(req,res) =>{
    let query = {};
    let collection = "Locations";
    let output = await getData(collection,query);
    res.send(output)
});

//get all movies
app.get('/Movies', async(req,res) =>{
    let query = {};
    let collection = "Movies";
    let output = await getData(collection,query);
    res.send(output)
});

//get all Premiere
app.get('/Premiere', async(req,res) =>{
    let query = {};
    let collection = "Premiere";
    let output = await getData(collection,query);
    res.send(output)
});

//get all Online Streaming Events
app.get('/OnlineStreamingEvents', async(req,res) =>{
    let query = {};
    let collection = "OnlineStreamingEvents";
    let output = await getData(collection,query);
    res.send(output)
});

//get all Sports
app.get('/Sports', async(req,res) =>{
    let query = {};
    let collection = "Sports";
    let output = await getData(collection,query);
    res.send(output)
});

//get all Theatres
app.get('/Theatres', async(req,res) =>{
    let query = {};
    let collection = "Theatres";
    let output = await getData(collection,query);
    res.send(output)
});

//get all comedy shows w.r.t city
app.get('/ComedyShows/:location_id', async (req, res) => {
    // Extract the location_id from the request parameters
    const locationId = parseInt(req.params.location_id);

    // Check if locationId is a valid number
    if (isNaN(locationId)) {
        return res.status(400).send("Invalid location_id");
    }

    // Construct the query object to filter by location_id
    let query = { location_id: locationId };

    // Specify the collection name for comedy shows
    let collection = "ComedyShows";

    // Call the getData function with the specified collection and query
    let output = await getData(collection, query);

    // Send the result as a response
    res.send(output);
});

//get all Fun Activities w.r.t city
app.get('/FunActivities/:location_id', async (req, res) => {
    // Extract the location_id from the request parameters
    const locationId = parseInt(req.params.location_id);

    // Check if locationId is a valid number
    if (isNaN(locationId)) {
        return res.status(400).send("Invalid location_id");
    }

    // Construct the query object to filter by location_id
    let query = { location_id: locationId };

    // Specify the collection name for fun activities
    let collection = "FunActivities";

    // Call the getData function with the specified collection and query
    let output = await getData(collection, query);

    // Send the result as a response
    res.send(output);
});

//get all Latest Plays w.r.t city
app.get('/LatestPlays/:location_id', async (req, res) => {
    // Extract the location_id from the request parameters
    const locationId = parseInt(req.params.location_id);

    // Check if locationId is a valid number
    if (isNaN(locationId)) {
        return res.status(400).send("Invalid location_id");
    }

    // Construct the query object to filter by location_id
    let query = { location_id: locationId };

    // Specify the collection name for Latest Plays
    let collection = "LatestPlays";

    // Call the getData function with the specified collection and query
    let output = await getData(collection, query);

    // Send the result as a response
    res.send(output);
});

//get all Sports w.r.t city
app.get('/Sports/:location_id', async (req, res) => {
    // Extract the location_id from the request parameters
    const locationId = parseInt(req.params.location_id);

    // Check if locationId is a valid number
    if (isNaN(locationId)) {
        return res.status(400).send("Invalid location_id");
    }

    // Construct the query object to filter by location_id
    let query = { location_id: locationId };

    // Specify the collection name for Sports
    let collection = "Sports";

    // Call the getData function with the specified collection and query
    let output = await getData(collection, query);

    // Send the result as a response
    res.send(output);
});

//get all Theatres w.r.t city
app.get('/Theatres/:location_id', async (req, res) => {
    // Extract the location_id from the request parameters
    const locationId = parseInt(req.params.location_id);

    // Check if locationId is a valid number
    if (isNaN(locationId)) {
        return res.status(400).send("Invalid location_id");
    }

    // Construct the query object to filter by location_id
    let query = { location_id: locationId };

    // Specify the collection name for Theatres
    let collection = "Theatres";

    // Call the getData function with the specified collection and query
    let output = await getData(collection, query);

    // Send the result as a response
    res.send(output);
});

//get orders
app.get('/orders',async(req,res) => {
    let query = {}
    let collection = "orders";
    if(req.query.email){
        query = {email:req.query.email}
    }
    let output = await getData(collection,query);
    res.send(output)
})

//placeOrder
app.post('/placeOrder',async(req,res) => {
    let body = req.body;
    let collection = 'orders';
    let response = await postData(collection,body);
    res.send(response)
})

//update order status
app.put('/updateOrder',async(req,res) => {
   
    let collection = "orders";
    let condition = {"_id":new ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let output = await updateData(collection,condition,data)
    res.send(output)
})

//delete order
app.delete('/deleteOrder',async(req,res) => {
    let collection = "orders";
    let condition = {"_id":new ObjectId(req.body._id)}
    let output = await deleteData(collection,condition)
    res.send(output)
})


app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})