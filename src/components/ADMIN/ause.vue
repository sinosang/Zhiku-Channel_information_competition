<template>
<div style="margin: 0 auto">
<div class="postdiv">
    it is the ause page
 
     <el-button @click="videodiv">视频模块</el-button>
 <el-button @click="allnote">allnote</el-button>

 <br>
<el-button @click="setfav">setfav</el-button>
<el-button @click="detailv">detailvideo</el-button>
<el-button @click="somethingv">somethingvideo</el-button>
<br>

    <el-input style="width:300px" v-model="wrdel" type="text" placeholder="id" clearable/>
    <br>
     <el-button @click="delbideo">确认删除视频</el-button>

     <el-button @click="testabstract">testabstract</el-button>
         <el-button @click="testlabel">label</el-button>
<video src=""></video>

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
  const store = useStore()
  console.log(" informo trytoken",store.state.info) 
   let fvideo=ref()
  function videodiv(){
    gettoken=""+store.state.info,
  axios({
    method: 'get',
    url: 'http://nicklorry.top:8090/oss/getVideo?id=video/16603755518081009779.mp4',
    headers: {'Authorization':gettoken},

    // 携带token令牌使用get方法获取信息
  })
  
      .then(function(res) {
        console.log(res)
         console.log(res.request.responseURL)
          fvideo.value=res.request.responseURL
      })
      .catch(function(error) {
        console.log("error",error);
      });
  }
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
    function setfav(){
        gettoken=""+store.state.info,
    axios({
      method: 'put',
      url: 'http://nicklorry.top:8090/video/setFavorite'+'?id='+16565363,
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
    
        .then(function(res) {
      console.log("setvideoid")
      console.log(res)
        })
        .catch(function(error) {
          console.log("error",error);
        });
  }
      function detailv(){
        gettoken=""+store.state.info,
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/video/getInfo?id=video/16603755518081009779.mp4',
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
    
        .then(function(res) {
      console.log("detailv")
      console.log(res)
        })
        .catch(function(error) {
          console.log("error",error);
        });
  }
        function somethingv(){
        gettoken=""+store.state.info,
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/video/getInfo?id=video/16565363.mp4',
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
    
        .then(function(res) {
      console.log("detailv")
      console.log(res)
        })
        .catch(function(error) {
          console.log("error",error);
        });
  }
     function testabstract(){
    gettoken=""+store.state.info,
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/video/autoInfo?id=video/反对电信诈骗.mp4',
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
        .then(function(res) {
      console.log(res)
        })
        .catch(function(error) {
          console.log("error",error);
        });
   }

     function testlabel(){
    gettoken=""+store.state.info,
    axios({
        method: 'put',
         url: 'http://nicklorry.top:8090/video/setLabels',
      data:{
         id:"video/16603755518081009779.mp4",
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
      gettoken,videodiv,
     testabstract,allnote,setfav,fvideo,detailv,somethingv,
     testlabel
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