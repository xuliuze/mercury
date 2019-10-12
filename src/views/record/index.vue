<template>
    <div class="record">
        <div class="button">
            <el-button plain icon="el-icon-search" >搜索</el-button>
        </div>
        <el-table
          ref="noticeTable"
          border
          fit
          highlight-current-row
          style="width:100%"
          >
        <el-table-column type="index" width="60" align="center"></el-table-column>
        <el-table-column lable="发生时间" align="center" prop="">
            <template slot-scope="scope">
                <span></span>
            </template>
        </el-table-column>
        <el-table-column lable="发生时间" align="center" prop="createTiom">
            <template slot-scope="scope">
                <span></span>
            </template>
        </el-table-column>
        <el-table-column lable="发生时间" align="center" prop="">
            <template slot-scope="scope">
                <span></span>
            </template>
        </el-table-column>
        <el-table-column lable="发生时间" align="center" prop="">
            <template slot-scope="scope">
                <span></span>
            </template>
        </el-table-column>
        <el-table-column lable="发生时间" align="center" prop="">
            <template slot-scope="scope">
                <span></span>
            </template>
        </el-table-column>
        <el-table-column lable="发生时间" align="center" prop="">
            <template slot-scope="scope">
                <span></span>
            </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<style  scoped>
.button{
    display: inline-block;
}
</style>