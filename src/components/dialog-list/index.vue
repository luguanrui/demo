<template>
  <!--营销活动列表-->
  <el-dialog
    :visible="show"
    width="500"
    :closeOnClickModal="false"
    @close="handleClose">
    <div slot="title"><h3>优惠列表</h3></div>
    <div class="content">
      <el-table
        border
        :data="computedData"
        :header-cell-style="headerCellStyle"
        style="width: 100%">
        <el-table-column width="70" align="center" label="选中">
          <template slot-scope="scope">
            <el-radio v-model="chooseData"
                      @change="handleChoose"
                      :label="scope.row"
                      style="margin-right: -15px">&nbsp;
            </el-radio>
          </template>
        </el-table-column>
        <el-table-column min-width="120" align="center" label="名称" prop="title"></el-table-column>
        <el-table-column min-width="120" align="center" label="内容" prop="value"></el-table-column>
      </el-table>
      <!-- 分页 -->
      <div style="text-align: right;margin-top: 20px;">
        <el-pagination
          background
          :layout="layout"
          :current-page="currentPage"
          :total="dataList.length"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
          @prev-click="handlePrev"
          @next-click="handleNext"
        ></el-pagination>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleConfirmChoose" size="small">确定</el-button>
      </span>
  </el-dialog>
</template>

<script src="./index.js"></script>

<style scoped>

</style>
