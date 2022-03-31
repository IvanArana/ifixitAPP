import express from "express";
import {create} from "express-handlebars";
import indexRoutes from "./routes/tasks.routes"; //se cambia la ruta de index.routes → tasks.routes
import  path  from "path";
import morgan from "morgan";

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

//Declarar motor engine
const exphbs = create({
    extname: "hbs",
    layoutsDir:path.join(app.get("views"), "layouts"),
    defaultLayout:"main",

    helpers:{
        ifequals: function(a,b, options){
            return a==b ? options.fn(this): options.inverse(this)
        },

        inc: function (value, options) {

            return parseInt(value) + 1;

        }
    }
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//Morgan Freeman - middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//routes
app.use(indexRoutes);

//ruta publica
app.use(express.static(path.join(__dirname, "public")));

//404
app.use((req, res, next) => {
    res.status(404).render("404");
});

export default app;