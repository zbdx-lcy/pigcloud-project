"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/login_register/login_register.js";
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/demo/demo.js";
  "./pages/demo2/demo2.js";
  "./pages/demo3/demo3.js";
  "./pages/login_register/register.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
