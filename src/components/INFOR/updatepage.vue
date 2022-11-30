<template>
<div class="update">
    updatenote
  <el-button @click="updatenote">确认修改</el-button><br>

      <el-input style="width:300px" v-model="wrid" type="text" placeholder="文件id" clearable/>
   <el-input style="width:300px" v-model="wrtitle" type="text" placeholder="title" clearable/>
     <el-input style="width:300px" v-model="wrnote_abstract" type="text" placeholder="笔记摘要" clearable/>
      <el-input style="width:300px" v-model="wrcontent" type="text" placeholder="文本内容" clearable/>
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
let title=""
 const wrtitle =ref('')
let id=""
const wrid=ref('')
let note_abstract=""
const wrnote_abstract=ref('')
let content=""
const wrcontent=ref('')
  const store = useStore()
  console.log("postpage trytoken",store.state.info) 

  function updatenote(){
    gettoken=""+store.state.info,
    axios({
        method: 'put',
         url: 'http://nicklorry.top:8090/note/updateNote',
      data:{
         id:wrid.value,
         title:wrtitle.value,
         note_abstract:wrnote_abstract.value,
          content:wrcontent.value
      },
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
      gettoken,updatenote,
      id,wrid,title,wrtitle,note_abstract,wrnote_abstract,content,wrcontent,
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