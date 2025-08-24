import express from "express";
import cors from 'cors'

import userRoutes from "./interfaces/routes/userRoutes"


const app = express();


// Middleware
app.use(express.json());
app.use(cors({origin:'http://localhost:5173',credentials:true}))

//routes
app.use('/user',userRoutes);

export default app;  
