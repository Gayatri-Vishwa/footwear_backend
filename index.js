import dns from "dns";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import addressRoutes from "./routes/address.routes.js";

import { connectCloudinary } from "./config/cloudinary.js";

const app = express();

app.set("trust proxy", 1);

const PORT = process.env.PORT || 10000;

let isConnected = false;

async function connectDb() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
}

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = [
  process.env.CLIENT_URL,
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Routes
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/address", addressRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is up",
  });
});

// Start server
app.listen(PORT, async () => {
  try {
    await connectDb();
    await connectCloudinary();

    console.log("Cloudinary connected");
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
});




// import dotenv from 'dotenv'
// dotenv.config()
// import express from 'express'
// import cors from 'cors'
// import cookieParser  from 'cookie-parser'
// import mongoose from "mongoose";
// // import serverless from 'serverless-http';
// // import { connectDB } from './config/connectDB.js'             //.js is imp because we are using import 
// import userRoutes from './routes/user.routes.js'   //name can be anything here like. userRoutes
// import sellerRoutes from './routes/seller.routes.js'
// import productRoutes from './routes/product.routes.js'
// import cartRoutes from './routes/cart.routes.js'
// import orderRoutes from './routes/order.routes.js'
// import addressRoutes from './routes/address.routes.js'
// import { connectCloudinary } from './config/cloudinary.js'
// const app=express()

// //new
// app.set("trust proxy", 1);
// const PORT = process.env.PORT || 10000;




// //  connectDB();

//  let isConnected=false
// async function connectDb() {
//      if (isConnected) return;
//     try{
//         await mongoose.connect(process.env.MONGO_URL ,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })
//         isConnected=true;
//         // console.log("Connected to mongodb");
        
//     }
//     catch(error){
//         console.error("Error connected to mongo db", error);
//          throw error;
        
//     }
// }

// app.use(async (req, res, next) => {
//   if (!isConnected) await connectDb();
//   next();
// });



// const allowedOrigins=[
      
//       process.env.CLIENT_URL,
// ]

// //middlewares
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser())

// app.use(cors({origin: allowedOrigins , credentials:true}));


// //api end points

// app.use('/api/user' , userRoutes)
// app.use('/api/seller',sellerRoutes)
// app.use('/api/product',productRoutes)
// app.use('/api/cart',cartRoutes)
// app.use('/api/order',orderRoutes)
// app.use('/api/address',addressRoutes)






// // Basic health check for deployments



// app.get('/', (req, res) => {
//     res.status(200).json({
//         status: 'ok',
//         message: 'Backend is up'
//     });
// });

// app.listen(PORT, async () => {
//     await connectDb();
//     await connectCloudinary();

//     console.log(`Server running on port ${PORT}`);
// });




