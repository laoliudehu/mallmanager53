<template>
    <el-form :label-position="top" label-width="80px" :model="formdata">
  <el-form-item label="用户">
    <el-input v-model="formdata.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formdata.password"></el-input>
  </el-form-item>
  
 
    </el-form>
</template> 

 <script>
export default {
    data(){
        return {
            formdata:{
                username:'',
                password:''
            }
        }
    }
}
</script>  

<style>
    
</style>

<!-- <template>
    <div>sdsa</div>
</template>

<script>
export default {}
</script>

<style>

</style> -->