<template>
     <!-- 44738467
        //123456 -->
        <div class="ctop">
           
            <div class="ctitle" @click="tohome" style="cursor:pointer">
                <img  style="width:70px;height:35px;cursor:pointer" src='../../static/picture/logo.png' alt=""/>
                <text style="cursor:pointer">知库网</text>
                </div>
 <div class="cinput" style="width:800px;margin-left:100px;">
     <el-input style="width:85%;height:45px;" v-model="getsearch" 
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
  <div  class="cel" style="color:transparent">分类</div>
            
       <div class="cel">
 <el-dropdown style="display:none">
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
 <el-dropdown style="display:none">
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

       <div class="cuser">
           <div style="position:relative;left:25px;margin-top:5px;">
            <img class="userpic" :src='"http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"' alt=""/> 
           </div>
      
       <div class="username">
           <p class="hidden">1</p>
           testuser
           <br>
         <div class="identify">User</div>
       </div>
       

       </div>


            </div>

<div class="searchallpage">
  <div class="searchall">
<!-- btn -->
      <div class="searchpagebtn">
          <div class="searchtag" @click="searchpage(wrsearch)">
            <img style="width:30px;height:30px;position:relative;top:5px;
            margin-right:5px;margin-left:15px;
            " src="../../static/picture/search.png" />
            课程</div>
          <div class="searchtag" @click="searchlabel()">
            <img style="width:30px;height:30px;position:relative;top:5px;
            margin-right:5px;margin-left:15px;
            " src="../../static/picture/search.png" />
            视频标签</div>
            <div style="position:relative;left:50px;top:15px;opacity:0.7;
            ">共{{allitem}}个内容</div>
<!-- btn -->
              <div class="doit" style="position:relative;left:620px;top:15px; 
              background-color:#7bbfea;border-radius:50%;
              height:40px;width:40px;cursor:pointer;  transition:0.6s;
            " @click="searchpast(allitem)">
            <img style="width:30px;height:30px;margin-top:5px;margin-left:5px" src="../../static/picture/pastpage.png" />
            </div>
            <div class="doit" style="position:relative;left:650px;top:15px;
             background-color:#7bbfea;border-radius:50%;
             height:40px;width:40px;cursor:pointer ; transition:0.6s;
            " @click="searchnext(allitem)">
            <img style="width:30px;height:30px;margin-top:5px;margin-left:5px" src="../../static/picture/nextpage.png" />
            </div>
      </div>
<!-- all -->
      <div class="searchfor">
        
       <div class="searchitem" v-for="(item ,index) in searchlist"
                :key="index">
                <div>
                <img style="width:250px;height:150px;" :src='"http://nicklorry.top:8090/oss/getPicture?id="+item.cover' />
                </div>

                <div style="display:flex;flex-direction:column">
               <div class="itemtitle">{{item.title}}</div>
               <div class="itemauthor">
                 <img style="width:40px;height:40px;" src="../../static/picture/userpic.png" />
                 {{item.author}}</div>
                </div>

              <div style="display:flex;flex-direction:column">
               <div class="itemid">id:{{item.id}}</div>
                <el-tooltip :content='item.label' placement="top">
                <div :class="item.label == 'undefined' ? 'touming':'itemlabel'"
                  @click="tolabel(item.labeltime)">      
                <img  style="width:30px;height:30px;position:relative;top:5px;
                margin-right:5px;margin-left:15px;
               " src="../../static/picture/positiontag.png" />
                </div>
                </el-tooltip>

               <div class="itemtag" @click="searchremark(item.remark)"> 
                 <img style="width:30px;height:30px;position:relative;top:5px;right:5px;
                 " src="../../static/picture/tag.png" />
                 {{item.remark}}</div>
                </div>
       </div>
      </div>
  </div>
</div>

 
 
 

</template>


<script>
import { useRoute, useRouter } from 'vue-router'
import {ref,getCurrentInstance,onMounted, nextTick} from 'vue' 

import axios from 'axios';
import { useStore } from 'vuex'
    import { ElMessage } from 'element-plus'
export default {
setup(){
    
  const store = useStore()
  console.log("trytoken",store.state.info) 
      // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()
  const { proxy } = getCurrentInstance()
let getsearch=ref(route.params.wrsearch)
let gettoken="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NDczODQ2NyIsImNyZWF0ZWQiOjE2NjI5OTczMTM5MzEsImV4cCI6MTY2MzE0MTMxM30.BAgYNvgK67zw8cRGiO-SAiDPi0gW8RIfiVL0OBQc7QIKG4HnfArLryajNF5Qubbe3_f5zlYHNEd2CzyTc-IFtA"
 let page=ref(1)
let size=5
let allitem=ref(6)

// 诈骗进入--next-past--音乐（课程）
//--电信诈骗，传销（allsearch）
//--tag（传销，诈骗）--视频标签label
 function searchpage(){
    let usesearch=ref(""+getsearch.value)
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/search/fullSearch'+'?keyword='+usesearch.value+'&page=1&size=10&category=course&fields=title',
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
        .then(function(res) {
      console.log(res.data.data.value)
       allitem.value=res.data.data.length;
      searchlist.value=res.data.data.slice(0,5);
      console.log("searchlist",searchlist.value.label)
        })
        .catch(function(error) {
          console.log("error",error);
        });
 } 
    function tohome(){
     router.push({
      name:'client',
})
    } 
function searchremark(remark){
console.log(remark)
    let usesearch=ref(""+remark)
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/search/fullSearch'+'?keyword='+usesearch.value+'&page=1&size=10&category=course&fields=remark',
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
        .then(function(res) {
          allitem.value=res.data.data.length
      console.log(res.data.data)
    searchlist.value=res.data.data.slice(0,5);
       console.log("searchlist",searchlist)
        })
        .catch(function(error) {
          console.log("error",error);
        });
}
function searchnext(allitem){

   let usepage=page.value+1;
  let usesearch=ref(""+getsearch.value)
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/search/fullSearch'+'?keyword='+usesearch.value+'&page='+usepage+'&size=5&category=course&fields=title',
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
        .then(function(res) {
          console.log(usepage)
      console.log(res.data.data)
      searchlist.value=res.data.data;
      console.log("searchlist",searchlist)
        })
        .catch(function(error) {
          console.log("error",error);
        });
  if(usepage=2){
        ElMessage({
    showClose: true,
    message: '已经到底了',
    type: 'error',
  })
     }
}
function searchpast(allitem){
if(allitem<5||allitem==1){
        ElMessage({
    showClose: true,
    message: '不能返回了',
    type: 'error',
  })
 return
     }
   let usepage=page.value;
  let usesearch=ref(""+getsearch.value)
    axios({
      method: 'get',
      url: 'http://nicklorry.top:8090/search/fullSearch'+'?keyword='+usesearch.value+'&page='+usepage+'&size=10&category=course&fields=title',
      headers: {'Authorization':gettoken}
      // 携带token令牌使用get方法获取信息
    })
        .then(function(res) {
          console.log(usepage)
      console.log(res.data.data)
      searchlist.value=res.data.data.slice(0,5);
      console.log("searchlist",searchlist)
        })
        .catch(function(error) {
          console.log("error",error);
        });

}
let searchlist=ref([
    {cover:'course_cover/16629886200971545570.jpg',title:'诈骗原曲',id:'17137667',author:'Nick',remark:'诈骗',label:'0'},
      {cover:'course_cover/16628203757281551372.png',title:'反对电信诈骗',id:'32031471',author:'Nick',remark:'网络安全类，诈骗类',label:'诈骗专家说,诈骗话术'},
       {cover:'course_cover/16629892823421970571.jpg',title:'境外电诈公司员工偷了诈骗回来的资金逃跑后被抓回后的惨状',id:'28335398',author:'Nick',remark:'电信诈骗，境外',label:'0'},
   {cover:'course_cover/16629886856201613068.jpg',title:'让我在骗你一次',id:'18857891',author:'Nick',remark:'歌曲，欺骗',label:'0'},
      {cover:'course_cover/16629888175031989056.jpg',title:'被亲妈骗进传销组织',id:'20311272',author:'Nick',remark:'传销，欺骗',label:'0'},
])

function searchlabel(){
console.log("thevideolabel")
let videolabel=[
  {cover:'course_cover/16628203757281551372.png',title:'反对电信诈骗',id:'32031471',
  label:'诈骗话术',labeltime:'10',author:'Nick',remark:'网络安全类，诈骗类'},
  {cover:'course_cover/16628203757281551372.png',title:'反对电信诈骗',id:'32031471',
  label:'诈骗专家说',labeltime:'84',author:'Nick',remark:'网络安全类，诈骗类'},
]
allitem.value=2
     searchlist.value=videolabel;

}

function tolabel(videotime){
       router.push({
      name:'cvideo',
       params:{
       videotime
      }
})
}
  return{
      gettoken,getsearch,searchremark,searchnext,searchpast,
      searchpage,tohome,searchlist,page,size,allitem,searchlabel,
      tolabel
  }
}

}
</script>

<style>
.searchallpage{
    width:100%;
    background:url("../../static/picture/background5.png"),
    url("../../static/picture/background4.png");
    background-size:3200px,1800px;
    background-repeat:no-repeat;
    background-position-x:0,-250px;
    background-position-y:0,700px;
    height:1100px;
    margin:0 auto;
}
.searchall{

    position:relative;
    background-position-y:-300px;
   background-size:2000px;
   margin:0 auto;
    width:90%;
    height:1050px;
    top:30px;
    border-radius:15px;
    box-shadow:2px 2px 10px gray;
}
.searchitem{
    display:flex;
    position:relative;
    left:80px;
    margin-top:35px;
    width:90%;
    height:150px;
    background:url("../../static/picture/background3.png") no-repeat;
    background-size:500px;
    background-position-x:100%;
    background-position-y:100%;
    border-style:outset;
    cursor:pointer;
    transition:0.6s;
}
.searchitem:hover{
   transition:0.6s;
   box-shadow:2px 2px 5px rgb(1, 168, 168);
}
.searchpagebtn{
    display:flex;
    width:80%;
    height:40px;
    line-height:40px;
}
.searchtag{
    display:flex;
    height:40px;
    background-color:rgb(0, 255, 255);
    width:15%;
    position:relative;
    top:15px;
    font-size:20px;
    font-weight:bold;
    color:white;
    text-align:center;
    margin-left:100px;
    border-radius:15px;
    transition:0.6s;
    box-shadow:2px 2px 3px rgb(35, 243, 243);
}
.searchtag:hover{
    cursor:pointer;
   transition:0.6s;
    background-color:rgb(35, 243, 243);
}
.itemtitle{
  width:500px;
  font-size:20px;
  font-weight:bold;
  margin-left:25px;
  margin-top:15px;
}
.itemauthor{
  position:absolute;
  display:flex;
  color:gray;
  width:300px;
  bottom:5px;
  opacity:0.7;
  height:40px;
  line-height:40px;
    font-size:20px;
  font-weight:bold;
  margin-left:25px;
}
.itemid{
    width:100px;
  font-size:16px;
  font-weight:bold;
  margin-left:200%;
  margin-top:15px;
}
.itemlabel{
  /* background-color:#f391a9; */
  opacity:0.7;
  border-radius:15px;
  text-align:center;
    width:150px;
    height:30px;
    line-height:30px;
  font-size:16px;
  font-weight:bold;
  margin-left:180%;
  margin-top:15px;
    transition:0.6s;

}
.itemlabel:hover{
  transition:0.6s;
}
.itemtag{
 position:absolute;
  display:flex;
  color:white;
  background-color:#7bbfea;
  opacity:0.7;
  width:20%;
  bottom:5px;
  right:15px;
  height:40px;
  line-height:40px;
    font-size:15px;
  font-weight:bold;
  padding-left:15px;
  border-radius:15px;
  transition:0.6s;
}
.itemtag:hover{
   transition:0.6s;
  background-color:#33a3dc;
}
.doit:hover{
  transition:0.6s;
  transform:scale(1.1);
}
.box-item {
  width: 110px;
  margin-top: 10px;
}
.touming{
  display:none;
}
</style>