const { app, BrowserWindow, Menu } = require("electron");

var mainWindow = null;

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  await mainWindow.loadFile("src/pages/editor/index.html");
};

/// TEAMPLATE MENU

const teamplateMenu =  [
    {
        
    }
]

app.whenReady().then(createWindow);

/// ACTIVATE

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
