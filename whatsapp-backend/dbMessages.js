import  Mongoose from 'mongoose';

const whatsappschema =Mongoose.Schema({
    message:String,
    timestamp:String,
    name:String,
    received:Boolean
});


export default Mongoose.model('messagecontent',whatsappschema);

// app.post("/messages/new",(req,res) => {
  
//     const dbmessage=req.body;

    
   

//     Messages.insertOne(dbmessage,(err,data) => {
//         if(err){
//             res.status(500).send(err); // internal server error
//         }
//         else{
//             res.status(201).send(data);
//             //create
//         }
//     });
// });

// Messagecontent.insertMany(dbmessage,(err,data) => {
    //     if(err){
    //         res.status(500).send(err); // internal server error
    //     }
    //     else{
    //         res.status(201).send(data);
    //         //create
    //     }
    // });

    // message1.save((err,Messagecontent) => {
    //     if(err){
    //         res.status(500).send(err); // internal server error
    //     }
    //     else{
    //         res.status(201).send(Messagecontent);
    //         //create
    //     }
    // })
