import { useRoute, useRouter } from 'vue-router'
import {ref,getCurrentInstance,onMounted} from 'vue' 
import axios from 'axios';
// import qs from 'qs',
// axios.defaults.headers.post['Content-Type'] = 'application/json';
//用于监听路由变化
import { useStore } from 'vuex'

export default{
    
    setup(){
  // 获取当前路由
  const route = useRoute()
  // 获取路由实例
  const router = useRouter()

  const userid =ref()
  const store = useStore()
//输入的笔记id详情

  let gettoken=""
  let content=ref([])

  //修改昵称信息

  function onSubmit(){
    router.push({
      path:'/'
    })
    }
    let inftoken=""
            function adminuse(){
              console.log("After")
                 console.log(store.state.info) // hello
              gettoken=""+route.params.gethead,
              inftoken=gettoken,
              store.dispatch('updateInfo',inftoken)
              console.log("After home inftoken")
                 console.log(store.state.info) // hello
                 router.push({
                  name:'ause',
                  params:{
                      inftoken,
                  }
            })
          }


   function infor(){
    gettoken=""+route.params.gethead,
    inftoken=gettoken,
    store.dispatch('updateInfo',inftoken)

    console.log("After home inftoken")
       console.log(store.state.info) // hello
    router.push({
      name:'infor',
      params:{
          gettoken,
      }
})
   }

   function toclient(){
    gettoken=""+route.params.gethead,
    inftoken=gettoken,
    store.dispatch('updateInfo',inftoken)
       console.log(store.state.info) // hello
    router.push({
      name:'client',
      params:{
          gettoken,
      }
})
   }


   console.log(store.state.info) // hello
   // 修改info的值
   const handleClick = () => {
     // 触发mutations，用于同步修改state的信息
     // store.commit('updateInfo', 'nihao')
     // 触发actions，用于异步修改state的信息
     //用于修改信息
     let trytoken=""
     trytoken=""+route.params.gethead,
     store.dispatch('updateInfo',trytoken)
     console.log("After")
        console.log(store.state.info) // hello
   }


        return{
     onSubmit,
     adminuse,
     userid,
     gettoken,
     content,
     infor,
     inftoken,
     toclient,
    //  stringify
handleClick,

        }
    }
}

