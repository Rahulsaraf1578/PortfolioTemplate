const mongoose = require("mongoose");
//creating a database
mongoose.connect("mongodb://localhost:27017/workwithus", {
    useCreateIndex:false,
    useNewUrlParser:false,
    useUnifiedTopology:false
}).then(() => {
    console.log("connection succesful");
}).catch((error) => {
    console.log(error);
})