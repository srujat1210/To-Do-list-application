const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Connection to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/todoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,


});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");  // EJS for templates

app.use(express.static("public")); 



// Routes
const taskRoutes = require("./routes/tasks");
app.use(taskRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
