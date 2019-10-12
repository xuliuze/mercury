<template>
    <div class="navbar">
        <router-link to="/"> <img src=""></router-link>
        <ul>
            <li @click="goto('/')">首页</li>
            <li @click="goto('/record')">作战记录</li>
            <li @click="goto('/msgManager')">单位信息管理</li>
            <li @click="goto('/brgade')">消防队管理</li>
            <li @click="goto('/firetruck')">消防车管理</li>
            <li @click="goto('/notice')">公告列表</li>
            <li @click="goto('/role')">角色管理</li>
            <li @click="goto('/users')">用户管理</li>
            <li class="user">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="color:white">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                      <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item >个人中心</el-dropdown-item>
                      <el-dropdown-item>公告信息</el-dropdown-item>
                      <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'navbar',
    methods:{
        goto(path){
            this.$router.push({path:path})
        }
    }
}
</script>
<style scoped>
li{
    display: inline-block;
    list-style: none;
    cursor: pointer;
    background-color: #252838;
    color: white;
    padding: 20px 30px;
    
}
img{
    width: 200px;
    background-color: #252838
}
</style>