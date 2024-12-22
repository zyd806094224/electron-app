<template>

  <div class="root">
    <div class="left">
      <button @click="back">返回</button>
      左侧区域
    </div>
    <div id="luckysheet" class="right">

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {onMounted} from 'vue'

const router = useRouter()


const options = {
  container: 'luckysheet', //luckysheet为容器id
  title:'表格', //表 头名
  lang: 'zh', //中文
  // column: 10,//列数
  // row:30,//行数
  showtoolbar:true,//是否显示工具栏
  showinfobar:true,//是否显示顶部信息栏
  showsheetbar:true,//是否显示底部sheet按钮
  showsheetbarConfig: {
    add: true, //新增sheet
    menu: true, //sheet管理菜单
    sheet: true, //sheet页显示
  },
  allowEdit:true,//是否允许前端编辑
  // myFolderUrl:'https://www.cnblogs.com/javascript9527/',//<左上角的“后退”按钮的链接
  functionButton:'<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">download</button> <button id="" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">share</button> <button id="luckysheet-share-btn-title" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">show data</button>',//右上角按钮
  cellRightClickConfig:{//自定义配置单元右键菜单
    copy: true, // 复制
    copyAs: true, // 复制为
    paste: true, // 粘贴
    insertRow: true, // 插入行insert row
    insertColumn: true, // 插入列insert column
    deleteRow: true, // 删除选中行的数据 delete the selected row
    deleteColumn: true, // 删除选中列的数据delete the selected column
    deleteCell: false, // delete cell
    hideRow: true, // hide the selected row and display the selected row
    hideColumn: true, // hide the selected column and display the selected column
    rowHeight: true, // 设置行高
    columnWidth: true, // 设置行宽
    clear: true, // 清空选定内容clear content
    matrix: false, //矩阵 matrix operation selection
    sort: false, // 排序sort selection
    filter: false, //筛选 filter selection
    chart: false, //图表生成 chart generation
    image: false, //插入图片 insert picture
    link: false, // 插入连接，比如网址之类insert link
    data: false, //数据校验 data verification
    cellFormat: false //设置单元格格式，锁定单元格格式，隐藏公示等 Set cell format
  },
}

//多组sheet 默认新建excel只给一个sheet
const luckySheetData =[{
  name: "sheet1", //工作表名称
  color: "", //工作表颜色
  index: "0", //工作表索引
  status: "1", //激活状态
  order: "0", //工作表的顺序
  hide: 0,//是否隐藏
  // celldata: headArray, //初始化使用的单元格数据
  data: [], //更新和存储使用的单元格数据
  scrollLeft: 0, //左右滚动条位置
  // scrollTop: 315, //上下滚动条位置
  luckysheet_select_save: [], //选中的区域
  luckysheet_conditionformat_save: {},//条件格式
  calcChain: [],//公式链
  isPivotTable:false,//是否数据透视表
  pivotTable:{},//数据透视表设置
  filter_select: {},//筛选范围
  config:{
    colhidden:{},
    // columnlen:columnlen,
    // customWidth:customWidth
  },
  // freezen: {
  // 	freezenrow: 0 // 冻结第一行
  // }, //冻结行列
  chart: [], //图表配置
  visibledatarow: [], //所有行的位置
  visibledatacolumn: [], //所有列的位置
  ch_width: 2322, //工作表区域的宽度
  rh_height: 949, //工作表区域的高度
  load: "1", //已加载过此sheet的标识
  // dataVerification:dataVerification
}]   // 默认

onMounted(() => {
  createALuckSheet()
})


function createALuckSheet(){
  //如果这里luckysheet.create报错
  //请使用 window.luckysheet.create
  options.data = luckySheetData
  luckysheet.create(options)
  // window.luckysheet.create({
  //   container: 'luckysheet',//这里需要和容器的id名称一致
  //   lang: 'zh', //中文
  // })
}

function back() {
  router.back()
}

</script>

<style scoped>

.root {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.left {
  background: #1b1b1f;
  width: 150px;
  margin-right: 10px; /* 与右侧区域的间距 */
  display: flex;
  flex-direction: column;
}

.right {
  flex: 1;
  background: #42d392;
}
</style>
