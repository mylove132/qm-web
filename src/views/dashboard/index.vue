<template>
  <el-container>
  <el-header>
    <el-row :gutter="20">
  <el-col :span="10"><div class='logo'>qm</div></el-col>
  
  <el-col :span="14">
    <div class="user">
      <img src="../../../public/imgs/user-default-img.png" class="avater" />
      <el-dropdown>
      <span class="el-dropdown-link" style="color: white; font-size: 16px;">
        刘占会<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
  </el-col>
</el-row>
  </el-header>
  <el-container>
    <el-aside :width="isCollapse ? '60px' : '200px'">
      <el-button class='corntroller' @click="isCollapse = !isCollapse">| | |</el-button>
      <el-menu
      :collapse="isCollapse"
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户中心</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">注册中心</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">用户教程</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">常用工具</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <AdminDashboard/>
    </el-main>
  </el-container>
</el-container>    

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminDashboard from "./admin/index.vue";


@Component({
  name: "Dashboard",
  components: {
    AdminDashboard
  }
})
export default class extends Vue {
 private menuList = {
   
 }
 private isCollapse: Boolean = false;
 private aside_width = '200px'; 

}

</script>

<style lang="scss" scoped>
  .el-menu {
    height: 100%;
  }
  .el-header {
    background-color: #545c64;
  }
  .logo {
    height: 50px;
    width: 50px;
    border: solid 2px white;
    border-radius:50%;      
   -moz-border-radius: 50%;      
   -webkit-border-radius: 50%;
   color: white;
   text-align: center;
   font-size: 26px;
   margin-top: 0px;
   margin-left: 45px;
   background-color: yellowgreen;
  }
  .el-container {
    .el-aside {
      overflow-x: hidden;
      overflow-y: hidden;
      margin-top: 5px;
      .el-button {
        width: 100%;
        background-color: #545c64;
        color: white;
        margin-right: 15px;
      }
      .el-menu {
        margin-top: 5px;
        border: solid 1px white;
        height: 100%;
      }
    }
  }
  .search {
    margin-top: 10px;
    width: 300px;
    border-radius: 5px;
    margin-left: 60px;
  }
  .user {
    float: right;
    margin-right: 80px;
    margin-top: 20px;
  }
  .el-main {
  
    border-radius: 3px;
  }
  .avater {
    width: 30px;
    height: 30px;
    border-radius: 16px;
    border: 0 solid white;
    vertical-align: middle;
    margin-right: 20px;
    margin-top: -5px;
    
  }
</style>