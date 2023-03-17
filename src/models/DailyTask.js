const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyTaskSchema = new Schema({
    you: {type: Boolean, default:false},
    others: {type:Boolean, default: false},
    yourBody: {type:Boolean, default: false},
    youMessage: {type:String, default: ""},
    othersMessage: {type: String, default: ""},
    yourBodyMessage: {type: String, default: ""},
    complete: {type: Boolean, default: false},
    time: {type: Date, default: Date.now()}
})

const DailyTask = mongoose.model("DailyTask", DailyTaskSchema);

module.exports = DailyTask;