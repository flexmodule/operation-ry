//判断是否为Trident内核浏览器(IE等)函数
function browserIsIe() {
  if (!!window.ActiveXObject || "ActiveXObject" in window){
      return true;
  }
  else{
      return false;
  }
}
//创建iframe并赋值的函数,传入参数为图片的src属性值.
function createIframe(imgSrc) {
  //如果隐藏的iframe不存在则创建
  if ($("#IframeReportImg").length === 0){
      $('<iframe style="display:none;" id="IframeReportImg" name="IframeReportImg" onload="downloadImg();" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
  }
  //iframe的src属性如不指向图片地址,则手动修改,加载图片
  if ($('#IframeReportImg').attr("src") != imgSrc) {
      $('#IframeReportImg').attr("src",imgSrc);
  } else {
      //如指向图片地址,直接调用下载方法
      downloadImg();
  }
}
//下载图片的函数
function downloadImg() {
  //iframe的src属性不为空,调用execCommand(),保存图片
  if ($('#IframeReportImg').src != "about:blank") {
      window.frames["IframeReportImg"].document.execCommand("SaveAs");
  }
}
export {createIframe}