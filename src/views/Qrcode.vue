<script setup lang="ts">
// @ts-ignore
import QRCode from 'qrcode'
import { computed, onMounted, ref } from "vue"

let textVal = '';
let canvas = ref<any>(null);


const makeQrcode = () => {
    if (!textVal) {
        alert('请输入url~')
        return
    }
    _getQrCode()
}

/**
 * 获取二维码
 */
const _getQrCode = () => {
    // 生成base64格式的二维码
    const qrcode = new QRCode['create']('qrcode', {
        width: 300,
        height: 300,
        text: textVal,
        colorDark: '#000000',
        colorLight: '#ffffff'
    })
    _drawQrCode(qrcode)
}

/**
 * 生成图片集合对象,绘制二维码
 * @param {String} qrcode 二维码qr对象
 */
const _drawQrCode = (qrcode: any) => {
    Promise.resolve(QRCode.toDataURL.call(qrcode, textVal)).then((result) => {
        const This = this
        // 画图所需图片全部加载完成后再开始绘图
        const imgObj = new Image()
        imgObj.setAttribute('crossOrigin', 'anonymous')
        imgObj.src = result
        imgObj.onload = function () {
            _drawQrImage(imgObj)
        }
    })
}

/**
 * 画二维码
 * @param {Object} imgObj 图片对象
 */
const _drawQrImage = (imgObj: any) => {
    const ctx = canvas.value.getContext('2d')
    canvas.value.setAttribute('width', 300)
    canvas.value.setAttribute('height', 300)
    canvas.value.style.width = 300 + 'px'
    canvas.value.style.height = 300 + 'px'
    // 画二维码
    ctx.drawImage(imgObj, 0, 0, 300, 300)
}

</script>

<template>
    <section class="qr-module">
        <h3>URL转二维码</h3>
        <div>
            <textarea v-model="textVal" placeholder="请输入需要转码的URL"></textarea>
        </div>
        <canvas id="canvas" ref="canvas" />
        <div class="op-con">
            <button class="btn" @click="makeQrcode">生成二维码</button>
        </div>
    </section>
</template>

<style scoped>
.qr-module {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
    width: 100%;
}

textarea {
    width: 500px;
    min-height: 300px;
    margin-top: 20px;
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

</style>