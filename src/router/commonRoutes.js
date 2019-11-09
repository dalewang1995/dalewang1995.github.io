/**
 * /*
 * 通用路由配置，需要放在配置项数组的末端
 *
 * @format
 */

// import NotFound from '@pages/partials/NotFound'

export default [
  {
    path: '/',
    meta: {
      title: '汪小鱼',
      ignoreAuth: true
    },
    component: ()=>import('@pages/Homepage')
  },
  // {
  //   path: '/upload',
  //   meta: {
  //     title: '图片上传'
  //   },
  //   component: resolve => require(['@components/upload/upload'], resolve)
  // },
  {
    path: '*',
    meta: {
      title: 'Page Not Found',
      ignoreAuth: true
    },
    // component: NotFound
  }
]
