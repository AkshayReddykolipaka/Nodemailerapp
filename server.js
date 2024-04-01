const { log } = require("console");
const express = require("express");
const sendEmail = require("./utils/sendEmail");

const app = express();
const PORT = process.env.PORT || 9000;

//set engine
app.set("view engine", "ejs");

//serve static assets
app.use(express.static("public"));

//pass the data from email form
app.use(express.urlencoded({ extended: false }));

//route to RENDER emailform

app.get("/", (req, res) => {
  res.render("email-form");
});


// route to sent email
app.post('/send-email', async (req, res)=>{

const {email, mesage} = req.body;
try {
    sendEmail(email, mesage);
} catch (error) {
    console.log(error);
}
});

//start the server
app.listen(PORT, console.log(`server is running on ${PORT}`));
