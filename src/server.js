const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/lifeforce",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch(console.error);



const DailyTask = require('./models/DailyTask')

app.get('/dailytasks', (req, res) => {
    DailyTask.find().then((data) => {
        res.json(data);
    });
})

app.post('/dailytasks/new', (req,res) => {
    DailyTask.create({
        youMessage: req.body.youMessage,
        othersMessage: req.body.othersMessage,
        yourBodyMessage: req.body.yourBodyMessage,
    }, (err, task) => {
        if(err){
            console.log(err);
        }else return res.json(task);
    })
})

app.delete('/dailytasks/delete/:id', (req, res) => {
    console.log(req.params.id);
    DailyTask.findOneAndDelete({_id: req.params.id}, (err, task) => {
        if(err){
            console.log(`No Daily Task Found, couldn't delete. ${err}`);
        }else {
            console.log('task deleted');
            return res.status(200).json(task);
        }
    })
})

app.put('/dailytasks/complete/:id', (req, res) => {
    DailyTask.findOne({_id:req.params.id}, (err, task) => {
        if(err){
            console.log(err);
        } else{
            task.complete === true ? task.complete = false : task.complete = true;
            task.save();
            res.status(200).json(task);
        }
    })
})

//pull the react data out
app.use('/dist', express.static(path.join(__dirname, '../dist')));

//serve html
app.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '/index.html'));
})





app.listen(3000, () => console.log("Server started on port 3000"));