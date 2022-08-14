var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  A: () => AnimatedProgress,
  t: () => tweened
});
module.exports = __toCommonJS(stdin_exports);
var import_index_dc9adc7d = require("./index-dc9adc7d.js");
var import_sessionStore_76a26766 = require("./sessionStore-76a26766.js");
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
function tweened(value, defaults = {}) {
  const store = (0, import_sessionStore_76a26766.w)(value);
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
    let { delay = 0, duration = 400, easing = import_index_dc9adc7d.i, interpolate = get_interpolator } = (0, import_index_dc9adc7d.k)((0, import_index_dc9adc7d.k)({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = (0, import_index_dc9adc7d.l)() + delay;
    let fn;
    task = (0, import_index_dc9adc7d.p)((now2) => {
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
var AnimatedProgress_svelte_svelte_type_style_lang = "";
const css = {
  code: "progress.svelte-1fdn5t7{width:100%}",
  map: null
};
const AnimatedProgress = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $valueTween, $$unsubscribe_valueTween;
  let $maxTween, $$unsubscribe_maxTween;
  let { value = 0 } = $$props;
  let { max = 0 } = $$props;
  let { classColor = "" } = $$props;
  const valueTween = tweened(0);
  $$unsubscribe_valueTween = (0, import_index_dc9adc7d.b)(valueTween, (value2) => $valueTween = value2);
  const maxTween = tweened(0);
  $$unsubscribe_maxTween = (0, import_index_dc9adc7d.b)(maxTween, (value2) => $maxTween = value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.classColor === void 0 && $$bindings.classColor && classColor !== void 0)
    $$bindings.classColor(classColor);
  $$result.css.add(css);
  {
    valueTween.set(value);
  }
  {
    maxTween.set(max);
  }
  $$unsubscribe_valueTween();
  $$unsubscribe_maxTween();
  return `<progress class="${"progress w-56 bg-base-300 " + (0, import_index_dc9adc7d.e)(classColor) + " svelte-1fdn5t7"}"${(0, import_index_dc9adc7d.f)("value", $valueTween, 0)}${(0, import_index_dc9adc7d.f)("max", $maxTween, 0)}></progress>`;
});
