import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import "dotenv/config";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import UserRoutes from "./Users/routes.js";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

mongoose.connect("mongodb+srv://sreekar:sreekar@cluster79713.2urcts5.mongodb.net/kanbas")
const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000)