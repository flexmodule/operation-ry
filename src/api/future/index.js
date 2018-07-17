import service from "@/utils/request"
let $http=service
let ceshi = (url,oType,data)=> {
  return new Promise(function (resolve, reject) { 
    $http({
      url: url,
      method: oType,
      data: data
    }).then((res)=>{     
      if (res.data.rc===0) {
        resolve(res.data.data);
      } else {
        this.$message.error(res.data.msg)
      }
    }).catch((err)=>{
      
    })
  }) 
}
export {ceshi}