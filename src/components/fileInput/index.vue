<template>
  <div class="file-input" v-loading="loading" element-loading-text="正在上传中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" :class="radius == 'radius' ? 'radius' : ''">
    <input type="file" name="file" id="file-input" @change="selectFile" :accept="fileOtype">
    <i :class="fileName.length<=0?'el-icon-plus':''">{{fileName}}</i>
    <img :src="imgSrc" alt="" class="file-input-showImg" v-if="isImg != 'no' && imgSrc.length>0">
  </div>
</template>
<style lang="scss" scoped>
.file-input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  #file-input {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
  }
  .file-input-showImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  i {
    color: #8c939d;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    font-style: normal;
  }
  i.el-icon-plus {
    font-size: 28px;
  }
  &.radius {
    border-radius: 50%;
  }
}
</style>
<script>
export default {
  props: {
    fileType: String,
    radius: String,
    isImg: String,
    private: String,
    id: String,
    fileOtype: String
  },
  data() {
    return {
      fileUrl: "",
      imgSrc: "",
      fileName: "",
      loading: false,
    };
  },
  created() {
    this.fileUrl = process.env.FILE_API;
  },
  methods: {
    handleUpload(file) {
      //获取上传文件的token及相关配置参数
      this.$http
        .get( this.fileUrl + "/file/upToken", {
        // .get( "http://192.168.16.25:8999/file/upToken", {
          params: {
            isPrivate: this.private || 0
          }
        })
        .then(res => {
          console.log(res.data.data)
          var formData = new FormData();
          formData.append("file", file);
          formData.append("token", res.data.data.upToken);
          formData.append("x:bucketId", res.data.data.bucketId);
          formData.append("x:supplierId", res.data.data.supplierId);
          formData.append("x:isPrivate", res.data.data.isPrivate);
          formData.append("x:oWnerId", res.data.data.oWnerId);
          formData.append("x:systemId", res.data.data.systemId);
          formData.append("x:uploaderId", res.data.data.uploaderId);
          //进行文件上传获取文件id
          this.$http
            .post("https://" + res.data.data.uploadDomain, formData, {
              headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
              this.loading = false;
              if (res.data.rc === 0) {
                this.$message.success("上传成功！");
                this.$emit("fileInfo", res.data.data);
                this.$emit("getIndex", res.data.data);
              } else {
                this.$message.error(res.data.msg);
              }
            })
            .catch(error => {
              this.loading = false;
              this.imgSrc = "";
              this.$message.error("上传错误，请重新上传！");
            });
        });
    },
    selectFile() {
      this.loading = true;
      var file = this.$el.children[0].files[0];
      if (!file || !window.FileReader) {
        return;
      }
      /**   根据父组件传来的文件类型做出不同处理  */
      if (this.fileType === "image") {
        if (/^image/.test(file.type)) {
          // 创建一个reader
          let reader = new FileReader();
          // 将图片将转成 base64 格式
          reader.readAsDataURL(file);
          // 读取成功后的回调
          let self = this;
          reader.onloadend = function() {
            self.imgSrc = this.result;
          };
          this.handleUpload(file);
        } else {
          this.loading = false;
          this.$message.error("请上传图片");
        }
      } else {
        this.fileName = file.name;
        this.handleUpload(file);
      }
      this.$el.children[0].value = "";
    }
  }
};
</script>