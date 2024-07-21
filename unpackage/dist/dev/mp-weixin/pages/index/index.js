"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      time: 34565475734576
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_myitem2 = common_vendor.resolveComponent("myitem");
  _easycom_myitem2();
}
const _easycom_myitem = () => "../../components/myitem/myitem.js";
if (!Math) {
  _easycom_myitem();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.title,
      time: $data.time,
      user: "{name:'df',age:52}"
    }),
    b: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
