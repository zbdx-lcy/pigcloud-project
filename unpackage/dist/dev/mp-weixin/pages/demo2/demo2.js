"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      state: false
    };
  },
  methods: {
    onmyeve(e) {
      console.log(e);
    },
    clickbtn() {
      this.state = false;
    },
    onmybtn(e) {
      this.state = e;
    }
  }
};
if (!Array) {
  const _easycom_myevent2 = common_vendor.resolveComponent("myevent");
  _easycom_myevent2();
}
const _easycom_myevent = () => "../../components/myevent/myevent.js";
if (!Math) {
  _easycom_myevent();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onmyeve),
    b: common_vendor.o($options.onmybtn),
    c: common_vendor.p({
      state: $data.state
    }),
    d: common_vendor.o((...args) => $options.clickbtn && $options.clickbtn(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/pages/demo2/demo2.vue"]]);
wx.createPage(MiniProgramPage);
