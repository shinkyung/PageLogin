const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const UserRoutes = require("./routes/User.js");

const app = express();
const PORT = 5050;
dotenv.config();

//CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/User", UserRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
