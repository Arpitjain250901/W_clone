import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from "cors";

const port=9000;
const app=express();

app.use(express.json());
app.use(cors());
// app.use((req,res,next) => {
//        res.setHeader("Access-Control-Allow-Origin","*");
//        res.setHeader("Access-Control-Allow-Origin","*");
//        next();
// });


const pusher = new Pusher({
  appId: "1620829",
  key: "f53a06dac72a63c45f00",
  secret: "81d117b9cde3a1500b25",
  cluster: "eu",
  useTLS: true
});


const url="mongodb+srv://admin:5loxqF4EVNi3LuwT@cluster0.bzldzhe.mongodb.net/whatsappdb?retryWrites=true&w=majority"

mongoose.connect(url,{
    
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4,
 });
 //.then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log("Failed to connect to MongoDB:", error);
//   });

  const db=mongoose.connection;
  db.once("open",() => {
    console.log("db is connected");

    const msgCollection =db.collection("messagecontents");
    const changeStream=msgCollection.watch();
 
    changeStream.on("change",(change) => {
      //console.log("A change occured",change);

      if(change.operationType==='insert')
      {
        const messagedetails=change.fullDocument;
        pusher.trigger("messages","inserted",{
          name:messagedetails.name,
          message:messagedetails.message,
          timestamp:messagedetails.timestamp,
        received:messagedetails. received,
        });
      }
    })
   
 
  });





 
app.get("/",(req,res) => {
        res.status(200).send("hello world");
});


app.get("/messages/syc",(req,res) => {
  
// Messages.find((err,data) => {
//      if(err){
//                  res.status(500).send(err); // internal server error
//              }
//              else{
//                  res.status(200).send(Messagecontent);
                  
//              }
//        });

     
       Messages.find().then((data) => {
        console.log("message find");
        res.status(200).send(data);
      }).catch((err) => {
        console.log("message not find");
        res.status(500).send(err);
      })


 });
 
 

app.post("/messages/new",(req,res) => {
  
    const dbmessage=req.body;
    Messages.create(dbmessage).then(() => {
      console.log("message created");
      res.status(201).send(dbmessage);
    }).catch((err) => {
      console.log("message not created");
      res.status(500).send(err);
    })


});



app.listen(port,() => console.log(
  `server is running on localhost : ${port}`
));






//nodemon --inspect server.js
//opens up browser debug console for the node server which is really handy too

//mongodb :- 5loxqF4EVNi3LuwT