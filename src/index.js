import app from './app'
import './database'

const port = process.env.PORT || 3000;

app.listen(port,"0.0.0.0");
console.log("serve en puerto",3000);
