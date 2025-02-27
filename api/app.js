import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.listen(8800,()=>{
    console.log("Hi there");
});

app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
