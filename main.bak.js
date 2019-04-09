// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

const electronReload = require('electron-reload')
electronReload(__dirname)

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let childWindow
let secWindow

app.on('browser-window-focus', () => console.log('browser window focused'))

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    backgroundColor: '#fff000',
    // frame: false,
    minWidth: 400,
    minHeight: 400,
    webPreferences: {
      nodeIntegration: true
    }
  })
  childWindow = new BrowserWindow({ width: 500, height: 400, parent: mainWindow, modal: true, show: false})
  secWindow = new BrowserWindow({ width: 500, height: 400})
  thirdWindow = new BrowserWindow({ width: 500, height: 400, backgroundColor: '#ff0000'})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  // thirdWindow.loadFile('child.html')

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    // childWindow.show()
  }) // once window is fired, destoy listener

  // secWindow.on('focus', () => { console.log('sec window focused')})
  mainWindow.on('focus', () => { console.log('main window focused')
    
})

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
