const app = require('./app');
const config = require('./config');
const db = require('./db');

const port = config.serve.port;

app.listen(port, () => {
    console.log(`recolector está corriendo en el puerto ${port}`);
});