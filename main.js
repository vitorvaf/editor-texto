const { app, BrowserWindow, Menu, dialog } = require("electron");
const { write, writeFile } = require("fs");



var mainWindow = null;

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  var file = {};

/// Salvar arquivo

const writeFile = async ()=> {


}



  /// Criar novo arquivo

  const createNewFile = () => {
    file = {
      name: "novo-arquivo.txt",
      content: "",
      saved: false,
      path: app.getPath("documents") + "/nome-arquivo.txt",
    };

    mainWindow.webContents.send("set-file", file);
  };

  const saveAs = async () => {
    let dialogFile = await dialog.showSaveDialog({
        defaultPath: file.path
    });

    if(dialogFile.canceled)
      return false;

    await writeFile();
  };

  await mainWindow.loadFile("src/pages/editor/index.html");

  createNewFile();

  // mainWindow.webContents.openDevTools();

  const templateMenu = [
    {
      label: "Arquivo",
      submenu: [
        {
          label: "Novo",
          click() {
            createNewFile();
          },
        },
        {
          label: "Abrir",
        },
        {
          label: "Salvar",
        },
        {
          label: "Salvar Como",
          click() {
            saveAs();
          },
        },
        {
          label: "Fechar",
          role: process.platform === "darwin" ? "close" : "quit",
        },
      ],
    },
  ];

  /// MENU

  const menu = Menu.buildFromTemplate(templateMenu);

  Menu.setApplicationMenu(menu);
};

/// TEAMPLATE MENU

app.whenReady().then(createWindow);

/// ACTIVATE

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
