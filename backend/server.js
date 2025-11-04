const app = require("./src/app");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const authRouter = require("./src/routes/authRoutes");
const cors = require('cors');
app.use(cors());

// it should be removed before deploy...
app.get("/", (req, res)=>{
  res.send("API is running....")
})

app.use("/api/auth", authRouter);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
