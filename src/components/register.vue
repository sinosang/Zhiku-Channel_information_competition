
<template>
<div class="sysback">
  <div class="systitle">
  知库网
  <br/>
  <p>——畅想知识的乐趣</p>
</div>

<div style="display:flex">
<div class="animate sysgeyan2">
在知识的海洋中遨游
</div>
<div class="sys">
<div>
     <div style="height:70px;font-weight:bold;
     text-align:center;font-size:50px;">
       Register
     </div>
</div>
  <div class="sysmain1">
<div style="display:flex;background-color:white;">

        </div>
      <div>
 <div>
     <div style="opacity:0.8s;margin-left:15px;
margin-top:5px;  color:gray;">role:administrator</div>
  <form>
  <div style="display:flex;margin-top:15px;">
    <div class="sysinputtitle">名称:</div>
  <el-input class="sysinput" v-model="name" type="text" placeholder="请输入账号/id" clearable/>
  </div>
    <div style="display:flex;margin-top:15px;">
    <div class="sysinputtitle">密码:</div>
  <el-input class="sysinput" v-model="password" type="passwsord" placeholder="请输入密码" clearable show-password/>
    </div>
  <div>
     <div class="sysbottom">
       <el-button @click="GOBACK">返回</el-button>
    <el-button @click="REGISTER">注册</el-button>
     </div>
  </div>

           
  </form>
  </div>
      </div>


        <router-view></router-view>
  </div>
 
  </div>
</div>
</div>

</template>


<script>
import { useRoute, useRouter } from 'vue-router'
//用于监听路由变化
  import {ref,getCurrentInstance,onMounted} from 'vue' 
 import axios from 'axios';
 
axios.defaults.headers.post['Content-Type'] = 'application/json';
//确保使用json格式传递数据
export default {
  setup(){
      // 获取路由实例
  const router = useRouter()
   const route = useRoute()
   const name =ref('')
    const password =ref('')
     let getid=0
     let getname=''
         const { proxy } = getCurrentInstance()     
     onMounted(() => {
  // console.log(proxy)
    })

    function REGISTER(){
     // const name=ref(44738467)
    var datas = {
        name:name.value,
        password:password.value

	}    
  console.log(datas.name)
  console.log(datas.password)
          
  axios.post(
	    "http://nicklorry.top:8090/user/register",
	   datas
	)
       .then(function(res){
          console.log(res)
          const recode=res.data.code

          if(recode=="200"){
            const reid=res.data.data.id
             const rename=res.data.data.name
            // console.log(reid)
          alert("注册成功,id凭证为:"+res.data.data.id+",请记牢")
         GOBACK(reid,rename)
          }
          else if(recode=="304"){
             const reid=res.data.code
             console.log("re:"+reid)
            alert("用户名已存在")
          // GOBACK(reid,rename)
          }
        })
       .catch(function (error) {
	   console.log(error);
        });
    }

            function GOBACK(reid,rename){
               console.log(getid+"|||||"+rename)
              console.log("goback"+reid)
               getid=reid
               getname=rename
              //  成功赋值了
               console.log(getid)
               router.push({
                 //跳转传参的时候用name来不用path，否则params无法赋值
                 //设定的getid，getname需要提前用let定义，需要return
              name:'System',
              params:{
                  getid ,getname
              }
            })
            }  

        return{
     REGISTER,
GOBACK,
   name,
    password,
getid,
getname
}
  }
}
 
</script>

<style>


</style>



