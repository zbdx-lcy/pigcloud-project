if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$i = {
    data() {
      return {
        iid: "",
        ipassword: "",
        id: "",
        password: "",
        ui: "",
        //用户序号
        unum: 2,
        //注册++
        check: false
      };
    },
    methods: {
      doLogin() {
        this.unum = uni.getStorageSync("unum");
        for (var i = 0; i <= this.unum; i++) {
          this.ui = "u" + i;
          let a = uni.getStorageSync(this.ui);
          this.id = a.id;
          this.password = a.password;
          if (this.id == this.iid && this.password == this.ipassword) {
            this.check = true;
            uni.switchTab({
              url: "/pages/mainpage/mainpage"
            });
            break;
          }
        }
        if (this.check == false) {
          uni.showModal({
            title: "登录失败",
            content: "用户名或密码错误，请重试！",
            showCancel: false
          });
        }
      },
      doRegist() {
        uni.navigateTo({
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
      uni.setStorageSync("u0", { id: "2213041523", password: "123456" });
      uni.setStorageSync("u1", { id: "2113043126", password: "123456" });
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("h1", { class: "title1" }, " 高效管理 一点就好"),
      vue.createElementVNode("h5", { class: "subtitle" }, "你好,欢迎使用智慧养殖系统"),
      vue.createElementVNode("view", { class: "zm" }, [
        vue.createElementVNode("view", { class: "z" }, [
          vue.createElementVNode("image", {
            src: "/static/zh.png",
            mode: "aspectFit"
          }),
          vue.createElementVNode(
            "input",
            {
              type: "digit",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.setid && $options.setid(...args)),
              placeholder: "请输入您的账号"
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("br"),
        vue.createElementVNode("view", { class: "m" }, [
          vue.createElementVNode("image", {
            src: "/static/mm.png",
            mode: "aspectFit"
          }),
          vue.createElementVNode(
            "input",
            {
              type: "safe-password",
              password: "text",
              onInput: _cache[1] || (_cache[1] = (...args) => $options.setpw && $options.setpw(...args)),
              placeholder: "请输入您的密码"
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "btn" }, [
        vue.createElementVNode("button", {
          style: { "color": "white", "background-color": "#3478F6", "width": "310rpx", "line-height": "70rpx" },
          onClick: _cache[2] || (_cache[2] = (...args) => $options.doLogin && $options.doLogin(...args))
        }, [
          vue.createElementVNode("text", { style: { "font-size": "36rpx" } }, "登录")
        ])
      ]),
      vue.createElementVNode("view", { class: "xia" }, [
        vue.createElementVNode("view", { class: "forget" }, " 忘记密码 "),
        vue.createElementVNode("view", {
          class: "regis",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.doRegist && $options.doRegist(...args))
        }, " 注册 ")
      ])
    ]);
  }
  const PagesLogin_registerLogin_register = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/login_register/login_register.vue"]]);
  const _sfc_main$h = {
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
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myitem = vue.resolveComponent("myitem");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_myitem, {
        title: $data.title,
        time: $data.time,
        user: "{name:'df',age:52}"
      }, null, 8, ["title", "time"]),
      vue.createElementVNode("image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode(
          "text",
          {
            class: "title",
            "user-select": ""
          },
          vue.toDisplayString($data.title),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("scroll-view", {
        class: "sv",
        "scroll-x": "true",
        "scroll-y": "true"
      }, [
        vue.createElementVNode("view", { class: "group" }, [
          vue.createElementVNode("view", { class: "item" }, " 143S "),
          vue.createElementVNode("view", { class: "item" }, " 143 "),
          vue.createElementVNode("view", { class: "item" }, " 143 "),
          vue.createElementVNode("view", { class: "item" }, " 143 ")
        ])
      ]),
      vue.createElementVNode("swiper", {
        class: "swiper",
        autoplay: "",
        circular: "",
        interval: "10000",
        "indicator-dots": "true"
      }, [
        vue.createElementVNode("swiper-item", { class: "item" }, [
          vue.createElementVNode("view", { class: "swiper-item" }, [
            vue.createElementVNode("image", {
              src: "/static/微信图片_20231216201540.jpg",
              mode: "aspectFill"
            })
          ])
        ]),
        vue.createElementVNode("swiper-item", { class: "item" }, [
          vue.createElementVNode("view", { class: "swiper-item" }, [
            vue.createElementVNode("image", {
              src: "/static/微信图片_20231219111111.jpg",
              mode: "aspectFill"
            })
          ])
        ]),
        vue.createElementVNode("swiper-item", { class: "item" }, [
          vue.createElementVNode("view", { class: "swiper-item" }, [
            vue.createElementVNode("image", {
              src: "/static/wallhaven-wq9x8p.jpg",
              mode: "aspectFill"
            })
          ])
        ])
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/my/my",
        "open-type": "reLaunch"
      }, [
        vue.createElementVNode("image", {
          src: "/static/微信图片_20231216201540.jpg",
          mode: ""
        }, "臭宝")
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/index/index.vue"]]);
  const _sfc_main$g = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "bg" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: "/static/mypic.jpg",
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("text", { class: "bold" }, "Administrator\\n"),
          vue.createElementVNode("text", { space: "emsp" }, " 查看编辑个人资料")
        ]),
        vue.createElementVNode("view", { class: "sz" }, [
          vue.createElementVNode("image", {
            src: "/static/sz.png",
            mode: "aspectFit"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "pic" }, [
        vue.createElementVNode("view", { class: "curve-item" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction1.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 测试版本")
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction2.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 今日行情")
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction3.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 生产待办")
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction4.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 通讯管理")
        ]),
        vue.createElementVNode("view", { class: "item hard-monitor" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction5.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 硬件监控")
        ]),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction6.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 购买硬件")
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction7.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 集团定制")
        ]),
        vue.createElementVNode("view", { class: "item update-log" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction8.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 更新日志")
        ]),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            src: "/static/myfunction9.png",
            mode: ""
          }),
          vue.createElementVNode("text", { space: "emsp" }, " 专属客服")
        ])
      ])
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/my/my.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$f = {
    data() {
      return {
        id: "",
        pw: "",
        unum: 1
      };
    },
    methods: {
      setid(e) {
        this.id = e.detail.value;
      },
      setpw(e) {
        this.pw = e.detail.value;
      },
      doRegist() {
        formatAppLog("log", "at pages/login_register/register.vue:39", this.unum);
        this.unum++;
        uni.setStorageSync("unum", this.unum);
        uni.setStorageSync("u" + this.unum, { id: this.id, password: this.pw });
        if (this.id == "" || this.pw == "") {
          uni.showModal({
            title: "注册失败",
            content: "账号或密码不能为空，请重试！",
            showCancel: false
          });
        }
        uni.navigateBack({ delta: 1 });
      }
    },
    mounted() {
      this.unum = uni.getStorageSync("unum");
    },
    onReady() {
      uni.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#3478F6"
      });
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("h1", { class: "title1" }, "智慧养殖系统--注册")
        ]),
        vue.createElementVNode("view", { class: "zm" }, [
          vue.createElementVNode("view", { class: "z" }, [
            vue.createElementVNode(
              "input",
              {
                type: "digit",
                onInput: _cache[0] || (_cache[0] = (...args) => $options.setid && $options.setid(...args)),
                placeholder: "请输入账号"
              },
              null,
              32
              /* HYDRATE_EVENTS */
            )
          ]),
          vue.createElementVNode("br"),
          vue.createElementVNode("view", { class: "m" }, [
            vue.createElementVNode(
              "input",
              {
                type: "safe-password",
                password: "text",
                onInput: _cache[1] || (_cache[1] = (...args) => $options.setpw && $options.setpw(...args)),
                placeholder: "请输入密码"
              },
              null,
              32
              /* HYDRATE_EVENTS */
            )
          ]),
          vue.createElementVNode("br")
        ]),
        vue.createElementVNode("view", { class: "btn" }, [
          vue.createElementVNode("button", {
            style: { "color": "white", "background-color": "#3478F6", "width": "310rpx", "line-height": "70rpx" },
            onClick: _cache[2] || (_cache[2] = (...args) => $options.doRegist && $options.doRegist(...args))
          }, [
            vue.createElementVNode("text", { style: { "font-size": "36rpx" } }, "注册")
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesLogin_registerRegister = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/login_register/register.vue"]]);
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {
      livePigMage() {
        uni.navigateTo({
          url: "/pages/livePigMage/livePigMage"
        });
      },
      video() {
        uni.navigateTo({
          url: "/pages/video/video"
        });
      },
      moneyMage() {
        uni.navigateTo({
          url: "/pages/moneyMage/moneyMage"
        });
      },
      materialMage() {
        uni.navigateTo({
          url: "/pages/materialMage/materialMage"
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("swiper", {
        class: "swiper",
        autoplay: "",
        circular: "",
        interval: "10000"
      }, [
        vue.createElementVNode("swiper-item", { class: "item" }, [
          vue.createElementVNode("view", { class: "swiper-item" }, [
            vue.createElementVNode("image", {
              src: "/static/homeswiper1.png",
              mode: "aspectFill"
            })
          ])
        ]),
        vue.createElementVNode("swiper-item", { class: "item" }, [
          vue.createElementVNode("view", { class: "swiper-item" }, [
            vue.createElementVNode("image", {
              src: "/static/homeswiper2.png",
              mode: "aspectFill"
            })
          ])
        ]),
        vue.createElementVNode("swiper-item", { class: "item" }, [
          vue.createElementVNode("view", { class: "swiper-item" }, [
            vue.createElementVNode("image", {
              src: "/static/homeswiper3.png",
              mode: "aspectFill"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "news" }, [
        vue.createElementVNode("swiper", {
          class: "swip",
          vertical: true,
          autoplay: true,
          circular: true,
          interval: 2e3,
          "display-multiple-items": "1",
          style: { "background-color": "#FFFFFF", "border-radius": "10rpx" }
        }, [
          vue.createElementVNode("swiper-item", { class: "item" }, [
            vue.createElementVNode("view", { class: "item-content" }, [
              vue.createElementVNode("image", {
                src: "/static/news.png",
                style: { "height": "60rpx", "width": "60rpx" },
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", {
                class: "item-text",
                style: { "white-space": "nowrap", "overflow": "hidden !important", "text-overflow": "ellipsis !important" }
              }, " 山西:AI助力生猪养殖 ")
            ]),
            vue.createElementVNode("view", { class: "separator" }, ">")
          ]),
          vue.createElementVNode("swiper-item", { class: "item" }, [
            vue.createElementVNode("view", { class: "item-content" }, [
              vue.createElementVNode("image", {
                src: "/static/news.png",
                style: { "height": "60rpx", "width": "60rpx" },
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", {
                class: "item-text",
                style: { "white-space": "nowrap", "overflow": "hidden !important", "text-overflow": "ellipsis !important" }
              }, " 四川:数智赋能生猪养殖产业 ")
            ]),
            vue.createElementVNode("view", { class: "separator" }, ">")
          ]),
          vue.createElementVNode("swiper-item", { class: "item" }, [
            vue.createElementVNode("view", { class: "item-content" }, [
              vue.createElementVNode("image", {
                src: "/static/news.png",
                style: { "height": "60rpx", "width": "60rpx" },
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", {
                class: "item-text",
                style: { "white-space": "nowrap", "overflow": "hidden !important", "text-overflow": "ellipsis !important" }
              }, " 河南:智慧化猪场论坛隆重举行 ")
            ]),
            vue.createElementVNode("view", { class: "separator" }, ">")
          ]),
          vue.createElementVNode("swiper-item", { class: "item" }, [
            vue.createElementVNode("view", { class: "item-content" }, [
              vue.createElementVNode("image", {
                src: "/static/news.png",
                style: { "height": "60rpx", "width": "60rpx" },
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", {
                class: "item-text",
                style: { "white-space": "nowrap", "overflow": "hidden !important", "text-overflow": "ellipsis !important" }
              }, " 湖南:智能养猪助推养殖业转型升级 ")
            ]),
            vue.createElementVNode("view", { class: "separator" }, ">")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "duoyuan" }, [
        vue.createElementVNode("view", { class: "multiyuan" }, [
          vue.createElementVNode("view", { class: "jiacu" }, "多元数据"),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", {
              class: "item",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.video && $options.video(...args))
            }, [
              vue.createElementVNode("image", {
                src: "/static/farmManagement.png",
                mode: ""
              }),
              vue.createElementVNode("text", null, "实时视频")
            ]),
            vue.createElementVNode("view", {
              class: "item",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.livePigMage && $options.livePigMage(...args))
            }, [
              vue.createElementVNode("image", {
                src: "/static/pigManagement.png",
                mode: ""
              }),
              vue.createElementVNode("text", null, "生猪管理")
            ]),
            vue.createElementVNode("view", {
              class: "item",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.moneyMage && $options.moneyMage(...args))
            }, [
              vue.createElementVNode("image", {
                src: "/static/financeManagement.png",
                mode: ""
              }),
              vue.createElementVNode("text", null, "财务信息")
            ]),
            vue.createElementVNode("view", {
              class: "item",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.materialMage && $options.materialMage(...args))
            }, [
              vue.createElementVNode("image", {
                src: "/static/materialManagement.png",
                mode: ""
              }),
              vue.createElementVNode("text", null, "物料信息")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "exrecom" }, [
        vue.createElementVNode("view", { class: "recom" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("view", { class: "bold" }, " 生猪种类推荐 "),
            vue.createElementVNode("view", { class: "more" }, " 更多 ")
          ]),
          vue.createElementVNode("view", { class: "pic" }, [
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "text" }, [
                vue.createElementVNode("text", { space: "emsp" }, " 长白猪\\n瘦肉型品种")
              ]),
              vue.createElementVNode("image", {
                src: "/static/homerecommend1.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "text" }, [
                vue.createElementVNode("text", { space: "emsp" }, " 宁乡猪\\n繁殖能力强")
              ]),
              vue.createElementVNode("image", {
                src: "/static/homerecommend2.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "text" }, [
                vue.createElementVNode("text", { space: "ensp" }, " 杜洛克猪\\n体型较肥壮")
              ]),
              vue.createElementVNode("image", {
                src: "/static/homerecommend3.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "text" }, [
                vue.createElementVNode("text", { space: "ensp" }, " 东北民猪\\n抗寒冷性强")
              ]),
              vue.createElementVNode("image", {
                src: "/static/homerecommend4.png",
                mode: ""
              })
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesMainpageMainpage = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/mainpage/mainpage.vue"]]);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$d = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  let platform = "other";
  const _sfc_main$c = {
    name: "UniFab",
    emits: ["fabClick", "trigger"],
    props: {
      pattern: {
        type: Object,
        default() {
          return {};
        }
      },
      horizontal: {
        type: String,
        default: "left"
      },
      vertical: {
        type: String,
        default: "bottom"
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      content: {
        type: Array,
        default() {
          return [];
        }
      },
      show: {
        type: Boolean,
        default: false
      },
      popMenu: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        fabShow: false,
        isShow: false,
        isAndroidNvue: platform === "android",
        styles: {
          color: "#3c3e49",
          selectedColor: "#007AFF",
          backgroundColor: "#fff",
          buttonColor: "#007AFF",
          iconColor: "#fff",
          icon: "plusempty"
        }
      };
    },
    computed: {
      contentWidth(e) {
        return (this.content.length + 1) * 55 + 15 + "px";
      },
      contentWidthMin() {
        return "55px";
      },
      // 动态计算宽度
      boxWidth() {
        return this.getPosition(3, "horizontal");
      },
      // 动态计算高度
      boxHeight() {
        return this.getPosition(3, "vertical");
      },
      // 计算左下位置
      leftBottom() {
        return this.getPosition(0, "left", "bottom");
      },
      // 计算右下位置
      rightBottom() {
        return this.getPosition(0, "right", "bottom");
      },
      // 计算左上位置
      leftTop() {
        return this.getPosition(0, "left", "top");
      },
      rightTop() {
        return this.getPosition(0, "right", "top");
      },
      flexDirectionStart() {
        return this.getPosition(1, "vertical", "top");
      },
      flexDirectionEnd() {
        return this.getPosition(1, "vertical", "bottom");
      },
      horizontalLeft() {
        return this.getPosition(2, "horizontal", "left");
      },
      horizontalRight() {
        return this.getPosition(2, "horizontal", "right");
      },
      // 计算 nvue bottom
      nvueBottom() {
        uni.getSystemInfoSync().windowBottom;
        return 30;
      }
    },
    watch: {
      pattern: {
        handler(val, oldVal) {
          this.styles = Object.assign({}, this.styles, val);
        },
        deep: true
      }
    },
    created() {
      this.isShow = this.show;
      if (this.top === 0) {
        this.fabShow = true;
      }
      this.styles = Object.assign({}, this.styles, this.pattern);
    },
    methods: {
      _onClick() {
        this.$emit("fabClick");
        if (!this.popMenu) {
          return;
        }
        this.isShow = !this.isShow;
      },
      open() {
        this.isShow = true;
      },
      close() {
        this.isShow = false;
      },
      /**
       * 按钮点击事件
       */
      _onItemClick(index, item) {
        if (!this.isShow) {
          return;
        }
        this.$emit("trigger", {
          index,
          item
        });
      },
      /**
       * 获取 位置信息
       */
      getPosition(types, paramA, paramB) {
        if (types === 0) {
          return this.horizontal === paramA && this.vertical === paramB;
        } else if (types === 1) {
          return this.direction === paramA && this.vertical === paramB;
        } else if (types === 2) {
          return this.direction === paramA && this.horizontal === paramB;
        } else {
          return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;
        }
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-cursor-point" }, [
      $props.popMenu && ($options.leftBottom || $options.rightBottom || $options.leftTop || $options.rightTop) && $props.content.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass([{
            "uni-fab--leftBottom": $options.leftBottom,
            "uni-fab--rightBottom": $options.rightBottom,
            "uni-fab--leftTop": $options.leftTop,
            "uni-fab--rightTop": $options.rightTop
          }, "uni-fab"]),
          style: vue.normalizeStyle($options.nvueBottom)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([{
                "uni-fab__content--left": $props.horizontal === "left",
                "uni-fab__content--right": $props.horizontal === "right",
                "uni-fab__content--flexDirection": $props.direction === "vertical",
                "uni-fab__content--flexDirectionStart": $options.flexDirectionStart,
                "uni-fab__content--flexDirectionEnd": $options.flexDirectionEnd,
                "uni-fab__content--other-platform": !$data.isAndroidNvue
              }, "uni-fab__content"]),
              style: vue.normalizeStyle({ width: $options.boxWidth, height: $options.boxHeight, backgroundColor: $data.styles.backgroundColor }),
              elevation: "5"
            },
            [
              $options.flexDirectionStart || $options.horizontalLeft ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-fab__item uni-fab__item--first"
              })) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.content, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass([{ "uni-fab__item--active": $data.isShow }, "uni-fab__item"]),
                    onClick: ($event) => $options._onItemClick(index, item)
                  }, [
                    vue.createElementVNode("image", {
                      src: item.active ? item.selectedIconPath : item.iconPath,
                      class: "uni-fab__item-image",
                      mode: "aspectFit"
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "uni-fab__item-text",
                        style: vue.normalizeStyle({ color: item.active ? $data.styles.selectedColor : $data.styles.color })
                      },
                      vue.toDisplayString(item.text),
                      5
                      /* TEXT, STYLE */
                    )
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $options.flexDirectionEnd || $options.horizontalRight ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-fab__item uni-fab__item--first"
              })) : vue.createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass([{
            "uni-fab__circle--leftBottom": $options.leftBottom,
            "uni-fab__circle--rightBottom": $options.rightBottom,
            "uni-fab__circle--leftTop": $options.leftTop,
            "uni-fab__circle--rightTop": $options.rightTop,
            "uni-fab__content--other-platform": !$data.isAndroidNvue
          }, "uni-fab__circle uni-fab__plus"]),
          style: vue.normalizeStyle({ "background-color": $data.styles.buttonColor, "bottom": $options.nvueBottom }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
        },
        [
          vue.createVNode(_component_uni_icons, {
            class: vue.normalizeClass(["fab-circle-icon", { "uni-fab__plus--active": $data.isShow && $props.content.length > 0 }]),
            type: $data.styles.icon,
            color: $data.styles.iconColor,
            size: "32"
          }, null, 8, ["type", "color", "class"]),
          vue.createCommentVNode(` <view class="fab-circle-v"  :class="{'uni-fab__plus--active': isShow && content.length > 0}"></view>\r
			<view class="fab-circle-h" :class="{'uni-fab__plus--active': isShow  && content.length > 0}"></view> `)
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-85f34dfc"], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/uni_modules/uni-fab/components/uni-fab/uni-fab.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        items: [{}]
      };
    },
    onLoad() {
      uni.$on("Pinfo", (e) => {
        this.getText(e);
      });
    },
    mounted() {
      this.items = uni.getStorageSync("PM");
      if (this.items[0] == null || this.items[0] == void 0) {
        this.items = [{ name: "", scale: "", pos: "", type: "", state: "" }];
      }
    },
    methods: {
      ifshow(item) {
        if (item.name == "" && item.scale == "" && item.pos == "" && item.type == "" && item.state == "") {
          return false;
        } else {
          return true;
        }
      },
      getText(e) {
        this.items.push(e);
        uni.setStorageSync("PM", this.items);
      },
      clickbtn(index) {
        uni.showModal({
          title: "操作提示",
          content: "确定要删除此条数据吗？",
          cancelColor: "#007aff",
          success: (e) => {
            if (e.confirm) {
              this.items.splice(index, 1);
              uni.setStorageSync("PM", this.items);
            }
          }
        });
      },
      fabClick() {
        uni.navigateTo({
          url: "/pages/pigmanage/addPig"
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "bg" }, [
        vue.createElementVNode("view", { class: "box" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.items, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "item",
                key: index
              }, [
                $options.ifshow(item) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "text"
                }, [
                  vue.createElementVNode(
                    "strong",
                    null,
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    null,
                    "规模：" + vue.toDisplayString(item.scale) + "\\n位置：" + vue.toDisplayString(item.pos) + "\\n类型：" + vue.toDisplayString(item.type) + "\\n状态：" + vue.toDisplayString(item.state),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("button", {
                  type: "primary",
                  onClick: ($event) => $options.clickbtn(index)
                }, "删除", 8, ["onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createVNode(_component_uni_fab, {
        horizontal: "right",
        vertical: "bottom",
        onFabClick: $options.fabClick
      }, null, 8, ["onFabClick"])
    ]);
  }
  const PagesPigmanagePigmanage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/pigmanage/pigmanage.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        // 键盘高度
        keyboardHeight: 0,
        // 底部消息发送高度
        bottomHeight: 0,
        // 滚动距离
        scrollTop: 0,
        userId: "",
        // 发送的消息
        chatMsg: "",
        msgList: [{
          botContent: "你好，我叫小云，请输入您的问题：",
          recordId: 0,
          titleId: 0,
          userContent: "",
          userId: 0
        }]
      };
    },
    computed: {
      windowHeight() {
        return this.rpxTopx(uni.getSystemInfoSync().windowHeight);
      },
      inputHeight() {
        return this.bottomHeight + this.keyboardHeight;
      }
    },
    onLoad() {
      uni.onKeyboardHeightChange((res) => {
        this.keyboardHeight = this.rpxTopx(res.height - 60);
        if (this.keyboardHeight < 0)
          this.keyboardHeight = 0;
      });
    },
    onUnload() {
      uni.offKeyboardHeightChange();
    },
    methods: {
      focus() {
        this.scrollToBottom();
      },
      blur() {
        this.scrollToBottom();
      },
      rpxTopx(px) {
        let deviceWidth = wx.getSystemInfoSync().windowWidth;
        let rpx = 750 / deviceWidth * Number(px);
        return Math.floor(rpx);
      },
      sendHeight() {
        setTimeout(() => {
          let query = uni.createSelectorQuery();
          query.select(".send-msg").boundingClientRect();
          query.exec((res) => {
            this.bottomHeight = this.rpxTopx(res[0].height);
          });
        }, 10);
      },
      scrollToBottom(e) {
        setTimeout(() => {
          let query = uni.createSelectorQuery().in(this);
          query.select("#scrollview").boundingClientRect();
          query.select("#msglistview").boundingClientRect();
          query.exec((res) => {
            if (res[1].height > res[0].height) {
              this.scrollTop = this.rpxTopx(res[1].height - res[0].height);
            }
          });
        }, 15);
      },
      handleSend() {
        if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
          let userObj = {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: this.chatMsg,
            userId: 0
          };
          this.msgList.push(userObj);
          this.chatMsg = "";
          setTimeout(() => {
            let botObj = {
              botContent: "根据您现在的生猪养殖情况，建议您关注物料信息1的保质期",
              recordId: 0,
              titleId: 0,
              userContent: "",
              userId: 0
            };
            this.msgList.push(botObj);
            this.scrollToBottom();
          }, 1555);
        } else {
          this.$modal.showToast("不能发送空白消息");
        }
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" "),
        vue.createElementVNode("view", { class: "chat" }, [
          vue.createElementVNode("scroll-view", {
            style: vue.normalizeStyle({ height: `${$options.windowHeight - $options.inputHeight}rpx` }),
            id: "scrollview",
            "scroll-y": "true",
            "scroll-top": $data.scrollTop,
            class: "scroll-view"
          }, [
            vue.createCommentVNode(" 聊天主体 "),
            vue.createElementVNode("view", {
              id: "msglistview",
              class: "chat-body"
            }, [
              vue.createCommentVNode(" 聊天记录 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.msgList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                    vue.createCommentVNode(" 改 "),
                    vue.createCommentVNode(" 用户发的消息 "),
                    item.userContent !== "" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "item self"
                    }, [
                      vue.createElementVNode("view", { class: "avatar" }),
                      vue.createElementVNode(
                        "view",
                        { class: "content right" },
                        vue.toDisplayString(item.userContent),
                        1
                        /* TEXT */
                      )
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 机器人发的消息 "),
                    item.botContent !== "" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "item Ai"
                    }, [
                      vue.createElementVNode("view", { class: "avatar" }),
                      vue.createElementVNode(
                        "view",
                        { class: "content left" },
                        vue.toDisplayString(item.botContent),
                        1
                        /* TEXT */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 12, ["scroll-top"]),
          vue.createCommentVNode(" 底部消息发送栏 "),
          vue.createElementVNode(
            "view",
            {
              class: "chat-bottom",
              style: vue.normalizeStyle({ height: `${$options.inputHeight}rpx` })
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "send-msg",
                  style: vue.normalizeStyle({ bottom: `${$data.keyboardHeight}rpx` })
                },
                [
                  vue.createElementVNode("view", { class: "uni-textarea" }, [
                    vue.withDirectives(vue.createElementVNode(
                      "textarea",
                      {
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.chatMsg = $event),
                        maxlength: "300",
                        "confirm-type": "send",
                        onConfirm: _cache[1] || (_cache[1] = (...args) => $options.handleSend && $options.handleSend(...args)),
                        "show-confirm-bar": false,
                        "adjust-position": false,
                        onLinechange: _cache[2] || (_cache[2] = (...args) => $options.sendHeight && $options.sendHeight(...args)),
                        onFocus: _cache[3] || (_cache[3] = (...args) => $options.focus && $options.focus(...args)),
                        onBlur: _cache[4] || (_cache[4] = (...args) => $options.blur && $options.blur(...args)),
                        "auto-height": "",
                        placeholder: "请输入问题或需求..."
                      },
                      null,
                      544
                      /* HYDRATE_EVENTS, NEED_PATCH */
                    ), [
                      [vue.vModelText, $data.chatMsg]
                    ])
                  ]),
                  vue.createElementVNode("button", {
                    onClick: _cache[5] || (_cache[5] = (...args) => $options.handleSend && $options.handleSend(...args)),
                    class: "send-btn"
                  }, "发送")
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const PagesAIAI = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-e2f8c5c5"], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/AI/AI.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        name: "",
        scale: "",
        posi: "",
        type: "",
        state: ""
      };
    },
    methods: {
      get1(e) {
        this.name = e.detail.value;
      },
      get2(e) {
        this.scale = e.detail.value;
      },
      get3(e) {
        this.posi = e.detail.value;
      },
      get4(e) {
        this.type = e.detail.value;
      },
      get5(e) {
        this.state = e.detail.value;
      },
      confirm() {
        uni.$emit("Pinfo", { name: this.name, scale: this.scale, pos: this.posi, type: this.type, state: this.state });
        uni.navigateBack({ delta: 1 });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 没实现传参 "),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "猪场名称"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.get1 && $options.get1(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "猪场规模"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[1] || (_cache[1] = (...args) => $options.get2 && $options.get2(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "猪场位置"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.get3 && $options.get3(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "猪场类型"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[3] || (_cache[3] = (...args) => $options.get4 && $options.get4(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "猪场状态"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[4] || (_cache[4] = (...args) => $options.get5 && $options.get5(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.confirm && $options.confirm(...args))
        }, "确认")
      ])
    ]);
  }
  const PagesPigmanageAddPig = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/pigmanage/addPig.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        items: [{}]
      };
    },
    computed: {},
    onLoad() {
      uni.$on("LPinfo", (e) => {
        this.getText(e);
      });
    },
    mounted() {
      this.items = uni.getStorageSync("LPM");
      if (this.items[0] == null || this.items[0] == void 0) {
        this.items = [{
          name: "",
          time: "",
          sum: "",
          deadtime: "",
          deadnum: ""
        }];
      }
    },
    methods: {
      // 计算死淘率
      calculateDeadRate(item) {
        if (isNaN(item.deadnum) || isNaN(item.sum) || item.sum === 0) {
          return 0;
        } else {
          return (item.deadnum / item.sum * 100).toFixed(2);
        }
      },
      ifshow(item) {
        if (item.name == "" && item.time == "" && item.sum == "" && item.deadtime == "" && item.deadnum == "") {
          return false;
        } else {
          return true;
        }
      },
      getText(e) {
        this.items.push(e);
        uni.setStorageSync("LPM", this.items);
      },
      // 删除指定索引的元素
      clickbtn(index) {
        uni.showModal({
          title: "操作提示",
          content: "确定要删除此条数据吗？",
          cancelColor: "#007aff",
          success: (res) => {
            if (res.confirm) {
              this.items.splice(index, 1);
              uni.setStorageSync("LPM", this.items);
            }
          }
        });
      },
      fabClick() {
        uni.navigateTo({
          url: "/pages/livePigMage/addLivePig"
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 先完善添加功能 "),
      vue.createElementVNode("view", { class: "bg" }, [
        vue.createElementVNode("view", { class: "box" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.items, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "item",
                key: index
              }, [
                $options.ifshow(item) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "text"
                }, [
                  vue.createElementVNode(
                    "strong",
                    null,
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    null,
                    "投放日期：" + vue.toDisplayString(item.time) + "\\n总数量：" + vue.toDisplayString(item.sum) + "\\n死淘日期：" + vue.toDisplayString(item.deadtime) + "\\n死淘数量：" + vue.toDisplayString(item.deadnum) + "\\n死淘率：" + vue.toDisplayString($options.calculateDeadRate(item)) + "%",
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("button", {
                  type: "primary",
                  onClick: ($event) => $options.clickbtn(index)
                }, "删除", 8, ["onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createVNode(_component_uni_fab, {
        horizontal: "right",
        vertical: "bottom",
        onFabClick: $options.fabClick
      }, null, 8, ["onFabClick"])
    ]);
  }
  const PagesLivePigMageLivePigMage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/livePigMage/livePigMage.vue"]]);
  const _imports_0 = "/static/pigvideo.mp4";
  const _sfc_main$7 = {
    data() {
      return {};
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "bg" }, [
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("video", {
              src: _imports_0,
              controls: "false",
              "object-fit": "fill",
              autoplay: "true",
              "show-center-play-btn": "false"
            })
          ]),
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("image", {
              src: "/static/spjk.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "场地二")
          ]),
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("image", {
              src: "/static/spjk.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "场地三")
          ])
        ])
      ])
    ]);
  }
  const PagesVideoVideo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/video/video.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        name: "",
        time: "",
        posi: "",
        type: "",
        state: ""
      };
    },
    methods: {
      get1(e) {
        this.name = e.detail.value;
      },
      get2(e) {
        this.time = e.detail.value;
      },
      get3(e) {
        this.posi = e.detail.value;
      },
      get4(e) {
        this.type = e.detail.value;
      },
      get5(e) {
        this.state = e.detail.value;
      },
      confirm() {
        uni.$emit("LPinfo", { name: this.name, time: this.time, sum: this.posi, deadtime: this.type, deadnum: this.state });
        uni.navigateBack({ delta: 1 });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 没实现传参 "),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "猪种名称"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.get1 && $options.get1(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "投放日期"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[1] || (_cache[1] = (...args) => $options.get2 && $options.get2(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "总数量"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.get3 && $options.get3(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "死淘日期"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[3] || (_cache[3] = (...args) => $options.get4 && $options.get4(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "死淘数量"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[4] || (_cache[4] = (...args) => $options.get5 && $options.get5(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.confirm && $options.confirm(...args))
        }, "确认")
      ])
    ]);
  }
  const PagesLivePigMageAddLivePig = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/livePigMage/addLivePig.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        items: [{}]
      };
    },
    onLoad() {
      uni.$on("mMinfo", (e) => {
        this.getText(e);
      });
    },
    mounted() {
      this.items = uni.getStorageSync("mM");
      if (this.items[0] == null || this.items[0] == void 0) {
        this.items = [{
          cb: "",
          sum: "",
          ys: "",
          ss: ""
        }];
      }
    },
    methods: {
      ifshow(item) {
        if (item.cb == "" && item.sum == "" && item.ys == "" && item.ss == "") {
          return false;
        } else {
          return true;
        }
      },
      getText(e) {
        this.items.push(e);
        uni.setStorageSync("mM", this.items);
      },
      clickbtn(index) {
        uni.showModal({
          title: "操作提示",
          content: "确定要删除此条数据吗？",
          cancelColor: "#007aff",
          success: (e) => {
            if (e.confirm) {
              this.items.splice(index, 1);
              uni.setStorageSync("mM", this.items);
            }
          }
        });
      },
      fabClick() {
        uni.navigateTo({
          url: "/pages/moneyMage/addMoneyMage"
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "bg" }, [
        vue.createElementVNode("view", { class: "box" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.items, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "item",
                key: index
              }, [
                $options.ifshow(item) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "text"
                }, [
                  vue.createElementVNode(
                    "strong",
                    null,
                    "财务信息" + vue.toDisplayString(index + 1),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    null,
                    "成本：" + vue.toDisplayString(item.cb) + "\\n物料总价：" + vue.toDisplayString(item.sum) + "\\n应收款：" + vue.toDisplayString(item.ys) + "\\n实收款：" + vue.toDisplayString(item.ss),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("button", {
                  type: "primary",
                  onClick: ($event) => $options.clickbtn(index)
                }, "删除", 8, ["onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createVNode(_component_uni_fab, {
        horizontal: "right",
        vertical: "bottom",
        onFabClick: $options.fabClick
      }, null, 8, ["onFabClick"])
    ]);
  }
  const PagesMoneyMageMoneyMage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/moneyMage/moneyMage.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        cb: "",
        sum: "",
        ys: "",
        ss: ""
      };
    },
    methods: {
      get1(e) {
        this.cb = e.detail.value;
      },
      get2(e) {
        this.sum = e.detail.value;
      },
      get3(e) {
        this.ys = e.detail.value;
      },
      get4(e) {
        this.ss = e.detail.value;
      },
      confirm() {
        uni.$emit("mMinfo", { cb: this.cb, sum: this.sum, ys: this.ys, ss: this.ss });
        uni.navigateBack({ delta: 1 });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 没实现传参 "),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "成本"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.get1 && $options.get1(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "物料总价"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[1] || (_cache[1] = (...args) => $options.get2 && $options.get2(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "应收款"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.get3 && $options.get3(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "实收款"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[3] || (_cache[3] = (...args) => $options.get4 && $options.get4(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.confirm && $options.confirm(...args))
        }, "确认")
      ])
    ]);
  }
  const PagesMoneyMageAddMoneyMage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/moneyMage/addMoneyMage.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        items: [{}]
      };
    },
    onLoad() {
      uni.$on("maMinfo", (e) => {
        this.getText(e);
      });
    },
    mounted() {
      this.items = uni.getStorageSync("maM");
      if (this.items[0] == null || this.items[0] == void 0) {
        this.items = [{
          name: "",
          scale: "",
          type: "",
          dj: "",
          bzq: "",
          scrq: ""
        }];
      }
    },
    methods: {
      ifshow(item) {
        if (item.name == "" && item.scale == "" && item.type == "" && item.dj == "" && item.bzq == "" && item.scrq == "") {
          return false;
        } else {
          return true;
        }
      },
      getText(e) {
        this.items.push(e);
        uni.setStorageSync("maM", this.items);
      },
      clickbtn(index) {
        uni.showModal({
          title: "操作提示",
          content: "确定要删除此条数据吗？",
          cancelColor: "#007aff",
          success: (e) => {
            if (e.confirm) {
              this.items.splice(index, 1);
              uni.setStorageSync("maM", this.items);
            }
          }
        });
      },
      fabClick() {
        uni.navigateTo({
          url: "/pages/materialMage/addMaterial"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "bg" }, [
        vue.createElementVNode("view", { class: "box" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.items, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "item",
                key: index
              }, [
                vue.createCommentVNode(" //最上面的不是空 "),
                $options.ifshow(item) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "text"
                }, [
                  vue.createElementVNode(
                    "strong",
                    null,
                    "物料信息" + vue.toDisplayString(index + 1),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    null,
                    "名称：" + vue.toDisplayString(item.name) + "\\n规格/单位：" + vue.toDisplayString(item.scale) + "\\n类型：" + vue.toDisplayString(item.type) + "\\n单价（元）：" + vue.toDisplayString(item.dj) + "\\n保质期（天）：" + vue.toDisplayString(item.bzq) + "\\n生产日期：" + vue.toDisplayString(item.scrq),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("button", {
                  type: "primary",
                  onClick: ($event) => $options.clickbtn(index)
                }, "删除", 8, ["onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createVNode(_component_uni_fab, {
        horizontal: "right",
        vertical: "bottom",
        onFabClick: $options.fabClick
      }, null, 8, ["onFabClick"])
    ]);
  }
  const PagesMaterialMageMaterialMage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/materialMage/materialMage.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        name: "",
        scale: "",
        type: "",
        dj: "",
        bzq: "",
        scrq: ""
      };
    },
    methods: {
      get1(e) {
        this.name = e.detail.value;
      },
      get2(e) {
        this.scale = e.detail.value;
      },
      get3(e) {
        this.type = e.detail.value;
      },
      get4(e) {
        this.dj = e.detail.value;
      },
      get5(e) {
        this.bzq = e.detail.value;
      },
      get6(e) {
        this.scrq = e.detail.value;
      },
      confirm() {
        uni.$emit("maMinfo", { name: this.name, scale: this.scale, type: this.type, dj: this.dj, bzq: this.bzq, scrq: this.scrq });
        uni.navigateBack({ delta: 1 });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 没实现传参 "),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "物料名称"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.get1 && $options.get1(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "物料规格/单位"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[1] || (_cache[1] = (...args) => $options.get2 && $options.get2(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "物料类型"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.get3 && $options.get3(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "物料单价（元）"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[3] || (_cache[3] = (...args) => $options.get4 && $options.get4(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "物料保质期（天）"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[4] || (_cache[4] = (...args) => $options.get5 && $options.get5(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("text", null, "物料生产日期"),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              onInput: _cache[5] || (_cache[5] = (...args) => $options.get6 && $options.get6(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.confirm && $options.confirm(...args))
        }, "确认")
      ])
    ]);
  }
  const PagesMaterialMageAddMaterial = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/materialMage/addMaterial.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        //键盘高度
        keyboardHeight: 0,
        //底部消息发送高度
        bottomHeight: 0,
        //滚动距离
        scrollTop: 0,
        userId: "",
        //发送的消息
        chatMsg: "",
        msgList: [
          {
            botContent: "你好，我叫小云，请输入您的问题：",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          },
          {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: "please provide some breeding suggestions",
            userId: 0
          },
          {
            botContent: "根据您现在的生猪养殖情况，建议您关注物料信息1的保质期",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          }
        ]
      };
    },
    updated() {
      this.scrollToBottom();
    },
    computed: {
      windowHeight() {
        return this.rpxTopx(uni.getSystemInfoSync().windowHeight);
      },
      // 键盘弹起来的高度+发送框高度
      inputHeight() {
        return this.bottomHeight + this.keyboardHeight;
      }
    },
    onLoad() {
      uni.onKeyboardHeightChange((res) => {
        this.keyboardHeight = this.rpxTopx(res.height - 30);
        if (this.keyboardHeight < 0)
          this.keyboardHeight = 0;
      });
    },
    onUnload() {
      uni.offKeyboardHeightChange();
    },
    methods: {
      focus() {
        this.scrollToBottom();
      },
      blur() {
        this.scrollToBottom();
      },
      // px转换成rpx
      rpxTopx(px) {
        let deviceWidth = wx.getSystemInfoSync().windowWidth;
        let rpx = 750 / deviceWidth * Number(px);
        return Math.floor(rpx);
      },
      // 监视聊天发送栏高度
      sendHeight() {
        setTimeout(() => {
          let query = uni.createSelectorQuery();
          query.select(".send-msg").boundingClientRect();
          query.exec((res) => {
            this.bottomHeight = this.rpxTopx(res[0].height);
          });
        }, 10);
      },
      // 滚动至聊天底部
      scrollToBottom(e) {
        setTimeout(() => {
          let query = uni.createSelectorQuery().in(this);
          query.select("#scrollview").boundingClientRect();
          query.select("#msglistview").boundingClientRect();
          query.exec((res) => {
            if (res[1].height > res[0].height) {
              this.scrollTop = this.rpxTopx(res[1].height - res[0].height);
            }
          });
        }, 15);
      },
      // 发送消息
      handleSend() {
        if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
          let obj = {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: this.chatMsg,
            userId: 0
          };
          this.msgList.push(obj);
          this.chatMsg = "";
          this.scrollToBottom();
        } else {
          this.$modal.showToast("不能发送空白消息");
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 弹窗太高，tabbar太高，删除逻辑有错,没实现对话"),
        vue.createElementVNode("view", { class: "chat" }, [
          vue.createElementVNode("scroll-view", {
            style: vue.normalizeStyle({ height: `${$options.windowHeight - $options.inputHeight}rpx` }),
            id: "scrollview",
            "scroll-y": "true",
            "scroll-top": $data.scrollTop,
            class: "scroll-view"
          }, [
            vue.createCommentVNode(" 聊天主体 "),
            vue.createElementVNode("view", {
              id: "msglistview",
              class: "chat-body"
            }, [
              vue.createCommentVNode(" 聊天记录 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.msgList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                    vue.createCommentVNode(" 改 "),
                    vue.createCommentVNode(" 自己发的消息 "),
                    item.userContent != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "item self"
                    }, [
                      vue.createCommentVNode(" 文字内容 "),
                      vue.createElementVNode(
                        "view",
                        { class: "content right" },
                        vue.toDisplayString(item.userContent),
                        1
                        /* TEXT */
                      ),
                      vue.createCommentVNode(" 头像 "),
                      vue.createElementVNode("view", { class: "avatar" })
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 机器人发的消息 "),
                    item.botContent != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "item Ai"
                    }, [
                      vue.createCommentVNode(" 头像 "),
                      vue.createElementVNode("view", { class: "avatar" }),
                      vue.createCommentVNode(" 文字内容 "),
                      vue.createElementVNode(
                        "view",
                        { class: "content left" },
                        vue.toDisplayString(item.botContent),
                        1
                        /* TEXT */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 12, ["scroll-top"]),
          vue.createCommentVNode(" 底部消息发送栏 "),
          vue.createCommentVNode(" 用来占位，防止聊天消息被发送框遮挡 "),
          vue.createElementVNode(
            "view",
            {
              class: "chat-bottom",
              style: vue.normalizeStyle({ height: `${$options.inputHeight}rpx` })
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "send-msg",
                  style: vue.normalizeStyle({ bottom: `${$data.keyboardHeight}rpx` })
                },
                [
                  vue.createElementVNode("view", { class: "uni-textarea" }, [
                    vue.withDirectives(vue.createElementVNode(
                      "textarea",
                      {
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.chatMsg = $event),
                        maxlength: "300",
                        "confirm-type": "send",
                        onConfirm: _cache[1] || (_cache[1] = (...args) => $options.handleSend && $options.handleSend(...args)),
                        "show-confirm-bar": false,
                        "adjust-position": false,
                        onLinechange: _cache[2] || (_cache[2] = (...args) => $options.sendHeight && $options.sendHeight(...args)),
                        onFocus: _cache[3] || (_cache[3] = (...args) => $options.focus && $options.focus(...args)),
                        onBlur: _cache[4] || (_cache[4] = (...args) => $options.blur && $options.blur(...args)),
                        "auto-height": "",
                        placeholder: "Type your message..."
                      },
                      null,
                      544
                      /* HYDRATE_EVENTS, NEED_PATCH */
                    ), [
                      [vue.vModelText, $data.chatMsg]
                    ])
                  ]),
                  vue.createElementVNode("button", {
                    onClick: _cache[5] || (_cache[5] = (...args) => $options.handleSend && $options.handleSend(...args)),
                    class: "send-btn"
                  }, "发送")
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const PagesTestaiTestai = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-3ca6e6af"], ["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/pages/testai/testai.vue"]]);
  __definePage("pages/login_register/login_register", PagesLogin_registerLogin_register);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/login_register/register", PagesLogin_registerRegister);
  __definePage("pages/mainpage/mainpage", PagesMainpageMainpage);
  __definePage("pages/pigmanage/pigmanage", PagesPigmanagePigmanage);
  __definePage("pages/AI/AI", PagesAIAI);
  __definePage("pages/pigmanage/addPig", PagesPigmanageAddPig);
  __definePage("pages/livePigMage/livePigMage", PagesLivePigMageLivePigMage);
  __definePage("pages/video/video", PagesVideoVideo);
  __definePage("pages/livePigMage/addLivePig", PagesLivePigMageAddLivePig);
  __definePage("pages/moneyMage/moneyMage", PagesMoneyMageMoneyMage);
  __definePage("pages/moneyMage/addMoneyMage", PagesMoneyMageAddMoneyMage);
  __definePage("pages/materialMage/materialMage", PagesMaterialMageMaterialMage);
  __definePage("pages/materialMage/addMaterial", PagesMaterialMageAddMaterial);
  __definePage("pages/testai/testai", PagesTestaiTestai);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/浏览器下载处/HBuilderX.3.99.2023122611/app实战/pigcloud-project/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
