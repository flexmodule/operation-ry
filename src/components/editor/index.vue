<template>
  <div class="textEditor-container">
    <quill-editor v-model="content" ref="myTextEditor" :options="editorOption" @change="onChange">
      <div id="toolbar" slot="toolbar">
        <span class="ql-formats">
          <button type="button" class="ql-bold"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-italic"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-underline"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-strike"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-blockquote"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-code-block"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-header" value="1"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-header" value="2"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-list" value="ordered"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-list" value="bullet"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-script" value="sub"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-script" value="super"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-indent" value="-1"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-indent" value="+1"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-direction" value="rtl"></button>
        </span>

        <span class="ql-formats">
          <select class="ql-size">
            <option value="small"></option>
            <option selected></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>
        </span>
        <span class="ql-formats">
          <select class="ql-header">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option selected="selected"></option>
          </select>
        </span>
        <span class="ql-formats">
          <select class="ql-color">
            <option selected="selected"></option>
            <option value="#e60000"></option>
            <option value="#ff9900"></option>
            <option value="#ffff00"></option>
            <option value="#008a00"></option>
            <option value="#0066cc"></option>
            <option value="#9933ff"></option>
            <option value="#ffffff"></option>
            <option value="#facccc"></option>
            <option value="#ffebcc"></option>
            <option value="#ffffcc"></option>
            <option value="#cce8cc"></option>
            <option value="#cce0f5"></option>
            <option value="#ebd6ff"></option>
            <option value="#bbbbbb"></option>
            <option value="#f06666"></option>
            <option value="#ffc266"></option>
            <option value="#ffff66"></option>
            <option value="#66b966"></option>
            <option value="#66a3e0"></option>
            <option value="#c285ff"></option>
            <option value="#888888"></option>
            <option value="#a10000"></option>
            <option value="#b26b00"></option>
            <option value="#b2b200"></option>
            <option value="#006100"></option>
            <option value="#0047b2"></option>
            <option value="#6b24b2"></option>
            <option value="#444444"></option>
            <option value="#5c0000"></option>
            <option value="#663d00"></option>
            <option value="#666600"></option>
            <option value="#003700"></option>
            <option value="#002966"></option>
            <option value="#3d1466"></option>
          </select>
        </span>
        <span class="ql-formats">
          <select class="ql-background">
            <option value="#000000"></option>
            <option value="#e60000"></option>
            <option value="#ff9900"></option>
            <option value="#ffff00"></option>
            <option value="#008a00"></option>
            <option value="#0066cc"></option>
            <option value="#9933ff"></option>
            <option selected="selected"></option>
            <option value="#facccc"></option>
            <option value="#ffebcc"></option>
            <option value="#ffffcc"></option>
            <option value="#cce8cc"></option>
            <option value="#cce0f5"></option>
            <option value="#ebd6ff"></option>
            <option value="#bbbbbb"></option>
            <option value="#f06666"></option>
            <option value="#ffc266"></option>
            <option value="#ffff66"></option>
            <option value="#66b966"></option>
            <option value="#66a3e0"></option>
            <option value="#c285ff"></option>
            <option value="#888888"></option>
            <option value="#a10000"></option>
            <option value="#b26b00"></option>
            <option value="#b2b200"></option>
            <option value="#006100"></option>
            <option value="#0047b2"></option>
            <option value="#6b24b2"></option>
            <option value="#444444"></option>
            <option value="#5c0000"></option>
            <option value="#663d00"></option>
            <option value="#666600"></option>
            <option value="#003700"></option>
            <option value="#002966"></option>
            <option value="#3d1466"></option>
          </select>
        </span>
        <span class="ql-formats">
          <select class="ql-font">
            <option selected="selected"></option>
            <option value="serif"></option>
            <option value="monospace"></option>
          </select>
        </span>
        <span class="ql-formats">
          <select class="ql-align">
            <option selected="selected"></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-clean"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-link"></button>
        </span>
        <span class="ql-formats">
          <button type="button" @click="imgClick">
            <svg viewBox="0 0 18 18">
              <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
              <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
              <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
            </svg>
          </button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-video"></button>
        </span>
      </div>
    </quill-editor>
  </div>
</template>
<style lang="scss" scoped>
.textEditor-container {
  .quill-editor {
    width: 100%;
    height: 600px;
    margin-bottom: 100px;
  }
}
</style>

<script>
import { quillEditor , Quill } from "vue-quill-editor";
import ImageResize from "quill-image-resize-module";
Quill.register('modules/imageResize', ImageResize)
export default {
  name: "TextEditor",
  components: {
    quillEditor
  },
  props: {
    /* 编辑器的内容 */
    value: {
      type: String
    },
    /* 图片大小 */
    maxSize: {
      type: Number,
      default: 2000 //kb
    }
  },
  data() {
    return {
      fileUrl: "",
      content: "",
      editorOption: {
        modules: {
          toolbar: "#toolbar",
          imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
          }
        }
      }
    };
  },
  created() {
    this.fileUrl = process.env.FILE_API;
  },
  methods: {
    onChange() {
      this.$emit("input", this.content);
    },
    /* 选择上传图片切换 */
    onFileChange(e) {
      var file = e.target.files;
      if (file.length == 0) {
        return;
      }
      if (file[0].size > 1024 * 1024 * this.maxSize) {
        this.$message("图片过大");
        return;
      }
      this.handleUpload(file)
    },
    /* 点击上传图片按钮 */
    imgClick() {
      var input = document.createElement("input");
      input.type = "file";
      input.name = this.fileName;
      input.accept = "image/jpeg,image/png,image/jpg,image/gif,video/mp4";
      input.onchange = this.onFileChange;
      input.click();
    },
    /* 图片上传 start */
    handleUpload(file) {
      //获取上传文件的token及相关配置参数
      this.$http
        .get( this.fileUrl + "/file/upToken", {
          params: {
            isPrivate: 0
          }
        })
        .then(res => {
          var formData = new FormData();
          formData.append("file", file[0]);
          formData.append("token", res.data.data.upToken);
          formData.append("x:bucketId", res.data.data.bucketId);
          formData.append("x:supplierId", res.data.data.supplierId);
          formData.append("x:isPrivate", res.data.data.isPrivate);
          formData.append("x:oWnerId", res.data.data.oWnerId);
          formData.append("x:systemId", res.data.data.systemId);
          formData.append("x:uploaderId", res.data.data.uploaderId);
          this.editor.focus();
          //进行文件上传获取文件id
          this.$http
            .post("https://" + res.data.data.uploadDomain, formData, {
              headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
              console.log(res)
              if (res.data.rc === 0) {
                this.$message.success("上传成功！");
                if(res.data.data.mimeType === 'video/mp4'){
                  this.editor.insertEmbed(this.editor.getSelection().index, 'video', res.data.data.filePath)
                }else{
                  this.editor.insertEmbed(this.editor.getSelection().index, 'image', res.data.data.filePath)
                }
                
              } else {
                this.$message.error(res.data.msg);
              }
            })
            .catch(error => {
              this.$message.error("上传错误，请重新上传！");
            });
        });
    },
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    }
  },
  mounted() {
    this.content = this.value;
  },
  watch: {
    value(newVal, oldVal) {
      if (this.editor) {
        if (newVal !== this.content) {
          this.content = newVal;
        }
      }
    }
  }
};
</script>