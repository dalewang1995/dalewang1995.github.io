<!--
 * @Author: 汪小鱼
 * @Date: 2021-01-11 23:38:56
-->

<template>
  <section class="tool-module">
    <div>工具箱模块{{title}}</div>
    <div class="content">
        <div class="left">
            <textarea v-model="textVal"></textarea>
        </div>
        <div class="right">{{resVal}}</div>
    </div>
    <div class="op-con">
        <button class="btn" @click="urlEcode">编码</button>
        <button class="btn" @click="urlDecode">解码</button>
    </div>
  </section>
</template>



<script>
export default {
    name: 'tool',
    data() {
        return {
            textVal: '',
            resVal:''
        }
    },
    computed: {},
    created() {},
    mounted() {},
    filters: {},
    methods: {
        urlEcode(){
            this.resVal = encodeURIComponent(this.textVal)
        },
        urlDecode(){
            this.resVal = decodeURIComponent(this.textVal)
        }

    }
}
</script>

<style lang="scss" scoped>
.tool-module {
    .content {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        // margin: 10% 20%;
        // padding: 0 20%;

        .left,.right {
            width: 500px;
            height: 300px;
            border: 1px solid #ebebeb;
        }
        .right {
            font-size: 14px;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 10px;
            word-break: break-all;
            line-height: 20px;
        }

        textarea {
            width: 100%;
            height: 100%;
            font-size: 14px;
            line-height: 20px;
            border: 1px solid #ebebeb;
            border-radius: 3px;
            padding: 10px;
            resize: none;
        }
    }
    .op-con {
        .btn {
            background-color: #eee;
            padding: 8px;
            border:none;
            border-radius: 3px;

            &:hover {
                background-color: #8590a6;
            }
            &:first-child {
                margin-right: 35px;
            }
        }

    }

}
</style>