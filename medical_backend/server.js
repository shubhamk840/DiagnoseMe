import express from 'express';
import Mongoose from  'mongoose';
import Datavalues from './dbdata.js'
import cors from 'cors'

const app = express();
const port = process.env.port || 8001;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(" i am working");
})



const connection_url = "mongodb+srv://iamskk0502:iamskk0502@firstcluster.6271j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

Mongoose.connect( connection_url ,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(()=>{
    console.log("connections is successful");
}).catch((e)=>{
    console.log("No connection");
});

app.post('/new',(req,res)=>{
    const currentvalue = req.body;

    Datavalues.create(currentvalue,(err,data)=>{
        if(err) {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.post('/search_by_id',(req,res)=>{
    const id = req.body.id;
     console.log("A disease is getting fetched");
       Datavalues.find({"id":req.body.id},(err,data)=>{
           if(err) res.status(500).send(err);
           else
           res.status(200).send(data);
       });
});

app.get('/viewlist',(req,res)=>{
      Datavalues.find((err,data)=>{
          if(err) res.status(500).send(err);
          else{
              res.status(200).send(data);
          }
      })
})

app.listen(port,()=>{
    console.log("port has been succesfully connected at ",port);
})