"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      state: true,
      html: "<h1>lsdfjdlfjkl;ds</h1>",
      goods: [
        {
          id: 1,
          title: "11",
          price: 324,
          img: "/static/wallhaven-1k6x13.jpg"
        },
        {
          id: 2,
          title: "22",
          price: 32466,
          img: "/static/微信图片_20231216201540.jpg"
        }
      ],
      bg: "#035122",
      random: 0
    };
  },
  methods: {
    clickon() {
      this.bg = "#fcf041";
      this.random = Math.random(1, 100);
    },
    clickBlock() {
      this.state = !this.state;
    }
  }
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
    a: common_vendor.f($data.goods, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title + "价值：" + item.price),
        b: item.id
      };
    }),
    b: $data.html,
    c: common_vendor.t($data.random),
    d: $data.bg,
    e: common_vendor.o((...args) => $options.clickon && $options.clickon(...args)),
    f: $data.state ? 1 : "",
    g: common_vendor.o((...args) => $options.clickBlock && $options.clickBlock(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
