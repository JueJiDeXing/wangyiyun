function remSize() {
    //获取设备宽度
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) {
        deviceWidth = 750;
    } else if (deviceWidth <= 320) {
        deviceWidth = 320;
    }
    //设置字体大小 1rem==100px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    document.querySelector('body').style.fontSize = 0.3 + "rem";//15px


}

remSize();
//监听窗口大小变化,进行字体大小适配
window.onresize = function () {
    remSize();
}
