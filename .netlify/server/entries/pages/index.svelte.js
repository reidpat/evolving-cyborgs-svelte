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
var import_index_d51717b2 = require("../../chunks/index-d51717b2.js");
var import_lib_236980de = require("../../chunks/lib-236980de.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_Add16_3d36ae4a = require("../../chunks/Add16-3d36ae4a.js");
var import_supabase_js = require("@supabase/supabase-js");
const Habits = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $habitStore, $$unsubscribe_habitStore;
  $$unsubscribe_user = (0, import_index_d51717b2.h)(import_lib_236980de.u, (value) => value);
  $$unsubscribe_habitStore = (0, import_index_d51717b2.h)(import_lib_236980de.h, (value) => $habitStore = value);
  (0, import_lib_236980de.c)();
  let habits = [];
  let open = false;
  let newHabitName = "";
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
    $$rendered = `<div class="${"content-container"}"><h1>Habits</h1>
	${habits ? `${(0, import_index_d51717b2.p)(habits, (habit) => {
      return `<div class="${"card"}"><h2>${(0, import_index_d51717b2.g)(habit.name)}</h2>
			${habit.is_complete ? `<span class="${"material-icons-outlined clickable"}">check_box
				</span>` : `<span class="${"material-icons-outlined clickable"}">check_box_outline_blank
				</span>`}
			<p>Streak: ${(0, import_index_d51717b2.g)(habit.streak)}</p>
			
			${habit.timeline && habit.timeline.length > 0 ? `<p>Goal: ${(0, import_index_d51717b2.g)(habit.goalProgress)}/${(0, import_index_d51717b2.g)(habit.goal)}</p>` : `${`<p>Never Completed</p>`}`}
		</div>`;
    })}` : ``}
	${``}
	${(0, import_index_d51717b2.v)(import_Add16_3d36ae4a.B, "Button").$$render($$result, {
      iconDescription: "New Habit",
      icon: import_Add16_3d36ae4a.A
    }, {}, {})}
	${(0, import_index_d51717b2.v)(import_Add16_3d36ae4a.M, "Modal").$$render($$result, {
      size: "xs",
      modalHeading: "New Habit Name",
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
        return `<input${(0, import_index_d51717b2.d)("value", newHabitName, 0)}>`;
      }
    })}
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_habitStore();
  return $$rendered;
});
const Routes = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_d51717b2.v)(Habits, "Habits").$$render($$result, {}, {}, {})}`;
});
