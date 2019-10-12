<template>
    <div class="breadcrumb">
        <div class="content">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item >{{}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name:'breadcrumb',
    
}
</script>
<style scoped>
.content{
    width: 100%;
    padding: 20px;
}

</style>