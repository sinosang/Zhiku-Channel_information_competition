
<template style="height:100%;">
 
    <button index="3" @click="onSubmit">返回登录Login</button>


<br>
  <el-button @click="infor">个人信息</el-button> 
  <el-button @click="handleClick">测试store</el-button> 
    <el-button @click="adminuse">admin</el-button> 
       <el-button @click="toclient">client客户端</el-button> 
 <router-view>
 </router-view>
  </template>

<script>
  import home from './homerouter'
    export default(home)
</script>


<style>

</style>
