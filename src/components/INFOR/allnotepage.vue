<template>
<div style="margin: 0 auto">
<div class="postdiv">
    allnotepage
 
     <el-button @click="allnote">查看全部笔记</el-button>
                  <div>first:{{first}}</div>
   <div>
         <div v-for='item in datas' :key='item'>
                笔记id： {{item.id}}
                笔记标题： {{item.title}}
               笔记内容： {{item.content}}
               </div>
            </div>  
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
 let datas=ref([])
  let first=ref([])

  function allnote(){
     const page=1
    const size=10
        gettoken=""+store.state.info,
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/note/getNotes'+'?page='+page+'&size='+size,
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
    
        .then(function(res) {
      console.log("ALLNOTES")
      console.log(res)
    datas.value=res.data.data
    first.value=res.data.msg
        })
        .catch(function(error) {
          console.log("error",error);
        });
  }

  return{
      gettoken,allnote,
      datas,first
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