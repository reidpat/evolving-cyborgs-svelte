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
  A: () => Add16$1,
  B: () => Button,
  M: () => Modal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d51717b2 = require("./index-d51717b2.js");
const ButtonSkeleton = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_d51717b2.a)($$props, ["href", "size", "small"]);
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
${href ? `<a${(0, import_index_d51717b2.b)([
    { href: (0, import_index_d51717b2.x)(href) },
    {
      rel: (0, import_index_d51717b2.x)($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    { role: "button" },
    (0, import_index_d51717b2.e)($$restProps)
  ], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" || small ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}>${(0, import_index_d51717b2.g)("")}</a>` : `<div${(0, import_index_d51717b2.b)([(0, import_index_d51717b2.e)($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" || small ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const Button = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let buttonProps;
  let $$restProps = (0, import_index_d51717b2.a)($$props, [
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
  let $$slots = (0, import_index_d51717b2.y)(slots);
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
  const ctx = (0, import_index_d51717b2.u)("ComposedModal");
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
${skeleton ? `${(0, import_index_d51717b2.v)(ButtonSkeleton, "ButtonSkeleton").$$render($$result, Object.assign({ href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `
  <a${(0, import_index_d51717b2.b)([(0, import_index_d51717b2.e)(buttonProps)], {})}${(0, import_index_d51717b2.d)("this", ref, 0)}>${hasIconOnly ? `<span${(0, import_index_d51717b2.f)("bx--assistive-text".trim())}>${(0, import_index_d51717b2.g)(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${(0, import_index_d51717b2.v)(icon || import_index_d51717b2.m, "svelte:component").$$render($$result, {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  }, {}, {})}</a>` : `<button${(0, import_index_d51717b2.b)([(0, import_index_d51717b2.e)(buttonProps)], {})}${(0, import_index_d51717b2.d)("this", ref, 0)}>${hasIconOnly ? `<span${(0, import_index_d51717b2.f)("bx--assistive-text".trim())}>${(0, import_index_d51717b2.g)(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${(0, import_index_d51717b2.v)(icon || import_index_d51717b2.m, "svelte:component").$$render($$result, {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  }, {}, {})}</button>`}`}`}`;
});
const Close20 = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Close20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_d51717b2.x)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_d51717b2.x)(style) },
    { id: (0, import_index_d51717b2.x)(id) },
    (0, import_index_d51717b2.e)(attributes)
  ], {})}><path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_d51717b2.g)(title)}</title>` : ``}
  `}</svg>`;
});
const Modal = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
  let modalLabelId;
  let modalHeadingId;
  let modalBodyId;
  let ariaLabel;
  let $$restProps = (0, import_index_d51717b2.a)($$props, [
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
  (0, import_index_d51717b2.w)();
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
<div${(0, import_index_d51717b2.b)([
    { role: "presentation" },
    { id: (0, import_index_d51717b2.x)(id) },
    (0, import_index_d51717b2.e)($$restProps)
  ], {
    classes: "bx--modal " + (!passiveModal ? "bx--modal-tall" : "") + " " + (open ? "is-visible" : "") + " " + (danger ? "bx--modal--danger" : "")
  })}${(0, import_index_d51717b2.d)("this", ref, 0)}><div${(0, import_index_d51717b2.b)([
    { role: "dialog" },
    { tabindex: "-1" },
    (0, import_index_d51717b2.e)(alertDialogProps),
    { "aria-modal": "true" },
    {
      "aria-label": (0, import_index_d51717b2.x)(ariaLabel)
    }
  ], {
    classes: "bx--modal-container " + (size === "xs" ? "bx--modal-container--xs" : "") + " " + (size === "sm" ? "bx--modal-container--sm" : "") + " " + (size === "lg" ? "bx--modal-container--lg" : "")
  })}${(0, import_index_d51717b2.d)("this", innerModal, 0)}><div${(0, import_index_d51717b2.f)("bx--modal-header".trim())}>${passiveModal ? `<button type="${"button"}"${(0, import_index_d51717b2.d)("aria-label", iconDescription, 0)}${(0, import_index_d51717b2.d)("title", iconDescription, 0)}${(0, import_index_d51717b2.f)("bx--modal-close".trim())}${(0, import_index_d51717b2.d)("this", buttonRef, 0)}>${(0, import_index_d51717b2.v)(Close20, "Close20").$$render($$result, {
    "aria-label": iconDescription,
    class: "bx--modal-close__icon"
  }, {}, {})}</button>` : ``}
      ${modalLabel ? `<h2${(0, import_index_d51717b2.d)("id", modalLabelId, 0)}${(0, import_index_d51717b2.f)("bx--modal-header__label".trim())}>${slots.label ? slots.label({}) : `${(0, import_index_d51717b2.g)(modalLabel)}`}</h2>` : ``}
      <h3${(0, import_index_d51717b2.d)("id", modalHeadingId, 0)}${(0, import_index_d51717b2.f)("bx--modal-header__heading".trim())}>${slots.heading ? slots.heading({}) : `${(0, import_index_d51717b2.g)(modalHeading)}`}</h3>
      ${!passiveModal ? `<button type="${"button"}"${(0, import_index_d51717b2.d)("aria-label", iconDescription, 0)}${(0, import_index_d51717b2.d)("title", iconDescription, 0)}${(0, import_index_d51717b2.f)("bx--modal-close".trim())}${(0, import_index_d51717b2.d)("this", buttonRef, 0)}>${(0, import_index_d51717b2.v)(Close20, "Close20").$$render($$result, {
    "aria-label": iconDescription,
    class: "bx--modal-close__icon"
  }, {}, {})}</button>` : ``}</div>
    <div${(0, import_index_d51717b2.d)("id", modalBodyId, 0)}${(0, import_index_d51717b2.d)("tabindex", hasScrollingContent ? "0" : void 0, 0)}${(0, import_index_d51717b2.d)("role", hasScrollingContent ? "region" : void 0, 0)}${(0, import_index_d51717b2.d)("aria-label", hasScrollingContent ? ariaLabel : void 0, 0)}${(0, import_index_d51717b2.d)("aria-labelledby", modalLabel ? modalLabelId : modalHeadingId, 0)}${(0, import_index_d51717b2.f)(("bx--modal-content " + (hasForm ? "bx--modal-content--with-form" : "") + " " + (hasScrollingContent ? "bx--modal-scroll-content" : "")).trim())}>${slots.default ? slots.default({}) : ``}</div>
    ${hasScrollingContent ? `<div${(0, import_index_d51717b2.f)("bx--modal-content--overflow-indicator".trim())}></div>` : ``}
    ${!passiveModal ? `<div${(0, import_index_d51717b2.f)(("bx--modal-footer " + (secondaryButtons.length === 2 ? "bx--modal-footer--three-button" : "")).trim())}>${secondaryButtons.length > 0 ? `${(0, import_index_d51717b2.p)(secondaryButtons, (button) => {
    return `${(0, import_index_d51717b2.v)(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
      default: () => {
        return `${(0, import_index_d51717b2.g)(button.text)}
            `;
      }
    })}`;
  })}` : `${secondaryButtonText ? `${(0, import_index_d51717b2.v)(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
    default: () => {
      return `${(0, import_index_d51717b2.g)(secondaryButtonText)}`;
    }
  })}` : ``}`}
        ${(0, import_index_d51717b2.v)(Button, "Button").$$render($$result, {
    kind: danger ? "danger" : "primary",
    disabled: primaryButtonDisabled,
    icon: primaryButtonIcon
  }, {}, {
    default: () => {
      return `${(0, import_index_d51717b2.g)(primaryButtonText)}`;
    }
  })}</div>` : ``}</div></div>`;
});
const Add16 = (0, import_index_d51717b2.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Add16" },
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
  ], {})}><path d="${"M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_d51717b2.g)(title)}</title>` : ``}
  `}</svg>`;
});
var Add16$1 = Add16;
