const express = require("express");
const app = express();
const port = 8000 || process.env.PORT;
const registerModel = require("./models/Register-model");
const bcrypt = require('bcryptjs');
require("./dbconn/db");
var cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.post("/register", async(req, res)=>{
    console.log("route called");
    console.log(req.body)
    try {
        const user = await registerModel.find({ email: req.body.email });
        console.log(user)
        if (user.length > 0) {
            res.status(400).send({ message: "User is allready Registered" })

        } else {
            console.log("else block")
            const newUser = new registerModel(req.body);
            await newUser.save();
            res.status(200).send({ message: "User Registered Successfully" })
        }

    } catch (e) {

        res.status(400).send(e);
    }
})

app.post("/login", async(req,res)=>{
    try {
        const user = await registerModel.findOne({ email: req.body.email });
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (isMatch) {
            res.status(200).send({ message: "Login Success" });
        } else {
            res.status(400).send({ message: "Invalid Credentials" });
        }
    } catch (e) {
        res.status(400).send({ message: "User is not Registered" });
    }
})

app.listen(port, ()=>{
    console.log("server started successfully at", port)
})