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
  default: () => Habits
});
module.exports = __toCommonJS(stdin_exports);
var import_index_dc9adc7d = require("../../chunks/index-dc9adc7d.js");
var import_sessionStore_76a26766 = require("../../chunks/sessionStore-76a26766.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_lib_e7b867a6 = require("../../chunks/lib-e7b867a6.js");
var import_AnimatedProgress_7cdfcdfd = require("../../chunks/AnimatedProgress-7cdfcdfd.js");
var import_supabase_js = require("@supabase/supabase-js");
var AnimatedCheck_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "lottie-player.svelte-xerdch{padding-top:1px;padding-right:1px}",
  map: null
};
const AnimatedCheck = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_dc9adc7d.q)();
  $$result.css.add(css$1);
  return `<lottie-player src="${"https://assets8.lottiefiles.com/packages/lf20_ukgq2f3t.json"}" background="${"transparent"}" class="${"-translate-x-1/2 -translate-y-2 svelte-xerdch"}" speed="${"1"}" style="${"width: 60px; height: 60px;"}" autoplay></lottie-player>`;
});
var habits_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-16ot55r.svelte-16ot55r{text-align:center}.goal-info.svelte-16ot55r.svelte-16ot55r{margin:auto;text-align:center}.habit-upper.svelte-16ot55r.svelte-16ot55r{display:flex;justify-content:space-between}.checkbox.svelte-16ot55r span.svelte-16ot55r{font-size:50px}",
  map: null
};
const Habits = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $$unsubscribe_profileStore;
  let $habitStore, $$unsubscribe_habitStore;
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => value);
  $$unsubscribe_profileStore = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.p, (value) => value);
  $$unsubscribe_habitStore = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.h, (value) => $habitStore = value);
  (0, import_lib_e7b867a6.c)();
  let habits = [];
  let newHabitName = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if ($habitStore) {
          habits = [...$habitStore];
        }
      }
    }
    $$rendered = `<div class="${"content-container"}"><h1 class="${"svelte-16ot55r"}">Habits</h1>
	${habits ? `${(0, import_index_dc9adc7d.d)(habits, (habit) => {
      return `<div class="${"card bg-base-100 shadow-xl card-compact"}"><div class="${"card-body"}"><div class="${"habit-upper svelte-16ot55r"}"><div><h2 class="${"card-title"}">${(0, import_index_dc9adc7d.e)(habit.name)}</h2>

							<p>Streak: ${(0, import_index_dc9adc7d.e)(habit.streak)}</p></div>

						<div class="${"checkbox svelte-16ot55r"}">${habit.is_complete ? `${(0, import_index_dc9adc7d.v)(AnimatedCheck, "AnimatedCheck").$$render($$result, {}, {}, {})}` : `<span class="${"material-symbols-outlined -translate-x-1/2 rounded-full svelte-16ot55r"}">circle
							</span>`}
						</div></div>

					${(0, import_index_dc9adc7d.v)(import_AnimatedProgress_7cdfcdfd.A, "AnimatedProgress").$$render($$result, {
        classColor: "progress-accent",
        value: habit.goalProgress,
        max: habit.goal
      }, {
        value: ($$value) => {
          habit.goalProgress = $$value;
          $$settled = false;
        },
        max: ($$value) => {
          habit.goal = $$value;
          $$settled = false;
        }
      }, {})}
					<p class="${"goal-info svelte-16ot55r"}">Goal: ${(0, import_index_dc9adc7d.e)(habit.goalProgress)}/${(0, import_index_dc9adc7d.e)(habit.goal)}</p></div>
			</div>`;
    })}` : ``}
	<div class="${"add-button "}"><button class="${"btn btn-accent btn-outline"}">Add New Habit</button></div>
	<div class="${["modal modal-accent sm:modal-middle", ""].join(" ").trim()}"><div class="${"modal-box"}"><label for="${"my-modal-7"}" class="${"btn btn-sm btn-circle absolute right-2 top-2"}">\u2715</label>
			<label for="${"habit-name"}" class="${"label"}"><span class="${"label-text"}">New Habit Name</span></label>
			<input id="${"habit-name"}" type="${"text"}" placeholder="${"Type here"}" class="${"input input-bordered input-primary w-full max-w-xs"}"${(0, import_index_dc9adc7d.f)("value", newHabitName, 0)}>
			<div class="${"modal-action"}"><button class="${"btn btn-primary modal-button"}">Create Habit</button></div></div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_profileStore();
  $$unsubscribe_habitStore();
  return $$rendered;
});
