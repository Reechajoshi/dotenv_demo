const dotenv = require('dotenv');
let envPath = `./.${process.env.NODE_ENV}.env`;
dotenv.config({ path: envPath, silent: true });
const config = require("./config");
console.log(config);