"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "title1",
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/components/title1/title1.vue"]]);
wx.createComponent(Component);
