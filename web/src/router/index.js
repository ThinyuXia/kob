import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '@/views/pk/PkIndexView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import RecordIndexView from '@/views/record/RecordIndexView'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView'
import NotFound from '@/views/error/NotFoundView'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk"
  },
  {
    path: "/pk",
    name: "pk_index",
    component: PkIndexView
  },
  {
    path: "/record",
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: "/ranklist",
    name: "ranklist_index",
    component: RanklistIndexView
  },
  {
    path: "/user/bot",
    name: "user_bot_index",
    component: UserBotIndexView
  },
  {
    path: "/user/account/login",
    name: "user_account_login",
    component: UserAccountLoginView
  },
  {
    path: "/user/account/register",
    name: "user_account_register",
    component: UserAccountRegisterView
  },
  {
    path: "/404",
    name: "404",
    component: NotFound
  },
  {
    path: "/:catchAll(.*)", //匹配任意路径 
    redirect: "/404"
  }
]

const router = createRouter({
  history: createWebHistory(), //将createWebHashHistory改为createWebHistory去掉路径中的#
  routes
})

export default router
