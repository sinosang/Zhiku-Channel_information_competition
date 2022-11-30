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




  const store = useStore()
  console.log("trytoken",store.state.info) 

let gettoken=""
let inftoken=""
   function gohome(){
      gettoken=""+route.params.gethead,
      inftoken=gettoken,
      store.dispatch('updateInfo',inftoken)
  
      console.log("After home inftoken")
         console.log(store.state.info) // hello
      router.push({
        name:'home',
        params:{
            gettoken,
        }
  }) 
   }
   function gosystem(){
     console.log(1)
    router.push({
      name: 'System',
})
   }
   function informo(){
    router.push({
      name:'informo',
})
   }
   function allnotepage(){
    router.push({
      name:'allnotepage',
})
   }
   function onenotepage(){
    router.push({
      name:'onenotepage',
})
   }
   function postpage(){
    router.push({
      name:'postpage',
})
   }
   function updatepage(){
    router.push({
      name:'updatepage',
})
   }
   function updateinfor(){
    router.push({
      name:'updateinfor',
})
   }
   function delpage(){
    router.push({
      name:'delnotepage',
})
   }
   function historypage(){
    router.push({
      name:'historypage',
})
   }
   function delhistorypage(){
    router.push({
      name:'delhistorypage',
})
   }
   function favoritepage(){
    router.push({
      name:'favoritepage',
})
   }
   function delfavoritepage(){
    router.push({
      name:'delfavoritepage',
})
   }

 

        return{
     gohome,
     postpage,
     updatepage,informo,delpage,allnotepage,onenotepage,
     historypage,delhistorypage,
     favoritepage,delfavoritepage,gosystem,updateinfor,

    //  stringify
        }
    }
}

