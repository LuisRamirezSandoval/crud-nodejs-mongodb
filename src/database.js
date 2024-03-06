import mongoose from "mongoose";
import {MONGODB_URI} from "./config"

(async () => {
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log(db.connect.name, "to DB");
    } catch (error) {
        console.error(error);
    }
})();