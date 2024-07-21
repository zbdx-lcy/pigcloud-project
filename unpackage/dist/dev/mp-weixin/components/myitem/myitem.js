"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "myitem",
  props: {
    title: {
      type: String,
      default: "默认标题"
    },
    subtitle: {
      type: String,
      default: "默认副标题"
    },
    time: {
      type: Number,
      default: Date.now()
    },
    user: {
      type: Object,
      default() {
        return {
          name: "lcy",
          age: 23
        };
      }
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.t($props.subtitle),
    c: common_vendor.t($props.time),
    d: common_vendor.t($props.user)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/components/myitem/myitem.vue"]]);
wx.createComponent(Component);
