//Modules
const electron = require("electron");

//Define window
let window;

electron.app.on("ready", () => {

    //Create window
    window = new electron.BrowserWindow();
    window.maximize();

    //Remove window reference when closed
    window.on("closed", () => window = null);

    //Load index.html
    window.loadURL(process.env.ELECTRON_START_URL || `file://${__dirname}/build/index.html`);
});