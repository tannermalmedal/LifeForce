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

app.get('/dailytasks/current', (req,res) => {
    DailyTask.findOne({complete: false}).then((data) => {
        res.json(data);
    })
})

app.post('/dailytasks/new', (req,res) => {
    DailyTask.create({
        youMessage: req.body.youMessage,
        othersMessage: req.body.othersMessage,
        yourBodyMessage: req.body.yourBodyMessage,
        complete: req.body.complete,
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

app.put('/dailytasks/update/:id', (req, res) => {
    const location = req.body.location
    DailyTask.findOne({_id:req.params.id}, (err, task) => {
        if(err){
            console.log(err);
        } else{
            task[location] === true ? task[location] = false : task[location] = true;
            task.save();
            res.status(200).json(task);
        }
    })
})


// @TODO
//this is receiving the full task, and the message
//need to add the message string to whichever value is currently updated
//need to then change correlated True values to false, so buttons we can have input field disappear after
//@TODO ON FRONTEND
//need to change components way of rendering to focus on you, yourBody,others && to check if the message is custom.
//if message is custom, but value of you,yourboyd,or others is false, button is green, but input field is gone
//if message is not custom, but you,yourbody,and others is true, button button is green and input field shows;
app.put('/dailytasks/updateMessage/:id', (req,res) => {
    const location = req.body.location;
    const message = req.body.message;

    DailyTask.findOne({_id: req.params.id}, (err, task) => {
        if(err){
            console.log(err);
        } else{
            task[location] = message;
            task.save();
            res.status(200).json(task);
        }
    })
});



//pull the react data out
app.use('/dist', express.static(path.join(__dirname, '../dist')));

//serve html
app.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '/index.html'));
})





app.listen(3000, () => console.log("Server started on port 3000"));