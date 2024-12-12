const jsonserver = require("json-server");
const server = jsonserver.create();
const rounter = jsonserver.router("DB.json");
const middleWare = jsonserver.defaults();
const cors = require('cors')

server.use(cors());
server.use(rounter);
server.use(middleWare);

const port = 3001;
server.listen(port,function(){
    console.log(`http://localhost:${port}`);
})