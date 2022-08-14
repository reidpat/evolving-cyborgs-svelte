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
  default: () => Timeline
});
module.exports = __toCommonJS(stdin_exports);
var import_index_dc9adc7d = require("../../chunks/index-dc9adc7d.js");
var import_sessionStore_76a26766 = require("../../chunks/sessionStore-76a26766.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_supabase_js = require("@supabase/supabase-js");
const Timeline = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => value);
  $$unsubscribe_user();
  return `<div class="${"content-container"}"><h1 class="${"center"}">Timeline</h1>
	<div class="${"overflow-x-auto"}">${``}</div></div>`;
});
