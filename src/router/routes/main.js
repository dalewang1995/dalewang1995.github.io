/*
 * @Author: 汪小鱼
 * @Date: 2021-01-11 23:08:55
 */

export default [
  {
    path: '/tool',
    meta: {
      ignoreAuth: true,
      title: '小鱼的工具箱'
    },
    component: ()=>import('../../pages/ToolPage.vue')
  },
  {
    path: '/qrcode',
    meta: {
      ignoreAuth: true,
      title: '小鱼的工具箱'
    },
    component: ()=>import('../../pages/Qrcode.vue')
  }
]
