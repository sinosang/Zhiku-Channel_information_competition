<template>
<div style="margin: 0 auto">
<div class="postdiv">
    deletenotepage
 
    <el-input style="width:300px" v-model="wrnoteid" type="text" placeholder="笔记id" clearable/>
    <br>
     <el-button @click="onenote">确认查看</el-button>

    <div>{{onenotecontent}}</div>
      </div>
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

//postpage

let noteid=""
const wrnoteid=ref('')
const onenotecontent=ref('')


//store

  const store = useStore()
//   console.log("onenotepage trytoken",store.state.info) 

  function onenote(){
    gettoken=""+store.state.info,

      noteid=wrnoteid.value
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/note/getNote?id='+noteid,
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
    
        .then(function(res) {
      console.log("NOTEONE")
      console.log(res)
      onenotecontent.value=res.data.data
        })
        .catch(function(error) {
          console.log("error",error);
        });
  }

  return{
      gettoken,
      noteid,wrnoteid,
      onenote,onenotecontent
      
  }
}

}
</script>

<style>
.postdiv{
  margin:0 auto;
    width:50%;
    height:300px;
    background-color:aqua;
}
</style>