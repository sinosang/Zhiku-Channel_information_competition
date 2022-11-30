<template>

        <div class="ctop">
           
            <div class="ctitle" @click="test">
                <img  style="width:70px;height:35px;cursor:pointer" src='../../static/picture/logo.png' alt=""/>
                <text style="cursor:pointer">知库网</text>
                </div>
 <div class="cinput">

     </div>
  <div @click="test2" class="cel"></div>
            
       <div class="cel">
       </div>

          <div class="cel" style="color:transparent">

       </div>

       <div class="cuser">
           <div style="position:relative;left:25px;margin-top:5px;">
            <img class="userpic" :src='beforepicture' alt=""/> 
           </div>
      
       <div class="username">
           <p class="hidden">1</p>
           {{inforname}}
           <br>
         <div class="identify">User</div>
       </div>
       

       </div>


            </div>
<div class="back">
    <div class="container" style="display:flex;">
		
		<div class="lldiv"
		>
		<div style="font-size:24px;font-weight:bold;text-align:center
		position:relative;margin-top:15px;">在知识中遨游</div>
		
			<div class="lldivitemall2"
		>
		
		<div class="lldivitem"  v-for="(item,index) in peoplesay" 
		:key="index">
     {{index+1}}.{{item.word}}——{{item.people}}
		</div>

			</div>
			<div class="changepeople"
			@click="changepeople">
				换一批

			</div>
		</div>

		<div class="ldiv">
			<div  v-show="infornumber == 0">
		<div style="height:50px;color:black;position:relative;
		top:15px;left:20px;font-size:22px;font-weight:bold;
		">个人信息</div>
		<br/>
		<div style="position:relative;left:20px;">当前用户头像:</div>
		<img style="width:200px;height:200px;position:relative;
		border-radius:50%;left:50px;
		top:30px;" :src='inforpicture' />
		<div class="ldivitemall">
		<div class="ldivitem">用户名称：{{inforname}}</div>
		<div class="ldivitem">用户身份：user</div>
		<div class="ldivitem">用户账号：44738267  </div>
		<div class="ldivitem">上一次登录：2小时前</div>
		</div>
		</div>
		<div  v-show="infornumber == 1">
		<div style="height:50px;color:black;position:relative;
		top:15px;left:20px;font-size:22px;font-weight:bold;
		">修改个人信息</div>
		<br/>
		<div style="position:relative;left:20px;">当前用户头像:</div>
		<img style="width:200px;height:200px;position:relative;
		border-radius:50%;left:50px;
		top:30px;" :src='inforpicture' />
		<label for="inforpicture">
         <text style="cursor:pointer;margin-left:100px;">点击修改头像</text>
       </label>
	<input type="file" id="inforpicture" style="display:none"
   accept="image/jpeg,image/x-png,image/gif"
    v-on:change="uploadImg($event)">      
		<div class="ldivitemall">
		<div class="ldivitem">用户名称：
			<el-input style="width:50%;" v-model="editusername"
			placeholder="修改用户名称"
			></el-input>
			</div>
		<!-- <div class="ldivitem">用户身份：user</div> -->
		<div class="ldivitem">用户密码：
			<el-input style="width:50%;" v-model="editpassword"
			placeholder="修改账号密码"
			></el-input></div>
		<div class="ldivitem">
			<el-button @click="surechange">确认修改</el-button>
			</div>
		</div>
		</div>
		</div>
<div class="rightDiv">
			<div class="main" >
				<ul class="outUl">
					<li class="rselectDown">
						<ul>
							<label @click="toinfornumber">个人信息</label>
						</ul>
					</li>
					<li class="rselectDown">
						<ul>
							<label @click="updateinfornumber">修改个人信息</label>
						</ul>
					</li>
					<li class="rselectDown">
						<ul>
							<label @click="tohomepage">返回主页</label>
						</ul>
					</li>

					<li class="rselectDown">
						<ul>
							<label @click="gosystem">退出登录</label>
						</ul>
					</li>
				</ul>
			</div>
		</div>
    </div>
       </div> 


      <router-view>
     </router-view> 


   <br>
                
              
<br>




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
import { ElMessage, ElMessageBox } from 'element-plus'

export default {

setup(){
      // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()
  const { proxy } = getCurrentInstance()
   
 
let inforname=ref("testuser")
let inforpicture=ref("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png")
let infornumber=ref(0)
let beforepicture=ref("http://nicklorry.top:8090/oss/getPicture?id=profile_picture/default.png")
function updateinfornumber(){
	infornumber.value=1
}
function toinfornumber(){
		infornumber.value=0
}
let peoplesay=ref([
	{word:'知识和世故不同，真有学问的人往往是很天真的',people:'罗曼.罗兰'},
{word:'知识是精神食粮',people:'柏拉图'},
{word:'人的天才只是火花，要想使它成熊熊火焰，哪就只有学习！学习！',people:'高尔基'},
{word:'试玉要烧三日满，辨才须待七年期',people:'白居易'},
{word:'知识是为老年准备的最好的食粮',people:'亚里士多德'},
{word:'知识是引导人生到光明与真实境界的灯烛',people:'李大钊'},
])
  
function changepeople(){
	let cplist=[
	{word:'知识有两种，其一是我们自己精通的问题；其二是我们知道在哪里找到关于某问题的知识',people:'约翰生'},
{word:'知识是精神食粮',people:'柏拉图'},
{word:'韬略终须建新国，奋发还得读良书',people:'郭沫若'},
{word:'吾生也有涯，而知也无涯',people:'庄子'},
{word:'人不能象走兽那样活着，应该追求知识和美德',people:'但丁'},
{word:'不患人不知，惟患学不至',people:'范质'},
	]
	peoplesay.value=cplist
} 
 
 function uploadImg(e){
        let that = this;
        let file = e.target.files[0];
        console.log(file)
         console.log(file.name)
        let imgSize = file.size/1024;
    
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          let dataURL = reader.result;
          that.inforpicture = dataURL;

      }
 }
 let editpassword=ref("")
 let editusername=ref("")
 function surechange(){
	 inforname.value=editusername.value
	 beforepicture.value=inforpicture.value
	  ElMessage({
    message: '修改成功',
    type: 'success',
  })
  infornumber.value=0
 }
 function tohomepage(){
      router.push({
      name:'client',
	   params:{
           inforname,beforepicture
     }
})
 }
 return{
	 surechange,
  inforname,inforpicture,infornumber,editusername,beforepicture,tohomepage,
  toinfornumber,updateinfornumber,peoplesay,changepeople,uploadImg,editpassword
  }
}

}
</script>


<style>
.infheader{

    width: 100%;    height: 40px;

    background-color: #8ecfd4;

}

.infleft{ 

    width: 200px;
    height: 800px; 
    /* background-color: #37f7c8; */

    float:left;
    position: relative; 

}
.infmiddle{
  float:left;
width:500px;
}
.infright{
  
    width: 200px;
    height: 200px; 
    background-color: #eb6100;
   float:left;
    position: relative;

}


			
         .rightDiv{
				width: 250px;
				height: 500px;
				background-color:#F6F7FC;
				position: fixed;
				right: -5px;
				text-align: center;
				transition: 0.6s;
			}

			.selectDown label{
				display: block;
				width: 200px;
				height: 40px;
				background-color: #d1dbf0;
				font-size: 15px;
				text-align: center;
				color:white;
				margin-bottom: 5px;
				margin-top: 10px;
			}
			.selectDown{
				height: 40px;
				margin-bottom: 5px;
				/* 如果内容超出范围则切断 */
				overflow: hidden;
				float: left;
				padding-right: 5px;
				/* 动画时间 */
				transition: 0.6s;
			}
			.rselectDown label{
				display: block;
				width: 200px;
				height: 50px;
				box-shadow:2px 2px 10px #cccfda;
				font-size: 15px;
				text-align: center;
				position:relative;
				left:-50px;
				background-color:#d1dbf0;
margin:0 auto;
color:black;
transition:0.3s;
cursor:pointer;
padding-top:10px;
font-weight: bold;
			}
			.rselectDown {
				height: 40px;
				margin-bottom: 5px;
				/* 如果内容超出范围则切断 */
				overflow: hidden;
				float: left;
				padding-right: 5px;
				/* 动画时间 */
				transition: 0.6s;
			}
			.rselectDown ul li{
				width: 100%;
				height: 30px;
				background-color: antiquewhite;
				list-style-type: none;
			}
			.rselectDown ul :hover{
			background-color:#a9bbe0;
			}
			.selectDown:hover{
				height: 200px;
			}
			.selectDown ul li{
				width: 100%;
				height: 30px;
				background-color: antiquewhite;
				list-style-type: none;
			}
			.selectDown ul li:hover{
				background-color: aqua;
			}
.lldiv{
	display:flex;
	flex-direction:column;
	width:20%;
	height:600px;
	background-color:white;
	background-color:#F6F7FC;

}
.ldiv{
	width:50%;
	height:600px;
  margin-left:120px;
	background-color:#eaf0fd;
	display:flex;
	flex-direction:column;

}
.ldivitem{
	font-size:18px;

	height:50px;
	width:100%;
	margin:0 auto;
	line-height:50px;

}
.ldivitemall{
	cursor:default;
	position:relative;
   top:50px;
    background-color:rgb(241, 250, 250);
	width:90%;
    margin-top:20px;
	padding-left:25px;
	margin-left:20px;
	box-shadow:2px 1px 5px rgb(175, 175, 175); 
}
.lldivitem{
	font-size:18px;
	margin-top:10px;
	margin-bottom:15px;
	width:95%;
	margin-left:10px;
}
.lldivitemall2{
	width:90%;
	position:relative;
	top:15px;
	margin:0 auto;
	display:flex;
	flex-direction:column;
	background-color:white;
	/* box-shadow:2px 2px 5px gray; */
	border-radius:15px;
	border-color:red;
	border-style:solid;
	border-width:2px;

}
.changepeople{
	position:relative;
	top:15px;
	width:50%;
	height:30px;
	line-height:30px;
text-align:center;
   background-color:rgb(136, 194, 233);
   font-size:17px;
   font-weight:bold;
   text-align:center;
   color:white;
   cursor:pointer;
   margin:0 auto;;
	margin-top:25px;
	transition:0.6s;
	border-radius:15px;
}
.changepeople:hover{
transition:0.6s;
background-color:rgb(88, 161, 209);
}
.back{
	position:fixed;
	width:100%;
	height:700px;
	background:url("../../static/picture/background5.png"),
	url("../../static/picture/background4.png");
     background-repeat:no-repeat;
	background-position-y:50px,440px;
	background-position-x:0,400px;
}
</style>