<template>
<el-container>
  <el-header>FE图片上传</el-header>
  <el-main>
      <el-row type="flex" class="row-bg" justify="start">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-upload
              class="upload-demo"
              ref="upload"
              name="fileData"
              action="https://upload2.fvt.tujia.com/FileUpload.ashx"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
              :data="extendData"
              :before-upload="handleBeforeUpload"
              :on-success="handleOnSuccess">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <ul>
              <li v-for="(item,index) in successFileList" :key="index">
                {{item}}
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>

  </el-main>
</el-container>


</template>


<script>
  export default {
    data() {
      return {
        fileList: [],
        extendData: { subfolder: 'appealpic' },
        successFileList:[],
        staticHost:"https://pic2.fvt.tujia.com"
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      },
      handleBeforeUpload(file){
      },
      handleOnSuccess(res){
        if(res.msg && res.msg.url){
          this.successFileList.push(`${this.staticHost}${res.msg.url}`)
        }else{
          alert(res.err)
        }
      }
    }
  }
</script>