"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "myevent",
  data() {
    return {};
  },
  props: {
    state: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    oninput(e) {
      this.$emit("myeve", e.detail.value);
    },
    clickBtn() {
      this.$emit("mybtn", true);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.oninput && $options.oninput(...args)),
    b: $props.state ? 1 : "",
    c: common_vendor.o((...args) => $options.clickBtn && $options.clickBtn(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/components/myevent/myevent.vue"]]);
wx.createComponent(Component);
