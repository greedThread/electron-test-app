# electron 앱을 작성하기 위해 생성 

참조 : https://www.electronjs.org/docs/tutorial/quick-start#electron-api

1. NPM 또는 yarn 으로 electron 설치
    ## npm 설치시 
    ```
    npm i --save electron
    
    // or
    npm install --save electron 
    ```
    
    ## yarn 설치시 
    ```
    # yarn add -d electron 
    ```
2. main.js script 작성

3. index.html - 진입 시작 페이지 작성

4. package.json 파일 수정 

5. 배포 
    ## electron Forge 설치
    ```
    npm install --save @electron-forge/cli
   
    npx electron-forge import 
    ```
    ##  배포 파일생성 
    ```
    npm run make
    ``` 
이후 /out 디렉토리에 배포 파일이 생성됨.
윈도우의 경우 electron-test-app-win32-x64

 
 