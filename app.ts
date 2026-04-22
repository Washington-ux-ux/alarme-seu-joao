import express, { json } from "express";
import path from "path";
import router from "./routes";

function createApp() {
    const app = express();
    app.use(json());
    app.use(express.static(path.join(__dirname, "public")));
    app.use("/api", router);
    
    return app;
}

export default createApp;