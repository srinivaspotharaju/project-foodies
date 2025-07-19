import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoutes.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';



//app configuration
const app = express();
const PORT = process.env.PORT || 5000;


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//database connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

//server listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



