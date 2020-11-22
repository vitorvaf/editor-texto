const {app, BrowserWindow}  = require('electron');

var mainWindow = null;

const createWindow = async() =>{
    mainWindow = new BrowserWindow({
        width:800,
        height:600
    });

    await mainWindow.loadFile('src/pages/editor/index.html');
}


app.whenReady().then(createWindow);