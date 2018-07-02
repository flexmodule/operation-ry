<template>
    <div class="error-container">
        <div class="img-container">
            <img src="../../static/images/404.png" alt="">
        </div>
        <div class="text-container">
            <div>sorry~</div>
            <div>您访问的页面不存在或已删除</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.error-container{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-container{
    width: 301px;
    height: 210px;

}
img{
    width: 100%;
    height: 100%;
}
.text-container {
    margin-left: 20px;
    color: #1c1c1c;
    font-size: 30px;
    div:nth-child(2){
        margin-top: 26px;
        font-size: 18px;
    } 
}
</style>
