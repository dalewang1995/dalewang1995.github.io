<!-- @format -->

<template>
  <section class="page-module">
    <div class="module-content">

    <div class="header">
      <div class="logo-con">
        <h5 class="name-e" @mouseover="onMouseOver">CoderWang</h5>
        <div class="blank">|</div>
        <div class="name-c">汪小鱼</div>
      </div>
    </div>

    <div class="row">
    <div class="col-3 col-m-3 menu">
      <ul class="link-content block-item">
        <li @click="linkBlog">博客</li>
        <li @click="linkJueJin">掘金</li>
        <li @click="linkGitHub">GitHub</li>
      </ul>

      <ul class="link-content block-item item-margin">
        <div>小鱼的工具箱</div>
        <li @click="linkUrlTranslate">URL 转码</li>
        <li @click="linkUrlTranslate">URL 转二维码</li>
        <li>其他功能-开发中</li>
      </ul>
    </div>

    <div class="col-6 col-m-9">
    <h1>欢迎你！</h1>
    <p>这里是汪小鱼的空间...</p>
    </div>

    <div class="col-3 col-m-12">
      <div class="aside">
        <h3>读更多好书，写更酷的代码，做灵魂有趣的人。</h3>
      </div>
      <div class="aside aside-margin">
        <h3>新年倒计时</h3>
        <h3>剩余{{betweenDays}}天</h3>
      </div>
    </div>

    </div>

    <div class="footer">
    <p>© 2016-{{year}} coderw.cn 版权所有  &nbsp;<a class="link" href="https://beian.miit.gov.cn/#/Integrated/index">辽ICP备16009639号</a></p>
    </div>


    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs';
export default {
  name: 'HomePage',
  data() {
    return {
      title: '发现更多',
      description:
        '汪小鱼的个人空间',
      tableData: [
        {
          name: '博客地址',
          address: 'http://blog.coderw.cn/',
          description:
            '汪小鱼的个人空间',
          date: '2019-01-15'
        }
      ],
      year: new Date().getFullYear(),
      currentPage: 1,
      adimateExc: false,
      betweenDays: ''
    }
  },

  components: {

  },

  computed: {},

  watch: {},

  created() {

  },

  mounted() {
    this.addSpanTag()
    this.animationDelay()
    this.onMouseOver()

    const today = dayjs().format('YYYY-MM-DD');
    const newYear = '2024-02-09';
    this.betweenDays = dayjs(newYear).diff(today, 'day');
  },

  filters: {},

  methods: {
    handleSizeChange() {
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    /* ----------------------------On Click Event---------------------------- */
    linkBlog(){
      window.location.href = 'https://dalewang1995.github.io/Blog-VuePress/'
    },
    linkGitHub(){
      window.location.href = 'https://github.com/dalewang1995'
    },
    linkJueJin(){
       window.location.href = 'https://juejin.im/user/5b5f2271e51d451a244bfb96/posts'
       
    },
    alertTips(){
        this.$Alert.info({
          content: '我是提示信息 1'
        });
    },
    linkUrlTranslate(){
      this.$router.push({
        path:'/tool'
      })
    },
    addSpanTag() {
      const title = document.querySelector('.name-e');
      title.innerHTML = title.textContent.replace(/\S/g, '<span class="title-singl">$&</span>');
    },
    animationDelay() {
      document.querySelectorAll('.title-singl').forEach((span, index) => {
        span.style.setProperty('--delay', `${index * 0.1}s`)
      })
    },
    onMouseOver(){
      if(this.adimateExc){
        return
      }
      this.adimateExc= true
      const h5 = document.querySelector('h5');
      h5.style.setProperty('--animation', 'jump')
      h5.classList.remove('animate')
      void h5.offsetHeight
      h5.classList.add('animate')
      setTimeout(()=>{
        this.adimateExc= false
      },1000)
    }
    
  }
}
</script>

<style lang="less">
* {
    box-sizing: border-box;
}
.row {
  height: calc(100vh - 110px);
}
.row:after {
    content: "";
    clear: both;
    display: block;
}
[class*="col-"] {
    float: left;
    padding: 15px;
}
html {
    background-color: #f6f6f6;
    font-family: menlo,monospace, Tahoma,"微软雅黑","幼圆";
}
.header {
    background-color: #373d41;
    color: #ffffff;
    padding: 15px;
    display: flex;
    justify-content: flex-start;

    .logo-con {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      .name-e {
        font-family: Helvetica, sans-serif, Arial;
        font-size: 34px;
      }
      .blank {
        margin: 0 8px;
        font-weight: 400;
        font-size: 24px;
      }
      .name-c {
        font-weight: 500;
        font-family: Helvetica, sans-serif, Arial;
        font-size: 24px;
      }
      h5.animate span {
        animation-name: var(--animation);
        animation-duration: .4s;
        animation-timing-function: ease-in-out;
        animation-delay: var(--delay);
      }
      .title-singl {
        display: inline-block;
      }
      @keyframes jump {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0);
        }
      }

    }
}
.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.menu li {
    padding: 8px;
    margin-bottom: 7px;
    background-color: rgba(255,255,255,.9);
    color: #373d41;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all .4s;
    &:hover{
      background-color: #fff;
      box-shadow: 0 0 20px 0 rgba(0,0,0,.15);
    }
}

.aside {
    background-color: #fff;
    cursor: pointer;
    padding: 15px;
    // color: #ffffff;
    text-align: center;
    font-size: 14px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all .4s;
    &:hover{
      box-shadow: 0 0 20px 0 rgba(0,0,0,.15);
    }
}

.aside-margin {
  margin-top: 7px;
}

.link-content li {
  cursor:pointer;
}
.footer {
    background-color: #373d41;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    padding: 15px;
    .link {
      color: #ffffff;
    }
}
/* For mobile phones: */
[class*="col-"] {
    width: 100%;
}

.block-item {
  max-width: 230px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
}

.item-margin {
  margin-top: 20px !important;
}


@media only screen and (min-width: 600px) {
    /* For tablets: */
    .col-m-12 {width: 8.33%;}
    .col-m-2 {width: 16.66%;}
    .col-m-3 {width: 25%;}
    .col-m-4 {width: 33.33%;}
    .col-m-5 {width: 41.66%;}
    .col-m-6 {width: 50%;}
    .col-m-7 {width: 58.33%;}
    .col-m-8 {width: 66.66%;}
    .col-m-9 {width: 75%;}
    .col-m-10 {width: 83.33%;}
    .col-m-11 {width: 91.66%;}
    .col-m-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
}

</style>
