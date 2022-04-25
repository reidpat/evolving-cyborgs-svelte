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
  default: () => Vices
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d51717b2 = require("../../chunks/index-d51717b2.js");
var import_lib_236980de = require("../../chunks/lib-236980de.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_Add16_3d36ae4a = require("../../chunks/Add16-3d36ae4a.js");
var import_supabase_js = require("@supabase/supabase-js");
const Reset16 = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { class: className = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.focusable === void 0 && $$bindings.focusable && focusable !== void 0)
    $$bindings.focusable(focusable);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  ariaLabel = $$props["aria-label"];
  ariaLabelledBy = $$props["aria-labelledby"];
  labelled = ariaLabel || ariaLabelledBy || title;
  attributes = {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: tabindex === "0" ? true : focusable,
    tabindex
  };
  return `
<svg${(0, import_index_d51717b2.b)([
    { "data-carbon-icon": "Reset16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: (0, import_index_d51717b2.x)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_d51717b2.x)(style) },
    { id: (0, import_index_d51717b2.x)(id) },
    (0, import_index_d51717b2.e)(attributes)
  ], {})}><path d="${"M18,28A12,12,0,1,0,6,16v6.2L2.4,18.6,1,20l6,6,6-6-1.4-1.4L8,22.2V16H8A10,10,0,1,1,18,26Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_d51717b2.g)(title)}</title>` : ``}
  `}</svg>`;
});
var Reset16$1 = Reset16;
const Vices = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $viceStore, $$unsubscribe_viceStore;
  $$unsubscribe_user = (0, import_index_d51717b2.h)(import_lib_236980de.u, (value) => value);
  $$unsubscribe_viceStore = (0, import_index_d51717b2.h)(import_lib_236980de.v, (value) => $viceStore = value);
  (0, import_lib_236980de.c)();
  let newViceName = "";
  let open = false;
  let vices = [];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if ($viceStore) {
          vices = [...$viceStore];
        }
      }
    }
    $$rendered = `<h1>Vices</h1>
${(0, import_index_d51717b2.p)(vices, (vice) => {
      return `<div class="${"card"}"><h2>${(0, import_index_d51717b2.g)(vice.name)}</h2>
		<p>Best: ${(0, import_index_d51717b2.g)(vice.best_ui.days)}d ${(0, import_index_d51717b2.g)(vice.best_ui.hours)}h ${(0, import_index_d51717b2.g)(vice.best_ui.minutes)}m</p>
		<p>Total: ${(0, import_index_d51717b2.g)(vice.total_ui.days)}d ${(0, import_index_d51717b2.g)(vice.total_ui.hours)}h ${(0, import_index_d51717b2.g)(vice.total_ui.minutes)}m</p>
		<p>Num: ${(0, import_index_d51717b2.g)(vice.num)}</p>
		<p>Current: ${(0, import_index_d51717b2.g)(vice.current_ui.days)}d ${(0, import_index_d51717b2.g)(vice.current_ui.hours)}h ${(0, import_index_d51717b2.g)(vice.current_ui.minutes)}m</p>
		${(0, import_index_d51717b2.v)(import_Add16_3d36ae4a.B, "Button").$$render($$result, { iconDescription: "Reset", icon: Reset16$1 }, {}, {
        default: () => {
          return `Reset`;
        }
      })}
	</div>`;
    })}
${(0, import_index_d51717b2.v)(import_Add16_3d36ae4a.B, "Button").$$render($$result, { iconDescription: "New Vice", icon: import_Add16_3d36ae4a.A }, {}, {})}
${(0, import_index_d51717b2.v)(import_Add16_3d36ae4a.M, "Modal").$$render($$result, {
      size: "xs",
      modalHeading: "New Vice Name",
      primaryButtonText: "Confirm",
      secondaryButtonText: "Cancel",
      open
    }, {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<input${(0, import_index_d51717b2.d)("value", newViceName, 0)}>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_viceStore();
  return $$rendered;
});
