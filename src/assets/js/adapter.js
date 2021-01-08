/**
 * 移动端适配方案v1.0.0
 * @author cwlojako
 * @time 2020-10-29
 */
;(function(window, document) {
  var docEle = document.documentElement // 获取html元素

  var fontSizeRadio = 1, // 手机字体正常比例
    isLandScape = false // 是否横屏

  // 动态更新meta viewport标签
  document
    .getElementsByName("viewport")[0]
    .setAttribute(
      "content",
      "width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"
    )

  // 横屏状态监听
  if (window.orientation === 90 || window.orientation === -90) {
    isLandScape = true
  }

  //试探字体大小，用于检测系统字体是否正常（因为用户手机可以在设置面板中自行设置字体大小）
  var setFz = "100px"

  //给head增加一个隐藏元素
  var headEle = document.getElementsByTagName("head")[0],
    spanEle = document.createElement("span")
  spanEle.style.fontSize = setFz
  spanEle.style.display = "none"
  spanEle.className = "test-span"
  headEle.appendChild(spanEle)

  //判断元素真实的字体大小是否setFz
  //如果不相等则获取真实的字体换算比例
  var testSpan = document.querySelector(".test-span")
  var realFz = getComputedStyle(testSpan).getPropertyValue("font-size")
  console.log("realFz", realFz)

  if (setFz !== "realFz") {
    //去掉单位px，下面要参与计算
    setFz = parseFloat(setFz)
    realFz = parseFloat(realFz)

    //获取字体换算比例（假设需要100px,但实际才50px, 100 ==> 50  ? ==> 100） ? = 100 * 100 / 50 = 200
    fontSizeRadio = setFz / realFz
  }

  var setBaseFontSize = function() {
    // 获取可视区域宽度与高度
    var deviceWidth = docEle.clientWidth,
      deviceHeight = docEle.clientHeight
    console.log(deviceWidth)
    console.log(fontSizeRadio)

    // 如果横屏显示则将高度值赋予宽度
    if (isLandScape) {
      deviceWidth = deviceHeight
    }

    console.log(deviceWidth * fontSizeRadio)
    // html的字体大小等于 可视区域宽度 * 字体换算比例
    docEle.style.fontSize = deviceWidth * fontSizeRadio + "px"
  }
  setBaseFontSize()

  // 监听可是区域大小变化时同时变换font-size大小，配合防抖，预防频繁重绘造成卡顿
  let timeout
  // 窗口大小改变时更改字体大小
  window.addEventListener("resize", () => {
    clearTimeout(timeout)
    timeout = setTimeout(setBaseFontSize, 300)
  })
  // dom元素加载完成时
  document.addEventListener("DOMContentLoaded", () => {
    clearTimeout(timeout)
    timeout = setTimeout(setBaseFontSize, 300)
  })
})(window, document)
