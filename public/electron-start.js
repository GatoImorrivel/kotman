const path = require('path')
const url = require('url')

const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev')

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
} 

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: `${path.join(__dirname, 'icons/win/icon.ico')}`,
    frame: false,
    autoHideMenuBar: true,
    width: 1260,
    height: 848,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  )

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  ipcMain.on('closeWindow', () => {
    mainWindow.close()
  })
  ipcMain.on('minimizeWindow', () => {
    mainWindow.minimize()
  })
  ipcMain.on('fullscreenWindow', () => {
    if(mainWindow.isMaximized())
      mainWindow.restore()
    else
      mainWindow.maximize()
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
