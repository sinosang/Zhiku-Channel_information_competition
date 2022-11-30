<template>
<div style="margin: 0 auto">
<div class="postdiv">
    allfavoritepage
 
     <el-button @click="allfavorite">查看收藏夹</el-button>
     <div>{{allfacontent}}</div>
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

//store

  const store = useStore()
//   console.log("postpage trytoken",store.state.info) 

const allfacontent=ref('')

  function allfavorite(){
     const page=1
    const size=10
        gettoken=""+store.state.info,
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/video/getFavorites'+'?page='+page+'&size='+size,
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
    
        .then(function(res) {
      console.log("ALLNOTES")
      console.log(res)
      allfacontent.value=res.data.data
        })
        .catch(function(error) {
          console.log("error",error);
        });
  }

  return{
      gettoken,allfavorite,
      allfacontent
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