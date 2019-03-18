<template>
  <div class="home">
    <div style="text-align: left;margin: 20px">
      <el-button @click="handleClick">选择优惠活动</el-button>
    </div>
    <el-table :data="chooseList" border :header-cell-style="headerCellStyle" style="width: 100%">
      <el-table-column prop="id" label="id" min-width="30" align="center"></el-table-column>
      <el-table-column prop="title" label="名称" min-width="150" align="center"></el-table-column>
      <el-table-column label="内容" prop="value" min-width="150" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="80">
        <template slot-scope="scope">
          <el-button size="small" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialog-list :dataList="dataList" @chooseData="chooseData"></dialog-list>
  </div>
</template>

<script src="./index.js"></script>
<style>
  .home {
    width: 700px;
  }
</style>
