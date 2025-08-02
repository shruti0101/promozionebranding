import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './Database/db.js';
// import adminRouter from './routes/AdminRoutes.js';
import blogRouter from './routes/BlogRoutes.js';

const app = express();

await connectDB();


app.use(cookieParser());
app.use(express.json());

// app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

app.get('/', (req, res) => {
    res.send("API is working");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
