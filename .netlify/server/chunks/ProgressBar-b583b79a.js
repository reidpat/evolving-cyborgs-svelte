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
  P: () => ProgressBar
});
module.exports = __toCommonJS(stdin_exports);
var import_index_df821055 = require("./index-df821055.js");
const ProgressBar = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let indeterminate;
  let capped;
  let $$restProps = (0, import_index_df821055.r)($$props, ["value", "max", "labelText", "hideLabel", "helperText", "id"]);
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
  return `<div${(0, import_index_df821055.t)([(0, import_index_df821055.u)($$restProps)], {
    classes: "bx--progress-bar " + (indeterminate ? "bx--progress-bar--indeterminate" : "")
  })}><label${(0, import_index_df821055.e)("for", id, 0)}${(0, import_index_df821055.w)(("bx--progress-bar__label " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
      ${(0, import_index_df821055.g)(labelText)}
    `}</label>
  <div role="${"progressbar"}"${(0, import_index_df821055.e)("id", id, 0)}${(0, import_index_df821055.e)("aria-valuemin", indeterminate ? void 0 : 0, 0)}${(0, import_index_df821055.e)("aria-valuemax", indeterminate ? void 0 : max, 0)}${(0, import_index_df821055.e)("aria-valuenow", indeterminate ? void 0 : capped, 0)}${(0, import_index_df821055.e)("aria-describedby", helperText ? helperId : null, 0)}${(0, import_index_df821055.w)("bx--progress-bar__track".trim())}><div style="${"transform: scaleX(" + (0, import_index_df821055.g)(capped / max) + ")"}"${(0, import_index_df821055.w)("bx--progress-bar__bar".trim())}></div></div>
  ${helperText ? `<div${(0, import_index_df821055.e)("id", helperId, 0)}${(0, import_index_df821055.w)("bx--progress-bar__helper-text".trim())}>${(0, import_index_df821055.g)(helperText)}</div>` : ``}</div>`;
});
