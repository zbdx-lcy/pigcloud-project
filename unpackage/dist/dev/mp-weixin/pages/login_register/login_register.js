"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      iid: "",
      ipassword: "",
      id: "",
      password: "",
      ui: "",
      unum: 1,
      //注册++
      check: false
    };
  },
  methods: {
    doLogin() {
      for (var i = 1; i <= this.unum; i++) {
        this.ui = "u" + i;
        let a = common_vendor.index.getStorageSync(this.ui);
        this.id = a.id;
        this.password = a.password;
        if (this.id == this.iid && this.password == this.ipassword) {
          this.check = true;
        }
      }
      if (this.check == false) {
        common_vendor.index.showModal({
          title: "登录失败",
          content: "用户名或密码错误，请重试！",
          showCancel: false
        });
      }
    },
    doRegist() {
      common_vendor.index.navigateTo({
        url: "/pages/login_register/register"
      });
    },
    setid(e) {
      this.iid = e.detail.value;
    },
    setpw(e) {
      this.ipassword = e.detail.value;
    }
  },
  mounted() {
    common_vendor.index.setStorageSync("u1", { id: "2213041523", password: "123456" });
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
      title: "智慧养殖系统--登录"
    }),
    b: common_vendor.o((...args) => $options.setid && $options.setid(...args)),
    c: common_vendor.o((...args) => $options.setpw && $options.setpw(...args)),
    d: common_vendor.o((...args) => $options.doLogin && $options.doLogin(...args)),
    e: common_vendor.o((...args) => $options.doRegist && $options.doRegist(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/uni-app-project/pages/login_register/login_register.vue"]]);
wx.createPage(MiniProgramPage);
