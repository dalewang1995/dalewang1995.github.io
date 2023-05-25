<!--
 * @Author: 汪小鱼
 * @Date: 2021-01-15 21:08:24
-->

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

<script>
import QRCode from 'qrcode'

export default {
  name: 'qr-code',
  data() {
    return {
      canvas: null,
      textVal: ''
    }
  },
  mounted() {
   
  },
  computed: {
    qrcodeUrl(){
        return this.textVal
    }
  },
  methods: {
      makeQrcode(){
          if(!this.qrcodeUrl){
              alert('请输入url~')
              return
          }
        this._getQrCode()
      },
    /**
     * 获取二维码
     */
    _getQrCode() {
      // 生成base64格式的二维码
      const qrcode = new QRCode['create']('qrcode', {
        width: 300,
        height: 300,
        text: this.qrcodeUrl,
        colorDark: '#000000',
        colorLight: '#ffffff'
      })
      this._drawQrCode(qrcode)
    },
    /**
     * 生成图片集合对象,绘制二维码
     * @param {String} qrcode 二维码qr对象
     */
    _drawQrCode(qrcode) {
      Promise.resolve(QRCode.toDataURL.call(qrcode, this.qrcodeUrl), { errorCorrectionLevel: 'H' }).then((result) => {
        const This = this
        // 画图所需图片全部加载完成后再开始绘图
        const imgObj = new Image()
        imgObj.setAttribute('crossOrigin', 'anonymous')
        imgObj.src = result
        imgObj.onload = function() {
          if (this.complete) {
            This._drawQrImage(imgObj)
          } else {
            alert('图片加载失败，生成二维码失败')
          }
        }
      })
    },
    /**
     * 画二维码
     * @param {Object} imgObj 图片对象
     */
    _drawQrImage(imgObj) {
      this.canvas = this.$refs.canvas
      const ctx = this.canvas.getContext('2d')
      this.canvas.setAttribute('width', 300)
      this.canvas.setAttribute('height', 300)
      this.canvas.style.width = 300 + 'px'
      this.canvas.style.height = 300 + 'px'
      // 画二维码
      ctx.drawImage(imgObj, 0, 0, 300, 300)
    }
  }
}
</script>

<style lang="less" scoped>
.qr-module {
    padding: 20px;
    height: 100%;
    width: 100%;

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
    .op-con {
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

        }

    }
}

</style>
