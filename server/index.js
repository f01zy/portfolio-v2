require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT
}))
app.use("/api", require("./router"))

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE)

    app.listen(PORT, () => {
      console.log(`app started in ${PORT} port`);
    })
  } catch (e) {
    console.log(e);
  }
}

start()