import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'


dotenv.config();



mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3010, () => {
  console.log("Server is running on port http://localhost:3010");
});


app.use('/api/user', userRoutes)
