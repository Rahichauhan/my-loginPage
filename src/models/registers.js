const mongoose = require("mongoose");
const employeSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    contact:{
        type: String,
        required:true,
    }
})
const Register = new mongoose.model("Register", employeSchema);
module.exports = Register;