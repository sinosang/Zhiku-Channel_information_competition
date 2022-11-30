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
             <img class="searchbtn" src='../../static/picture/search.png' alt=""/> 
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
            <img class="userpic" :src='"http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"' alt=""/> 
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
   <div style="font-size:20px;font-weight:bold">音乐乐理知识</div>
   <div style="height:10px;color:transparent">"</div>
   <div style="display:flex">
<div style="font-size:16px;opacity:0.8;color:gray">9/10</div>
<div style="font-size:16px;opacity:0.8;color:gray;margin-left:30px;
margin-top:-3px;">获赞数：{{goodjob}}</div>
<div style="color:transparent">"</div>
   </div>
   </div>


 <div class="vcc">
   <!-- LEFT -->
   <video
   
      ref="videoPlayer"
      :options="playerOptions"
     controls
     poster="../../static/picture/音乐乐理知识小柚TV.jpg"
     :class="index == number ? 'videos1':'videos2'" 
>
<!-- video/16603755518081009779.mp4 -->
<source  src="../../static/picture/音乐乐理.mp4">
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
   <div style="font-size:20px;font-weight:bold;text-align:center;
   display:flex;">
   <img style="margin-left:60px;width:60px;"
   src="../../static/picture/warning.png" />
   <p>该课程只有一个章节哦</p></div>
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
  <!-- noteall -->
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
 <img class="searchbtn" @click="vsearchnote"
 src='../../static/picture/search.png' alt=""/> 
      </template>
      </el-input> 
   </div>
   <!-- noteall -->
   <div class="vc2c">
     <div class="vc2citem"
      v-for="(item,index) in noteall" :key="index" @click="looknote(index)">
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
   <!-- add -->
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
    v-model="wvtitle"
    type="text"
    placeholder="未命名笔记"
  >
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
     <img class="vokbtn" @click="addnoteall(textarea,wvtitle)"
     src='../../static/picture/ok1.png' alt=""/> 
     <img class="vbackbtn"  @click="backto2"
      src='../../static/picture/back1.png' alt=""/> 
     </div>
     </div>
   </div>
   <!-- one -->
     <div v-show="pnumber == 4">
   <div class="vp4back">
<div style="font-size:18px;margin-left:25px;">
    {{notetitle}}
</div>
<div class="vp4content">
  {{notecontent}}
</div>
         <img class="vbackbtn" @click="backto2"
     style="margin-left:15px;"
      src='../../static/picture/back1.png' alt=""/> 

      <img class="vdeletebtn" @click="deletenoteall(idnex)"
      src='../../static/picture/deletelabel.png' alt=""/> 
   </div>
   </div>
   <!-- search -->
     <div  v-show="pnumber == 5">
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
   <div class="vc2c">
     <div class="vc2citem"
      v-for="(item,index) in note2" :key="index" @click="looknote(index)">
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
   乐理，是音乐理论的简称，包括相对简单的基础理论----
   读谱、音程、和弦、节奏、节拍等。还有相对来说比较高级的----
   和声、复调、曲式、旋律、配器法等内容。
   乐理的掌握，对于作曲、编曲、指挥、演奏来说，具有重要积极意义。
</div>

<div class="vbc02">
  <div class="vbc02d" text @click="dialogVisible = true"> 
    详细课程信息
    </div>
<img style="position:relative;left:45%;" 
src="../../static/picture/logo3.png" />
  </div>
 <!-- dialog -->
<el-dialog v-model="dialogVisible" title="详细课程" width="30%" draggable>
   课程封面:<br/>
  <img style="width:200px;" src="../../static/picture/音乐乐理知识小柚TV.jpg" />
    <div>课程名称:音乐乐理知识</div>
    <div>课程id：154133</div>
    <div>课程目录：共1节</div>
     <div>课程作者：小柚TV</div>
     <div>视频标签：音乐类</div>
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
   小柚TV
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
<!-- 教学 -->
<div  v-show="vb2number == 0">
 <div class="vb2item"
      v-for="item in tcommondall" :key="item">
      <div style="display:flex">
           <img class="vb2pic" :src="item.pic"> 
           <div style="margin-top:10px;margin-left:10px;">{{item.name}}</div>
      </div>
 <div style="margin-top:5px;">{{item.commond}} </div>
            <div>
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
  <!-- 留言 -->
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

     
<div>
 
  </div>
  

          <div></div>  
          <div></div>
</template>

<script>

import { useRoute, useRouter } from 'vue-router'
import {ref,getCurrentInstance,onMounted} from 'vue' 
import axios from 'axios';
import { useStore } from 'vuex'
 import banner2 from '../../static/picture/banner2.png'
import { ElMessage } from 'element-plus'
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

let vusername=ref("testuser")
let vuserpic=ref("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png")
let wvnote=ref()
let message_array=ref([])
let message=ref('')     
let textarea=ref('')
const beifen = ref(true)
let studyserve=ref("it is the text content to show")

function addMessage(){
             message_array.value.push(message.value);
             message.value = '';
        huifu=1;
         }
 let number=ref(0);
let index=ref(0)
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
   {note: '笔记1',content:'这里是第一个笔记的内容'},
   {note: '笔记2',content:'这里是第二个笔记的内容'},
]
let note2=[
   {note: '笔记1',content:'这里是第一个笔记的内容'},
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
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/girl.jpeg"),commond: '我想知道更多的乐理知识',name: '邵凌'},
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=icon/sunlake.jpg"),commond: '老师讲的真好',name: '张三'},
          {pic:("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"),commond: 'very good！' ,name: 'kangkang'},
        ])
let commondall= [
          {commond: '留言11111'},
          {commond: '留言22222'},
        ]

function moreteacher(){
  ElMessageBox.alert(
     '<p>讲师介绍:音频设备评测UP主一个，喜欢音乐，摄影。不定期高频率更新，闲鱼:柠檬之香气、小柚TV、许愿保佑世界。</p>',
    '讲师姓名：小柚TV',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
function addtcommond(){
  iwannasay.value = false
  let newlist={
     pic:("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png"),
     commond:submitcommond.value,
     name: vusername
  }
  tcommondall.value.push(newlist);
  submitcommond.value=""

}
const dialogVisible = ref(false)
const iwannasay = ref(false)
let submitcommond=ref("")
function onPlayerTimeupdate(player) {
    player.cache_.currentTime //当前时间
    player.cache_.duration //总时间
    player.currentTime(30) //设置播放时间位置
}





let goodjob=ref(14)
let vpindex=ref(0)
let vpnumber=ref(0)
function vprimary(vpidnex){
  vpindex.value=vpnumber+1
    goodjob.value=goodjob.value+1
}
let vsindex=ref(0)
let vsnumber=ref(0)
function vpstar(vpstar){
  vsindex.value=vsnumber+1
}

let notetitle=ref(111)
let notecontent=ref(111)
function looknote(index){
  console.log(index)
  notetitle.value=noteall[index].note
  notecontent.value=noteall[index].content
     pnumber.value=4;
}
function vsearchnote(){
    pnumber.value=5;
}
let wvtitle=ref("")
function addnoteall(textarea,wvtitle){
   let onenote=[
    {note:wvtitle,content:textarea}
   ]
      noteall.push(onenote[0]);

    ElMessage({
    showClose: true,
    message: '保存成功',
    type:'success'
  })  
        pnumber.value=2;
}
function deletenoteall(index){
  ElMessage({
    showClose: true,
    message: '删除成功',
    type:'success'
  })
    noteall.pop(noteall[index]);
    pnumber.value=2
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
   submitcommond,addtcommond,onPlayerTimeupdate,
   goodjob,vprimary,vpindex,vpnumber,vsindex,vsnumber,vpstar,
  looknote,notetitle,notecontent,vsearchnote,note2,wvtitle,
  addnoteall,deletenoteall
  }
}

}
</script>

<style src="../../components/CLIENT/videopage.css"></style>