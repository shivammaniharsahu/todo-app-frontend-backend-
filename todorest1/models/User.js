const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)){
                throw new Error({error: "Invalid Email!!"});
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"]
    },
    
})
const User = mongoose.model("User", userSchema);
module.exports = User
