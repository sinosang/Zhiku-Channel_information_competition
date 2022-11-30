<template>
<div style="margin: 0 auto">
<div class="postdiv">
    postpage
  <el-button @click="postnote">确认上传</el-button><br>
   <el-input style="width:300px" v-model="wrtitle" type="text" placeholder="title" clearable/>
    <el-input style="width:300px" v-model="wrvideo_id" type="text" placeholder="视频id" clearable/>
     <el-input style="width:300px" v-model="wrnote_abstract" type="text" placeholder="笔记摘要" clearable/>
      <el-input style="width:300px" v-model="wrcontent" type="text" placeholder="文本内容" clearable/>
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
let title=""
 const wrtitle =ref('')
let video_id=""
const wrvideo_id=ref('')
let note_abstract=""
const wrnote_abstract=ref('')
let content=""
const wrcontent=ref('')


//store

  const store = useStore()
  console.log("postpage trytoken",store.state.info) 

  function postnote(){
    gettoken=""+store.state.info,
    
    axios({
        method: 'post',
         url: 'http://nicklorry.top:8090/note/postNote',
      data:{
         title:wrtitle.value,
         video_id:wrvideo_id.value,
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
      gettoken,postnote,
      title,wrtitle,video_id,wrvideo_id,note_abstract,wrnote_abstract,content,wrcontent,
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