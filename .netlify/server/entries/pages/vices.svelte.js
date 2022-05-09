var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var import_index_df821055 = require("../../chunks/index-df821055.js");
var import_lib_9f96b971 = require("../../chunks/lib-9f96b971.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_supabase_js = require("@supabase/supabase-js");
const ButtonSkeleton = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_df821055.r)($$props, ["href", "size", "small"]);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  let { small = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  return `
${href ? `<a${(0, import_index_df821055.t)([
    { href: (0, import_index_df821055.x)(href) },
    {
      rel: (0, import_index_df821055.x)($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    { role: "button" },
    (0, import_index_df821055.u)($$restProps)
  ], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" || small ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}>${(0, import_index_df821055.g)("")}</a>` : `<div${(0, import_index_df821055.t)([(0, import_index_df821055.u)($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" || small ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const Button = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let buttonProps;
  let $$restProps = (0, import_index_df821055.r)($$props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "hasIconOnly",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  let $$slots = (0, import_index_df821055.y)(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { hasIconOnly = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = (0, import_index_df821055.p)("ComposedModal");
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.hasIconOnly === void 0 && $$bindings.hasIconOnly && hasIconOnly !== void 0)
    $$bindings.hasIconOnly(hasIconOnly);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef(ref);
    }
  }
  hasIconOnly = icon && !$$slots.default;
  buttonProps = __spreadProps(__spreadValues({
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" ? isSelected : void 0
  }, $$restProps), {
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  });
  return `
${skeleton ? `${(0, import_index_df821055.v)(ButtonSkeleton, "ButtonSkeleton").$$render($$result, Object.assign({ href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `
  <a${(0, import_index_df821055.t)([(0, import_index_df821055.u)(buttonProps)], {})}${(0, import_index_df821055.e)("this", ref, 0)}>${hasIconOnly ? `<span${(0, import_index_df821055.w)("bx--assistive-text".trim())}>${(0, import_index_df821055.g)(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${(0, import_index_df821055.v)(icon || import_index_df821055.m, "svelte:component").$$render($$result, {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  }, {}, {})}</a>` : `<button${(0, import_index_df821055.t)([(0, import_index_df821055.u)(buttonProps)], {})}${(0, import_index_df821055.e)("this", ref, 0)}>${hasIconOnly ? `<span${(0, import_index_df821055.w)("bx--assistive-text".trim())}>${(0, import_index_df821055.g)(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${(0, import_index_df821055.v)(icon || import_index_df821055.m, "svelte:component").$$render($$result, {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  }, {}, {})}</button>`}`}`}`;
});
const Close20 = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_df821055.t)([
    { "data-carbon-icon": "Close20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_df821055.x)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_df821055.x)(style) },
    { id: (0, import_index_df821055.x)(id) },
    (0, import_index_df821055.u)(attributes)
  ], {})}><path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_df821055.g)(title)}</title>` : ``}
  `}</svg>`;
});
const Modal = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let modalLabelId;
  let modalHeadingId;
  let modalBodyId;
  let ariaLabel;
  let $$restProps = (0, import_index_df821055.r)($$props, [
    "size",
    "open",
    "danger",
    "alert",
    "passiveModal",
    "modalHeading",
    "modalLabel",
    "modalAriaLabel",
    "iconDescription",
    "hasForm",
    "hasScrollingContent",
    "primaryButtonText",
    "primaryButtonDisabled",
    "primaryButtonIcon",
    "shouldSubmitOnEnter",
    "secondaryButtonText",
    "secondaryButtons",
    "selectorPrimaryFocus",
    "preventCloseOnClickOutside",
    "id",
    "ref"
  ]);
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { danger = false } = $$props;
  let { alert = false } = $$props;
  let { passiveModal = false } = $$props;
  let { modalHeading = void 0 } = $$props;
  let { modalLabel = void 0 } = $$props;
  let { modalAriaLabel = void 0 } = $$props;
  let { iconDescription = "Close the modal" } = $$props;
  let { hasForm = false } = $$props;
  let { hasScrollingContent = false } = $$props;
  let { primaryButtonText = "" } = $$props;
  let { primaryButtonDisabled = false } = $$props;
  let { primaryButtonIcon = void 0 } = $$props;
  let { shouldSubmitOnEnter = true } = $$props;
  let { secondaryButtonText = "" } = $$props;
  let { secondaryButtons = [] } = $$props;
  let { selectorPrimaryFocus = "[data-modal-primary-focus]" } = $$props;
  let { preventCloseOnClickOutside = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  (0, import_index_df821055.q)();
  let buttonRef = null;
  let innerModal = null;
  let alertDialogProps = {};
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  if ($$props.passiveModal === void 0 && $$bindings.passiveModal && passiveModal !== void 0)
    $$bindings.passiveModal(passiveModal);
  if ($$props.modalHeading === void 0 && $$bindings.modalHeading && modalHeading !== void 0)
    $$bindings.modalHeading(modalHeading);
  if ($$props.modalLabel === void 0 && $$bindings.modalLabel && modalLabel !== void 0)
    $$bindings.modalLabel(modalLabel);
  if ($$props.modalAriaLabel === void 0 && $$bindings.modalAriaLabel && modalAriaLabel !== void 0)
    $$bindings.modalAriaLabel(modalAriaLabel);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.hasForm === void 0 && $$bindings.hasForm && hasForm !== void 0)
    $$bindings.hasForm(hasForm);
  if ($$props.hasScrollingContent === void 0 && $$bindings.hasScrollingContent && hasScrollingContent !== void 0)
    $$bindings.hasScrollingContent(hasScrollingContent);
  if ($$props.primaryButtonText === void 0 && $$bindings.primaryButtonText && primaryButtonText !== void 0)
    $$bindings.primaryButtonText(primaryButtonText);
  if ($$props.primaryButtonDisabled === void 0 && $$bindings.primaryButtonDisabled && primaryButtonDisabled !== void 0)
    $$bindings.primaryButtonDisabled(primaryButtonDisabled);
  if ($$props.primaryButtonIcon === void 0 && $$bindings.primaryButtonIcon && primaryButtonIcon !== void 0)
    $$bindings.primaryButtonIcon(primaryButtonIcon);
  if ($$props.shouldSubmitOnEnter === void 0 && $$bindings.shouldSubmitOnEnter && shouldSubmitOnEnter !== void 0)
    $$bindings.shouldSubmitOnEnter(shouldSubmitOnEnter);
  if ($$props.secondaryButtonText === void 0 && $$bindings.secondaryButtonText && secondaryButtonText !== void 0)
    $$bindings.secondaryButtonText(secondaryButtonText);
  if ($$props.secondaryButtons === void 0 && $$bindings.secondaryButtons && secondaryButtons !== void 0)
    $$bindings.secondaryButtons(secondaryButtons);
  if ($$props.selectorPrimaryFocus === void 0 && $$bindings.selectorPrimaryFocus && selectorPrimaryFocus !== void 0)
    $$bindings.selectorPrimaryFocus(selectorPrimaryFocus);
  if ($$props.preventCloseOnClickOutside === void 0 && $$bindings.preventCloseOnClickOutside && preventCloseOnClickOutside !== void 0)
    $$bindings.preventCloseOnClickOutside(preventCloseOnClickOutside);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  modalLabelId = `bx--modal-header__label--modal-${id}`;
  modalHeadingId = `bx--modal-header__heading--modal-${id}`;
  modalBodyId = `bx--modal-body--${id}`;
  ariaLabel = modalLabel || $$props["aria-label"] || modalAriaLabel || modalHeading;
  {
    if (alert) {
      if (passiveModal) {
        alertDialogProps.role = "alert";
      }
      if (!passiveModal) {
        alertDialogProps.role = "alertdialog";
        alertDialogProps["aria-describedby"] = modalBodyId;
      }
    }
  }
  return `
<div${(0, import_index_df821055.t)([
    { role: "presentation" },
    { id: (0, import_index_df821055.x)(id) },
    (0, import_index_df821055.u)($$restProps)
  ], {
    classes: "bx--modal " + (!passiveModal ? "bx--modal-tall" : "") + " " + (open ? "is-visible" : "") + " " + (danger ? "bx--modal--danger" : "")
  })}${(0, import_index_df821055.e)("this", ref, 0)}><div${(0, import_index_df821055.t)([
    { role: "dialog" },
    { tabindex: "-1" },
    (0, import_index_df821055.u)(alertDialogProps),
    { "aria-modal": "true" },
    {
      "aria-label": (0, import_index_df821055.x)(ariaLabel)
    }
  ], {
    classes: "bx--modal-container " + (size === "xs" ? "bx--modal-container--xs" : "") + " " + (size === "sm" ? "bx--modal-container--sm" : "") + " " + (size === "lg" ? "bx--modal-container--lg" : "")
  })}${(0, import_index_df821055.e)("this", innerModal, 0)}><div${(0, import_index_df821055.w)("bx--modal-header".trim())}>${passiveModal ? `<button type="${"button"}"${(0, import_index_df821055.e)("aria-label", iconDescription, 0)}${(0, import_index_df821055.e)("title", iconDescription, 0)}${(0, import_index_df821055.w)("bx--modal-close".trim())}${(0, import_index_df821055.e)("this", buttonRef, 0)}>${(0, import_index_df821055.v)(Close20, "Close20").$$render($$result, {
    "aria-label": iconDescription,
    class: "bx--modal-close__icon"
  }, {}, {})}</button>` : ``}
      ${modalLabel ? `<h2${(0, import_index_df821055.e)("id", modalLabelId, 0)}${(0, import_index_df821055.w)("bx--modal-header__label".trim())}>${slots.label ? slots.label({}) : `${(0, import_index_df821055.g)(modalLabel)}`}</h2>` : ``}
      <h3${(0, import_index_df821055.e)("id", modalHeadingId, 0)}${(0, import_index_df821055.w)("bx--modal-header__heading".trim())}>${slots.heading ? slots.heading({}) : `${(0, import_index_df821055.g)(modalHeading)}`}</h3>
      ${!passiveModal ? `<button type="${"button"}"${(0, import_index_df821055.e)("aria-label", iconDescription, 0)}${(0, import_index_df821055.e)("title", iconDescription, 0)}${(0, import_index_df821055.w)("bx--modal-close".trim())}${(0, import_index_df821055.e)("this", buttonRef, 0)}>${(0, import_index_df821055.v)(Close20, "Close20").$$render($$result, {
    "aria-label": iconDescription,
    class: "bx--modal-close__icon"
  }, {}, {})}</button>` : ``}</div>
    <div${(0, import_index_df821055.e)("id", modalBodyId, 0)}${(0, import_index_df821055.e)("tabindex", hasScrollingContent ? "0" : void 0, 0)}${(0, import_index_df821055.e)("role", hasScrollingContent ? "region" : void 0, 0)}${(0, import_index_df821055.e)("aria-label", hasScrollingContent ? ariaLabel : void 0, 0)}${(0, import_index_df821055.e)("aria-labelledby", modalLabel ? modalLabelId : modalHeadingId, 0)}${(0, import_index_df821055.w)(("bx--modal-content " + (hasForm ? "bx--modal-content--with-form" : "") + " " + (hasScrollingContent ? "bx--modal-scroll-content" : "")).trim())}>${slots.default ? slots.default({}) : ``}</div>
    ${hasScrollingContent ? `<div${(0, import_index_df821055.w)("bx--modal-content--overflow-indicator".trim())}></div>` : ``}
    ${!passiveModal ? `<div${(0, import_index_df821055.w)(("bx--modal-footer " + (secondaryButtons.length === 2 ? "bx--modal-footer--three-button" : "")).trim())}>${secondaryButtons.length > 0 ? `${(0, import_index_df821055.f)(secondaryButtons, (button) => {
    return `${(0, import_index_df821055.v)(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
      default: () => {
        return `${(0, import_index_df821055.g)(button.text)}
            `;
      }
    })}`;
  })}` : `${secondaryButtonText ? `${(0, import_index_df821055.v)(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
    default: () => {
      return `${(0, import_index_df821055.g)(secondaryButtonText)}`;
    }
  })}` : ``}`}
        ${(0, import_index_df821055.v)(Button, "Button").$$render($$result, {
    kind: danger ? "danger" : "primary",
    disabled: primaryButtonDisabled,
    icon: primaryButtonIcon
  }, {}, {
    default: () => {
      return `${(0, import_index_df821055.g)(primaryButtonText)}`;
    }
  })}</div>` : ``}</div></div>`;
});
const Add16 = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
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
<svg${(0, import_index_df821055.t)([
    { "data-carbon-icon": "Add16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: (0, import_index_df821055.x)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_df821055.x)(style) },
    { id: (0, import_index_df821055.x)(id) },
    (0, import_index_df821055.u)(attributes)
  ], {})}><path d="${"M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_df821055.g)(title)}</title>` : ``}
  `}</svg>`;
});
var Add16$1 = Add16;
const en = {
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  meridiem: ["am", "pm"],
  suffix: ["st", "nd", "rd", "th"],
  todayBtn: "Today",
  clearBtn: "Clear",
  timeView: "Show time view",
  backToDate: "Back to calendar view"
};
var settings = {
  theme: "sdt-calendar-colors",
  mode: "auto",
  format: "yyyy-mm-dd",
  formatType: "standard",
  weekStart: 1,
  visible: false,
  inputClasses: null,
  todayBtnClasses: "sdt-action-btn sdt-today-btn",
  clearBtnClasses: "sdt-action-btn sdt-clear-btn",
  todayBtn: true,
  clearBtn: true,
  autoclose: true,
  i18n: en
};
const MODE_DECADE = 0;
const MODE_YEAR = 1;
const MODE_MONTH = 2;
function compute(currentDate, selectedDate, view, locale, weekStart) {
  if (view === MODE_DECADE) {
    const nextFrom2 = 11;
    const prevTo2 = 1;
    const todayMark2 = -1;
    const grid2 = [];
    let yearRow = [];
    let currYear = currentDate.getUTCFullYear() - currentDate.getUTCFullYear() % 10 - 1;
    for (let i = 0; i < 12; i++) {
      yearRow.push(currYear + i);
      if (yearRow.length === 4) {
        grid2.push(yearRow);
        yearRow = [];
      }
    }
    let selectionMark2 = null;
    if (!selectedDate) {
      selectedDate = new Date();
    }
    if (selectedDate.getUTCFullYear() >= currYear) {
      selectionMark2 = selectedDate.getUTCFullYear() % currYear;
    }
    return {
      grid: grid2,
      todayMark: todayMark2,
      nextFrom: nextFrom2,
      prevTo: prevTo2,
      selectionMark: selectionMark2
    };
  }
  if (view === MODE_YEAR) {
    let grid2 = [];
    let monthRow = [];
    let prevTo2 = 12;
    let nextFrom2 = 24;
    const ISO = currentDate.toISOString().split("T")[0].substring(0, 8);
    const dateNormalized = new Date(ISO + "01 00:00:00");
    const initYear = dateNormalized.getFullYear() - 1;
    dateNormalized.setFullYear(initYear);
    let todayMark2 = 0;
    for (let y2 = 0; y2 < 3; y2++) {
      for (let i = 0; i < 12; i++) {
        dateNormalized.setUTCMonth(i);
        monthRow.push(locale.monthsShort[i % 12]);
        if (monthRow.length === 4) {
          grid2.push(monthRow);
          monthRow = [];
        }
      }
      dateNormalized.setFullYear(dateNormalized.getFullYear() + 1);
    }
    let selectionMark2 = null;
    if (!selectedDate) {
      selectedDate = new Date();
    }
    if (selectedDate.getUTCFullYear() - initYear >= 0 && selectedDate.getUTCFullYear() - initYear <= 2) {
      selectionMark2 = selectedDate.getUTCMonth() + (selectedDate.getUTCFullYear() - initYear || 0) * 12;
    }
    return {
      grid: grid2,
      todayMark: todayMark2,
      nextFrom: nextFrom2,
      prevTo: prevTo2,
      selectionMark: selectionMark2
    };
  }
  let d = currentDate || new Date(), y = d.getUTCFullYear(), m = d.getUTCMonth();
  d.getUTCDate();
  d.getUTCHours();
  let today = new Date();
  let prevMonth = UTCDate(y, m - 1, 28, 0, 0, 0, 0), day = utils.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
  prevMonth.setUTCDate(day);
  prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - weekStart + 7) % 7);
  let nextMonth = new Date(prevMonth);
  nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
  let nextMonthValue = nextMonth.valueOf();
  let grid = [];
  let dayRow = [];
  let todayMark = -1;
  let selectionMark = null;
  let prevTo = 0;
  let nextFrom = 42;
  let inc = 0;
  while (prevMonth.valueOf() < nextMonthValue) {
    inc++;
    dayRow.push(new Date(prevMonth));
    if (prevMonth.getUTCFullYear() < y || prevMonth.getUTCFullYear() === y && prevMonth.getUTCMonth() < m) {
      prevTo = inc;
    } else if (nextFrom === 42 && (prevMonth.getUTCFullYear() > y || prevMonth.getUTCFullYear() === y && prevMonth.getUTCMonth() > m)) {
      nextFrom = inc - 1;
    }
    prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
    if (prevMonth.getUTCFullYear() === today.getUTCFullYear() && prevMonth.getUTCMonth() === today.getUTCMonth() && prevMonth.getUTCDate() === today.getUTCDate()) {
      todayMark = inc;
    }
    if (!selectionMark && selectedDate && prevMonth.getUTCFullYear() === selectedDate.getUTCFullYear() && prevMonth.getUTCMonth() === selectedDate.getUTCMonth() && prevMonth.getUTCDate() === selectedDate.getUTCDate()) {
      selectionMark = inc;
    }
    if (dayRow.length === 7) {
      grid.push(dayRow);
      dayRow = [];
    }
  }
  return { grid, todayMark, prevTo, nextFrom, selectionMark };
}
function moveGrid(newPos, view) {
  if (view === MODE_MONTH) {
    if (newPos < 0) {
      newPos = 42 + newPos;
    }
    return {
      x: newPos % 7,
      y: Math.floor(newPos / 7)
    };
  }
}
const utils = {
  isLeapYear: function(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  },
  getDaysInMonth: function(year, month) {
    return [31, utils.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }
};
function UTCDate() {
  return new Date(Date.UTC.apply(Date, arguments));
}
function parseDate(date, format, i18n, type) {
  if (date instanceof Date) {
    const dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 6e4);
    dateUTC.setMilliseconds(0);
    return dateUTC;
  }
  if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
    format = formatHelper.parseFormat("yyyy-mm-dd", type);
  } else if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
    format = formatHelper.parseFormat("yyyy-mm-dd hh:ii", type);
  } else if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
    format = formatHelper.parseFormat("yyyy-mm-dd hh:ii:ss", type);
  } else {
    format = formatHelper.parseFormat(format, type);
  }
  var parts = date && date.toString().match(formatHelper.nonpunctuation) || [], date = new Date(0, 0, 0, 0, 0, 0, 0), parsed = {}, setters_order = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P", "z", "Z"], setters_map = {
    hh: function(d, v) {
      return d.setUTCHours(v);
    },
    h: function(d, v) {
      return d.setUTCHours(v);
    },
    HH: function(d, v) {
      return d.setUTCHours(v === 12 ? 0 : v);
    },
    H: function(d, v) {
      return d.setUTCHours(v === 12 ? 0 : v);
    },
    ii: function(d, v) {
      return d.setUTCMinutes(v);
    },
    i: function(d, v) {
      return d.setUTCMinutes(v);
    },
    ss: function(d, v) {
      return d.setUTCSeconds(v);
    },
    s: function(d, v) {
      return d.setUTCSeconds(v);
    },
    yyyy: function(d, v) {
      return d.setUTCFullYear(v);
    },
    yy: function(d, v) {
      return d.setUTCFullYear(2e3 + v);
    },
    m: function(d, v) {
      v -= 1;
      while (v < 0)
        v += 12;
      v %= 12;
      d.setUTCMonth(v);
      while (d.getUTCMonth() !== v)
        if (isNaN(d.getUTCMonth()))
          return d;
        else
          d.setUTCDate(d.getUTCDate() - 1);
      return d;
    },
    d: function(d, v) {
      return d.setUTCDate(v);
    },
    p: function(d, v) {
      return d.setUTCHours(v === 1 ? d.getUTCHours() + 12 : d.getUTCHours());
    }
  }, val, part;
  setters_map["M"] = setters_map["MM"] = setters_map["mm"] = setters_map["m"];
  setters_map["dd"] = setters_map["d"];
  setters_map["P"] = setters_map["p"];
  date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getUTCHours(), date.getUTCMinutes(), date.getSeconds());
  if (parts.length === format.parts.length) {
    for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
      val = parseInt(parts[i], 10);
      part = format.parts[i];
      if (isNaN(val)) {
        switch (part) {
          case "MM":
            val = i18n.months.indexOf(parts[i]) + 1;
            break;
          case "M":
            val = i18n.monthsShort.indexOf(parts[i]) + 1;
            break;
          case "p":
          case "P":
            val = i18n.meridiem.indexOf(parts[i].toLowerCase());
            break;
        }
      }
      parsed[part] = val;
    }
    for (var i = 0, s; i < setters_order.length; i++) {
      s = setters_order[i];
      if (s in parsed && !isNaN(parsed[s]))
        setters_map[s](date, parsed[s]);
    }
  }
  return date;
}
function formatDate(date, format, i18n, type) {
  if (date === null) {
    return "";
  }
  var val;
  if (type === "standard") {
    val = {
      t: date.getTime(),
      yy: date.getUTCFullYear().toString().substring(2),
      yyyy: date.getUTCFullYear(),
      m: date.getUTCMonth() + 1,
      M: i18n.monthsShort[date.getUTCMonth()],
      MM: i18n.months[date.getUTCMonth()],
      d: date.getUTCDate(),
      D: i18n.daysShort[date.getUTCDay()],
      DD: i18n.days[date.getUTCDay()],
      p: i18n.meridiem.length === 2 ? i18n.meridiem[date.getUTCHours() < 12 ? 0 : 1] : "",
      h: date.getUTCHours(),
      i: date.getUTCMinutes(),
      s: date.getUTCSeconds(),
      z: date.toLocaleDateString(void 0, { day: "2-digit", timeZoneName: "long" }).substring(4)
    };
    if (i18n.meridiem.length === 2) {
      val.H = val.h % 12 === 0 ? 12 : val.h % 12;
    } else {
      val.H = val.h;
    }
    val.HH = (val.H < 10 ? "0" : "") + val.H;
    val.P = val.p.toUpperCase();
    val.Z = val.z;
    val.hh = (val.h < 10 ? "0" : "") + val.h;
    val.ii = (val.i < 10 ? "0" : "") + val.i;
    val.ss = (val.s < 10 ? "0" : "") + val.s;
    val.dd = (val.d < 10 ? "0" : "") + val.d;
    val.mm = (val.m < 10 ? "0" : "") + val.m;
  } else if (type === "php") {
    val = {
      y: date.getUTCFullYear().toString().substring(2),
      Y: date.getUTCFullYear(),
      F: i18n.months[date.getUTCMonth()],
      M: i18n.monthsShort[date.getUTCMonth()],
      n: date.getUTCMonth() + 1,
      t: utils.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
      j: date.getUTCDate(),
      l: i18n.days[date.getUTCDay()],
      D: i18n.daysShort[date.getUTCDay()],
      w: date.getUTCDay(),
      N: date.getUTCDay() === 0 ? 7 : date.getUTCDay(),
      S: date.getUTCDate() % 10 <= i18n.suffix.length ? i18n.suffix[date.getUTCDate() % 10 - 1] : "",
      a: i18n.meridiem.length === 2 ? i18n.meridiem[date.getUTCHours() < 12 ? 0 : 1] : "",
      g: date.getUTCHours() % 12 === 0 ? 12 : date.getUTCHours() % 12,
      G: date.getUTCHours(),
      i: date.getUTCMinutes(),
      s: date.getUTCSeconds()
    };
    val.m = (val.n < 10 ? "0" : "") + val.n;
    val.d = (val.j < 10 ? "0" : "") + val.j;
    val.A = val.a.toString().toUpperCase();
    val.h = (val.g < 10 ? "0" : "") + val.g;
    val.H = (val.G < 10 ? "0" : "") + val.G;
    val.i = (val.i < 10 ? "0" : "") + val.i;
    val.s = (val.s < 10 ? "0" : "") + val.s;
  } else {
    throw new Error("Invalid format type.");
  }
  let dateArr = [];
  format = formatHelper.parseFormat(format, type);
  for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
    if (format.separators.length) {
      dateArr.push(format.separators.shift());
    }
    dateArr.push(val[format.parts[i]]);
  }
  if (format.separators.length) {
    dateArr.push(format.separators.shift());
  }
  return dateArr.join("");
}
const formatHelper = {
  validParts: function(type) {
    if (type === "standard") {
      return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
    } else if (type === "php") {
      return /[dDjlNwzFmMnStyYaABgGhHis]/g;
    } else {
      throw new Error("Invalid format type.");
    }
  },
  nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
  parseFormat: function(format, type) {
    var separators = format.replace(this.validParts(type), "\0").split("\0"), parts = format.match(this.validParts(type));
    if (!separators || !separators.length || !parts || parts.length === 0) {
      throw new Error("Invalid date format.");
    }
    return { separators, parts };
  }
};
function usePosition(el, { inputEl, visible, inputRect }) {
  if (!visible) {
    const calRect = el.getBoundingClientRect();
    const style = ["position: absolute", "z-index: 12250"];
    style.push(inputRect.x + calRect.width > window.innerWidth ? `right: 1rem` : `left: ${inputRect.left}px`);
    if (calRect.height + calRect.top > window.innerHeight + window.scrollY) {
      style.push(`bottom: 1rem`);
    } else {
      style.push(`top: ${inputRect.top + inputRect.height + window.scrollY}px`);
    }
    el.style = style.join(";");
    el.hidden = false;
    document.body.appendChild(el);
  }
  el.hidden = false;
  function destroy() {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
  return {
    destroy
  };
}
var Calendar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".sdt-cal-td.svelte-1xp8yha.svelte-1xp8yha{padding:0;font-size:90%;text-align:center;background-color:var(--sdt-bg-main);;}.sdt-cal-th.svelte-1xp8yha.svelte-1xp8yha{height:24px}.sdt-calendar.svelte-1xp8yha.svelte-1xp8yha{height:221px;overflow:hidden}.sdt-calendar.is-grid.svelte-1xp8yha.svelte-1xp8yha{display:grid}.sdt-calendar.is-grid.svelte-1xp8yha .sdt-table.svelte-1xp8yha{grid-column:1/2;grid-row:1/2\r\n  }.sdt-table.svelte-1xp8yha.svelte-1xp8yha{width:100%;border-collapse:collapse}.sdt-table-height.svelte-1xp8yha.svelte-1xp8yha{height:222px}.animate-transition.svelte-1xp8yha.svelte-1xp8yha{will-change:transform;transition:transform 0.3s ease\r\n  }.not-current.svelte-1xp8yha.svelte-1xp8yha{opacity:0.3}.not-current.svelte-1xp8yha.svelte-1xp8yha:hover{opacity:0.55}.std-btn.svelte-1xp8yha.svelte-1xp8yha{margin:0;border:0;background:transparent;text-align:center;width:100%;border-radius:4px;cursor:pointer;padding:0.3rem;box-sizing:border-box;color:var(--sdt-color)}.sdt-btn-day.svelte-1xp8yha.svelte-1xp8yha{max-height:32px}.std-btn[disabled].svelte-1xp8yha.svelte-1xp8yha{cursor:not-allowed;opacity:0.35}.std-btn-header.svelte-1xp8yha.svelte-1xp8yha{width:auto;font-weight:bold;padding:0.375rem 0.5rem}.std-btn-header.icon-btn.svelte-1xp8yha.svelte-1xp8yha:first-of-type{padding-left:0.375rem;padding-right:0.375rem}.std-btn-header.icon-btn.svelte-1xp8yha.svelte-1xp8yha{padding-left:0.25rem;padding-right:0.25rem}.std-btn.svelte-1xp8yha.svelte-1xp8yha:hover{background-color:var(--sdt-btn-bg-hover)}.is-selected.svelte-1xp8yha .std-btn.svelte-1xp8yha{background-color:var(--sdt-primary);color:var(--sdt-color-selected, var(--sdt-bg-main));opacity:0.9}.std-btn-header.svelte-1xp8yha.svelte-1xp8yha:hover{background-color:var(--sdt-btn-header-bg-hover)}.sdt-time-icon.svelte-1xp8yha.svelte-1xp8yha{margin-right:-4px}.sdt-time-icon.svelte-1xp8yha svg.svelte-1xp8yha{margin:4px 0}.sdt-tbody-lg.svelte-1xp8yha.svelte-1xp8yha{background-color:var(--sdt-bg-main)}.sdt-tbody-lg.svelte-1xp8yha .std-btn.svelte-1xp8yha{height:72px}.sdt-thead-nav.svelte-1xp8yha.svelte-1xp8yha{display:flex;margin-bottom:0.25rem}.sdt-nav-btns.svelte-1xp8yha.svelte-1xp8yha{white-space:nowrap}.sdt-toggle-btn.svelte-1xp8yha.svelte-1xp8yha{width:100%;text-align:left}.sdt-today.svelte-1xp8yha.svelte-1xp8yha:before{box-sizing:border-box;position:absolute;content:'';margin-left:4px;margin-top:4px;border-left:4px solid var(--sdt-shadow);border-top:4px solid var(--sdt-shadow);border-bottom:4px solid transparent;border-right:4px solid transparent;border-radius:2px;height:4px;z-index:2}.sdt-svg.svelte-1xp8yha.svelte-1xp8yha{fill:var(--sdt-color)}.sdt-today.svelte-1xp8yha.svelte-1xp8yha:hover:before{border-left-color:var(--sdt-primary);border-top-color:var(--sdt-primary)}.is-selected.sdt-today.svelte-1xp8yha.svelte-1xp8yha:before{border-left-color:#eee;border-top-color:#eee}",
  map: null
};
const TRANSFORM_CONST = 222;
const Calendar = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let dataset;
  let dayLabels;
  let tableCaption;
  let { date = null } = $$props;
  let { startDate = null } = $$props;
  let { endDate = null } = $$props;
  let { weekStart = 1 } = $$props;
  let { i18n } = $$props;
  let { enableTimeToggle = false } = $$props;
  function handleGridNav(key, shiftKey) {
    if (!internalDate) {
      onClick(new Date());
      return;
    }
    let pos;
    switch (key) {
      case "PageDown":
        shiftKey = true;
      case "ArrowDown":
        if (shiftKey)
          return handleShiftNav(activeDate.getUTCFullYear(), activeDate.getMonth() + 1, 1);
        pos = moveGrid(dataset.selectionMark + 7, currentView);
        if (pos.y > 5) {
          const tmpDate = new Date(activeDate.getUTCFullYear(), activeDate.getMonth() + 1, activeDate.getDate());
          let tmpData = compute(tmpDate, internalDate, currentView, i18n, weekStart);
          if (tmpData.grid[0][pos.x].getUTCMonth() < internalDate.getUTCMonth()) {
            tmpDate.setMonth(tmpDate.getMonth() + 1);
            tmpData = compute(tmpDate, internalDate, currentView, i18n, weekStart);
          }
          pos.y = tmpData.grid[0][pos.x].getUTCDate() === internalDate.getUTCDate() ? 1 : 0;
          onChangeMonth(1);
          onClick(tmpData.grid[pos.y][pos.x]);
          return;
        }
        if (dataset.grid[pos.y][pos.x].getUTCMonth() !== activeDate.getUTCMonth()) {
          onChangeMonth(1);
        }
        onClick(dataset.grid[pos.y][pos.x]);
        break;
      case "PageUp":
        shiftKey = true;
      case "ArrowUp":
        if (shiftKey)
          return handleShiftNav(activeDate.getUTCFullYear(), activeDate.getMonth() - 1, -1);
        pos = moveGrid(dataset.selectionMark - 7, currentView);
        if (pos.y === 5) {
          const tmpDate = new Date(activeDate.getUTCFullYear(), activeDate.getMonth() > 0 ? activeDate.getMonth() : 11, 1);
          const tmpData = compute(tmpDate, internalDate, currentView, i18n, weekStart);
          pos.y = tmpData.grid[5][pos.x].getUTCDate() === internalDate.getUTCDate() ? 4 : tmpData.grid[5][pos.x].getUTCMonth() === internalDate.getUTCMonth() ? 3 : 5;
          onChangeMonth(-1);
          onClick(tmpData.grid[pos.y][pos.x]);
          return;
        }
        if (dataset.grid[pos.y][pos.x].getUTCMonth() !== activeDate.getUTCMonth()) {
          onChangeMonth(-1);
        }
        onClick(dataset.grid[pos.y][pos.x]);
        break;
      case "ArrowLeft":
        if (shiftKey)
          return handleShiftNav(activeDate.getUTCFullYear() - 1, activeDate.getMonth(), 1);
        pos = moveGrid(dataset.selectionMark - 1, currentView);
        if (dataset.grid[pos.y][pos.x].getUTCMonth() !== activeDate.getUTCMonth()) {
          onChangeMonth(-1);
        }
        onClick(dataset.grid[pos.y][pos.x]);
        break;
      case "ArrowRight":
        if (shiftKey)
          return handleShiftNav(activeDate.getUTCFullYear() + 1, activeDate.getMonth(), 1);
        pos = moveGrid(dataset.selectionMark + 1, currentView);
        if (dataset.grid[pos.y][pos.x].getUTCMonth() !== activeDate.getUTCMonth()) {
          onChangeMonth(1);
        }
        onClick(dataset.grid[pos.y][pos.x]);
        break;
    }
  }
  function handleShiftNav(year, month, monthChange) {
    const tzOffset = activeDate.getTimezoneOffset() >= 0 ? 0 : 1;
    const tmpDate = new Date(year, month, activeDate.getUTCDate() + tzOffset);
    const tmpData = compute(tmpDate, tmpDate, currentView, i18n, weekStart);
    onChangeMonth(monthChange);
    onClick(tmpData.grid[Math.floor(tmpData.selectionMark / 7)][tmpData.selectionMark % 7]);
  }
  let internalDate = date;
  let activeDate = date ? new Date(date.valueOf()) : new Date();
  const dispatch = (0, import_index_df821055.q)();
  let currentView = MODE_MONTH;
  let viewChanged = false;
  let transform = TRANSFORM_CONST;
  let onMonthTransitionTrigger = null;
  function isBetween(num) {
    return dataset.prevTo <= num && num < dataset.nextFrom;
  }
  function isDisabledDate(date2) {
    if (startDate && startDate > date2)
      return true;
    if (endDate && endDate <= date2)
      return true;
    return false;
  }
  function onChangeMonth(val) {
    const multiplier = currentView === MODE_DECADE ? 120 : currentView === MODE_YEAR ? 12 : 1;
    activeDate.setUTCMonth(activeDate.getUTCMonth() + val * multiplier);
    activeDate = activeDate;
    onMonthTransitionTrigger = null;
    transform = 222;
  }
  function onClick(value) {
    viewChanged = true;
    switch (currentView) {
      case 0:
        activeDate.setYear(value);
        activeDate = activeDate;
        break;
      case 1:
        activeDate.setUTCMonth(i18n.monthsShort.indexOf(value));
        activeDate = activeDate;
        break;
      case 2:
        const newInternalDate = UTCDate(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
        if (internalDate) {
          newInternalDate.setMinutes(internalDate.getMinutes());
          newInternalDate.setUTCHours(internalDate.getUTCHours());
        }
        internalDate = newInternalDate;
        dispatch("date", internalDate);
        break;
    }
    currentView < MODE_MONTH && currentView++;
  }
  function showCaption() {
    switch (currentView) {
      case 0:
        return `${dataset.grid[0][1]} - ${dataset.grid[2][2]}`;
      case 1:
        return activeDate.getUTCFullYear();
      case 2:
        return i18n.months[activeDate.getUTCMonth()] + " " + activeDate.getUTCFullYear();
    }
  }
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.startDate === void 0 && $$bindings.startDate && startDate !== void 0)
    $$bindings.startDate(startDate);
  if ($$props.endDate === void 0 && $$bindings.endDate && endDate !== void 0)
    $$bindings.endDate(endDate);
  if ($$props.weekStart === void 0 && $$bindings.weekStart && weekStart !== void 0)
    $$bindings.weekStart(weekStart);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.enableTimeToggle === void 0 && $$bindings.enableTimeToggle && enableTimeToggle !== void 0)
    $$bindings.enableTimeToggle(enableTimeToggle);
  if ($$props.handleGridNav === void 0 && $$bindings.handleGridNav && handleGridNav !== void 0)
    $$bindings.handleGridNav(handleGridNav);
  $$result.css.add(css$3);
  {
    {
      if (startDate) {
        startDate.setUTCDate(startDate.getUTCDate() - 1);
      }
    }
  }
  {
    {
      if (date !== internalDate) {
        internalDate = date;
        if (date) {
          activeDate = new Date(date.valueOf());
        }
        viewChanged = true;
        currentView = MODE_MONTH;
      }
    }
  }
  dataset = compute(activeDate, internalDate, currentView, i18n, weekStart);
  dayLabels = weekStart > -1 ? i18n.daysMin.concat(i18n.daysMin).slice(weekStart, 7 + weekStart) : i18n.daysMin.slice(weekStart, 7 + weekStart);
  tableCaption = showCaption();
  return `<div class="${"sdt-thead-nav svelte-1xp8yha"}"><button class="${"std-btn std-btn-header sdt-toggle-btn svelte-1xp8yha"}">${(0, import_index_df821055.g)(tableCaption)}</button>
  <div class="${"sdt-nav-btns svelte-1xp8yha"}">${enableTimeToggle && internalDate ? `<button class="${"std-btn std-btn-header icon-btn sdt-time-icon svelte-1xp8yha"}"${(0, import_index_df821055.e)("title", i18n.timeView, 0)}><svg class="${"sdt-svg svelte-1xp8yha"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"16"}" height="${"16"}"><path fill-rule="${"evenodd"}" d="${"M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"}"></path></svg></button>` : ``}
    <button class="${"std-btn std-btn-header icon-btn svelte-1xp8yha"}"><svg class="${"sdt-svg svelte-1xp8yha"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"24"}" height="${"24"}"><path d="${"M4.427 9.573l3.396-3.396a.25.25 0 01.354 0l3.396 3.396a.25.25 0 01-.177.427H4.604a.25.25 0 01-.177-.427z"}"></path></svg></button>
    <button class="${"std-btn std-btn-header icon-btn svelte-1xp8yha"}"><svg class="${"sdt-svg svelte-1xp8yha"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"24"}" height="${"24"}"><path d="${"M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"}"></path></svg></button></div></div>
<div class="${["sdt-calendar svelte-1xp8yha", viewChanged ? "is-grid" : ""].join(" ").trim()}">${currentView === MODE_DECADE ? `<table class="${"sdt-table svelte-1xp8yha"}" style="${"max-height: 221px; height: 221px"}"><tbody class="${"sdt-tbody-lg svelte-1xp8yha"}">${(0, import_index_df821055.f)(dataset.grid, (row, i) => {
    return `<tr>${(0, import_index_df821055.f)(row, (year, j) => {
      return `<td class="${[
        "svelte-1xp8yha",
        i * 4 + j === dataset.selectionMark ? "is-selected" : ""
      ].join(" ").trim()}"><button class="${["std-btn svelte-1xp8yha", !isBetween(i * 4 + j) ? "not-current" : ""].join(" ").trim()}">${(0, import_index_df821055.g)(year)}</button>
        </td>`;
    })}
      </tr>`;
  })}</tbody></table>` : ``}
  ${currentView === MODE_YEAR ? `<table class="${"sdt-table svelte-1xp8yha"}"><tbody class="${[
    "sdt-tbody-lg svelte-1xp8yha",
    (onMonthTransitionTrigger ? true : false) ? "animate-transition" : ""
  ].join(" ").trim()}"${(0, import_index_df821055.e)("style", `transform: translateY(-${transform}px)`, 0)}>${(0, import_index_df821055.f)(dataset.grid, (row, i) => {
    return `<tr>${(0, import_index_df821055.f)(row, (month, j) => {
      return `<td class="${[
        "svelte-1xp8yha",
        i * 4 + j === dataset.selectionMark ? "is-selected" : ""
      ].join(" ").trim()}"><button class="${["std-btn svelte-1xp8yha", !isBetween(i * 4 + j) ? "not-current" : ""].join(" ").trim()}">${(0, import_index_df821055.g)(month)}</button>
        </td>`;
    })}
      </tr>`;
  })}</tbody></table>` : ``}
  ${currentView === MODE_MONTH ? `<table class="${"sdt-table sdt-table-height svelte-1xp8yha"}"><tbody><tr class="${"sdt-cal-td svelte-1xp8yha"}">${(0, import_index_df821055.f)(dayLabels, (header) => {
    return `<th class="${"sdt-cal-th svelte-1xp8yha"}">${(0, import_index_df821055.g)(header)}</th>`;
  })}</tr>
      ${(0, import_index_df821055.f)(dataset.grid, (row, i) => {
    return `<tr>${(0, import_index_df821055.f)(row, (currDate, j) => {
      return `<td class="${[
        "sdt-cal-td svelte-1xp8yha",
        (i * 7 + j === dataset.todayMark ? "sdt-today" : "") + " " + (i * 7 + j === dataset.selectionMark ? "is-selected" : "")
      ].join(" ").trim()}"><button class="${[
        "std-btn sdt-btn-day svelte-1xp8yha",
        !isBetween(i * 7 + j) ? "not-current" : ""
      ].join(" ").trim()}" ${isDisabledDate(currDate) ? "disabled" : ""}>${(0, import_index_df821055.g)(currDate.getUTCDate())}</button>
        </td>`;
    })}
      </tr>`;
  })}</tbody></table>` : ``}
</div>`;
});
var Time_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".sdt-timer.svelte-yz95cb.svelte-yz95cb{position:relative;width:272px}.sdt-time-head.svelte-yz95cb.svelte-yz95cb{position:relative;display:flex;justify-content:center;align-items:center}.sdt-time-figure.svelte-yz95cb.svelte-yz95cb{font-size:1.5rem;font-weight:bold}.sdt-clock.svelte-yz95cb.svelte-yz95cb{margin:auto;position:relative;width:260px;height:260px;background-color:var(--sdt-clock-bg);border-radius:50%;transition:background-color 0.3s}.sdt-clock.is-minute-view.svelte-yz95cb.svelte-yz95cb{background-color:var(--sdt-clock-bg-minute, var(--sdt-clock-bg));box-shadow:var(--sdt-clock-bg-shadow)}.sdt-time-btn.svelte-yz95cb.svelte-yz95cb{border:0;background:transparent;text-align:center;border-radius:4px;cursor:pointer;padding:0.375rem;color:var(--sdt-color)}.sdt-svg.svelte-yz95cb.svelte-yz95cb{fill:var(--sdt-color)}.sdt-time-btn.svelte-yz95cb.svelte-yz95cb:not(.is-active){opacity:0.5}.sdt-time-btn.svelte-yz95cb.svelte-yz95cb:hover{background-color:var(--sdt-btn-header-bg-hover)}.sdt-back-btn.svelte-yz95cb.svelte-yz95cb{position:absolute;top:0;left:0;opacity:1 !important}.sdt-meridian.svelte-yz95cb.svelte-yz95cb{position:absolute;top:0.25rem;right:0.25rem;display:flex;flex-flow:column;font-size:90%}.sdt-meridian.svelte-yz95cb .sdt-time-btn.svelte-yz95cb{padding:0.15rem 0.5rem}.sdt-meridian.svelte-yz95cb .sdt-time-btn.is-active.svelte-yz95cb{font-weight:bold}.sdt-middle-dot.svelte-yz95cb.svelte-yz95cb{left:50%;top:50%;width:6px;height:6px;position:absolute;transform:translate(-50%, -50%);background-color:var(--sdt-primary);border-radius:50%}.sdt-hand-pointer.svelte-yz95cb.svelte-yz95cb{width:2px;height:calc(40% + 1px);bottom:50%;left:calc(50% - 1px);position:absolute;background-color:var(--sdt-primary);transform-origin:center bottom 0;transition:transform 0.3s ease, height 0.15s ease}.sdt-hand-circle.svelte-yz95cb.svelte-yz95cb{left:-15px;top:-21px;position:relative;width:4px;height:4px;background-color:transparent;border:14px solid var(--sdt-primary);border-radius:50%;box-sizing:content-box}.sdt-tick.svelte-yz95cb.svelte-yz95cb{position:absolute;width:30px;height:30px;border-width:0;transform:translate(-50%, -50%);text-align:center;border-radius:50%;line-height:20px;cursor:pointer;background-color:transparent}.sdt-tick.is-selected.svelte-yz95cb.svelte-yz95cb{animation:svelte-yz95cb-tick-selection 0s 0.175s ease-out forwards}@keyframes svelte-yz95cb-tick-selection{0%{color:initial;background-color:transparent}100%{background-color:var(--sdt-primary);color:var(--sdt-color-selected, var(--sdt-bg-main))}}",
  map: null
};
const Time = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let selectedHour;
  let isPM;
  let selectedMinutes;
  let handCss;
  let multiplier;
  let pos;
  let innerHours;
  let { date = null } = $$props;
  let { showMeridian = false } = $$props;
  let { hasDateComponent = false } = $$props;
  let { i18n } = $$props;
  function minuteSwitch(val) {
    if (val === void 0)
      return isMinuteView;
    isMinuteView = val;
  }
  function makeTick(val) {
    if (isMinuteView) {
      val = val * 5 + selectedMinutes;
      if (val % 5 !== 0) {
        val = val < selectedMinutes ? val + (5 - val % 5) : val - val % 5;
      }
    } else {
      val = selectedHour + val;
    }
    onClick({
      meridianSwitch: !isMinuteView,
      target: {
        tagName: "BUTTON",
        dataset: { value: val }
      }
    });
  }
  let clockEl;
  let isMinuteView = false;
  let handleMoveMove = false;
  let innerDate = date || UTCDate(0, 0, 0, 0, 0, 0);
  if (!date) {
    date = innerDate;
  }
  let canSelect = true;
  const dispatch = (0, import_index_df821055.q)();
  function positions(size, offset, valueForZero, minuteView, hourAdded) {
    const r = size / 2;
    offset = offset || r;
    const coeff = [0, 1 - 0.5, 1 - 0.134, 1, 1 - 0.134, 1 - 0.5];
    const xCoeff = coeff.concat(coeff);
    const yCoeff = coeff.slice(3).concat(coeff).concat(coeff.slice(0, 3));
    const pos2 = [];
    for (let i = 0; i < 12; i++) {
      pos2.push({
        x: Math.abs(xCoeff[i] * r + (i <= 6 ? 1 : -1) * offset),
        y: Math.abs(yCoeff[i] * r + (i >= 9 || i < 3 ? -1 : 1) * offset),
        val: minuteView ? i * 5 || valueForZero : i ? i + hourAdded : valueForZero
      });
    }
    return pos2;
  }
  function view(value, asMeridian) {
    if (asMeridian) {
      if (isPM && value === 12)
        return 12;
      return value < 10 || value % 12 < 10 ? `0${value % 12}` : value % 12;
    }
    return value < 10 ? `0${value}` : value;
  }
  function isSelected(selected, val, i) {
    if (isMinuteView) {
      return val === selected || i === 0 && i === selected;
    } else {
      if (showMeridian) {
        if (isPM && val == 12 && selected === 12)
          return true;
        if (!isPM && val == 12 && selected === 0)
          return true;
        return val === (selected ? selected % 12 : 12);
      } else if (val > 12) {
        return (i ? multiplier * i + 12 : 0) === selected;
      } else {
        return val === "00" || val === "12" ? selected === 12 && val == 12 || val === "00" && selected === 0 : val === selected;
      }
    }
  }
  function onClick(e) {
    if (!canSelect)
      return;
    if (e.type === "mousemove" && !handleMoveMove || !isMinuteView && e.target.tagName !== "BUTTON")
      return;
    if (e.target.tagName === "BUTTON") {
      let val = parseInt(e.target.dataset.value);
      const setter = e.meridianSwitch || !isMinuteView ? "setUTCHours" : "setUTCMinutes";
      innerDate[setter](val);
    } else if (isMinuteView) {
      const rect = clockEl.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      const cntX = 130, cntY = 130;
      let quadrant = null;
      let a, b;
      if (clientX > cntX) {
        quadrant = clientY > cntY ? 2 : 1;
      } else {
        quadrant = clientY > cntY ? 3 : 4;
      }
      switch (quadrant) {
        case 1:
          a = clientX - cntX;
          b = cntY - clientY;
          break;
        case 2:
          a = clientX - cntX;
          b = clientY - cntY;
          break;
        case 3:
          a = cntX - clientX;
          b = clientY - cntY;
          break;
        case 4:
          a = cntX - clientX;
          b = cntY - clientY;
          break;
      }
      const c = Math.sqrt(a * a + b * b);
      const beta = 90 - Math.asin(a / c) * (180 / Math.PI);
      let degree;
      switch (quadrant) {
        case 1:
          degree = 90 - beta;
          break;
        case 2:
          degree = beta + 90;
          break;
        case 3:
          degree = 270 - beta;
          break;
        case 4:
          degree = beta + 270;
          break;
      }
      degree = Math.floor(degree / 6);
      innerDate.setMinutes(degree);
    }
    innerDate = innerDate;
    canSelect = false;
    dispatch("time", innerDate);
    if (!e.meridianSwitch && !handleMoveMove && isMinuteView)
      setTimeout(() => {
        dispatch("close");
      }, 300);
    if (!e.meridianSwitch && !isMinuteView)
      isMinuteView = true;
    setTimeout(() => {
      canSelect = true;
    }, 200);
  }
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.showMeridian === void 0 && $$bindings.showMeridian && showMeridian !== void 0)
    $$bindings.showMeridian(showMeridian);
  if ($$props.hasDateComponent === void 0 && $$bindings.hasDateComponent && hasDateComponent !== void 0)
    $$bindings.hasDateComponent(hasDateComponent);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.minuteSwitch === void 0 && $$bindings.minuteSwitch && minuteSwitch !== void 0)
    $$bindings.minuteSwitch(minuteSwitch);
  if ($$props.makeTick === void 0 && $$bindings.makeTick && makeTick !== void 0)
    $$bindings.makeTick(makeTick);
  $$result.css.add(css$2);
  {
    {
      if (date !== innerDate) {
        innerDate = date;
      }
    }
  }
  selectedHour = innerDate ? innerDate.getUTCHours() : 0;
  isPM = showMeridian ? selectedHour >= 12 : false;
  selectedMinutes = innerDate ? innerDate.getUTCMinutes() : 0;
  handCss = isMinuteView ? `transform: rotateZ(${selectedMinutes * 6}deg)` : showMeridian ? `transform: rotateZ(${selectedHour % 12 * 30}deg);` : `transform: rotateZ(${selectedHour % 12 * 30}deg); ${selectedHour > 12 || !selectedHour ? "height: calc(25% + 1px)" : ""}`;
  multiplier = isMinuteView ? 5 : 1;
  pos = positions(220, 130, isMinuteView ? "00" : "12", isMinuteView, 0);
  innerHours = positions(140, 130, "00", false, 12);
  {
    {
      dispatch("time-switch", isMinuteView);
    }
  }
  return `<div class="${"sdt-timer svelte-yz95cb"}"><div class="${"sdt-time-head svelte-yz95cb"}">${hasDateComponent ? `<button class="${"sdt-time-btn sdt-back-btn svelte-yz95cb"}"${(0, import_index_df821055.e)("title", i18n.backToDate, 0)}><svg class="${"sdt-svg svelte-yz95cb"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" width="${"20"}" height="${"20"}"><path fill-rule="${"evenodd"}" d="${"M6.75 0a.75.75 0 01.75.75V3h9V.75a.75.75 0 011.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 01-1.75 1.75H3.25a1.75 1.75 0 01-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 016.75 0zm-3.5 4.5a.25.25 0 00-.25.25V8h18V4.75a.25.25 0 00-.25-.25H3.25zM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25V9.5z"}"></path></svg></button>` : ``}
    <button class="${["sdt-time-btn sdt-time-figure svelte-yz95cb", !isMinuteView ? "is-active" : ""].join(" ").trim()}">${(0, import_index_df821055.g)(view(selectedHour, showMeridian))}</button>
    <span>:</span>
    <button class="${["sdt-time-btn sdt-time-figure svelte-yz95cb", isMinuteView ? "is-active" : ""].join(" ").trim()}">${(0, import_index_df821055.g)(view(selectedMinutes, false))}</button>
    ${showMeridian ? `<div class="${"sdt-meridian svelte-yz95cb"}"><button class="${["sdt-time-btn svelte-yz95cb", selectedHour < 12 ? "is-active" : ""].join(" ").trim()}"${(0, import_index_df821055.e)("data-value", selectedHour % 12, 0)}>AM</button>
      <button class="${["sdt-time-btn svelte-yz95cb", selectedHour >= 12 ? "is-active" : ""].join(" ").trim()}"${(0, import_index_df821055.e)("data-value", selectedHour % 12 + 12, 0)}>PM</button></div>` : ``}</div>
  <div class="${["sdt-clock svelte-yz95cb", isMinuteView ? "is-minute-view" : ""].join(" ").trim()}"${(0, import_index_df821055.e)("this", clockEl, 0)}><div class="${"sdt-middle-dot svelte-yz95cb"}"></div>
    <div class="${"sdt-hand-pointer svelte-yz95cb"}"${(0, import_index_df821055.e)("style", handCss, 0)}><div class="${"sdt-hand-circle svelte-yz95cb"}"></div></div>
    ${(0, import_index_df821055.f)(pos, (p, i) => {
    return `<button${(0, import_index_df821055.e)("style", `left:${p.x}px; top:${p.y}px`, 0)} class="${[
      "sdt-tick svelte-yz95cb",
      isSelected(isMinuteView ? selectedMinutes : selectedHour, p.val, i) ? "is-selected" : ""
    ].join(" ").trim()}"${(0, import_index_df821055.e)("data-value", p.val, 0)}>${(0, import_index_df821055.g)(p.val)}</button>`;
  })}
    ${!showMeridian && !isMinuteView ? `${(0, import_index_df821055.f)(innerHours, (p, i) => {
    return `<button${(0, import_index_df821055.e)("style", `left:${p.x}px; top:${p.y}px`, 0)} class="${[
      "sdt-tick svelte-yz95cb",
      isSelected(selectedHour, p.val, i) ? "is-selected" : ""
    ].join(" ").trim()}"${(0, import_index_df821055.e)("data-value", p.val, 0)}>${(0, import_index_df821055.g)(p.val)}</button>`;
  })}` : ``}</div>
</div>`;
});
var SveltyPicker_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".sdt-calendar-colors.svelte-tb6rom{--sdt-primary:#286090;--sdt-color:#000;--sdt-bg-main:#fff;--sdt-bg-today:var(--sdt-primary);--sdt-bg-clear:#dc3545;--sdt-today-bg:#1e486d;--sdt-clear-color:#dc3545;--sdt-btn-bg-hover:#eee;--sdt-btn-header-bg-hover:#dfdfdf;--sdt-clock-bg:#eeeded;--sdt-clock-bg-minute:rgb(238, 237, 237, 0.25);--sdt-clock-bg-shadow:0 0 128px 2px #ddd inset;--sdt-shadow:#ccc}.std-calendar-wrap.svelte-tb6rom{width:280px;background-color:var(--sdt-bg-main);box-shadow:0 1px 6px var(--sdt-shadow);border-radius:4px;padding:0.25rem 0.25rem 0.5rem;color:var(--sdt-color)}.std-calendar-wrap.is-popup.svelte-tb6rom{box-shadow:0 1px 6px var(--sdt-shadow)}.std-btn-row.svelte-tb6rom{margin-top:0.5rem;display:flex;justify-content:space-evenly}.sdt-action-btn.svelte-tb6rom{padding:0.25rem 0.5rem;font-size:.875rem;border-radius:0.2rem}.sdt-today-btn.svelte-tb6rom{background-color:var(--sdt-primary);color:var(--sdt-today-color, var(--sdt-bg-main));padding:0.25rem 0.5rem;font-size:.875rem;border-radius:0.2rem;border:1px solid var(--sdt-today-bg)}.sdt-today-btn[disabled].svelte-tb6rom{opacity:0.75}.sdt-today-btn.svelte-tb6rom:focus,.sdt-today-btn.svelte-tb6rom:active,.sdt-today-btn.svelte-tb6rom:hover:not([disabled]){background-color:var(--sdt-today-bg)}.sdt-clear-btn.svelte-tb6rom{border:1px solid var(--sdt-clear-color);background-color:transparent;color:var(--sdt-clear-color)}.sdt-clear-btn.svelte-tb6rom:focus,.sdt-clear-btn.svelte-tb6rom:active:not([disabled]),.sdt-clear-btn.svelte-tb6rom:hover:not([disabled]){background-color:var(--sdt-clear-color);color:var(--sdt-clear-hover-color, var(--sdt-bg-main))}",
  map: null
};
const config = settings;
const SveltyPicker = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "date" } = $$props;
  let { disabled = false } = $$props;
  let { placeholder = null } = $$props;
  let { required = false } = $$props;
  let { value = null } = $$props;
  let { initialDate = null } = $$props;
  let { startDate = null } = $$props;
  let { endDate = null } = $$props;
  let { pickerOnly = false } = $$props;
  let { theme = config.theme } = $$props;
  let { mode = config.mode } = $$props;
  let { format = config.format } = $$props;
  let { formatType = config.formatType } = $$props;
  let { weekStart = config.weekStart } = $$props;
  let { visible = config.visible } = $$props;
  let { inputClasses = config.inputClasses } = $$props;
  let { todayBtnClasses = config.todayBtnClasses } = $$props;
  let { clearBtnClasses = config.clearBtnClasses } = $$props;
  let { todayBtn = config.todayBtn } = $$props;
  let { clearBtn = config.clearBtn } = $$props;
  let { autoclose = config.autoclose } = $$props;
  let { i18n = config.i18n } = $$props;
  let { positionFn = usePosition } = $$props;
  let { validatorAction = null } = $$props;
  function setDateValue(val) {
    innerDate = parseDate(val, format, i18n, formatType);
  }
  if (format === "yyyy-mm-dd" && mode === "time") {
    format = "hh:ii";
  }
  (0, import_index_df821055.q)();
  if (value)
    value = value.substr(0, format.length);
  let prevValue = value;
  let currentFormat = format;
  let innerDate = initialDate && initialDate instanceof Date ? UTCDate(initialDate.getUTCFullYear(), initialDate.getUTCMonth(), initialDate.getUTCDate(), initialDate.getHours(), initialDate.getUTCMinutes()) : value ? parseDate(value, format, i18n, formatType) : null;
  if (innerDate && initialDate) {
    value = formatDate(innerDate, format, i18n, formatType);
  }
  let isFocused = pickerOnly;
  let inputEl = null;
  validatorAction ? validatorAction.shift() : () => {
  };
  let calendarEl = null;
  let timeEl;
  let resolvedMode = mode === "auto" ? format.match(/hh?|ii?/i) && format.match(/y|m|d/i) ? "datetime" : format.match(/hh?|ii?/i) ? "time" : "date" : mode;
  let currentMode = resolvedMode === "time" ? "time" : "date";
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.initialDate === void 0 && $$bindings.initialDate && initialDate !== void 0)
    $$bindings.initialDate(initialDate);
  if ($$props.startDate === void 0 && $$bindings.startDate && startDate !== void 0)
    $$bindings.startDate(startDate);
  if ($$props.endDate === void 0 && $$bindings.endDate && endDate !== void 0)
    $$bindings.endDate(endDate);
  if ($$props.pickerOnly === void 0 && $$bindings.pickerOnly && pickerOnly !== void 0)
    $$bindings.pickerOnly(pickerOnly);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.formatType === void 0 && $$bindings.formatType && formatType !== void 0)
    $$bindings.formatType(formatType);
  if ($$props.weekStart === void 0 && $$bindings.weekStart && weekStart !== void 0)
    $$bindings.weekStart(weekStart);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.inputClasses === void 0 && $$bindings.inputClasses && inputClasses !== void 0)
    $$bindings.inputClasses(inputClasses);
  if ($$props.todayBtnClasses === void 0 && $$bindings.todayBtnClasses && todayBtnClasses !== void 0)
    $$bindings.todayBtnClasses(todayBtnClasses);
  if ($$props.clearBtnClasses === void 0 && $$bindings.clearBtnClasses && clearBtnClasses !== void 0)
    $$bindings.clearBtnClasses(clearBtnClasses);
  if ($$props.todayBtn === void 0 && $$bindings.todayBtn && todayBtn !== void 0)
    $$bindings.todayBtn(todayBtn);
  if ($$props.clearBtn === void 0 && $$bindings.clearBtn && clearBtn !== void 0)
    $$bindings.clearBtn(clearBtn);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.positionFn === void 0 && $$bindings.positionFn && positionFn !== void 0)
    $$bindings.positionFn(positionFn);
  if ($$props.validatorAction === void 0 && $$bindings.validatorAction && validatorAction !== void 0)
    $$bindings.validatorAction(validatorAction);
  if ($$props.setDateValue === void 0 && $$bindings.setDateValue && setDateValue !== void 0)
    $$bindings.setDateValue(setDateValue);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (value !== prevValue) {
          const parsed = value ? parseDate(value, format, i18n, formatType) : null;
          innerDate = parsed;
          prevValue = value;
        }
        if (currentFormat !== format && innerDate) {
          value = formatDate(innerDate, format, i18n, formatType);
          prevValue = value;
          currentFormat = format;
          if (mode === "auto") {
            resolvedMode = format.match(/hh?|ii?/i) && format.match(/y|m|d/i) ? "datetime" : format.match(/hh?|ii?/i) ? "time" : "date";
          }
        }
      }
    }
    $$rendered = `<input${(0, import_index_df821055.e)("type", pickerOnly ? "hidden" : "text", 0)}${(0, import_index_df821055.e)("name", name, 0)} autocomplete="${"off"}" ${disabled ? "disabled" : ""}${(0, import_index_df821055.e)("placeholder", placeholder, 0)} class="${(0, import_index_df821055.g)((0, import_index_df821055.h)(inputClasses)) + " svelte-tb6rom"}" ${required ? "required" : ""} ${isFocused ? "readonly" : ""}${(0, import_index_df821055.e)("value", value, 0)}${(0, import_index_df821055.e)("this", inputEl, 0)}>
${visible || isFocused ? `<div class="${"std-calendar-wrap is-popup " + (0, import_index_df821055.g)(theme) + " svelte-tb6rom"}">${currentMode === "date" ? `${(0, import_index_df821055.v)(Calendar, "Calendar").$$render($$result, {
      date: innerDate,
      startDate: startDate ? parseDate(startDate, format, i18n, formatType) : null,
      endDate: endDate ? parseDate(endDate, format, i18n, formatType) : null,
      enableTimeToggle: resolvedMode.includes("time"),
      i18n,
      weekStart,
      this: calendarEl
    }, {
      this: ($$value) => {
        calendarEl = $$value;
        $$settled = false;
      }
    }, {})}
    ${todayBtn || clearBtn ? `<div class="${"std-btn-row svelte-tb6rom"}">${todayBtn ? `<button class="${(0, import_index_df821055.g)((0, import_index_df821055.h)(todayBtnClasses)) + " svelte-tb6rom"}" ${startDate > formatDate(new Date(), format, i18n, formatType) ? "disabled" : ""}>${(0, import_index_df821055.g)(i18n.todayBtn)}</button>` : ``}
      ${clearBtn ? `<button class="${(0, import_index_df821055.g)((0, import_index_df821055.h)(clearBtnClasses)) + " svelte-tb6rom"}" ${!innerDate ? "disabled" : ""}>${(0, import_index_df821055.g)(i18n.clearBtn)}</button>` : ``}</div>` : ``}` : `${(0, import_index_df821055.v)(Time, "Time").$$render($$result, {
      date: innerDate,
      hasDateComponent: resolvedMode !== "time",
      showMeridian: format.match("p|P"),
      i18n,
      this: timeEl
    }, {
      this: ($$value) => {
        timeEl = $$value;
        $$settled = false;
      }
    }, {})}`}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
var vices_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-encqz{text-align:center}.add-button.svelte-encqz{margin-left:auto;display:flex;justify-content:center}",
  map: null
};
const Vices = (0, import_index_df821055.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $viceStore, $$unsubscribe_viceStore;
  $$unsubscribe_user = (0, import_index_df821055.a)(import_lib_9f96b971.u, (value) => value);
  $$unsubscribe_viceStore = (0, import_index_df821055.a)(import_lib_9f96b971.v, (value) => $viceStore = value);
  (0, import_lib_9f96b971.c)();
  let newViceName = "";
  let open = false;
  let resetOpen = false;
  let vices = [];
  let myDate = null;
  $$result.css.add(css);
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
    $$rendered = `<div class="${"content-container"}"><h1 class="${"svelte-encqz"}">Vices</h1>
	${(0, import_index_df821055.f)(vices, (vice) => {
      return `<div class="${"card bg-base-100 shadow-xl card-compact"}"><div class="${"card-body"}"><h2>${(0, import_index_df821055.g)(vice.name)}</h2>
				<p>Best: ${(0, import_index_df821055.g)(vice.best_ui.days)}d ${(0, import_index_df821055.g)(vice.best_ui.hours)}h ${(0, import_index_df821055.g)(vice.best_ui.minutes)}m</p>
				<p>Total: ${(0, import_index_df821055.g)(vice.total_ui.days)}d ${(0, import_index_df821055.g)(vice.total_ui.hours)}h ${(0, import_index_df821055.g)(vice.total_ui.minutes)}m</p>
				<p>Num: ${(0, import_index_df821055.g)(vice.num)}</p>
				<p>Current: ${(0, import_index_df821055.g)(vice.current_ui.days)}d ${(0, import_index_df821055.g)(vice.current_ui.hours)}h ${(0, import_index_df821055.g)(vice.current_ui.minutes)}m</p>
				<button class="${"btn btn-accent"}">Reset Vice</button></div>
		</div>`;
    })}
	<div class="${"add-button svelte-encqz"}"><button class="${"btn btn-primary"}" icondescription="${"New Vice"}"${(0, import_index_df821055.e)("icon", Add16$1, 0)}>Add New Vice</button></div>
	${(0, import_index_df821055.v)(Modal, "Modal").$$render($$result, {
      size: "xs",
      modalHeading: "Set date and time",
      primaryButtonText: "Confirm",
      secondaryButtonText: "Cancel",
      open: resetOpen
    }, {
      open: ($$value) => {
        resetOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${``}

		${(0, import_index_df821055.v)(SveltyPicker, "SveltyPicker").$$render($$result, {
          inputClasses: "form-control",
          format: "yyyy-mm-dd hh:ii",
          value: myDate
        }, {
          value: ($$value) => {
            myDate = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
	${(0, import_index_df821055.v)(Modal, "Modal").$$render($$result, {
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
        return `<input${(0, import_index_df821055.e)("value", newViceName, 0)}>`;
      }
    })}
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_viceStore();
  return $$rendered;
});
