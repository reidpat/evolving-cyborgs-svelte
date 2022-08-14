var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_dc9adc7d = require("../../chunks/index-dc9adc7d.js");
var import_sessionStore_76a26766 = require("../../chunks/sessionStore-76a26766.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_AnimatedProgress_7cdfcdfd = require("../../chunks/AnimatedProgress-7cdfcdfd.js");
var import_lib_e7b867a6 = require("../../chunks/lib-e7b867a6.js");
var import_theme_change = require("theme-change");
var import_lottie_interactivity = require("@lottiefiles/lottie-interactivity");
var import_supabase_js = require("@supabase/supabase-js");
const SignIn = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"btn btn-primary"}">Sign In</button>`;
});
const SignOut = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  return `<div ${""}>Sign Out</div>`;
});
const Eventbus = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_lib_e7b867a6.i)(import_index_dc9adc7d.a);
  return `${slots.default ? slots.default({}) : ``}`;
});
var TopMenu_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "option.svelte-14101aq{color:hsl(var(--bc)) !important}",
  map: null
};
const TopMenu = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $profileStore, $$unsubscribe_profileStore;
  $$unsubscribe_profileStore = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.p, (value) => $profileStore = value);
  (0, import_lib_e7b867a6.c)();
  let themes = [
    "light",
    "dark",
    "cupcake",
    "emerald",
    "corporate",
    "synthwave",
    "valentine",
    "halloween",
    "forest",
    "aqua",
    "wireframe",
    "black",
    "luxury",
    "autumn",
    "business",
    "night",
    "coffee",
    "winter"
  ];
  let profile;
  $$result.css.add(css$5);
  profile = $profileStore;
  $$unsubscribe_profileStore();
  return `<div><div class="${"dropdown dropdown-end"}"><div tabindex="${"0"}" class="${"btn btn-outline m-1"}">${profile.username ? `<span class="${"font-bold text-3xl"}">${(0, import_index_dc9adc7d.e)(profile.username[0])}</span>` : `<span class="${"material-symbols-outlined"}">menu </span>`}</div>
		<ul tabindex="${"0"}" class="${"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"}"><li>${(0, import_index_dc9adc7d.v)(SignOut, "SignOut").$$render($$result, {}, {}, {})}</li>
			<li><div>Report Bug</div></li>
			<li><div>Request Feature</div></li>

			<li><div class="${"divider"}">Choose Theme</div>
				<select data-choose-theme class="${"select w-full max-w-xs"}">${(0, import_index_dc9adc7d.d)(themes, (t) => {
    return `<option class="${"bg-base-200 svelte-14101aq"}"${(0, import_index_dc9adc7d.f)("value", t, 0)}>${(0, import_index_dc9adc7d.e)(t)}</option>`;
  })}</select></li></ul></div>
</div>`;
});
var TopBar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".inner-nav.svelte-18qctj{display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:auto}.outer-nav.svelte-18qctj{position:fixed;top:0px;width:100%;margin:auto;background-color:hsl(var(--b2));color:hsl(var(--bc));padding:10px;z-index:4}.xp-bar.svelte-18qctj{padding:0px 20px;flex:1}p.svelte-18qctj{text-align:center}",
  map: null
};
const TopBar = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $profileStore, $$unsubscribe_profileStore;
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => $user = value);
  $$unsubscribe_profileStore = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.p, (value) => $profileStore = value);
  let profile;
  async function startupLoad() {
    if (!$profileStore) {
      let { data: profiles, error } = await import_supabaseClient_51bc0a25.s.from("profiles").select("*").eq("id", $user.id);
      import_sessionStore_76a26766.p.set(profiles[0]);
    }
    let userID = $user.id;
    import_supabaseClient_51bc0a25.s.from(`profiles:id=eq.${userID}`).on("*", (payload) => {
      import_sessionStore_76a26766.p.set(__spreadValues({}, payload.new));
    }).subscribe();
  }
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    profile = $profileStore;
    {
      {
        if ($user) {
          console.log("startup");
          startupLoad();
        }
      }
    }
    $$rendered = `<div class="${"outer-nav svelte-18qctj"}"><div class="${"inner-nav svelte-18qctj"}">${profile ? `<div class="${"radial-progress text-accent"}" style="${"--value:" + (0, import_index_dc9adc7d.e)((profile.momentum - Math.floor(profile.momentum)) * 100) + ";"}">${profile.momentum % 1 == 0 ? `${(0, import_index_dc9adc7d.e)(Math.floor(profile.momentum))}.00x` : `${(0, import_index_dc9adc7d.e)(profile.momentum)}x`}</div>

			<div class="${"xp-bar svelte-18qctj"}"><p class="${"svelte-18qctj"}">Level: ${(0, import_index_dc9adc7d.e)(profile.level)} | XP: ${(0, import_index_dc9adc7d.e)(profile.xp)}/${(0, import_index_dc9adc7d.e)(profile.next_level_xp)}</p>
				${(0, import_index_dc9adc7d.v)(import_AnimatedProgress_7cdfcdfd.A, "AnimatedProgress").$$render($$result, {
      classColor: "progress-primary",
      value: profile.xp,
      max: profile.next_level_xp
    }, {
      value: ($$value) => {
        profile.xp = $$value;
        $$settled = false;
      },
      max: ($$value) => {
        profile.next_level_xp = $$value;
        $$settled = false;
      }
    }, {})}

				</div>` : ``}
		<div>${$user ? `${(0, import_index_dc9adc7d.v)(TopMenu, "TopMenu").$$render($$result, {}, {}, {})}` : `${(0, import_index_dc9adc7d.v)(SignIn, "SignIn").$$render($$result, {}, {}, {})}`}</div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_profileStore();
  return $$rendered;
});
var app = "";
const defaults = {
  duration: 4e3,
  initial: 1,
  next: 0,
  pausable: false,
  dismissable: true,
  reversed: false,
  intro: { x: 256 }
};
const createToast = () => {
  const { subscribe: subscribe2, update } = (0, import_sessionStore_76a26766.w)([]);
  let count = 0;
  const options = {};
  const _obj = (obj) => obj instanceof Object;
  const push = (msg, opts = {}) => {
    const param = __spreadValues({ target: "default" }, _obj(msg) ? msg : __spreadProps(__spreadValues({}, opts), { msg }));
    const conf = options[param.target] || {};
    const entry = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, defaults), conf), param), {
      theme: __spreadValues(__spreadValues({}, conf.theme), param.theme),
      classes: [...conf.classes || [], ...param.classes || []],
      id: ++count
    });
    update((n) => entry.reversed ? [...n, entry] : [entry, ...n]);
    return count;
  };
  const pop = (id) => {
    update((n) => {
      if (!n.length || id === 0)
        return [];
      if (_obj(id))
        return n.filter((i) => id(i));
      const target = id || Math.max(...n.map((i) => i.id));
      return n.filter((i) => i.id !== target);
    });
  };
  const set = (id, opts = {}) => {
    const param = _obj(id) ? __spreadValues({}, id) : __spreadProps(__spreadValues({}, opts), { id });
    update((n) => {
      const idx = n.findIndex((i) => i.id === param.id);
      if (idx > -1) {
        n[idx] = __spreadValues(__spreadValues({}, n[idx]), param);
      }
      return n;
    });
  };
  const _init = (target = "default", opts = {}) => {
    options[target] = opts;
    return options;
  };
  return { subscribe: subscribe2, push, pop, set, _init };
};
const toast = createToast();
var ToastItem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "._toastItem.svelte-5er0t9{width:var(--toastWidth, 16rem);height:var(--toastHeight, auto);min-height:var(--toastMinHeight, 3.5rem);margin:var(--toastMargin, 0 0 0.5rem 0);padding:var(--toastPadding, 0);background:var(--toastBackground, rgba(66, 66, 66, 0.9));color:var(--toastColor, #fff);box-shadow:var(\n    --toastBoxShadow,\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  );border:var(--toastBorder, none);border-radius:var(--toastBorderRadius, 0.125rem);position:relative;display:flex;flex-direction:row;align-items:center;overflow:hidden;will-change:transform, opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-5er0t9{padding:var(--toastMsgPadding, 0.75rem 0.5rem);flex:1 1 0%}.pe.svelte-5er0t9,._toastMsg.svelte-5er0t9 a{pointer-events:auto}._toastBtn.svelte-5er0t9{width:2rem;height:100%;font:1rem sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none}._toastBar.svelte-5er0t9{top:var(--toastBarTop, auto);right:var(--toastBarRight, auto);bottom:var(--toastBarBottom, 0);left:var(--toastBarLeft, 0);height:var(--toastBarHeight, 6px);width:var(--toastBarWidth, 100%);position:absolute;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;pointer-events:none}._toastBar.svelte-5er0t9::-webkit-progress-bar{background:transparent}._toastBar.svelte-5er0t9::-webkit-progress-value{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}._toastBar.svelte-5er0t9::-moz-progress-bar{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}",
  map: null
};
const ToastItem = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { item } = $$props;
  const progress = (0, import_AnimatedProgress_7cdfcdfd.t)(item.initial, { duration: item.duration, easing: import_index_dc9adc7d.i });
  $$unsubscribe_progress = (0, import_index_dc9adc7d.b)(progress, (value) => $progress = value);
  const close = () => toast.pop(item.id);
  const autoclose = () => {
    if ($progress === 1 || $progress === 0) {
      close();
    }
  };
  let next = item.initial;
  const getProps = () => {
    const { props = {}, sendIdTo } = item.component;
    if (sendIdTo) {
      props[sendIdTo] = item.id;
    }
    return props;
  };
  (0, import_index_dc9adc7d.o)(() => {
    if (typeof item.onpop === "function") {
      item.onpop(item.id);
    }
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$3);
  {
    if (typeof item.progress !== "undefined") {
      item.next = item.progress;
    }
  }
  {
    if (next !== item.next) {
      next = item.next;
      progress.set(next).then(autoclose);
    }
  }
  $$unsubscribe_progress();
  return `<div class="${["_toastItem svelte-5er0t9", item.pausable ? "pe" : ""].join(" ").trim()}"><div role="${"status"}" class="${["_toastMsg svelte-5er0t9", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${(0, import_index_dc9adc7d.v)(item.component.src || import_index_dc9adc7d.m, "svelte:component").$$render($$result, Object.assign(getProps()), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div>
  ${item.dismissable ? `<div class="${"_toastBtn pe svelte-5er0t9"}" role="${"button"}" tabindex="${"-1"}">\u2715</div>` : ``}
  <progress class="${"_toastBar svelte-5er0t9"}"${(0, import_index_dc9adc7d.f)("value", $progress, 0)}></progress>
</div>`;
});
var SvelteToast_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "._toastContainer.svelte-yh90az{top:var(--toastContainerTop, 1.5rem);right:var(--toastContainerRight, 2rem);bottom:var(--toastContainerBottom, auto);left:var(--toastContainerLeft, auto);position:fixed;margin:0;padding:0;list-style-type:none;pointer-events:none;z-index:var(--toastContainerZIndex, 9999)}",
  map: null
};
const SvelteToast = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = (0, import_index_dc9adc7d.b)(toast, (value) => $toast = value);
  let { options = {} } = $$props;
  let { target = "default" } = $$props;
  let items;
  const getCss = (theme) => Object.keys(theme).reduce((a, c) => `${a}${c}:${theme[c]};`, "");
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css$2);
  {
    toast._init(target, options);
  }
  items = $toast.filter((i) => i.target === target);
  $$unsubscribe_toast();
  return `<ul class="${"_toastContainer svelte-yh90az"}">${(0, import_index_dc9adc7d.d)(items, (item) => {
    return `<li class="${(0, import_index_dc9adc7d.e)((0, import_index_dc9adc7d.n)(item.classes.join(" "))) + " svelte-yh90az"}"${(0, import_index_dc9adc7d.f)("style", getCss(item.theme), 0)}>${(0, import_index_dc9adc7d.v)(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})}
    </li>`;
  })}
</ul>`;
});
const getStores = () => {
  const stores = (0, import_index_dc9adc7d.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var BottomNav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#bottom-nav-wrapper.svelte-1h14w5h{position:fixed;bottom:0px;display:flex;justify-content:center;width:100%;background-color:hsl(var(--b2));border-radius:0px}",
  map: null
};
const BottomNav = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $user, $$unsubscribe_user;
  $$unsubscribe_page = (0, import_index_dc9adc7d.b)(page, (value) => $page = value);
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => $user = value);
  let currentTab = "";
  $$result.css.add(css$1);
  {
    {
      currentTab = $page.url.pathname;
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_user();
  return `${$user ? `<div id="${"bottom-nav-wrapper"}" class="${"tabs tabs-boxed svelte-1h14w5h"}"><a href="${"/habits"}" class="${[
    "tab tab-lg",
    (currentTab === "/habits" ? "tab-active" : "") + " " + (currentTab === "/habits" ? "bg-primary" : "")
  ].join(" ").trim()}">Habits</a>
	<a href="${"/vices"}" class="${["tab tab-lg", currentTab === "/vices" ? "tab-active" : ""].join(" ").trim()}">Vices</a>
	<a href="${"/friends"}" class="${["tab tab-lg", currentTab === "/friends" ? "tab-active" : ""].join(" ").trim()}">Friends</a>
	<div class="${"dropdown dropdown-top dropdown-end"}"><label tabindex="${"0"}" class="${"btn m-1"}">^</label>
		<ul tabindex="${"0"}" class="${"dropdown-content menu p-2 bg-base-200 rounded-md"}"><a href="${"/timeline"}" class="${["tab tab-lg", currentTab === "/timeline" ? "tab-active" : ""].join(" ").trim()}">Timeline</a></ul></div></div>` : ``}`;
});
var AnimatedConfetti_svelte_svelte_type_style_lang = "";
const UserReports = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => value);
  let { open = false } = $$props;
  let { type = "bug" } = $$props;
  let suffix = "report";
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  {
    {
      if (type == "bug") {
        suffix = "report";
      } else if (type = "feature") {
        suffix = "request";
      }
    }
  }
  $$unsubscribe_user();
  return `<div id="${"user-report"}" class="${["modal modal-accent sm:modal-middle", open ? "modal-open" : ""].join(" ").trim()}"><div class="${"modal-box"}"><label for="${"my-modal-7"}" class="${"btn btn-sm btn-circle absolute right-2 top-2"}">\u2715</label>
		<label for="${"habit-name"}" class="${"label"}"><span class="${"label-text "}"><h2>New ${(0, import_index_dc9adc7d.e)(type)} ${(0, import_index_dc9adc7d.e)(suffix)}</h2></span></label>
		<textarea type="${"text-area"}" placeholder="${"Type here"}" class="${"textarea textarea-primary w-full max-w-xs"}">${""}</textarea>
		<div class="${"modal-action"}"><button class="${"btn btn-primary modal-button"}">Send ${(0, import_index_dc9adc7d.e)(suffix)}</button></div></div>
</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1f7g1jl{max-width:300px}",
  map: null
};
async function load({ session, context }) {
  let sessionInfo;
  if (session.session) {
    sessionInfo = JSON.parse(session.session);
  }
  return { props: { sessionInfo } };
}
const _layout = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $profileStore, $$unsubscribe_profileStore;
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => $user = value);
  $$unsubscribe_profileStore = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.p, (value) => $profileStore = value);
  let { sessionInfo } = $$props;
  import_supabaseClient_51bc0a25.s.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_IN") {
      console.log(session.user.email);
      const response = await fetch("/signin", {
        method: "post",
        body: JSON.stringify(session)
      });
      console.log(response);
    }
    import_sessionStore_76a26766.u.set(session.user);
  });
  let habitGoalInfo = {};
  let reportType = "";
  let reportOpen = false;
  let newUserName = "";
  if ($$props.sessionInfo === void 0 && $$bindings.sessionInfo && sessionInfo !== void 0)
    $$bindings.sessionInfo(sessionInfo);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_dc9adc7d.v)(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})}
${(0, import_index_dc9adc7d.v)(Eventbus, "Eventbus").$$render($$result, {}, {}, {
      default: () => {
        return `${(0, import_index_dc9adc7d.v)(TopBar, "TopBar").$$render($$result, {}, {}, {})}
	${(0, import_index_dc9adc7d.v)(UserReports, "UserReports").$$render($$result, { type: reportType, open: reportOpen }, {
          type: ($$value) => {
            reportType = $$value;
            $$settled = false;
          },
          open: ($$value) => {
            reportOpen = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}

${$user ? `<div class="${"main-content-container"}">${(0, import_index_dc9adc7d.v)(Eventbus, "Eventbus").$$render($$result, {}, {}, {
      default: () => {
        return `${$user ? `${slots.default ? slots.default({}) : ``}` : ``}`;
      }
    })}
		${$profileStore && !$profileStore.username ? `<div class="${["modal modal-accent sm:modal-middle", "modal-open"].join(" ").trim()}"><div class="${"modal-box"}"><label for="${"user-name"}" class="${"label"}"><span class="${"label-text"}">Set Username</span></label>
				<input id="${"user-name"}" type="${"text"}" placeholder="${"Type here"}" class="${"input input-bordered input-primary w-full max-w-xs"}"${(0, import_index_dc9adc7d.f)("value", newUserName, 0)}>
				<div class="${"modal-action"}"><button class="${"btn btn-primary modal-button"}">Set Username</button></div></div></div>` : ``}
		<div class="${["modal modal-middle overflow-x-visible", ""].join(" ").trim()}"><div class="${"modal-box overflow-y-visible"}">${``}
				<p>Congratulations, you have now leveled up to ${(0, import_index_dc9adc7d.e)($profileStore.level)}. Keep up the great work!
				</p>
				<div class="${"modal-action"}"><label for="${"my-modal-6"}" class="${"btn"}">Yay!</label></div></div></div>
		<div class="${["modal modal-middle", ""].join(" ").trim()}"><div class="${"modal-box"}" style="${"overflow-y: visible;"}">${habitGoalInfo ? `<p>You just hit your goal of ${(0, import_index_dc9adc7d.e)(habitGoalInfo.progress)} days on ${(0, import_index_dc9adc7d.e)(habitGoalInfo.name)} and earned
						an extra ${(0, import_index_dc9adc7d.e)(habitGoalInfo.progress * 50)} xp. Do you think you can keep it up and hit your next
						goal of ${(0, import_index_dc9adc7d.e)(habitGoalInfo.goal)} days?
					</p>` : ``}
				${``}
				<div class="${"modal-action"}"><label for="${"my-modal-7"}" class="${"btn"}">You Bet!</label></div></div></div></div>` : `<div class="${"hero min-h-screen bg-base-300 pt-20"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">Evolving Cyborgs</h1>
		<p class="${"py-6"}">What would it be like if your technology worked <b>for</b> you instead of trying to exploit you? <br> Evolving Cyborgs is a gamified habit tracker that is designed to help you create healthier habits.</p>
		<img class="${"m-auto svelte-1f7g1jl"}" src="${"../cyborg.svg"}" alt="${"cyborg icon"}">
		<button class="${"btn btn-disabled btn-outline mt-5"}">Sign Up Now</button>
		<p class="${"mt-5"}">Evolving Cyborgs is not accepting new users at this time.</p></div></div></div>`}
${(0, import_index_dc9adc7d.v)(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_profileStore();
  return $$rendered;
});
