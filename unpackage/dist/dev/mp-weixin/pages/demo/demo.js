"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      items: [{ title: "a" }, { title: "b" }, { title: "c" }],
      state: "",
      curindex: 0,
      arr: ["1", "2", "3", "4"],
      xueli: ""
    };
  },
  methods: {
    clickitem(e) {
      this.curindex = e;
    },
    onsubmit(e) {
      console.log(e);
    },
    onchange(e) {
      this.xueli = this.arr[e.detail.value];
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
    a: common_vendor.p({
      title: "demo"
    }),
    b: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.n(index == $data.curindex ? "myactive" : ""),
        c: index,
        d: common_vendor.o(($event) => $options.clickitem(index), index)
      };
    }),
    c: common_vendor.t($data.xueli),
    d: $data.arr,
    e: common_vendor.o((...args) => $options.onchange && $options.onchange(...args)),
    f: common_vendor.o((...args) => $options.onsubmit && $options.onsubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/pages/demo/demo.vue"]]);
wx.createPage(MiniProgramPage);
