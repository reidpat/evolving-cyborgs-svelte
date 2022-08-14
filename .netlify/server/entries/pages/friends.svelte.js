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
  default: () => Friends
});
module.exports = __toCommonJS(stdin_exports);
var import_index_dc9adc7d = require("../../chunks/index-dc9adc7d.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_sessionStore_76a26766 = require("../../chunks/sessionStore-76a26766.js");
var import_AnimatedProgress_7cdfcdfd = require("../../chunks/AnimatedProgress-7cdfcdfd.js");
var import_supabase_js = require("@supabase/supabase-js");
var friends_svelte_svelte_type_style_lang = "";
const css = {
  code: "#friends-tabs.svelte-1nf61wr{position:fixed;bottom:55px;display:flex;justify-content:center;width:100%;background-color:hsl(var(--b2));border-bottom:3px solid hsl(var(--pf));border-radius:0px}",
  map: null
};
const Friends = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $friendStore, $$unsubscribe_friendStore;
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => value);
  $$unsubscribe_friendStore = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.f, (value) => $friendStore = value);
  let friends = [];
  let requests = [];
  let searchOptions = [];
  let newFriendName;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if ($friendStore) {
          friends = [...$friendStore];
        }
      }
    }
    $$rendered = `<div class="${"content-container"}">${`<div class="${"alert shadow-lg mb-4"}"><div><div><h1 class="${"font-bold"}">Friends</h1></div></div></div>
		${friends && friends.length > 0 ? `${(0, import_index_dc9adc7d.d)(friends, (friend) => {
      return `<div class="${"card bg-base-100 shadow-xl card-compact"}"><div class="${"card-body"}"><div><h2 class="${"card-title"}">${(0, import_index_dc9adc7d.e)(friend.user.username)}</h2></div>
						<div class="${"flex"}"><div class="${"radial-progress text-accent"}" style="${"--value:" + (0, import_index_dc9adc7d.e)((friend.user.momentum - Math.floor(friend.user.momentum)) * 100) + ";"}">${friend.user.momentum % 1 == 0 ? `${(0, import_index_dc9adc7d.e)(Math.floor(friend.user.momentum))}.00x` : `${(0, import_index_dc9adc7d.e)(friend.user.momentum)}x`}</div>
							<div class="${"xp-bar"}"><p>Level: ${(0, import_index_dc9adc7d.e)(friend.user.level)} | XP: ${(0, import_index_dc9adc7d.e)(friend.user.xp)}/${(0, import_index_dc9adc7d.e)(friend.user.next_level_xp)}</p>
								${(0, import_index_dc9adc7d.v)(import_AnimatedProgress_7cdfcdfd.A, "AnimatedProgress").$$render($$result, {
        classColor: "progress-primary",
        value: friend.user.xp,
        max: friend.user.next_level_xp
      }, {
        value: ($$value) => {
          friend.user.xp = $$value;
          $$settled = false;
        },
        max: ($$value) => {
          friend.user.next_level_xp = $$value;
          $$settled = false;
        }
      }, {})}</div>
						</div></div>
				</div>`;
    })}` : `${`<div class="${"card bg-base-100 shadow-xl card-compact"}"><div class="${"card-body"}"><div><h2 class="${"card-title"}">Looks like you don&#39;t have any friends yet. Try adding one below!
						</h2></div></div></div>`}`}`}

	${``}

	${``}
	<div class="${"add-button"}"><button class="${"btn btn-accent btn-outline"}">Add a new friend</button></div>

	<div class="${["modal modal-accent sm:modal-middle", ""].join(" ").trim()}"><div class="${"modal-box"}"><label for="${"my-modal-7"}" class="${"btn btn-sm btn-circle absolute right-2 top-2"}">\u2715</label>
			<label for="${"habit-name"}" class="${"label"}"><span class="${"label-text"}">New Friend Name</span></label>
			<div class="${"input-group"}"><input id="${"habit-name"}" type="${"text"}" placeholder="${"Search..."}" class="${"input input-bordered"}"${(0, import_index_dc9adc7d.f)("value", newFriendName, 0)}>
				<button class="${"btn btn-square"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></button></div>

			<select class="${"select select-bordered w-full max-w-xs"}">${(0, import_index_dc9adc7d.d)(searchOptions, (searchResult) => {
      return `<option${(0, import_index_dc9adc7d.f)("value", searchResult, 0)}>${(0, import_index_dc9adc7d.e)(searchResult.username)}</option>`;
    })}</select>
			<div class="${"modal-action"}"><button class="${["btn btn-primary modal-button", "btn-disabled"].join(" ").trim()}">Add Friend</button></div></div></div></div>

<div id="${"friends-tabs"}" class="${"tabs tabs-boxed svelte-1nf61wr"}"><button class="${["tab", "tab-active"].join(" ").trim()}">Friends</button>
	<div class="${["tab indicator", ""].join(" ").trim()}">Requests
		${requests && requests.length > 0 ? `<span class="${"indicator-item badge badge-secondary"}">${(0, import_index_dc9adc7d.e)(requests.length)}</span>` : ``}</div>
	<div class="${["tab", ""].join(" ").trim()}">Sent
	</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_friendStore();
  return $$rendered;
});
