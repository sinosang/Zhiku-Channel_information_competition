<template>
<div style="margin: 0 auto">
<div class="postdiv">
    deletenotepage
 
    <el-input style="width:300px" v-model="wrdelnoteid" type="text" placeholder="视频id" clearable/>
    <br>
     <el-button @click="delnote">确认删除</el-button>
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

let delnoteid=""
const wrdelnoteid=ref('')



//store

  const store = useStore()
//   console.log("postpage trytoken",store.state.info) 

  function delnote(){
    gettoken=""+store.state.info,

      delnoteid=wrdelnoteid.value
    axios({
        method: 'delete',
         url: 'http://nicklorry.top:8090/note/deleteNotes'+'?id='+delnoteid,
         headers: {
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
      gettoken,delnote,
      delnoteid,wrdelnoteid
      
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