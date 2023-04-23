const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "..");
const template_path = path.join(__dirname, "../templates/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
app.get("/", (req, res) => {
    res.render("ContactMe");
});

// app.get("/Login", (req, res) => {
//     res.render("Login");
// });

app.get("/done", (req, res) => {
    res.render("done");
});

app.post("/ContactMe", async (req, res) => {
   
    try {

        const registerEmploye = new Register({
            name: req.body.name,
            email: req.body.email,
            contact:  req.body.contact,
       
        })


        
        const registered = await registerEmploye.save();
//         const raha=await Register.findOne({registered});
//         res.send(registered);
        res.status(201).render("done");
        console.log(registered);
        

        
        

    }catch (error) {
        res.status(400).send(error);
    }
});
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
