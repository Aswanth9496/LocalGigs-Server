import app from "./server";  // ✅ ESModule import
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config(); 

mongoose.connect("mongodb://localhost:27017/LocalGigs");


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
