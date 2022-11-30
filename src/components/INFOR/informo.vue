<template>
<div class="informo">

  <el-button @click="getinfo">check
  </el-button>
    <button @click="testimg">查看图片样例</button>
<div>
  1
    <img :src='"{{pic}}"' style="width:300px;height:100px;" alt=""/>
    <br>
    2
    <img :src="testurl" style="width:300px;height:100px;" alt=""/>
    <br>
    imgurl
    <img :src='"http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"' style="width:300px;height:100px;" alt=""/>
    <br>
    https 
    <img :src='"https://nick.cab/front/ic_fangji.png"' style="width:300px;height:100px;" alt=""/>
    <br>
     testimgurl 
    <img :src='tetsimgurl3' style="width:300px;height:100px;" alt=""/>
    <br>
    look:{{look}}
</div>

  <div v-if="seen">
    <br>
     用户昵称：{{information.data.name}}
     <br>
 账户ID：{{information.data.id}}
      <br>
 角色身份：{{information.data.role}}
       <br>
         <div class="ilist" v-for='item in note' :key='item'>
                笔记id： {{item.id}}
                      <br>
                笔记标题： {{item.title}}
                      <br>
                      pic
                      <br>
               笔记摘要： {{item.note_abstract}}
               <el-button>查看</el-button>
               </div>
  </div>

  </div>

  

</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import {ref,getCurrentInstance,onMounted} from 'vue' 
import axios from 'axios';
import { useStore } from 'vuex'
import testurl from '../../static/picture/girl.jpeg'
export default {
setup(){
      // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()
  const { proxy } = getCurrentInstance()
 
   let pic=ref('http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png')

   let gettoken=""
   let look=ref()
  const store = useStore()
  console.log(" informo trytoken",store.state.info) 
  let seen=ref(false)
  let note=ref()

  let imgurl=ref('http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png')
  let testimgurl=ref('')
  let testimgurl2=""
  let testimgurl3=""

   let information=ref([])
  function getinfo(){
    gettoken=""+store.state.info,

  axios({
    method: 'get',
    url: 'http://nicklorry.top:8090/user/getInfo',
    headers: {'Authorization':gettoken}
    // 携带token令牌使用get方法获取信息
  })
  
      .then(function(res) {
        console.log(res.data)
       information.value=res.data
      seen.value=true
        note.value=res.data.data.notes
        // console.log(note)
      })
      .catch(function(error) {
        console.log("error",error);
      });
  }
   function testimg(){
    gettoken=""+store.state.info,
    axios({

       method: 'get',
        url: 'http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png',
      //  +'?id='+'profile_picture/default.png',   
        headers: {
          'Authorization':gettoken
        }
    })
    
    .then(function(res) {
           console.log("success")
      // console.log(res.request.responseURL)
      pic.value=res.request.responseURL
      look.value=pic.value
      testimgurl.value=pic.value
      testimgurl2=testimgurl.value
      console.log("pic.value",pic.value)
      testimgurl3='"'+testimgurl2+'"'
      console.log(testimgurl3)
      // console.log(look)
        })
        .catch(function(error) {
          console.log("error",error);
        });
   }

let imgData=[
         {url:("https://nick.cab/front/ic_fangji.png")},
        {url: ("http://nick.cab/front/ic_pill.png")},
          {url: ("http://nick.cab/front/ic_yaocai.png")} ,
         { url: ("http://nick.cab/front/ic_zhenjiu.png") },
         { url: ("http://nick.cab/front/ic_hospital.png") },
      ]

  return{
    imgurl,testurl,imgData,testimgurl,testimgurl2,
      gettoken,getinfo,information,note,seen,testimg,pic,look
  }
}

}
</script>

<style>
.informo{
  z-index:-999;
    margin:0 auto;
  width:60%;
  height:800px;
  background-color: white;
   border-radius: 5px;
  border-color:black;
  border-style:solid;
  border-width:1px;
}
.ilist{
 
  width:80%;
  background-color:whitesmoke;
  padding:5px;
  border-radius: 5px;
  border-color:black;
  border-style:solid;
  border-width:1px;
  opacity:0.8;
}
.ibrn:hover{
  cursor: pointer;
   opacity:1;
    background-color:aqua;
}
.cuser{
      display:grid;
   width:100%;
    grid-template-columns: 35% 30%; 
    height:40px;
}
</style>