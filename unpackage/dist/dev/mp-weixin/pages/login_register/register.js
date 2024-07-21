"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_title12 = common_vendor.resolveComponent("title1");
  _easycom_title12();
}
const _easycom_title1 = () => "../../components/title1/title1.js";
if (!Math) {
  _easycom_title1();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "智慧养殖系统--注册"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/pages/login_register/register.vue"]]);
wx.createPage(MiniProgramPage);
