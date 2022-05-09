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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_df821055 = require("../../chunks/index-df821055.js");
var import_lib_9f96b971 = require("../../chunks/lib-9f96b971.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_ProgressBar_b583b79a = require("../../chunks/ProgressBar-b583b79a.js");
var import_supabase_js = require("@supabase/supabase-js");
var Habits_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-ztyz41.svelte-ztyz41{text-align:center}.add-button.svelte-ztyz41.svelte-ztyz41{margin-left:auto;display:flex;justify-content:center}.goal-info.svelte-ztyz41.svelte-ztyz41{margin:auto;text-align:center}.habit-upper.svelte-ztyz41.svelte-ztyz41{display:flex;justify-content:space-between}.checkbox.svelte-ztyz41 span.svelte-ztyz41{font-size:50px}",
  map: null
};
const Habits = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $habitStore, $$unsubscribe_habitStore;
  $$unsubscribe_user = (0, import_index_df821055.a)(import_lib_9f96b971.u, (value) => value);
  $$unsubscribe_habitStore = (0, import_index_df821055.a)(import_lib_9f96b971.h, (value) => $habitStore = value);
  (0, import_lib_9f96b971.c)();
  let habits = [];
  let newHabitName = "";
  $$result.css.add(css);
  {
    {
      if ($habitStore) {
        habits = [...$habitStore];
      }
    }
  }
  $$unsubscribe_user();
  $$unsubscribe_habitStore();
  return `<div class="${"content-container"}"><h1 class="${"svelte-ztyz41"}">Habits</h1>
	${habits ? `${(0, import_index_df821055.f)(habits, (habit) => {
    return `<div class="${"card bg-base-100 shadow-xl card-compact"}"><div class="${"card-body"}"><div class="${"habit-upper svelte-ztyz41"}"><div><h2 class="${"card-title"}">${(0, import_index_df821055.g)(habit.name)}</h2>

							<p>Streak: ${(0, import_index_df821055.g)(habit.streak)}</p></div>

						<div class="${"checkbox svelte-ztyz41"}">${habit.is_complete ? `<span class="${"material-symbols-outlined -translate-x-1/2 text-accent rounded-full svelte-ztyz41"}">check_circle
								</span>` : `<span class="${"material-symbols-outlined -translate-x-1/2 svelte-ztyz41"}">circle
								</span>`}
						</div></div>

					${(0, import_index_df821055.v)(import_ProgressBar_b583b79a.P, "ProgressBar").$$render($$result, {
      class: "progress progress-accent mt-2",
      value: habit.goalProgress,
      max: habit.goal
    }, {}, {})}
					<p class="${"goal-info svelte-ztyz41"}">Goal: ${(0, import_index_df821055.g)(habit.goalProgress)}/${(0, import_index_df821055.g)(habit.goal)}</p></div>
			</div>`;
  })}` : ``}
	<div class="${"add-button  svelte-ztyz41"}"><button class="${"btn btn-primary"}">Add New Habit</button></div>
	<div class="${["modal modal-bottom sm:modal-middle", ""].join(" ").trim()}"><div class="${"modal-box"}"><label for="${"my-modal-7"}" class="${"btn btn-sm btn-circle absolute right-2 top-2"}">\u2715</label>
			<label for="${"habit-name"}" class="${"label"}"><span class="${"label-text"}">New Habit Name</span></label>
			<input id="${"habit-name"}" type="${"text"}" placeholder="${"Type here"}" class="${"input input-bordered input-primary w-full max-w-xs"}"${(0, import_index_df821055.e)("value", newHabitName, 0)}>
			<div class="${"modal-action"}"><button class="${"btn btn-primary modal-button"}">Create Habit</button></div></div></div>
	
</div>`;
});
const Routes = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_df821055.v)(Habits, "Habits").$$render($$result, {}, {}, {})}`;
});
