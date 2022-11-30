// skl-blog/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home.vue';
import System from '../components/System.vue';
import register from '../components/register.vue';
import infor from '../components/INFOR/infor.vue';
import postpage from '../components/INFOR/postpage.vue';
import updatepage from '../components/INFOR/updatepage.vue';
import delnotepage from '../components/INFOR/delnotepage.vue';
import allnotepage from '../components/INFOR/allnotepage.vue';
import onenotepage from '../components/INFOR/onenotepage.vue';
import historypage from '../components/INFOR/historypage.vue';
import delhistorypage from '../components/INFOR/delhistorypage.vue';
import favoritepage from '../components/INFOR/favoritepage.vue';
import delfavoritepage from '../components/INFOR/delfavoritepage.vue';
import informo from '../components/INFOR/informo.vue';
import updateinfor from'../components/INFOR/updateinfor.vue';
import ause from'../components/ADMIN/ause.vue'

import client from'../components/CLIENT/homepage.vue'
import ahome from'../components/ADMIN/ahome.vue'
import cvideo from'../components/CLIENT/videopage.vue'
import cvideoc1 from'../components/CLIENT/c1.vue'
import yueli from'../components/CLIENT/yuelipage.vue'

import searchpage from'../components/CLIENT/searchpage.vue'


const routes = [
  {
    path: '/',
    name: 'System',
    component: System,
  },

  {
    path:'/infor',
    name: 'infor',
    component: infor,
    children:[
      {
        path:'informo',
        name: 'informo',
        component: informo,
      },
      {
        path:'postpage',
        name: 'postpage',
        component: postpage,
      },
      {
        path:'updatepage',
        name: 'updatepage',
        component: updatepage,
      },
      {
        path:'delnotepage',
        name: 'delnotepage',
        component: delnotepage,
      },
      {
        path:'allnotepage',
        name: 'allnotepage',
        component: allnotepage,
      },
      {
        path:'onenotepage',
        name: 'onenotepage',
        component: onenotepage,
      },
      {
        path:'historypage',
        name: 'historypage',
        component: historypage,
      },
      {
        path:'delhistorypage',
        name: 'delhistorypage',
        component: delhistorypage,
      },
      {
        path:'favoritepage',
        name: 'favoritepage',
        component: favoritepage,
      },
      {
        path:'delfavoritepage',
        name: 'delfavoritepage',
        component: delfavoritepage,
      },
      {
        path:'updateinfor',
        name: 'updateinfor',
        component: updateinfor,
      },
      ]
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/ause',
    name: 'ause',
    component: ause,
  },
  {
    path: '/client',
    name: 'client',
    component: client, 
  },
  {
    path: '/register',
    name: 'register',
    component: register, 
  },
 {
  path:'/ahome',
  name: 'ahome',
  component: ahome,
 },
 {
  path:'/cvideo',
  name: 'cvideo',
  component: cvideo,
 },
 {
  path:'/cvideoc1',
  name: 'cvideoc1',
  component: cvideoc1,
 },
 {
  path:'/yueli',
  name: 'yueli',
  component: yueli,
 },
 {
  path:'/searchpage',
  name: 'searchpage',
  component: searchpage,
 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;