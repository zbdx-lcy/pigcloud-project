"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    clicbtn() {
      common_vendor.index.showModal({
        title: "确认删除"
      });
    }
  },
  mounted() {
    common_vendor.index.showToast({
      title: "abcd",
      icon: "loading",
      duration: 200,
      mask: true
    }), common_vendor.index.showModal({
      title: "asfd",
      success: (res) => {
        console.log(res);
      }
    }), common_vendor.index.setStorageSync("mykey", 5445);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.clicbtn && $options.clicbtn(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/pages/demo3/demo3.vue"]]);
wx.createPage(MiniProgramPage);
