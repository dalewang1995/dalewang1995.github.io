<!--
 * @Author: 汪小鱼
 * @Date: 2021-01-11 23:38:56
-->

<template>
  <section class="tool-module">
    <h2>小鱼的工具箱</h2>
    <div class="options-btns">
        <button class="btn" :class="{'active': activeIndex === 1}" @click="optionsBtn(1)">URL编码</button>
        <button class="btn" :class="{'active': activeIndex === 2}" @click="optionsBtn(2)">URL转二维码</button>
    </div>
    <component :is='currentCom'></component>
  </section>
</template>


<script>
import UrlTranslate from './UrlTranslate'
import Qrcode from './Qrcode'

export default {
    name: 'tool',
    data() {
        return {
            currentCom:UrlTranslate,
            activeIndex:1
        }
    },
    computed: {},
    created() {},
    mounted() {},
    filters: {},
    methods: {
        optionsBtn(type){
            if(type === 1){
                this.currentCom = UrlTranslate
                this.activeIndex = 1
            }
            if(type === 2){
                this.currentCom = Qrcode
                this.activeIndex = 2
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.options-btns {
    margin-top: 20px;
    .btn {
        background-color: #eee;
        padding: 6.5px 15px; 
        border:none;
        border-radius: 3px;
        transition: all .3s cubic-bezier(.645,.045,.355,1);

        &:hover {
            background-color: #8590a6;
            color: #fff;
        }
        &:first-child {
            margin-right: 35px;
        }

    }
    .active {
        background-color: #8590a6;
        color: #fff;
    }
}


</style>