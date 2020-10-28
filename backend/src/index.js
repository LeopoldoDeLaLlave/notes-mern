require('dotenv').config();
const app = require('./app');
require('./database');

async function main (){
    await app.listen(app.get('port')||4000 );
    console.log("Server on port ", app.get('port'));
}

main();
