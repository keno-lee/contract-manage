import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/views/layout/Layout';

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '', // 新建合同
    component: Layout,
    redirect: '/new',
    children: [
      {
        path: 'new',
        component: () => import('@/views/new'),
        name: 'new',
        meta: { title: '新建合同', icon: 'edit', noCache: true }
      }
    ]
  },
  {
    path: '', // 待提交 (草稿箱)
    component: Layout,
    redirect: '/draft',
    children: [
      {
        path: 'draft',
        component: () => import('@/views/draft'),
        name: 'draft',
        meta: { title: '待提交列表', icon: 'form', noCache: true }
      }
    ]
  },
  {
    path: '', // 待审核
    component: Layout,
    redirect: '/audit',
    children: [
      {
        path: 'audit',
        component: () => import('@/views/audit'),
        name: 'audit',
        meta: { title: '待审核列表', icon: 'clipboard', noCache: true }
      }
    ]
  },
  {
    path: '', // 被拒
    component: Layout,
    redirect: '/reject',
    children: [
      {
        path: 'reject',
        component: () => import('@/views/reject'),
        name: 'reject',
        meta: { title: '审核驳回列表', icon: 'bug', noCache: true }
      }
    ]
  },
  {
    path: '', // 审核通过
    component: Layout,
    redirect: '/pass',
    children: [
      {
        path: 'pass',
        component: () => import('@/views/pass'),
        name: 'pass',
        meta: { title: '审核通过列表', icon: 'tab', noCache: true }
      }
    ]
  },
  {
    path: '', // 用户管理
    component: Layout,
    redirect: '/user',
    children: [
      {
        path: 'user',
        component: () => import('@/views/user'),
        name: 'user',
        meta: { title: '用户管理', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '', // 编辑页面
    component: Layout,
    redirect: '/edit',
    hidden: true,
    children: [
      {
        path: 'edit',
        component: () => import('@/views/edit'),
        name: 'edit',
        meta: { title: '编辑', icon: 'edit', noCache: true }
      }
    ]
  },
  {
    path: '/preview-water', // 预览（有水印）
    component: () => import('@/views/preview-water'),
    hidden: true
  },
  {
    path: '', // 操作页面
    component: Layout,
    redirect: '/operate',
    hidden: true,
    children: [
      {
        path: 'operate',
        component: () => import('@/views/operate'),
        name: 'operate',
        meta: { title: '审核页', icon: 'operate', noCache: true }
      }
    ]
  },
  {
    path: '/print',
    component: () => import('@/views/print'),
    hidden: true
  },
  {
    path: '/test',
    component: () => import('@/views/test'),
    hidden: true
  }
];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [];
