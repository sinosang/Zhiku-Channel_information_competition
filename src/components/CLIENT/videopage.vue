<template>
<!-- top -->
        <div class="ctop">
           
            <div class="ctitle" @click="gohome">
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

       <div class="cuser">
           <div style="position:relative;left:25px;margin-top:5px;">
            <img
            class="userpic" :src='"http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"' alt=""/> 
           </div>
      
       <div class="username">
           <p class="hidden">1</p>
           {{vusername}}
           <br>
         <div class="identify">User</div>
       </div>
       

       </div>


            </div>
<!-- content -->
 <div class="vcontent">
   <!-- content top -->
   <div>
   <div style="color:transparent">"</div>
   <div style="font-size:20px;font-weight:bold">{{vtitle}}</div>
   <div style="height:10px;color:transparent">"</div>
   <div style="display:flex">
<div style="font-size:16px;opacity:0.8;color:gray">9/11</div>
<div style="font-size:16px;opacity:0.8;color:gray;margin-left:30px;
margin-top:-3px;">获赞数：{{goodjob2}}</div>
<div style="color:transparent">"</div>
   </div>
   </div>


 <div class="vcc">
   <!-- LEFT -->
   <video
     ref='videoExample'
     controls
     poster="../../static/picture/banner2.png"
     :class="index == number ? 'videos1':'videos2'"
    :src='videoshow'
>
<!-- video/16603755518081009779.mp4 -->

</video>

   <!-- RIGHT -->

<div :class="index == number ? 'state1':'state2'">
  <!-- BUTTON TO RIGHT -->
     <span class="rightbtnf">
   <span :class="index == number ? 'rightbtn':'rightbtn2'" >
     <span style="height:10px;color:transparent">111</span>
 <span @click="changecolor(index)">
<img id="rbtn1" style="width:15px;height:12px;" src='../../static/picture/右箭头.png' alt=""/>
  </span>
  <span style="font-size:5px; color:transparent">"111</span>
<span @click="changecolor2(index)">
  <img id="rbtn2" style="width:15px;height:12px;" src='../../static/picture/左箭头.png' alt=""/>
</span>
     <span  style="height:5px;color:transparent">"111</span>
   </span>
</span>
<!-- RCONTENT -->
<div id="vbtnall" style="position:absolute;
top:5px;left:15px;
display:flex;flex-direction:row;">
<div :class="pindex == pnumber ? 'pdivt1':'pdivt2'"
 @click="ptab(pindex)" v-for="(item ,pindex) in dataList"
                :key="pindex">{{item.option}}
        </div>
        </div>
  <div  v-show="pnumber == 0">
      <div class="vcollapse" >
    <el-collapse  v-model="activeName" accordion >
      <el-collapse-item  title="目录标题1"  name="1">
      <div class="collitem">
      <img class="vrconlimg"  @click="changevideo()"
      src='../../static/picture/bofang.png' alt=""/>
   <span style="font-size:18px; 
   position:relative;
  left:18px;
  top:1px;cursor:pointer">原来是诈骗</span>
    </div>
      </el-collapse-item>
     
  
    </el-collapse>
  </div>
     <img  style="
     z-index:-1;width:80px;height:35px;
     position:absolute;bottom:15px" 
   src='../../static/picture/logo2.png' alt=""/>
  <div class="vrbtm">
    </div>
  </div>
  <div  v-show="pnumber == 1">
<div style="background-color:whitesmoke;
  opacity:0.3;
height:30px;
    margin:0 auto;
    position:relative;top:-25px;
    text-align:center;
    font-size:16px;">[{{vusername}}]加入了放映室</div>
    <div style="background-color:white;
    width:90%;
    height:320px;
    margin:0 auto;
    position:relative;top:-30px;
    overflow:auto;
">
 <ul>
     <li class="vcrli" 
     v-for="item in message_array" :key="item">
     <div class="vcritem">{{item}}</div>

       <img class="vcrtri" 
       src="../../static/picture/downtri.png"/>

       <div class="vcrname">
         <img 
         style="width:30px;height:30px;" :src="vuserpic" />
         {{vusername}}</div>

     </li>
 </ul>

    </div>
        <div class="vcbottom">
    <el-input class="vcinput"
    v-model="message"
    type="text"
     show-word-limit
    placeholder="跟大家聊点什么"
  />
 <img @click="addMessage" class="vcinputbtn"
  src="../../static/picture/logo2.png"
 />
    </div>
  </div>
  <div  v-show="pnumber == 2">
    <!-- top input -->
   <div style="height:30px;display:flex;position:relative;top:-25px;">
      <div class="vc2top1">全部笔记 </div> 
        <div class="vc2top2">按创建时间</div>
         </div>
   <div class="vc2input">
      <el-input 
    v-model="wvnote"
    type="text"
    placeholder="查找笔记"
  >
   <template #suffix>
 <img class="searchbtn" src='../../static/picture/search.png' alt=""/> 
      </template>
      </el-input> 
   </div>
   <!-- noteall -->
   <div class="vc2c" style="color:transparent">
     <div class="vc2citem"  style="display:none"
      v-for="item in noteall" :key="item">
            {{item.note}} 
     </div>
   </div>
   <div class="vc2cfix" @click="addnote"></div>
   <!-- bottom picture -->
   <div style="display:flex;">
     <img class="vc2cpic1" src="../../static/picture/logo2.png"/>
<img class="vc2cpic2" src="../../static/picture/background.png"/>
  </div>
   </div>
     <div  v-show="pnumber == 3">
       <!-- top -->
       <div style="height:30px;display:flex;position:relative;top:-25px;">
<div style="position:relative;left:10px;top:-5px;
        font-size:16px;font-weight:bold;">自动备份
 <el-switch
    v-model="beifen"
    style="width:45px;height:5px;"
    inline-prompt
  />
        </div>
        <div style="position:relative;right:-45%;font-size:18px;">
   工具箱
        </div>
         </div> 
         <!-- input -->
   <div class="vc2input">
      <el-input 
    v-model="wvnote"
    type="text"
    placeholder="未命名笔记"
  >
   <template #suffix>
 <img class="searchbtn" src='../../static/picture/search.png' alt=""/> 
      </template>
      </el-input> 
   </div>
     <div class="vc3area">
     <el-input
    v-model="textarea"
    type="textarea"
  :autosize="{ minRows: 5, maxRows: 12}"
    placeholder="这里是正文"
  /> 
     <div>
     <img class="vokbtn" src='../../static/picture/ok1.png' alt=""/> 
     <img class="vbackbtn" @click="backto2"
      src='../../static/picture/back1.png' alt=""/> 
     </div>
     </div>
   </div>
</div>

 </div>  

<!-- content BOTTOM -->
<div style="display:flex
 flex-direction:row;
 height:50px;
 ">
 <div class="vcbicon">
   <img :class="vpindex == vpnumber ? 'vprimary1':'vprimary2'"
    @click="vprimary(vpindex)"
    />
 </div >
 <div class="vcbicon">
     <img :class="vsindex == vsnumber ? 'vsstar1':'vsstar2'"
     @click="vpstar(vsindex)"
      src="../../static/picture/star1.png"/>
  </div>
   <el-tooltip :content='10' placement="top-end" effect="dark">
  <div class="vcbtag" @click='videoplay(10)'>诈骗话术</div>
   </el-tooltip>
      <el-tooltip :content='84' placement="top-end" effect="dark">
<div class="vcbtag" @click='videoplay(84)'>诈骗专家说</div>
      </el-tooltip>
</div>

<!-- BUTTOM -->
<div style="
display:flex;flex-direction:row;">
<div :class="vbindex == vbnumber ? 'vbdivt1':'vbdivt2'"
 @click="vbtab(vbindex)" v-for="(item ,vbindex) in vblist"
                :key="vbindex">{{item.option}}
        </div>
 </div >
<div  v-show="vbnumber == 0">
  <div style="font-size:22px;font-weight:bold;
  margin:20px;"> 
    教学服务
  </div>
  <div class="vbc0">

    <div class="vbc01">
   电信诈骗是指通过电话、网络和短信方式，编造虚假信息，设置骗局，对受害人实施远程、
   非接触式诈骗，诱使受害人打款或转账的犯罪行为，
   通常以冒充他人及仿冒、伪造各种合法外衣和形式的方式达到欺骗的目的，
   如冒充公检法、商家公司厂家、国家机关工作人员、银行工作人员等各类机构工作人员，伪造和冒充招工、刷单、贷款、手机定位和招嫖等形式进行诈骗。
</div>

<div class="vbc02">
  <div class="vbc02d" text @click="dialogVisible = true"> 
    详细咨询课程
    </div>
<img style="position:relative;left:45%;" 
src="../../static/picture/logo3.png" />
  </div>
 
<el-dialog v-model="dialogVisible" title="详细课程" width="30%" draggable>
   课程封面:<br/>
  <img style="width:200px;" src="../../static/picture/banner2.png" />
    <div>课程名称：反对电信诈骗</div>
    <div>课程id：32031471</div>
    <div>课程目录：共2节</div>
    <div>上传者id：44738467</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>


  </div>
   <div style="font-size:22px;font-weight:bold;
   height:50px;  margin:20px;"> 
    讲师介绍
  </div> 
    <div class="vbc0">
    <div class="vbc01_other">
 <img style="width:50px;height:50px;position:relative;top:20%;"
   :src='"http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"' />
   新华社
   
</div>

<div class="vbc02">
  <div class="vbc02d" text @click="moreteacher"> 
      
    更多讲师信息 
    </div>
<img style="position:relative;left:45%;" 
src="../../static/picture/logo3.png" />
  </div>

  </div>
  </div>

<div  v-show="vbnumber == 1">
  <div style="display:flex;margin:25px;">
<div :class="vb2index == vb2number ? 'vbdivt3':'vbdivt4'"
 @click="vb2tab(vb2index)" v-for="(item ,vb2index) in vb2list"
                :key="vb2index">{{item.option}}
        </div>
         </div>
<div  v-show="vb2number == 0">
 <div class="vb2item"
      v-for="item in tcommondall" :key="item">
           <img class="vb2pic" :src="item.pic"> 
            {{item.commond}} 
            <div >
              <img  class="vb2itempic1"
              src="../../static/picture/good.png" />
            </div>
            <div>
              <img  class="vb2itempic2"
              src="../../static/picture/评论.png"/>
            </div>
 
     </div>

<div @click="iwannasay= true" text 
   class="iwannasay">  
  我要发言</div>
      
<el-dialog v-model="iwannasay" title="发言内容" width="30%" draggable>
    <div>
      <el-input  v-model="submitcommond" 
    maxlength="100"
    placeholder="请输入发言内容"
    show-word-limit
    type="textarea">

      </el-input>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" 
         @click="addtcommond"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
  </div>
  <div  v-show="vb2number == 1">
 <div class="vb2item"
      v-for="item in commondall" :key="item">
           
            {{item.commond}} 
                        <div >
              <img  class="vb2itempic1"
              src="../../static/picture/good.png" />
            </div>
            <div>
              <img  class="vb2itempic2"
              src="../../static/picture/评论.png"/>
            </div>
     </div>

  </div>
</div>

 <!-- <el-button @click="test"> test</el-button> -->

</div>

 






 
          <router-view></router-view> 

    
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import {ref,getCurrentInstance,onMounted} from 'vue' 
// import imgurl from '../assets/images/logo.png'
import axios from 'axios';
import { useStore } from 'vuex'
// import Check from '../../static/picture/select.png'
// import Close from '../../static/picture/close.png'
 import banner2 from '../../static/picture/banner2.png'
import { ElMessageBox } from 'element-plus'
export default {
setup(){
      // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()
  const { proxy } = getCurrentInstance()
   const activeName = ref('1')
let vtitle="反对电信诈骗课程"
let vdate="2022/8/31  20:25"
let vcover=banner2
let number=ref(0);
let index=ref(0)
let vusername=ref("testuser")
let vuserpic=ref("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png")
let wvnote=ref()
let message_array=ref([])
let message=ref('')     
let textarea=ref('')
const beifen = ref(true)
let studyserve=ref("it is the text content to show")
let videoExample=ref("")
let getvideotime=ref(route.params.videotime)
 onMounted(() => {
  console.log(getvideotime.value)
  videoplay(getvideotime.value)
    })

function addMessage(){
             message_array.value.push(message.value);
             message.value = '';
        huifu=1;
         }
function changecolor(index){
      number.value=index+1;
     console.log(number.value)
}
function changecolor2(index){
      number.value=index;
     console.log(number.value)
}
   function gohome(){
    router.push({
      name:'client',
})
   }
      function test2(){
    router.push({
      name:'cvideo',
})
   }
   let pnumber=ref(0)
 let dataList= [
          {option: '课程目录'},
          {option: '放映室'},
          {option: '笔记'},
          // {option: '添加笔记'},
        ]
function ptab(pindex){
     pnumber.value=pindex;
}
function addnote(){
     pnumber.value=3;
}
function backto2(){
     pnumber.value=2;
}
let noteall=[
   {note: '笔记1'},
          {note: '笔记2'},
          {note: '笔记3'},
          {note: '笔记4'},
          {note: '笔记5'},

]

let vbnumber=ref(0);
let vbindex=ref(0)
function vbtab(vbindex){
     vbnumber.value=vbindex;
}

 let vblist= [
          {option: '课程简介'},
          {option: '教室留言箱'},
        ]
let vb2number=ref(0);
let vb2index=ref(0)
function vb2tab(vb2index){
     vb2number.value=vb2index;
}
 let vb2list= [
          {option: '教师答疑区'},
          {option: '互动留言区'},
        ]
let tcommondall= ref([
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"),commond: 't留言11111'},
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"),commond: 't留言22222'},
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"),commond: 't留言33333'},
        ])
let commondall= [
          {commond: '留言11111'},
          {commond: '留言22222'},
        ]

function moreteacher(){
  ElMessageBox.alert(
     '<p>讲师介绍:讲师暂无上传更多相关信息</p>',
    '讲师姓名：新华社',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
function addtcommond(){
  iwannasay.value = false
  let newlist={
     pic:("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"),
     commond:submitcommond.value
  }
  tcommondall.value.push(newlist);
  submitcommond.value=""

}
const dialogVisible = ref(false)
const iwannasay = ref(false)
let submitcommond=ref("")

function videoplay(time){
        var video =videoExample.value;
        video.currentTime = time;
        video.play()
      }
let goodjob2=ref(0)
let vpindex=ref(0)
let vpnumber=ref(0)
function vprimary(vpidnex){
  vpindex.value=vpnumber+1
    goodjob2.value=goodjob2.value+1
}

let videoshow=ref("http://nicklorry.top:8090/oss/getVideo?id=video/fzp.mp4")
function changevideo(){
  // let videochange=ref("http://nicklorry.top:8090/oss/getVideo?id=video/yls.mp4")
  //  videoshow=videochange.value;
  //  videoshow="http://nicklorry.top:8090/oss/getVideo?id=video/yls.mp4"
  //  console.log(videoshow)
  console.log("111")
   router.push({
      name:'cvideoc1',
})
}

  return{
    gohome,test2,changecolor,changecolor2,
     vtitle,vdate,vcover,number,index,activeName,vusername,vuserpic,
     dataList,ptab,pnumber,
     message_array,message,addMessage,addnote,
     wvnote,noteall,textarea,beifen,
     vbnumber,vbindex,vbtab,vblist,backto2,
     studyserve,vb2list,vb2tab,vb2index,vb2number,
     commondall,tcommondall,moreteacher,dialogVisible,iwannasay,
   submitcommond,addtcommond,videoplay,videoExample,getvideotime,
   vprimary,goodjob2,vpindex,vpnumber,videoshow,changevideo
  }
}

}
</script>

<style src="../../components/CLIENT/videopage.css"></style>