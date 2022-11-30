import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from "/src/store/index";
//createApp(App).mount('#app')
import axios from "axios"
import router from "./router";
import VideoPlyaer from 'vue-video-player'
const app = createApp(App)
app.config.globalProperties.$http=axios;
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(VideoPlyaer)


