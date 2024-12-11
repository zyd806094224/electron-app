# electron-app
An Electron application with Vue3 and TypeScript and Vite

electron + vite + vue3  开发模式

参考网址： https://evite.netlify.app/

npx degit alex8088/electron-vite-boilerplate electron-app
cd electron-app

npm install
npm run dev


遇到的问题：

=====打包出现vue-tsc错误======
/Users/zhaoyudong/IdeaProjects/electron-app/node_modules/vue-tsc/bin/vue-tsc.js:68
throw err;
^
Search string not found: "/supportedTSExtensions = .*(?=;)/"
(Use `node --trace-uncaught ...` to show where the exception was thrown)

解决方案："typescript": "~5.3.3”,  typescript 配置成指定版本
==========================


=====================
Mac电脑打包window应用端遇到的问题：cannot execute  cause=exit status 1
errorOut=wine: /Users/zhaoyudong/Library/Caches/electron-builder/wine/wine-4.0.1-mac/wine-home is not owned by you

解决方案：
sudo chown -R root /Users/zhaoyudong/Library/Caches/electron-builder/wine/
===========================
