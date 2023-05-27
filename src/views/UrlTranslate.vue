<!--
 * @Author: 汪小鱼
 * @Date: 2021-01-11 23:38:56
-->

<script setup lang="ts">
import { ref } from "vue"
let textVal = ref("");
let resVal = ref("");

const urlEcode = () => {
    resVal.value = encodeURIComponent(textVal.value)
}

const urlDecode = () => {
    resVal.value = decodeURIComponent(textVal.value)
}

</script>

<template>
    <section class="tool-module">
        <h3>URL编码</h3>
        <div class="content">
            <textarea v-model="textVal" placeholder="请输入需要转码的URL"></textarea>
            <div class="right">{{ resVal }}</div>
        </div>
        <div class="op-con">
            <button class="btn" @click="urlEcode">编码</button>
            <button class="btn" @click="urlDecode">解码</button>
        </div>
    </section>
</template>


<style scoped>
.tool-module {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.left {
    width: 500px;
    height: 300px;
}

.right {
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
    background-color: #fff;
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

.btn {
    background-color: #eee;
    padding: 6.5px 15px;
    border: none;
    border-radius: 3px;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
}

.btn:hover {
    background-color: #8590a6;
    color: #fff;
}

.btn:first-child {
    margin-right: 35px;
}
</style>