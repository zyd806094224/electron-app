# Electron 应用程序

这是一个基于 Electron、Vue 3、TypeScript 和 Vite 构建的桌面应用程序示例。

## 项目简介

该应用程序演示了如何使用现代前端技术栈构建跨平台桌面应用程序。它包含了多个功能模块，展示了在 Electron 环境中使用 Vue 3 组件、状态管理和各种第三方库的方法。

### 主要功能

1. **登录页面** - 应用程序入口点，包含多种功能测试按钮
2. **主页** - 展示树形组件和父子组件通信
3. **电子表格** - 基于 LuckySheet 的在线表格编辑器，支持 Excel 导入导出
4. **数据可视化** - 使用 ECharts 实现的数据可视化展示

### 技术栈

- [Electron](https://www.electronjs.org/) - 跨平台桌面应用框架
- [Vue 3](https://v3.vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集，添加了静态类型定义
- [Vite](https://vitejs.dev/) - 快速的构建工具
- [Element Plus](https://element-plus.org/) - Vue 3 UI 组件库
- [ECharts](https://echarts.apache.org/) - 数据可视化库
- [LuckySheet](https://github.com/mengshukeji/Luckysheet) - 在线电子表格库
- [Pinia](https://pinia.vuejs.org/) - Vue 3 状态管理库

## 快速开始

```bash
# 克隆模板
npx degit alex8088/electron-vite-boilerplate electron-app

cd electron-app

# 安装依赖
npm install

# 开发模式运行
npm run dev
```

## 项目结构

```
.
├── src
│   ├── main           # 主进程代码
│   ├── preload        # 预加载脚本
│   └── renderer       # 渲染进程代码（Vue应用）
├── electron-builder.yml  # 打包配置
├── electron.vite.config.ts  # Vite 配置
└── package.json       # 项目配置和依赖
```

## 功能详情

### 登录页面 (/)
作为应用的主要入口点，提供了以下功能测试：
- Pinia 状态管理
- Vue Router 路由导航
- Promise 异步操作
- 闭包函数测试
- IPC 通信测试

### 主页 (/home)
展示了常见的 UI 组件和交互：
- Element Plus 树形控件
- 子组件通信（props 和 mitt 事件总线）

### 电子表格 (/luckySheet)
实现了完整的电子表格功能：
- 创建和编辑表格
- Excel 文件导入导出
- 表格工具栏和格式设置

### 数据可视化 (/echarts)
使用 ECharts 展示数据可视化能力：
- 柱状图和其他图表类型
- 响应式图表设计

## 构建和打包

```bash
# 构建应用
npm run build

# 打包为不同平台的应用
npm run build:win   # Windows
npm run build:mac   # macOS
npm run build:linux # Linux
```

## 常见问题解决

### 打包时 vue-tsc 错误

由于兼容性问题，请确保使用指定版本的 TypeScript：

```
"typescript": "~5.3.3"
```

### Mac 打包 Windows 应用时权限问题

如果遇到 wine 权限问题，可以尝试以下解决方案：

```bash
sudo chown -R root /Users/zhaoyudong/Library/Caches/electron-builder/wine/
```

## 许可证

[MIT](LICENSE)
