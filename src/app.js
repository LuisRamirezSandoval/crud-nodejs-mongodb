import express from 'express'
import {exphbs,create} from 'express-handlebars'
import indexRouter from './routes/index.routes'
import path from 'path'
import morgan from 'morgan'

const app = express();

//configurar motor de plantilla
app.set('views', path.join(__dirname, 'views'))
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "base",
    extname: ".hbs",
})
app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//rutas
app.use(indexRouter);

//archivos estaticos
app.use(express.static(path.join(__dirname,"public")));

export default app;