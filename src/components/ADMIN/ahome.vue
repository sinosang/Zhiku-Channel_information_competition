<template>


<!-- 
  44738267  
  管理员登录

  展示，新建

  上传封面，视频，都勾选，取消选择，删除封面，右下角入

  改封面，反对电信诈骗，网络安全类，诈骗类，新华社，

电信诈骗是指通过电话、网络和短信方式，
   编造虚假信息，设置骗局，对受害人实施远程、
   非接触式诈骗，诱使受害人打款或转账的犯罪行为，
   通常以冒充他人及仿冒、伪造各种合法外衣和形式的方式达到欺骗的目的，
   如冒充公检法、商家公司厂家、国家机关工作人员、银行工作人员等各类机构工作人员，伪造和冒充招工、刷单、贷款、手机定位和招嫖等形式进行诈骗。

  视频标签增加，删除，拉动进度条10 和 84，书写
  诈骗话术 ，诈骗专家说

  完成编辑

  添加目录副标题，原来是诈骗   上传视频
  重复一次，删除
  完成
 -->

<div style="display:flex;  flex-direction: row;">
  <!-- left -->
<div class="chleft">
<div class="chltop">
  <img style="position:relative;left:25px;width:70px;height:40px"
   src="../../static/picture/logo4.png" />
    <img style="position:relative;left:55px;width:60px;height:30px;top:-5px"
     src="../../static/picture/title.png" />
</div>
<div :class="chlindex == chlnumber ? 'chl1':'chl2'"
 @click="chltab(chlindex)" v-for="(item ,chlindex) in cleftlist"
                :key="chlindex">
     <img style="width:45px;height:40px;margin-left:5px;margin-top:3px;"
      :src="item.pic" />
           <div style="margin-left:15px;margin-top:10px"> {{item.option}}</div>
        </div>

</div>
<!-- right -->
<div style="display:flex;flex-direction:column;width:80%;">
<div style="display:flex;flex-direction:row;height:80px;
background-color:#F6F7FC;">

<div style="position:relative;left:25px;">
 <el-input style="width:600px;height:50px;margin-top:15px" 
 v-model="wrsearch" 
     type="text"
      placeholder="搜索素材........." 
     clearable> 
      <template #prepend>
        <div style="text-align:center;line-height:20px;width:15px;">
            <img style="width:20px;height:20px;line-height:20px;cursor:pointer" src='../../static/picture/searchb.png' alt=""/> 
        </div>
      </template>
      </el-input>
</div>


       <div class="cadmin">
           <div style="position:relative;margin-top:5px;">
            <img class="adminpic" :src='"http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"' alt=""/> 
           </div>
      
       <div class="adminname">
           <p class="hidden">1</p>
           {{adminname}}
           <br>
         <div class="identify">Admin</div>
       </div>
       

       </div>
  </div>
  <!-- 0 -->
<div  v-show="chlnumber == 0">
<div class="ch01">
  <div class="ch011">创建项目</div>
  <div style="display:flex" >
       <div @click="tochl1" class="ch012">新建</div>
       <div class="ch012" @click="handlejump(tohere)">打开</div>
        <img class="ch01back" src="../../static/picture/background4.png"/>
  </div>
</div>
<div class="ch02" id="tohere">
<div class="ch021">
  项目总览
<img style="height:40px;width:40px;position:relative;
top:10px;left:10px;" src="../../static/picture/星标.png" >
</div>
<div class="ch022">
<div class="ch022item" v-for="(item ,index) in ch0list"
     :key="index">
 <img class="ch022src" :src="item.pic" />

 <div class="ch022btm">
 <div class="ch022title">{{item.option}}</div>
  <div class="ch022edit">打开</div>
  <div class="ch022edit">修改</div>
  </div>
</div>
</div>
<el-pagination
    small
    background
    layout="prev, pager, next"
    :total="50"
    style="margin-left:75%;margin-top:20px;"
  />
</div>

  </div>
  <!-- 1 -->
  <div  v-show="chlnumber == 1">
    
<div class="ch01">
  <div class="ch111">导入素材</div>

  <div style="display:flex" >
       <div class="ch012">
<label for="uploadImg">
    <text style="cursor:pointer">上传封面</text>
</label>
         </div>
       <div class="ch112">
 <label for="uploadvideo">
      <text style="cursor:pointer">上传视频</text>
</label>
       </div>
<img class="ch01back" src="../../static/picture/background4.png"/>
  </div>
</div>
<!-- top -->
<div style="display: flex;width: 100%;">
  <div class="afileall">
    <img src="../../static/picture/fileall.png" />
    <p>素材</p>
</div> 
  <div class="afiledelete" @click="uploaddelete(checked1)">删除</div>
   <div class="afilenot" @click="uploadnot">取消选择</div>
</div>
<!-- content -->
<div style="display:flex;
font-size:20px;font-weight:bold;
color:#013FB8;cursor:default">
  <p style="margin-left:100px;
  margin-bottom:-5px;margin-top:5px;
  ">封面</p> 
  <p style="margin-left:500px;
  margin-bottom:-5px;margin-top:5px;
    ">视频</p> 
  </div>
<div style="display: flex;width: 100%;margin-top: 10px;height: 100px;padding-top: 10px">
 <div class="aupload1"> 
<label>
          <img :src='uploadImgUrl' alt="导入图片" 
      style="height:300px;width:500px" />
</label>

	<input type="file" id="uploadImg" style="display:none"
   accept="image/jpeg,image/x-png,image/gif"
    v-on:change="uploadImg($event)">
 </div> 
<div class="aupload2">
    <label for="uploadvideo">

      <video :src='uploadvideoUrl' 
      style="height:300px;width:500px" controls/>
    </label>

	<input type="file" id="uploadvideo" style="display:none"
    v-on:change="uploadvideo($event)">

</div>

</div>
<!-- ch1bottom -->
<div  style="display:flex;position:relative;
margin-left:100px;margin-top:210px;">
 <div>
 <el-checkbox v-model="checked1" :label=uploadname1 size="large" />
 </div>
 <div style="position:relative;left:450px;">
 <el-checkbox v-model="checked2" :label=uploadname2 size="large" />
 </div>
</div>
<div style="margin-left:90%;margin-bottom:50px;">
  <img  class="ahto2" @click="toah2" 
  src="../../static/picture/edit.png" />
</div>
  </div>
  <!-- 2 -->
  <div  v-show="chlnumber == 2">
    <!-- contenttop -->
    <div class="ah2toptitle">{{uploadname2}}</div>
    <div style="display:flex">
      <!-- top1 -->
    <div class="ah2top1">
 <video :src='uploadvideoUrl' 
       :poster='editImg' ref='videoExample'
      style="height:500px;width:800px" controls/>
      </div>
      <!-- top2 -->
      <div class="ah2top2">
        <div class="ahtop021">视频标签 label
        </div>
    
        <div class="ahtop02all">
          
 <div   v-for=" (item,index) in labellist" :key="index" 
     class="ahtop02item">
  <div style="display:flex">
        <div class="ahtop02itemnum">{{index+1}}</div>
          <el-input style="width:60%; 
          margin-left:30px;margin-top:10px;"
          v-model="labellist[index].value" placeholder="视频标签" />
      
        </div> 
    
        <div style="margin-top:15px;">
          <img :plain="true" @click="labelsuccess(index)" 
          class="ahtop02itembtn" src="../../static/picture/addlabel.png" />
          <img :plain="true"  @click="deletelabel(index)"
          class="ahtop02itembtn" src="../../static/picture/deletelabel.png" />
        </div>

     
</div>  
        </div>

 <div style="position:absolute;top:130px;right:30px;">
  <img class="ahtop02itembtn_add" @click="pushlabel"
  src="../../static/picture/add1.png"  />
</div>

      </div>
</div>
<div class="ah2content">
   <div class="ah2c1">
      <img style="weight:40px;height:40px;margin-top:15px;margin-right:15px;" src="../../static/picture/星标.png" />
    <div style="font-size:18px;margin-top:25px;">视频封面</div>
    <img style="margin-left:25px;width:250px;margin-top:55px;
    height:150px;border-radius:15px;" :src='editImg' />
     <div style="font-size:12px;margin-top:120px;margin-left:40px;width:100px;height:30px;
     line-height:30px;border-radius:5px;text-align:center;background-color:white;">
<label for="uploadImg">
    <text style="cursor:pointer;border-width:1px;">点击修改封面</text>
</label>
         </div>
     </div>
 <div class="ah2c1">
    <img style="weight:40px;height:40px;margin-top:75px;margin-right:15px;" src="../../static/picture/星标.png" />
    <div style="font-size:18px;margin-top:85px;">视频标题</div>
    <div style="margin-top:85px;width:60%;margin-left:25px;">
      <el-input v-model="edittitle"  maxlength="20" 
      show-word-limit placeholder="视频标题"/>
    </div>
 </div>
<div class="ah2c1">
    <img style="weight:40px;height:40px;margin-top:25px;margin-right:15px;" src="../../static/picture/星标.png" />
    <div style="font-size:18px;margin-top:35px;">标签类别</div>
    <div style="margin-top:35px;width:60%;margin-left:25px;">
      <el-input v-model="editremark"  maxlength="20" 
      show-word-limit placeholder="标签类别"/>
    </div>
 </div>
<div class="ah2c1" style="position:relative;top:-50px;">
    <img style="weight:40px;height:40px;margin-top:25px;margin-right:15px;" src="../../static/picture/星标.png" />
    <div style="font-size:18px;margin-top:35px;">视频作者</div>
    <div style="margin-top:35px;width:30%;margin-left:25px;">
      <el-input v-model="editauthor"  maxlength="15" 
      show-word-limit placeholder="作者名称(不填则为上传者)"/>
    </div>
    <div style="font-size:15px;position:relative;top:40px;
    margin-left:100px;display:flex;">
           <div style="color:gray;">上传者：{{adminname}}</div>
     
    </div>
 </div> 
<div class="ah2c1" style="position:relative;top:-100px;">
    <img style="weight:40px;height:40px;margin-top:25px;margin-right:15px;" src="../../static/picture/星标.png" />
    <div style="font-size:18px;margin-top:35px;">摘要</div>
    <div style="margin-top:35px;width:80%;margin-left:25px;">
      <el-input v-model="editabstract" type="textarea"
       maxlength="200"  resize='none' :rows="10" 
      show-word-limit placeholder="视频的摘要"/>
    </div>
 </div>

   <el-button style="width:100px;position:relative;left:90%;top:50px;"
    @click="videosubmit()">完成编辑</el-button>
  </div>
  </div>
  <div  v-show="chlnumber == 3">
    <!-- contenttop -->
        <div class="ah3top">
          <div style="display:flex">
    <div class="ah2toptitle" style="padding-top:15px;width:150px;">{{uploadname2}}</div>
     <img style="width:30px;height:30px;position:relative;left:10px;
       top:28px" src="../../static/picture/edit circle.png" /> 
          </div>
          <div style="display:flex">
            <!-- left -->
        <div class="ah2top1">
 <video :src='uploadvideoUrl' 
       :poster='editImg'
      style="height:450px;width:700px" controls/>
      </div>
      <!-- right -->
     <div class="ahtop03all" >
     <div style="font-size:20px;margin-left:15px;margin-top:10px;">
      {{uploadname2}}  
      ——目录:</div>
    
      <div class="ahtop03item"
       v-for=" (item,index) in videoflist" :key="index">
       <div style="display:flex;flex-direction:column">
     <div style="font-size:14px;margin-left:15px;margin-top:-10px;">副目录：{{item.fnum}}</div>
     <div style="margin-top:-30px;fpmt-sizew:14px;margin-left:15px;">标题名称：{{item.ftitle}}</div>
     </div>

     <div>
       <img class="ahtop03itembtn" @click="deletefvideo"
       src="../../static/picture/deletelabel.png" />
     </div>
       </div>    
        </div>
          </div>
</div>

<!-- 底部 -->
<div class="ah3bottom">
<div style="font-size:25px;font-weight:bold;
padding-top:15px;padding-left:30px;">课程目录</div>
<div style="display:flex">
<!-- <div class="ah3bbtn">添加</div> -->
<div class="ah3bbtn2" @click="finishvideo"
 style="position:relative;left:-10px;top:10px;">完成</div>
</div>
  <img class="ah3back" src="../../static/picture/background4.png"/>
</div>
<div class="ah3content">
 <div class="ah2c1">
    <img style="weight:40px;height:40px;margin-top:15px;margin-right:15px;" src="../../static/picture/星标.png" />
    <div style="font-size:18px;margin-top:25px;">目录副标题</div>
    <div style="margin-top:23px;width:30%;margin-left:25px;">
      <el-input v-model="editftitle"  maxlength="15" 
      show-word-limit placeholder="标题"/>
    </div>
<!-- 提交视频 -->
<label for="uploadvideo2" style="
position:relative;top:25px;left:250px;
">
    <div class="upvideof" style="color:white;font-weight:bold;'">点击上传视频</div>
</label>
<div class="aupload2" style="left:250px;">
    <label for="uploadvideo2">
      <video :src='uploadvideoUrl2' 
      style="height:150px;width:280px;margin-top:15px;" controls/>
    </label>

	<input type="file" id="uploadvideo2" style="display:none"
    v-on:change="uploadvideo2($event)">
</div>
<!-- 添加到附录 -->
<div class="ah3bbtn2" style="position:absolute;top:55%;width:150px;
left:50px;" @click="addtofvideo()" >添加到</div>
<div style="position:absolute;top:70%;width:700px;display:flex;
left:300px;">目录：
<el-input-number
    v-model="ftitlenum"
    :min="1"
    :max="5"   size="small"
    controls-position="right"
  />
    <div class="ah3bbtn3" style="">详细编辑</div>
  </div>

 </div>




   <!-- <el-button style="width:100px;position:relative;left:90%;top:50px;" @click="videosubmit()">完成编辑</el-button> -->
 
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
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
setup(){
      // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()
  const { proxy } = getCurrentInstance()
   let uploadImgUrl=ref("http://nicklorry.top:8090/oss/getPicture?id=icon/default.png")
  let uploadvideoUrl=ref("http://nicklorry.top:8090/oss/getVideo?id=icon/default.png")
let research=""
const wrsearch=ref('')
      let chlnumber=ref(0)
      let adminname=ref("Nick")

let uploadname1=ref("未命名素材1")
let uploadname2=ref("未命名视频2")
const checked1 = ref(false)
const checked2 = ref(false)
let edittitle=ref("")
let editImg=uploadImgUrl

 let cleftlist= [
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/home.png"),option: '首页'},
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/export.png"),option: '导入素材'},
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/setting.png"),option: '视频编辑器'},
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/film.png"),option: '视频总览'},
        ]
function chltab(chlindex){
     chlnumber.value=chlindex;
     console.log(chlindex)

}
function tochl1(){
     chlnumber.value=1;
}
function toah2(){
    chlnumber.value=2;
}


function uploadImg(e){
        let that = this;
        let file = e.target.files[0];
        console.log(file)

         console.log(file.name)
        //KB单位,可以获取图片的大小，到时候可以根据图片大小进行选择上传
        let imgSize = file.size/1024;
    
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          let dataURL = reader.result;
        //在这里就可以进行图片地址的获取了，到时候后台上传的图片就是根据这个来的
        //that.uploadImgUrl = dataURL;这个就是展示了上传的图片
          that.uploadImgUrl = dataURL;
          // console.log(that.uploadImgUrl)
          //这里就可以发送请求了，也可以选择之后发送，反正图片地址都获取了
          // $.ajax({
          //   type:"post",
          //   url:"上传的地址",
          //   async:true,
          //   data:{
          //     imgUrl:dataURL,
          //     avatar_wx:1,
          //     token:token,
          //     uid:uid,
          //   },
          //   success:function(e){
          //     that.avatar=dataURL;
          //     alert('修改成功');
          //   }
          // });
      }
 }
function uploadvideo(e){
        let that = this;
        console.log(e.target)
        let file = e.target.files[0];
        console.log(file)
         console.log(file.name)       
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          let dataURL = reader.result;
          that.uploadvideoUrl = dataURL;
      }
 }
function uploaddelete(e){
  if(e==true){
   ElMessage({
    message: '成功删除',
    type: 'success',
  })
  uploadImgUrl.value="http://nicklorry.top:8090/oss/getPicture?id=icon/default.png"
  console.log(e)
  }
  else{
    ElMessage({
    message: '请选择要删除的素材',
    type: 'error',
  })
  }
}
function uploadnot(){
  checked1.value=false;
  checked2.value=false;
}
let editabstract=ref("")
function videosubmit(){
   uploadname2.value=edittitle.value
    chlnumber.value=3;
}
let editlabel=ref()
let labelnum=ref()
let labellist=ref([
   {content: '',labeltime:'',labeltitle:'',},
])
// 网络安全类,诈骗类
let videoExample=ref()
function labelsuccess(){
   let video =videoExample.value;
        // video.currentTime = time;
  let choosetime=video.currentTime
   ElMessageBox.confirm(
    '是否在当前选定的视频节点创建视频标签?',
    '视频标签节点:'+choosetime,
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '保存成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '创建失败',
      })
    })
  labelnum.value=13;
   
}

function pushlabel(){
    labellist.value.push(labellist.value);
     
}
function deletelabel(index){
    ElMessage({
    showClose: true,
    message: '删除成功',
    type:'success'
  })
    labellist.value.pop(labellist.value);

}
function handlejump(tohere){
  console.log("tiaoya")
  // val想要跳往的dom的id
  const dom = document.querySelector(`#x${tohere}`)
  // 调用dom的scrollIntoView方法
  if (dom) {
    dom.scrollIntoView(true)
  }
}
let editauthor=ref("")
let editremark=ref("")
let editftitle=ref("")
let videoflist=ref([
])

 let uploadvideoUrl2=ref("http://nicklorry.top:8090/oss/getVideo?id=icon/default.png")
function uploadvideo2(e){
        let that = this;
        let file = e.target.files[0];
        console.log(file)
         console.log(file.name)       
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          let dataURL = reader.result;
          that.uploadvideoUrl2 = dataURL;
      }
 }
let ftitlenum = ref(1)

function addtofvideo(){
  //  console.log(ftitlenum.value)
  //  console.log(editftitle.value)
   let videof=ref([
     { ftitle:editftitle.value, fnum:ftitlenum.value,}])
      console.log(videof.value[0])
     videoflist.value.push(videof.value[0]);
   console.log(videoflist.value)
   editftitle.value=""
   uploadvideoUrl2.value=""
}
function deletefvideo(){
   videoflist.value.pop(videoflist.value[0]);
}

let ch0list=ref([
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/cover1.png"),option: '无人机学习'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/musiclisten.jpg"),option: '音乐赏析'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/cover3.png"),option: '化学实验'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/clearn.jpg"),option: 'C++学习'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/xinlixue.jpg"),option: '心理学'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=course_cover/16629886200971545570.jpg"),option: '诈骗原曲'},
])

function finishvideo(){
     ElMessageBox.confirm(
    '确定完成视频课程?',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '创建课程成功',
      })
      let changelist=[
  {pic:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/self.png"),option: '反对电信诈骗'},
 {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/cover1.png"),option: '无人机学习'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/musiclisten.jpg"),option: '音乐赏析'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/cover3.png"),option: '化学实验'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/clearn.jpg"),option: 'C++学习'},
   {pic:("http://nicklorry.top:8090/oss/getPicture?id=video_cover/xinlixue.jpg"),option: '心理学'},
  ]
  ch0list.value=changelist
console.log(ch0list)
    chlnumber.value=0;  
    })


}
  return{
      research,wrsearch,chltab,chlnumber,cleftlist,adminname,
      tochl1,ch0list,
      uploadImgUrl,uploadImg,uploadvideo,uploadvideoUrl,
     checked1,uploaddelete,checked2,uploadnot,uploadname1,uploadname2
     ,toah2,editImg,edittitle,videosubmit,editabstract,labelnum,
     labelsuccess,labellist,editlabel,pushlabel,deletelabel,
     handlejump,editauthor,editremark,videoExample,videoflist,editftitle
   ,uploadvideo2,uploadvideoUrl2,ftitlenum,addtofvideo,deletefvideo,finishvideo,

  }
}

}
</script>

<style src="../ADMIN/ahome.css"></style>
  
