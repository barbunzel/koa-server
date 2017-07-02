const app = require('./server');
const config = require('./server/config/config');

app.listen(config.port);
console.log('Listening on port ' + config.port);