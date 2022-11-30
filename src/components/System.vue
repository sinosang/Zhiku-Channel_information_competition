
<template>
  <div class="sysback">
    <div class="systitle">
      知库网
      <br />
      <p>——畅想知识的乐趣</p>
    </div>

    <div style="display: flex">
      <div class="animate sysgeyan2">在知识的海洋中遨游</div>
      <div class="sys">
        <div>
          <div
            style="
              height: 70px;
              font-weight: bold;
              text-align: center;
              font-size: 50px;
            "
          >
            Login
          </div>
        </div>
        <div class="sysmain1">
          <div style="display: flex; background-color: white">
            <div
              :class="index == number ? 'nor' : 'norn'"
              @click="tab(index)"
              v-for="(item, index) in userList"
              :key="index"
            >
              {{ item.option }}
            </div>
          </div>
          <div v-show="number == 0">
            <div>
              <div
                style="
                  opacity: 0.8s;
                  margin-left: 15px;
                  margin-top: 5px;
                  color: gray;
                "
              >
                role:user
              </div>
              <form>
                <div style="display: flex; margin-top: 15px">
                  <div class="sysinputtitle">账号:</div>
                  <el-input
                    class="sysinput"
                    v-model="username"
                    type="text"
                    placeholder="请输入账号/id"
                    clearable
                  />
                </div>
                <div style="display: flex; margin-top: 15px">
                  <div class="sysinputtitle">密码:</div>
                  <el-input
                    class="sysinput"
                    v-model="password"
                    type="passwsord"
                    placeholder="请输入密码"
                    clearable
                    show-password
                  />
                </div>

                <div class="sysbottom">
                  <el-button @click="REGISTER">注册</el-button>
                  <el-button @click="upload" :plain="true">登录</el-button>
                  <!-- <el-button @click="test">id凭证</el-button> -->
                </div>

                <!-- <el-button class="back" @click="GOBACK">返回</el-button> -->
              </form>
            </div>
          </div>
          <div v-show="number == 1">
            <div>
              <div
                style="
                  opacity: 0.8s;
                  margin-left: 15px;
                  margin-top: 5px;
                  color: gray;
                "
              >
                role:administrator
              </div>
              <form>
                <div style="display: flex; margin-top: 15px">
                  <div class="sysinputtitle">账号:</div>
                  <el-input
                    class="sysinput"
                    v-model="username"
                    type="text"
                    placeholder="请输入账号/id"
                    clearable
                  />
                </div>
                <div style="display: flex; margin-top: 15px">
                  <div class="sysinputtitle">密码:</div>
                  <el-input
                    class="sysinput"
                    v-model="password"
                    type="passwsord"
                    placeholder="请输入密码"
                    clearable
                    show-password
                  />
                </div>
                <div>
                  <div class="sysbottom">
                    <el-button @click="ADMIN">管理员登录</el-button>
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
import { useRoute, useRouter } from "vue-router";
//用于监听路由变化
import { ref, getCurrentInstance, onMounted } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
axios.defaults.headers.post["Content-Type"] = "application/json";
//确保使用json格式传递数据
export default {
  setup() {
    // 获取路由实例
    const router = useRouter();
    const route = useRoute();
    // 1. 服务器域名：`nicklorry.top`
    //2. 后端服务器运行的端口：`8090`
    const username = ref("");
    const password = ref("");
    let getid = 0;
    let getname = "";
    let gethead = "";
    let number = ref(0);
    const { proxy } = getCurrentInstance();
    //用proxy和getcurrentinstance来让value可以使用，用来替代this
    onMounted(() => {
      console.log("11112321");
      if (getid == 0) {
        console.log(1);

        console.log("now" + route.params.getid);
      } else {
        (getid = route.params.getid), console.log("now" + route.params.getid);
      }
    });

    function upload() {
      var datas = {
        //vue3中没有this，用.value来替代使用
        username: username.value,
        password: password.value,
      };
      //console.log(password)
      console.log(datas.username);
      console.log(datas.password);

      axios
        .post("http://nicklorry.top:8090/user/login", datas)
        .then(function (res) {
          console.log(res);
          // console.log(res.data.msg)
          const result = res.data.code;
          console.log("systoken:" + res.headers.authorization);
          gethead = res.headers.authorization;
          // console.log(gethead)
          if (result == "200") {
            router.push({
              name: "client",
              params: {
                getid,
                gethead,
              },
            });
            ElMessage({
              showClose: true,
              message: "登录成功",
              type: "success",
            });
          } else {
            ElMessage({
              showClose: true,
              message: "账号或者密码错误",
              type: "error",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function test() {
      //接受传参的时候要用route，
      //跳转页面路由用router
      (getid = route.params.getid), 
      console.log(route.params.getid);

      (getname = route.params.getname),
       console.log(route.params.getname);
      if (getid == undefined) {
        alert("请通过注册获得id凭证");
      } else if (getname == "") {
        alert("无法id凭证");
      } else {
        (username.value = getid),
          alert(getid + "为当前" + getname + "用户登录的凭证,请牢记");
      }
    }
    function REGISTER() {
      router.push({
        path: "/register",
      });
    }
    let userList = [{ option: "用户" }, { option: "管理员" }];
    function ADMIN() {
      router.push({
        path: "/ahome",
      });
    }
    function GOBACK() {
      router.push({
        path: "/",
      });
    }
    function NORMAL() {
      router.push({
        path: "/",
      });
    }
    function tab(index) {
      number.value = index;
      console.log(index);
      console.log(per1);
    }
    return {
      REGISTER,
      ADMIN,
      GOBACK,
      NORMAL,
      username,
      password,
      test,
      getid,
      getname,
      upload,
      gethead,
      userList,
      number,
      tab,
    };
  },
};
</script>

<style>
.sysinput {
  width: 70%;
}
.nor {
  background-color: #94abf8;
  width: 50%;
  color: white;
  text-align: center;
  padding-top: 7px;
  font-size: 22px;
  font-weight: bold;
  transition: 0.6s;
  height: 50px;
  line-height: 50px;
}
.norn {
  background-color: #dbe3ff;
  width: 50%;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  padding-top: 7px;
  transition: 0.6s;
  height: 50px;
  line-height: 50px;
}
.nor:hover {
  cursor: pointer;
  transition: 0.6s;
  background-color: #bac4e6;
}
.norn:hover {
  cursor: pointer;
  transition: 0.6s;
  background-color: #bac4e6;
}
.sys {
  position: relative;
  height: 500px;
  background-color: white;

  box-shadow: 1px 1px 3px gray;
  width: 400px;
  margin: 0 auto;
  border-radius: 15px;
  background: url("../static/picture/background2.png");
  background-size: 400px;
  background-repeat: no-repeat;
  background-position-y: 180px;
}
.systitle {
  position: relative;
  top: 20px;
  margin-left: 80px;
  z-index: 10px;
  font-size: 40px;
  font-weight: bold;
}
.systitle p {
  position: relative;
  top: 150px;
  margin-left: 20px;
  font-size: 25px;
  color: #94abf8;
  animation: mymove 2s infinite;
  transition: 0.6s;
}
.sysgeyan2 {
  position: relative;
  top: 50px;
  left: 1300px;
  z-index: 10;
  width: 40px;
  text-align: center;
  font-size: 35px;
  color: #bac4e6;
}
.sysback {
  z-index: -1;
  width: 100%;
  height: 753px;
  background: url("../static/picture/background5.png"),
    url("../static/picture/background4.png"), url("../static/picture/logo2.png");
  background-size: 2000px, 1500px, 100px;
  background-repeat: no-repeat;
  background-position-x: 0px, 60px, 5%;
  background-position-y: 5px, 425px, 95%;
}
.sysmarin1 {
  position: relative;
  top: 50px;
}
@keyframes mymove {
  0% {
    top: 0px;
  }
  /* 25%{top:17px;}   */
  50% {
    top: 15px;
  }
  /* 75%{top:15px;}    */
  100% {
    top: 0px;
  }
}
.sysinputtitle {
  width: 80px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
}
.sysbottom {
  margin-top: 20px;
  width: 100%;
  text-align: center;
}
</style>



