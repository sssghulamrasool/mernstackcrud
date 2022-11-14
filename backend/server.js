const express = require("express");
const app = express();
require("./config/config");
const userRoutes = require("./routes/routes");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use("/", userRoutes);
app.listen(8080, () => console.log("sever running on this sever"));
