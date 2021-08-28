<template>
    <el-container class="container">
        <el-header class="header">Header</el-header>
        <el-container>
            <el-aside class="aside" width="200px">Aside</el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default  {

    }
</script>
<style>
	.biaoti {
		color: #E6A23C;
	}

	.container {
		height: 100%;
	}

	.header {
		background-color: #303133;
	}

	.aside {
		background-color: #0000;
	}

	.main {
		background-color: #e9eef3;
	}

	.middle {
		text-align: center;
	}

	.loginout {
		line-height: 60px;
		text-decoration: none;
		color: #E6A23C;
	}
</style>

<el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>用户管理</span>
    </template>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>用户列表</span>
  </el-menu-item>
  </el-submenu>
  
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>权限管理</span>
    </template>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>角色列表</span>
  </el-menu-item>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>权限列表</span>
  </el-menu-item>
  </el-submenu>

  <el-submenu index="3">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>商品管理</span>
    </template>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>商品列表</span>
  </el-menu-item>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>分类参数</span>
  </el-menu-item>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>商品分类</span>
  </el-menu-item>
  </el-submenu>

  <el-submenu index="4">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>订单管理</span>
    </template>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>订单列表</span>
  </el-menu-item>
  </el-submenu>

  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>数据统计</span>
    </template>
  <el-menu-item index="1-1">
    <i class="el-icon-circle-check"></i>
    <span>数据报表</span>
  </el-menu-item>
  </el-submenu>

 


