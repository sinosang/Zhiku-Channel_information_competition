<template>
<div class="update">
    updateinfor
    <form id="myForm">
    <p>name：<input type="text" name="name" value="xiaolong"></p>
    <p><input type="button" id="btn" value="添加" @click="updateinfor"></p>
</form>
  <el-button type="button" @click="updateinfor">确认修改</el-button><br>
      
      <el-input style="width:300px" v-model="wrname" type="text" placeholder="姓名" clearable/>

      </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import {ref,getCurrentInstance,onMounted} from 'vue' 
import axios from 'axios';
import { useStore } from 'vuex'

export default {
setup(){
      // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()
  const { proxy } = getCurrentInstance()

   let gettoken=""

//updatepage
let name=""
 const wrname =ref('')


  const store = useStore()
  console.log("postpage trytoken",store.state.info) 

  function updateinfor(){
    gettoken=""+store.state.info,
     name=wrname.value,
     console.log("name",name)

    // var form=document.querySelector("#myForm");

    // var formdata=new FormData(form);

    // console.log(formdata.get("name"));

var formdata = new FormData()
 formdata.append('fname',name)

console.log("formdata",formdata.get('fname'))

    axios({
        method: 'put',
         url: 'http://nicklorry.top:8090/user/updateInfo',
      data:{
        name:"dsdfs"
      },
         headers: {
                //  multipart/form-data   未知异常？？
                // 'multipart/form-data; charset=UTF-8',  未知异常？？
                //Content-Type: application/x-www-form-urlencoded
       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Authorization':gettoken, 
         }
     })  
          .then(function(res) {
        console.log(res)   
    
      })
          .catch(function(error) {
            console.log("error",error);
          });
  }

  return{
      gettoken,updateinfor,
      name,wrname,
  }
}

}
</script>

<style>
.update{
  z-index:-999;
    margin:0 auto;
  width:50%;
  height:800px;
  background-color: aqua;
}

</style>