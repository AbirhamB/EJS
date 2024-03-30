const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    const date = new Date();
    const today=date.getDay();
    var day = "";
    if (today === 0) {
        day = "Sunday";
    } else if(today===1) {
        day = "Monday";
    }else if(today===2) {
        day = "Tuesday";
    }

    else if(today===3) {
        day = "Wednesday";
    }
    else if(today===4) {
        day = "Tursday";
    }
    else if(today===5) {
        day = "Friday";
    }
    else if(today===6) {
        day = "Saturday";
    }


    res.render("list", { kindOfDay: day });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000....");
});