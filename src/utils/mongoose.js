import {connect} from "mongoose";
import { MONGODB_URI } from "../config";

//conexion a la base de datos
(async()=>{
    try {
        const db = await connect(MONGODB_URI);
        console.log("db connect to ", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();