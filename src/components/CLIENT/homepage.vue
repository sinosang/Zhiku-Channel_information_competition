<template>
<!-- top -->
        <div class="ctop">
           
            <div class="ctitle" @click="test">
                <img  style="width:70px;height:35px;cursor:pointer" src='../../static/picture/logo.png' alt=""/>
                <text style="cursor:pointer">知库网</text>
                </div>
 <div class="cinput">
     <el-input style="width:85%;height:45px;" v-model="wrsearch" 
     type="text"
      placeholder="请输入搜索内容" 
     clearable> 
      <template #prepend>
        <div style="text-align:center;line-height:20px;width:15px;">
            <img style="width:20px;height:20px;line-height:20px" src='../../static/picture/searchb.png' alt=""/> 
        </div>
      </template>
        <template #suffix>
          <!-- 用preend表示在前面 -->
             <img class="searchbtn" @click="searchpage(wrsearch)"
             src='../../static/picture/search.png' alt=""/> 
      </template>
     </el-input>
     </div>
  <div @click="test2" class="cel">分类</div>
            
       <div class="cel">
 <el-dropdown>
    <span class="cel">
     客户端
    </span>
    <el-icon>
        <img style="width:20px;height:20px;" src='../../static/picture/down.png' alt=""/> 
      </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Win客户端</el-dropdown-item>
          <el-dropdown-item>Mac客户端</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
       </div>

          <div class="cel">
 <el-dropdown>
    <span class="cel">
     入驻/合作
    </span>
    <el-icon>
        <img style="width:20px;height:20px;" src='../../static/picture/down.png' alt=""/> 
      </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>111</el-dropdown-item>
          <el-dropdown-item>222</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
       </div>

       <div class="cuser" @click="toinfor">
           <div style="position:relative;left:25px;margin-top:5px;">
            <img class="userpic" :src='hpicture' alt=""/> 
           </div>
      
       <div class="username">
           <p class="hidden">1</p>
           {{husername}}
           <br>
         <div class="identify">User</div>
       </div>
       

       </div>


            </div>
<!-- banner -->
            <div class="cbanner">
  <div class="cbcontent">
<div class="cbleft">
<el-carousel :interval="5000" arrow="always" indicator-position="outside" trigger="click">
    <el-carousel-item  v-for="item in carouseData" :key="item">
      <img style="width:100%;height:300px;border-radius:5px;" :src="item.url" alt=""/>    
    </el-carousel-item>

  </el-carousel>
</div>

<div class="cbright">
   <div class="brtop">
<div :class="index == number ? 'brtopl':'brtopr'" @click="tab(index)" v-for="(item ,index) in dataList"
                :key="index">{{item.option}}
        </div>
   </div>
  <div  v-show="number == 0">
    <div style="color:transparent;font-size:10px">""</div>
    <div style="display:flex;position:relative;left:70px;">
    <div>
      <img class="brconlimg" @click="toyueli"
       src='../../static/picture/bofang.png' alt=""/>
    </div>
   <div style="position:relative;left:20px"
   >音乐乐理知识</div>
    </div>
<div class="brconl">
   <el-progress class="brper" :text-inside="true" :stroke-width="20" :percentage="per1" />
</div>
    <div style="display:flex;position:relative;left:70px;">
    <img class="brconlimg" src='../../static/picture/bofang.png' alt=""/> 
   <div style="position:relative;left:20px">高等数学课程</div>
    </div>
<div class="brconl">
    <el-progress class="brper"  :text-inside="true" :stroke-width="20" :percentage="per2" />
</div>
     <div style="display:flex;position:relative;left:70px;">
    <img class="brconlimg" src='../../static/picture/bofang.png' alt=""/> 
  <div style="position:relative;left:20px">工业设计课程</div>
    </div>
<div class="brconl">
  <el-progress class="brper"  :text-inside="true" :stroke-width="20" :percentage="per3" />
</div>
 
  </div>
  <div class="brconr" style="flex-direction:column"
  v-show="number == 1">
<div class="musictitle">
  <div>音乐乐理知识</div>

</div>

<div style="position:relative;
top:200px;">
    <el-pagination small layout="prev, pager, next" 
    :total="50" />
</div>

  </div>
</div>
  </div>


            </div>
<!-- content -->
             <div class="ccontent">
            <div class="ccl">
              <div style="font-size:22px;font-weight:bold;position:relative;left:5%">猜你喜欢</div>
              <div style="font-size:15px;color:transparent">""</div>
              <div style="text-align:center">
               <img style="width:85%;height:170px;" src='../../static/picture/cover7.png' alt=""/> 
                <div style="font-size:25px;color:transparent">""</div>
               <img style="width:85%;height:170px;" src='../../static/picture/cover8.png' alt=""/> 

              </div>
            </div>

          <div class="ccrf">

            <div style="height:40px;width:60px;position:relative;left:100%;">
                 <div class="changelist" @click="changevideolist()">
                   <img style="width:20px;height:20px;margin-top:5px;
                   margin-left:25px;" 
                   src="../../static/picture/changelist.png" />
                   <p>换一批</p>
                   </div>
            </div>

            <div class="ccr">
              <div class="ccrc" v-for="(item ,index) in videolist"
                :key="index">
                <div class="ccrvf" @click="tovideo(item.title)">
               <img  class="ccrv" :src="item.url" alt=""/>
               <div style="background-color:white;font-size:20px;
               font-weight:bold;font-size:20px;"
               >{{item.title}}</div>
                <div style="background-color:white;font-size:20px;
                color:gray;opacity:1
               font-weight:bold;font-size:13px;">{{item.author}}</div>
                 </div>
              </div>
            </div>
            </div>
             </div>
          <router-view></router-view>

     
<div>
 
  </div>


          <div></div>  
          <div></div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import {ref,getCurrentInstance,onMounted} from 'vue' 
 import banner1 from '../../static/picture/banner1.png'
  import banner2 from '../../static/picture/banner3.png'
   import banner3 from '../../static/picture/cover6.png'
      import banner4 from '../../static/picture/cover500.png'
import axios from 'axios';
import { useStore } from 'vuex'


export default {
setup(){

      // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()
  const { proxy } = getCurrentInstance()
   let getipicture=ref(route.params.beforepicture)
      let getiname=ref(route.params.inforname)


   onMounted(() => {
  console.log(getipicture.value)
  console.log(getiname.value)
  // hpicture.value=getipicture
  // husername.value=getiname
    })

let research=""
const wrsearch=ref('')
let per1end=1033
 let per1=Math.round(125/per1end*100.0)
 let per2=74
 let per3=32
    let carouseData=[
         {url:(banner4)},
        {url: banner1},
          {url: banner3} ,
         { url: banner2},
         { url:  ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/16603790159301191303.png") },
      ]
      let number=ref(0)
 let dataList= [
          {option: '最近在看'},
          {option: '我的收藏'},
        ]
        let videolist =ref([
         {url:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/wurenji.png"),title:("无人机学习视频"),author:("Nick")},
        {url: ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/musiclisten.jpg"),title:("音乐赏析"),author:("肥鱼小罐头")},
          {url: ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/computer1.jpg"),title:("大一计算机学习"),author:("01星球")} ,
         { url: ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/fire.png"),title:("烟火"),author:("Nick") },
          { url:  ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/math.png"),title:("高数学习课"),author:("梨米特考研数学") },
         { url:  ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/16603790159301191303.png"),title:("泛型与数组"),author:("Nick") },
        ])
 let bvideo=ref(true);  
   function changevideolist(){

     if(bvideo=true){
let cvideolist=ref([
 {url:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/clearn.jpg"),title:("c++学习"),author:("汤姆还在写代码")},
   {url: ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/yuwen.jpg"),title:("语文学习"),author:("在下太阳雨_")},
  {url: ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/self.png"),title:("反对电信诈骗"),author:("Nick")} ,
   { url: ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/javalearn.jpg"),title:("JAVA学习路线"),author:("程序员鱼皮") },
{ url:  ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/worklearn.png") ,title:("办公软件学习"),author:("95陈先生")},
  { url:  ("http://nicklorry.top:8090/oss/getPicture?id=video_cover/xinlixue.jpg"),title:("心理学"),author:("奇慢自修室") },
  ])
    videolist.value=cvideolist.value
    bvideo.value=false
     }if(bvideo=false){
       videolist.value=videolist.value
         bvideo.value=true
     }
  
   }   
function tab(index){
     number.value=index;
     console.log(index)
     console.log(per1)
}
   function test(){
    router.push({
      name:'chome',
})
   }
      function test2(){
    router.push({
      name:'cvideo',
})
   }
 function toyueli(){
    router.push({
      name:'yueli',
})
 }
 function tovideo(title){
     if(title=="反对电信诈骗"){
       console.log(title)
      router.push({
      name:'cvideo',
})
     }
      else{
       console.log("bad")
             router.push({
      name:'yueli',
})
     }
 }
function searchpage(wrsearch){
  console.log(11)
      router.push({
      name:'searchpage',
       params:{
           wrsearch
     }
})
}
function toinfor(){
      router.push({
      name:'infor',
})
}
let hpicture=ref("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png")
let husername=ref("testuser")
  return{
    husername,hpicture,
      research,wrsearch,carouseData,dataList,tab,number,videolist,banner1,banner2,banner3,
      per1,per2,per3,test,test2,changevideolist,toyueli,tovideo,
      searchpage,toinfor,getiname,getipicture
  }
}

}
</script>

    
<style>
 .ctop{
     width:100%;
     display:grid;
     grid-template-columns: 20% 30% 8% 12% 10% 20%; 
     height:70px;
    background-color:#98ABED;
 }
 .ctitle{
    font-size:30px;
    text-align:center;
    font-weight:bold;
     line-height:70px;
   color:white;
     cursor:pointer;
 }
 .cinput{
     line-height:70px;
 }
 .searchbtn{
     text-align:center;
     float:left;
     width:20px;
     height:20px
 }
 .cel{
     cursor:pointer;
     line-height:70px;
     font-size:22px;
     color:white;
     font-weight:bold;
 }
 .cuser{
     display:grid;
    width:100%;
     grid-template-columns: 35% 30%; 
     height:70px;
 }
 .username{
   color:white;
     font-size:20px;
     font-weight:bold;
 }
.identify{
    
    color:black;
    opacity:0.4;
  font-size:17px;
}
 .userpic{
     top:50%;
     width:60px;
     height:60px;
    border-radius:50%;
 }
 .hidden{
     font-size:1px;
       opacity:0;
 }
 .cbanner{
    padding-top:20px;
   width:100%;
   height:420px;
 }
 .cbcontent{
   margin:0 auto;
   background-color:#E1EFFF;
   width:86%;
   height:82%;
    border-radius:15px;
    border-color:white;
    border-style:solid;
    border-width: 5px;
    display: flex;
    flex-direction: row;
 }
 .cbleft{
   margin-left:15px;
   margin-top:10px;
   margin-bottom:10px;
  border-radius:5px;
 
  border-width:1px;
  text-align:center;
  width:52%;
 }
 .cbright{
    position:relative;
    left:6%;
   margin:10px;
 background-color:white;
    border-radius:5px;
box-shadow: 1px 1px  1px black ;
/* xraw  yraw  shadow width   color */
  width:36%;
  height:310px;
 }
.brtop{
  display:flex;
  flex-direction: row;
  height:50px;
  background-color:white;
}
.brtopl{
  background-color:white;
  width:50%;
  text-align:center;
  padding-top:7px;
  font-size:22px;
  font-weight:bold;
  transition:0.6s;
}
.brtopr{
  background-color:#d8dff5;
  width:50%;
  text-align:center;
  font-size:22px;
  font-weight:bold;
  padding-top:7px;
    transition:0.6s;
}
.brtopl:hover{
  cursor:pointer;
    transition:0.6s;
  background-color:whitesmoke;
}
.brtopr:hover{
    cursor:pointer;
      transition:0.6s;
 background-color:#dfe2eb;
}
.brconr{
   display:flex;
   background: url(../../static/picture/background4.png) no-repeat 0px 0px;
   	background-size:cover;
     width:100%;
  height:260px;
    text-align:center;
    border-bottom-left-radius:5px;
     border-bottom-right-radius:5px;
}
.brconr p{
  text-align:center;
  font-size:15px;
  font-weight:bold;
  color:white;
  position:relative;
  top:100px;
  left:50px;
}
.brconr img{
   position:relative;
     top:100px;
   left:50px;  
}
.brconl{
  width:80%;
  margin:0 auto;
  height:50px;
  text-align:center;
}
.brper{
     height:40px;
     

}
.brconlimg{
   width:30px;
   height:30px;
   cursor:pointer;
   border-radius:50%;
}
.brconlimg:hover {
   cursor:pointer;
    content: url(../../static/picture/bofangclick.png);
    /* 用content来改变img */
}
.ccontent{
     /* background-color:aqua; */
  width:94%;
  height:450px;
  margin:0 auto;
  display:grid;
 grid-template-columns: 27% 63% 5%; 
}
.ccl{
    height:450px;
}
.ccr{
  position:relative;
   left:5%;
  display:grid;
  grid-template-columns: 33% 33% 33%;
    grid-template-rows: 200px 200px;
    align-items:center;
}
.ccrc{

  background-color:whitesmoke;
  border-color:white;
  border-width:5px;
  border-bottom-width: 7px;
  border-style:solid;
}
.ccrv{
  width:100%;
  height:135px;
  cursor:pointer;

}
.ccrvf{
  box-shadow:1px 1px 5px rgb(204, 200, 200);
  cursor:pointer;
  transition:0.6s;
}
.ccrvf:hover{
    transition:0.6s;
 box-shadow:2px 2px 5px gray;
}
.ccrf{
  display:flex;
  flex-direction:column;
}

.changelist{
  display:flex;
  position:relative;
  left:-50px;
  background-color:
#98ABED;
  width:120px;
  height:30px;
  line-height:30px;
  text-align:center;
    transition:0.6s;
    border-radius:10px;
    color:white;
    font-weight:bold;
}
.changelist p{
  margin-top:0px;
}
.changelist:hover{
  cursor:pointer;
  transition:0.6s;
  background-color: #9fa9ce;;
}

.musictitle{
font-size:16px;
margin:0 auto;
position:relative;
top:15px;
font-weight:bold;
height:25px;
width:260px;
border-radius:15px;
background-color:#E1EFFF;
  transition:0.6s;
}

.musictitle:hover{
  transition:0.6s;
  cursor:pointer;
  background-color:#c6d7eb;
}
.cuser:hover{
  cursor:pointer;
}
</style>