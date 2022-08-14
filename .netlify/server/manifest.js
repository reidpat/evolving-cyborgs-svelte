var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["cyborg.png", "cyborg.svg", "favicon.png", "manifest.json", "meditation_192.png", "meditation_512.png", "thinking.svg", "service-worker.js"]),
  _: {
    mime: { ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json" },
    entry: { "file": "start-182b876c.js", "js": ["start-182b876c.js", "chunks/index-e545626c.js", "chunks/index-11e3d9f4.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/productivity\/?$/,
        params: null,
        path: "/productivity",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/timeline\/?$/,
        params: null,
        path: "/timeline",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/friends\/?$/,
        params: null,
        path: "/friends",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/offline\/?$/,
        params: null,
        path: "/offline",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/habits\/?$/,
        params: null,
        path: "/habits",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/signin\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/signin.js")))
      },
      {
        type: "page",
        pattern: /^\/vices\/?$/,
        params: null,
        path: "/vices",
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ]
  }
};
