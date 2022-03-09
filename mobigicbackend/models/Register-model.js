const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const registerSchema = new mongoose.Schema({

    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    cpassword: String

})

registerSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        this.cpassword = await bcrypt.hash(this.cpassword, 10);

    }
    next()

})

const register = new mongoose.model("Register", registerSchema)

module.exports = register;