// REF-LINK: https://www.electronjs.org/docs/tutorial/quick-start#electron-api
// app 및 BrowserWindow 모듈로드
const { app, BrowserWindow }= require("electron");

// 노드 통합이 활성화 된 새브라우저 창을 생성, index.html 파일 로드
function createWindow() {
    const win = new BrowserWindow({
        width:  800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,

            // REF-LINK : https://stackoverflow.com/questions/56632578/running-the-first-electron-app-wont-show-versions/56633651
            // REF-LINK : https://www.electronjs.org/docs/tutorial/context-isolation
            // electron 12이상에서 해당 라인을 false로 추가하지 않으면 index.html 에서 버전정보 출력이 되지않음.
            contextIsolation: false
        }
    });

    win.loadFile("index.html");
}

// electron 앱 초기화시 새브라우저 창 생성
app.whenReady().then(createWindow);

// 열려있는 창이 더이상 없을경우 종료하는 리스너 추가 (운영 체제의 창 관리 동작으로 인해 MAC OS에서 작동하지 않는다.)
app.on("window-all-closed", ()=>{
    if(process.platform !== "drawin") {
        app.quit();
    }
});

// 앱 활성화 이 후 표시되는 창이 없을경우 새브라우저 창을 만드는 리스너 추가
app.on("activate", ()=> {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
