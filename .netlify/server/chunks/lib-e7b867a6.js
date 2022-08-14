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
  c: () => createEventbusDispatcher,
  i: () => initEventbus
});
module.exports = __toCommonJS(stdin_exports);
var import_index_dc9adc7d = require("./index-dc9adc7d.js");
const LABEL = "SVELTE:EVENTBUS:DISPATCHER";
function initEventbus(component) {
  const parent_dispatch = (0, import_index_dc9adc7d.g)(LABEL);
  const dispatch = (0, import_index_dc9adc7d.q)();
  (0, import_index_dc9adc7d.s)(LABEL, (type, details) => {
    const list = Object.keys(component.$$.callbacks);
    if (list.includes(type))
      dispatch(type, details);
    else if (parent_dispatch)
      parent_dispatch(type, details);
  });
}
function createEventbusDispatcher() {
  return (0, import_index_dc9adc7d.g)(LABEL);
}
