<template>
    <el-container class="container">
        <el-header class="header">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <img src="../../assets/1111.jpg" alt="图片无法显示QAQ" />
                    </div>
                </el-col>
                <el-col :span="18" class="middle">
                    <h3 class="biaoti">小崔上学后台管理系统</h3>
                </el-col>
                <el-col :span="2">
                    <!-- @click.prevent 阻止事件的默认行为， -->
                    <a href="#" @click.prevent="handleSignout()" class="loginout">退出</a>
                    <!-- 阻止a标签跳转，仅执行函数handleSignout -->
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="aside" width="200px">
                <el-menu>
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

                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>数据管理</span>
                        </template>
                        <el-menu-item index="1-1">
                            <i class="el-icon-circle-check"></i>
                            <span>数据报表</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        //beforeCreate此时组件的选项对象还未创建，el 和 data 并未初始化，因此无法访问methods， data， computed等上的方法和数据。
        //在这里获取token，判断是否登录，登录vue继续渲染，否则停止渲染，跳回登录页面
        beforeCreate() {
            //获取token
            const token = localStorage.getItem('token')
            if (!token) {
                //token 没有->转跳登录页面
                this.$router.push({
                    name: 'login'
                })
            }
            //if token 有->继续渲染组件

        },
        methods: {
            handleSignout() {
                //1.清除token
                localStorage.clear();
                //2.提示
                this.$message.success('退出成功');
                //3.跳转登录页面
                this.$router.push({
                    name: 'login'
                });
            }
        }
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


 


