import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

import Lesson1 from '@/page/lesson1/lesson1'
import Foo1 from '@/page/lesson1/Foo'
import Bar1 from '@/page/lesson1/Bar'

import Lesson2 from '@/page/Lesson2/Lesson2'
import Foo2 from '@/page/Lesson2/Foo'
import Bar2 from '@/page/Lesson2/Bar'

import Lesson3 from '@/page/Lesson3/Lesson3'
import Foo3 from '@/page/Lesson3/Foo'
import Bar3 from '@/page/Lesson3/Bar'

import Lesson4 from '@/page/Lesson4/Lesson4'
import Foo4 from '@/page/Lesson4/Foo'
import Bar4 from '@/page/Lesson4/Bar'

Vue.use(Router)

export default new Router({
  routes: [
  // 同级路由
    {
      path: '/lesson1',
      name:'lesson1',
      component: Lesson1,
    },{
          path:'/foo1',
          name:'foo1',
          component:Foo1
    },{
          path:'/bar1',
          name:'bar1',
          component:Bar1
    },
    // 子路由
    {
      path: '/lesson2',
      name:'lesson2',
      component: Lesson2,
      children: [
        {
          path:'foo2',
          name:'foo2',
          component:Foo2
        },
        {
          path:'bar2',
          name:'bar2',
          component:Bar2
        },
      ]
    },
    // 动态路由
    {
      path: '/lesson3',
      name:'lesson3',
      component: Lesson3,
    },{
          path:'/foo3/:id',
          name:'foo3',
          component:Foo3
    },{
          path:'/bar3/:id',
          name:'bar3',
          component:Bar3
    },
    // 编程式导航
    {
      path: '/lesson4',
      name:'lesson4',
      component: Lesson4,
    },{
          path:'/foo4/:id',
          name:'foo4',
          component:Foo4
    },{
          path:'/bar4/:id',
          name:'bar4',
          component:Bar4
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/content/:id',
      name:'content',
      component: Content
    }
  ]
})
