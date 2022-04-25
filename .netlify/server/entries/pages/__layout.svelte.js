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
var import_index_d51717b2 = require("../../chunks/index-d51717b2.js");
var import_lib_236980de = require("../../chunks/lib-236980de.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_supabase_js = require("@supabase/supabase-js");
const SignIn = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  return `<button>Login</button>`;
});
const SignOut = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  return `<div><button class="${"button block"}" ${""}>Sign Out
    </button></div>`;
});
const ProgressBar = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let indeterminate;
  let capped;
  let $$restProps = (0, import_index_d51717b2.a)($$props, ["value", "max", "labelText", "hideLabel", "helperText", "id"]);
  let { value = void 0 } = $$props;
  let { max = 100 } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { helperText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let helperId = "ccs-" + Math.random().toString(36);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  indeterminate = value === void 0;
  capped = value > max ? max : value < 0 ? 0 : value;
  return `<div${(0, import_index_d51717b2.b)([(0, import_index_d51717b2.e)($$restProps)], {
    classes: "bx--progress-bar " + (indeterminate ? "bx--progress-bar--indeterminate" : "")
  })}><label${(0, import_index_d51717b2.d)("for", id, 0)}${(0, import_index_d51717b2.f)(("bx--progress-bar__label " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
      ${(0, import_index_d51717b2.g)(labelText)}
    `}</label>
  <div role="${"progressbar"}"${(0, import_index_d51717b2.d)("id", id, 0)}${(0, import_index_d51717b2.d)("aria-valuemin", indeterminate ? void 0 : 0, 0)}${(0, import_index_d51717b2.d)("aria-valuemax", indeterminate ? void 0 : max, 0)}${(0, import_index_d51717b2.d)("aria-valuenow", indeterminate ? void 0 : capped, 0)}${(0, import_index_d51717b2.d)("aria-describedby", helperText ? helperId : null, 0)}${(0, import_index_d51717b2.f)("bx--progress-bar__track".trim())}><div style="${"transform: scaleX(" + (0, import_index_d51717b2.g)(capped / max) + ")"}"${(0, import_index_d51717b2.f)("bx--progress-bar__bar".trim())}></div></div>
  ${helperText ? `<div${(0, import_index_d51717b2.d)("id", helperId, 0)}${(0, import_index_d51717b2.f)("bx--progress-bar__helper-text".trim())}>${(0, import_index_d51717b2.g)(helperText)}</div>` : ``}</div>`;
});
var User_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".inner-nav.svelte-xetbe1{display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:auto}.outer-nav.svelte-xetbe1{width:100%;margin:auto;background-color:#1d1c1f;color:#c4c2b9;padding:10px}.xp-bar.svelte-xetbe1{flex:1;margin:0px 20px}",
  map: null
};
const User = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $profileStore, $$unsubscribe_profileStore;
  $$unsubscribe_user = (0, import_index_d51717b2.h)(import_lib_236980de.u, (value) => $user = value);
  $$unsubscribe_profileStore = (0, import_index_d51717b2.h)(import_lib_236980de.p, (value) => $profileStore = value);
  let profile;
  async function startupLoad() {
    if (!$profileStore) {
      let { data: profiles, error } = await import_supabaseClient_51bc0a25.s.from("profiles").select("*").eq("id", $user.id);
      import_lib_236980de.p.set(profiles[0]);
    }
    let userID = $user.id;
    import_supabaseClient_51bc0a25.s.from(`profiles:id=eq.${userID}`).on("*", (payload) => {
      import_lib_236980de.p.set(__spreadValues({}, payload.new));
    }).subscribe();
  }
  $$result.css.add(css$3);
  profile = $profileStore;
  {
    {
      if ($user) {
        console.log("startup");
        startupLoad();
      }
    }
  }
  $$unsubscribe_user();
  $$unsubscribe_profileStore();
  return `<div class="${"outer-nav svelte-xetbe1"}"><div class="${"inner-nav svelte-xetbe1"}"><h1>EC</h1>
		<div class="${"xp-bar svelte-xetbe1"}">${$user ? `${(0, import_index_d51717b2.v)(ProgressBar, "ProgressBar").$$render($$result, {
    id: "xp_bar",
    value: profile.xp,
    max: profile.next_level_xp,
    labelText: `Level: ${profile.level}`,
    helperText: `${profile.xp}/${profile.next_level_xp} xp`
  }, {}, {})}` : ``}</div>
		<div>${$user ? `${(0, import_index_d51717b2.v)(SignOut, "SignOut").$$render($$result, {}, {}, {})}` : `${(0, import_index_d51717b2.v)(SignIn, "SignIn").$$render($$result, {}, {}, {})}`}</div></div>
</div>`;
});
var app = "";
const Eventbus = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_lib_236980de.i)(import_index_d51717b2.i);
  return `${slots.default ? slots.default({}) : ``}`;
});
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
  const { subscribe: subscribe2, update } = (0, import_lib_236980de.w)([]);
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
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults2 = {}) {
  const store = (0, import_lib_236980de.w)(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = import_index_d51717b2.k, interpolate = get_interpolator } = (0, import_index_d51717b2.j)((0, import_index_d51717b2.j)({}, defaults2), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = (0, import_index_d51717b2.n)() + delay;
    let fn;
    task = (0, import_index_d51717b2.l)((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
var ToastItem_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "._toastItem.svelte-5er0t9{width:var(--toastWidth, 16rem);height:var(--toastHeight, auto);min-height:var(--toastMinHeight, 3.5rem);margin:var(--toastMargin, 0 0 0.5rem 0);padding:var(--toastPadding, 0);background:var(--toastBackground, rgba(66, 66, 66, 0.9));color:var(--toastColor, #fff);box-shadow:var(\n    --toastBoxShadow,\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  );border:var(--toastBorder, none);border-radius:var(--toastBorderRadius, 0.125rem);position:relative;display:flex;flex-direction:row;align-items:center;overflow:hidden;will-change:transform, opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-5er0t9{padding:var(--toastMsgPadding, 0.75rem 0.5rem);flex:1 1 0%}.pe.svelte-5er0t9,._toastMsg.svelte-5er0t9 a{pointer-events:auto}._toastBtn.svelte-5er0t9{width:2rem;height:100%;font:1rem sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none}._toastBar.svelte-5er0t9{top:var(--toastBarTop, auto);right:var(--toastBarRight, auto);bottom:var(--toastBarBottom, 0);left:var(--toastBarLeft, 0);height:var(--toastBarHeight, 6px);width:var(--toastBarWidth, 100%);position:absolute;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;pointer-events:none}._toastBar.svelte-5er0t9::-webkit-progress-bar{background:transparent}._toastBar.svelte-5er0t9::-webkit-progress-value{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}._toastBar.svelte-5er0t9::-moz-progress-bar{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}",
  map: null
};
const ToastItem = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { item } = $$props;
  const progress = tweened(item.initial, { duration: item.duration, easing: import_index_d51717b2.k });
  $$unsubscribe_progress = (0, import_index_d51717b2.h)(progress, (value) => $progress = value);
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
  (0, import_index_d51717b2.o)(() => {
    if (typeof item.onpop === "function") {
      item.onpop(item.id);
    }
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$2);
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
  return `<div class="${["_toastItem svelte-5er0t9", item.pausable ? "pe" : ""].join(" ").trim()}"><div role="${"status"}" class="${["_toastMsg svelte-5er0t9", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${(0, import_index_d51717b2.v)(item.component.src || import_index_d51717b2.m, "svelte:component").$$render($$result, Object.assign(getProps()), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div>
  ${item.dismissable ? `<div class="${"_toastBtn pe svelte-5er0t9"}" role="${"button"}" tabindex="${"-1"}">\u2715</div>` : ``}
  <progress class="${"_toastBar svelte-5er0t9"}"${(0, import_index_d51717b2.d)("value", $progress, 0)}></progress>
</div>`;
});
var SvelteToast_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "._toastContainer.svelte-yh90az{top:var(--toastContainerTop, 1.5rem);right:var(--toastContainerRight, 2rem);bottom:var(--toastContainerBottom, auto);left:var(--toastContainerLeft, auto);position:fixed;margin:0;padding:0;list-style-type:none;pointer-events:none;z-index:var(--toastContainerZIndex, 9999)}",
  map: null
};
const SvelteToast = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = (0, import_index_d51717b2.h)(toast, (value) => $toast = value);
  let { options = {} } = $$props;
  let { target = "default" } = $$props;
  let items;
  const getCss = (theme) => Object.keys(theme).reduce((a, c) => `${a}${c}:${theme[c]};`, "");
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css$1);
  {
    toast._init(target, options);
  }
  items = $toast.filter((i) => i.target === target);
  $$unsubscribe_toast();
  return `<ul class="${"_toastContainer svelte-yh90az"}">${(0, import_index_d51717b2.p)(items, (item) => {
    return `<li class="${(0, import_index_d51717b2.g)((0, import_index_d51717b2.q)(item.classes.join(" "))) + " svelte-yh90az"}"${(0, import_index_d51717b2.d)("style", getCss(item.theme), 0)}>${(0, import_index_d51717b2.v)(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})}
    </li>`;
  })}
</ul>`;
});
var BottomNav_svelte_svelte_type_style_lang = "";
const css = {
  code: "#bottom-nav-wrapper.svelte-10upzz0.svelte-10upzz0{position:fixed;bottom:0px;display:flex;justify-content:center;width:100%;background-color:#1d1c1f}#bottom-nav-wrapper.svelte-10upzz0 a.svelte-10upzz0{margin:20px}",
  map: null
};
const BottomNav = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"bottom-nav-wrapper"}" class="${"svelte-10upzz0"}"><a href="${"/"}" class="${"clickable svelte-10upzz0"}"><h3>Habits</h3></a>
<a href="${"/vices"}" class="${"clickable svelte-10upzz0"}"><h3>Vices</h3></a> 
</div>`;
});
async function load({ session, context }) {
  let sessionInfo;
  if (session.session) {
    sessionInfo = JSON.parse(session.session);
  }
  return { props: { sessionInfo } };
}
const _layout = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $$unsubscribe_profileStore;
  $$unsubscribe_user = (0, import_index_d51717b2.h)(import_lib_236980de.u, (value) => $user = value);
  $$unsubscribe_profileStore = (0, import_index_d51717b2.h)(import_lib_236980de.p, (value) => value);
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
    import_lib_236980de.u.set(session.user);
  });
  if ($$props.sessionInfo === void 0 && $$bindings.sessionInfo && sessionInfo !== void 0)
    $$bindings.sessionInfo(sessionInfo);
  $$unsubscribe_user();
  $$unsubscribe_profileStore();
  return `${(0, import_index_d51717b2.v)(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})}
${(0, import_index_d51717b2.v)(User, "User").$$render($$result, {}, {}, {})}
<div class="${"content-container"}">${(0, import_index_d51717b2.v)(Eventbus, "Eventbus").$$render($$result, {}, {}, {
    default: () => {
      return `${$user ? `${slots.default ? slots.default({}) : ``}` : ``}`;
    }
  })}</div>
${$user ? `${(0, import_index_d51717b2.v)(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}` : ``}`;
});
