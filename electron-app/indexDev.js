//Modules
const net = require("net");
const { exec } = require("child_process");

//Set electron start url
process.env.ELECTRON_START_URL = "http://localhost:3000";

//Define client
const client = new net.Socket();

//Connect to port
let startedElectron = false;
const tryConnection = () => client.connect({ port: 3000 }, () => {

    client.end();

    if (!startedElectron) {
        startedElectron = true;
        exec("npm run electron");
    }
});

tryConnection();

//Handle errors
client.on("error", () => setTimeout(tryConnection, 1000));