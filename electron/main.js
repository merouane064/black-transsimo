const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

let mainWindow = null;
let adminWindow = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 320,
    title: "BLACK TRANSSIMO",
    backgroundColor: "#0a0a0a",
    autoHideMenuBar: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "..", "index.html"));

  mainWindow.webContents.setWindowOpenHandler(function ({ url }) {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.on("closed", function () { mainWindow = null; });
}

function createAdminWindow() {
  if (adminWindow && !adminWindow.isDestroyed()) {
    adminWindow.focus();
    return;
  }
  adminWindow = new BrowserWindow({
    width: 1260,
    height: 840,
    title: "BLACK TRANSSIMO — Bookings",
    backgroundColor: "#141414",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  adminWindow.loadFile(path.join(__dirname, "admin.html"));
  adminWindow.on("closed", function () { adminWindow = null; });
}

const template = [
  {
    label: "File",
    submenu: [
      {
        label: "Manage Bookings",
        accelerator: "CmdOrCtrl+Shift+B",
        click: createAdminWindow
      },
      { type: "separator" },
      { role: "quit" }
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { type: "separator" },
      { role: "togglefullscreen" },
      { role: "toggleDevTools" }
    ]
  }
];

app.whenReady().then(function () {
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  createMainWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
