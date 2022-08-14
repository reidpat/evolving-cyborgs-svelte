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
  default: () => Vices
});
module.exports = __toCommonJS(stdin_exports);
var import_index_dc9adc7d = require("../../chunks/index-dc9adc7d.js");
var import_sessionStore_76a26766 = require("../../chunks/sessionStore-76a26766.js");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_lib_e7b867a6 = require("../../chunks/lib-e7b867a6.js");
var import_supabase_js = require("@supabase/supabase-js");
const HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
const defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: (err) => typeof console !== "undefined" && console.warn(err),
  getWeek: (givenDate) => {
    const date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};
const english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: (nth) => {
    const s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
const pad = (number, length = 2) => `000${number}`.slice(length * -1);
const int = (bool) => bool === true ? 1 : 0;
function debounce(fn, wait) {
  let t;
  return function() {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait);
  };
}
const arrayify = (obj) => obj instanceof Array ? obj : [obj];
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  const e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== void 0)
    e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  const wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (const key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      const path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}
const doNothing = () => void 0;
const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
const revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  H: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  J: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  K: (dateObj, amPM, locale) => {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1e3),
  W: function(dateObj, weekNum, locale) {
    const weekNumber = parseInt(weekNum);
    const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: (dateObj, year) => {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: (_, ISODate) => new Date(ISODate),
  d: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  h: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  i: (dateObj, minutes) => {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
  w: doNothing,
  y: (dateObj, year) => {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
const tokenRegex = {
  D: "(\\w+)",
  F: "(\\w+)",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "(\\w+)",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "(\\w+)",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
const formats = {
  Z: (date) => date.toISOString(),
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: (date) => pad(date.getHours()),
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: (date, locale) => locale.amPM[int(date.getHours() > 11)],
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: (date) => pad(date.getSeconds()),
  U: (date) => date.getTime() / 1e3,
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: (date) => pad(date.getFullYear(), 4),
  d: (date) => pad(date.getDate()),
  h: (date) => date.getHours() % 12 ? date.getHours() % 12 : 12,
  i: (date) => pad(date.getMinutes()),
  j: (date) => date.getDate(),
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: (date) => pad(date.getMonth() + 1),
  n: (date) => date.getMonth() + 1,
  s: (date) => date.getSeconds(),
  u: (date) => date.getTime(),
  w: (date) => date.getDay(),
  y: (date) => String(date.getFullYear()).substring(2)
};
const createDateFormatter = ({ config: config2 = defaults, l10n = english, isMobile = false }) => (dateObj, frmt, overrideLocale) => {
  const locale = overrideLocale || l10n;
  if (config2.formatDate !== void 0 && !isMobile) {
    return config2.formatDate(dateObj, frmt, locale);
  }
  return frmt.split("").map((c, i, arr) => formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config2) : c !== "\\" ? c : "").join("");
};
const createDateParser = ({ config: config2 = defaults, l10n = english }) => (date, givenFormat, timeless, customLocale) => {
  if (date !== 0 && !date)
    return void 0;
  const locale = customLocale || l10n;
  let parsedDate;
  const dateOrig = date;
  if (date instanceof Date)
    parsedDate = new Date(date.getTime());
  else if (typeof date !== "string" && date.toFixed !== void 0)
    parsedDate = new Date(date);
  else if (typeof date === "string") {
    const format = givenFormat || (config2 || defaults).dateFormat;
    const datestr = String(date).trim();
    if (datestr === "today") {
      parsedDate = new Date();
      timeless = true;
    } else if (/Z$/.test(datestr) || /GMT$/.test(datestr))
      parsedDate = new Date(date);
    else if (config2 && config2.parseDate)
      parsedDate = config2.parseDate(date, format);
    else {
      parsedDate = !config2 || !config2.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
      let matched, ops = [];
      for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
        const token = format[i];
        const isBackSlash = token === "\\";
        const escaped = format[i - 1] === "\\" || isBackSlash;
        if (tokenRegex[token] && !escaped) {
          regexStr += tokenRegex[token];
          const match = new RegExp(regexStr).exec(date);
          if (match && (matched = true)) {
            ops[token !== "Y" ? "push" : "unshift"]({
              fn: revFormat[token],
              val: match[++matchIndex]
            });
          }
        } else if (!isBackSlash)
          regexStr += ".";
        ops.forEach(({ fn, val }) => parsedDate = fn(parsedDate, val, locale) || parsedDate);
      }
      parsedDate = matched ? parsedDate : void 0;
    }
  }
  if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
    config2.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
    return void 0;
  }
  if (timeless === true)
    parsedDate.setHours(0, 0, 0, 0);
  return parsedDate;
};
function compareDates(date1, date2, timeless = true) {
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
const isBetween = (ts, ts1, ts2) => {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
const duration = {
  DAY: 864e5
};
function getDefaultHours(config2) {
  let hours = config2.defaultHour;
  let minutes = config2.defaultMinute;
  let seconds = config2.defaultSeconds;
  if (config2.minDate !== void 0) {
    const minHour = config2.minDate.getHours();
    const minMinutes = config2.minDate.getMinutes();
    const minSeconds = config2.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config2.minDate.getSeconds();
  }
  if (config2.maxDate !== void 0) {
    const maxHr = config2.maxDate.getHours();
    const maxMinutes = config2.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config2.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}
if (typeof Object.assign !== "function") {
  Object.assign = function(target, ...args) {
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    for (const source of args) {
      if (source) {
        Object.keys(source).forEach((key) => target[key] = source[key]);
      }
    }
    return target;
  };
}
const DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  const self = {
    config: Object.assign(Object.assign({}, defaults), flatpickr.defaultConfig),
    l10n: english
  };
  self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self._createElement = createElement;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile)
      build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    const config2 = self.config;
    if (config2.weekNumbers === false && config2.showMonths === 1) {
      return;
    } else if (config2.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== void 0) {
          const daysWidth = (self.days.offsetWidth + 1) * config2.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      const defaultDate = self.config.minDate === void 0 || compareDates(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      const defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e !== void 0 && e.type !== "blur") {
      timeWrapper(e);
    }
    const prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === void 0 || self.minuteElement === void 0)
      return;
    let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== void 0) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    const limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    const limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (limitMaxHours) {
      const maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
      hours = Math.min(hours, maxTime.getHours());
      if (hours === maxTime.getHours())
        minutes = Math.min(minutes, maxTime.getMinutes());
      if (minutes === maxTime.getMinutes())
        seconds = Math.min(seconds, maxTime.getSeconds());
    }
    if (limitMinHours) {
      const minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
      hours = Math.max(hours, minTime.getHours());
      if (hours === minTime.getHours() && minutes < minTime.getMinutes())
        minutes = minTime.getMinutes();
      if (minutes === minTime.getMinutes())
        seconds = Math.max(seconds, minTime.getSeconds());
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    const date = dateObj || self.latestSelectedDateObj;
    if (date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== void 0) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile)
      return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== void 0)
      self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== void 0)
      self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    const eventTarget = getEventTarget(event);
    const year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element2, event, handler, options) {
    if (event instanceof Array)
      return event.forEach((ev) => bind(element2, ev, handler, options));
    if (element2 instanceof Array)
      return element2.forEach((el) => bind(el, event, handler, options));
    element2.addEventListener(event, handler, options);
    self._handlers.push({
      remove: () => element2.removeEventListener(event, handler)
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach((evt) => {
        Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), (el) => bind(el, "click", self[evt]));
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    const debouncedResize = debounce(onResize, 50);
    self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind(self.daysContainer, "mouseover", (e) => {
        if (self.config.mode === "range")
          onMouseOver(getEventTarget(e));
      });
    bind(window.document.body, "keydown", onKeyDown);
    if (!self.config.inline && !self.config.static)
      bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind(window.document, "touchstart", documentClick);
    else
      bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, { capture: true });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== void 0) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
      const selText = (e) => getEventTarget(e).select();
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, { capture: true });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== void 0)
        bind(self.secondElement, "focus", () => self.secondElement && self.secondElement.select());
      if (self.amPM !== void 0) {
        bind(self.amPM, "click", (e) => {
          updateTime(e);
          triggerChange();
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    const jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    const oldYear = self.currentYear;
    const oldMonth = self.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e) {
    const eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    const target = e && getEventTarget(e);
    const input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    const event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    const fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        const { weekWrapper, weekNumbers } = buildWeeks();
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    const customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode)
          self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== void 0)
          self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        const wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode)
          self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput)
          wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline)
      (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, dayNumber, i) {
    const dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    const endMonth = delta > 0 ? self.config.showMonths : -1;
    for (let m = startMonth; m != endMonth; m += delta) {
      const month = self.daysContainer.children[m];
      const startIndex = delta > 0 ? 0 : month.children.length - 1;
      const endIndex = delta > 0 ? month.children.length : -1;
      for (let i = startIndex; i != endIndex; i += delta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    const givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    const endMonth = delta > 0 ? self.config.showMonths : -1;
    const loopDelta = delta > 0 ? 1 : -1;
    for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      const month = self.daysContainer.children[m];
      const startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      const numMonthDays = month.children.length;
      for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    const dayFocused = isInView(document.activeElement || document.body);
    const startElem = current !== void 0 ? current : dayFocused ? document.activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    const daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    const dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === void 0) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers)
      clearNode(self.weekNumbers);
    const frag = document.createDocumentFragment();
    for (let i = 0; i < self.config.showMonths; i++) {
      const d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
      return;
    const shouldBuildMonth = function(month) {
      if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (let i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i))
        continue;
      const month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    const container = createElement("div", "flatpickr-month");
    const monthNavFragment = window.document.createDocumentFragment();
    let monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", (e) => {
        const target = getEventTarget(e);
        const selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    const yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    const yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    const currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (let m = self.config.showMonths; m--; ) {
      const month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: () => self.__hidePrevMonthArrow,
      set(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: () => self.__hideNextMonthArrow,
      set(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar)
      self.calendarContainer.classList.add("noCalendar");
    const defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    const separator = createElement("span", "flatpickr-time-separator", ":");
    const hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    const minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr)
      self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      const secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer)
      self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self.weekdayContainer);
    for (let i = self.config.showMonths; i--; ) {
      const container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    const firstDayOfWeek = self.l10n.firstDayOfWeek;
    let weekdays = [...self.l10n.weekdays.shorthand];
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = [
        ...weekdays.splice(firstDayOfWeek, weekdays.length),
        ...weekdays.splice(0, firstDayOfWeek)
      ];
    }
    for (let i = self.config.showMonths; i--; ) {
      self.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    const weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    const weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset = true) {
    const delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
      return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent = true, toInitial = true) {
    self.input.value = "";
    if (self.altInput !== void 0)
      self.altInput.value = "";
    if (self.mobileInput !== void 0)
      self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      const { hours, minutes, seconds } = getDefaultHours(self.config);
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== void 0) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== void 0)
      triggerEvent("onDestroy");
    for (let i = self._handlers.length; i--; ) {
      self._handlers[i].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode)
        self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = void 0;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        const wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode)
        self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach((k) => {
      try {
        delete self[k];
      } catch (_) {
      }
    });
  }
  function isCalendarElem(elem) {
    if (self.config.appendTo && self.config.appendTo.contains(elem))
      return true;
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      const eventTarget = getEventTarget(e);
      const isCalendarElement = isCalendarElem(eventTarget);
      const isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      const lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      const isIgnored = !self.config.ignoredFocusElements.some((elem) => elem.contains(eventTarget));
      if (lostFocus && isIgnored) {
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
          self.clear(false);
          self.redraw();
        }
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
      return;
    const newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless = true) {
    var _a;
    const dateToCheck = self.parseDate(date, void 0, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0)
      return false;
    if (!self.config.enable && self.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    const bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (let i = 0, d; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        const parsed = self.parseDate(d, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    const isInput = e.target === self._input;
    if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    const eventTarget = getEventTarget(e);
    const isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    const allowInput = self.config.allowInput;
    const allowKeydown = self.isOpen && (!allowInput || !isInput);
    const allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      const isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            if (self.daysContainer !== void 0 && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
              const delta2 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey)
                focusOnDay(void 0, delta2);
              else {
                e.stopPropagation();
                changeMonth(delta2);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement)
            self.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          const delta = e.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement)
              self.hourElement.focus();
            updateTime(e);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            const elems = [
              self.hourElement,
              self.minuteElement,
              self.secondElement,
              self.amPM
            ].concat(self.pluginElements).filter((x) => x);
            const i = elems.indexOf(eventTarget);
            if (i !== -1) {
              const target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self._input.focus();
          }
          break;
      }
    }
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem) {
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled")))
      return;
    const hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    let containsDisabled = false;
    let minRange = 0, maxRange = 0;
    for (let t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    for (let m = 0; m < self.config.showMonths; m++) {
      const month = self.daysContainer.children[m];
      for (let i = 0, l = month.children.length; i < l; i++) {
        const dayElem = month.children[i], date = dayElem.dateObj;
        const timestamp = date.getTime();
        const outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach((c) => {
            dayElem.classList.remove(c);
          });
          continue;
        } else if (containsDisabled && !outOfRange)
          continue;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach((c) => {
          dayElem.classList.remove(c);
        });
        if (elem !== void 0) {
          elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
          if (initialDate < hoverDate && timestamp === initialDate)
            dayElem.classList.add("startRange");
          else if (initialDate > hoverDate && timestamp === initialDate)
            dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
            dayElem.classList.add("inRange");
        }
      }
    }
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline)
      positionCalendar();
  }
  function open(e, positionElement = self._positionElement) {
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        const eventTarget = getEventTarget(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== void 0) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    const wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === void 0 || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(() => self.hourElement.select(), 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return (date) => {
      const dateObj = self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat);
      const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];
      if (dateObj !== void 0) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter((d) => isEnabled(d));
        if (!self.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    const boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    const formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: () => self.config._enable,
      set: (dates) => {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: () => self.config._disable,
      set: (dates) => {
        self.config._disable = parseDateRules(dates);
      }
    });
    const timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      const defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      const defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
    }
    Object.defineProperty(self.config, "minDate", {
      get: () => self.config._minDate,
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: () => self.config._maxDate,
      set: minMaxDateSetter("max")
    });
    const minMaxTimeSetter = (type) => (val) => {
      self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
    };
    Object.defineProperty(self.config, "minTime", {
      get: () => self.config._minTime,
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: () => self.config._maxTime,
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (let i = 0; i < boolOpts.length; i++)
      self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    HOOKS.filter((hook) => self.config[hook] !== void 0).forEach((hook) => {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (let i = 0; i < self.config.plugins.length; i++) {
      const pluginConf = self.config.plugins[i](self) || {};
      for (const key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined")
      self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
    self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0);
    tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
    const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    const positionElement = customPositionElement || self._positionElement;
    const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (acc, child) => acc + child.offsetHeight, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    const top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline)
      return;
    let left = window.pageXOffset + inputBounds.left;
    let isCenter = false;
    let isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    const right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    const rightMost = left + calendarWidth > window.document.body.offsetWidth;
    const centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static)
      return;
    self.calendarContainer.style.top = `${top}px`;
    if (!rightMost) {
      self.calendarContainer.style.left = `${left}px`;
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = `${right}px`;
    } else {
      const doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      const bodyWidth = window.document.body.offsetWidth;
      const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      const centerBefore = ".flatpickr-calendar.centerMost:before";
      const centerAfter = ".flatpickr-calendar.centerMost:after";
      const centerIndex = doc.cssRules.length;
      const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
      self.calendarContainer.style.left = `${centerLeft}px`;
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    let editableSheet = null;
    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    const style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    const isSelectable = (day) => day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    const t = findParent(getEventTarget(e), isSelectable);
    if (t === void 0)
      return;
    const target = t;
    const selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single")
      self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      const selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
        self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      const isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== void 0)
      self.hourElement !== void 0 && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      const single = self.config.mode === "single" && !self.config.enableTime;
      const range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  const CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    clickOpens: [
      () => {
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);
          self._input.removeEventListener("click", self.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (const key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach((x) => x());
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach((x) => x());
      else if (HOOKS.indexOf(option) > -1)
        self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    let dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map((d) => self.parseDate(d, format));
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map((date) => self.parseDate(date, format));
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map((date) => self.parseDate(date, format));
          break;
      }
    } else
      self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter((d) => d instanceof Date && isEnabled(d, false));
    if (self.config.mode === "range")
      self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
  }
  function setDate(date, triggerChange2 = false, format = self.config.dateFormat) {
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map((rule) => {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self.parseDate(rule.from, void 0),
          to: self.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter((x) => x);
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    const preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0)
      self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== void 0)
      self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== void 0)
      self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode)
        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput)
      self._input.setAttribute("readonly", "readonly");
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    const inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate)
      self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate)
      self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step"))
      self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== void 0)
      self.altInput.type = "hidden";
    try {
      if (self.input.parentNode)
        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {
    }
    bind(self.mobileInput, "change", (e) => {
      self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self.isOpen === true)
      return self.close();
    self.open(e);
  }
  function triggerEvent(event, data2) {
    if (self.config === void 0)
      return;
    const hooks = self.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (let i = 0; hooks[i] && i < hooks.length; i++)
        hooks[i](self.selectedDates, self.input.value, self, data2);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    const e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (let i = 0; i < self.selectedDates.length; i++) {
      if (compareDates(self.selectedDates[i], date) === 0)
        return "" + i;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2)
      return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav)
      return;
    self.yearElements.forEach((yearElement, i) => {
      const d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(format) {
    return self.selectedDates.map((dObj) => self.formatDate(dObj, format)).filter((d, i, arr) => self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2 = true) {
    if (self.mobileInput !== void 0 && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== void 0) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    const eventTarget = getEventTarget(e);
    const isPrevMonth = self.prevMonthNav.contains(eventTarget);
    const isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    const isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    let newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      const isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config2) {
  const nodes = Array.prototype.slice.call(nodeList).filter((x) => x instanceof HTMLElement);
  const instances = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config2 || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config2) {
    return _flatpickr(this, config2);
  };
  HTMLElement.prototype.flatpickr = function(config2) {
    return _flatpickr([this], config2);
  };
}
var flatpickr = function(selector, config2) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config2);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config2);
  } else {
    return _flatpickr(selector, config2);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: Object.assign({}, english),
  default: Object.assign({}, english)
};
flatpickr.localize = (l10n) => {
  flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = (config2) => {
  flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config2);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config2) {
    return _flatpickr(this, config2);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
var HeaderAction_svelte_svelte_type_style_lang = "";
var HeaderActionLink_svelte_svelte_type_style_lang = "";
const data = [
  {
    href: "#",
    title: "Test title search 1",
    menu: "Test menu 1",
    description: "This is a description for seach #1"
  },
  {
    href: "#",
    title: "Changing text to simulate search",
    menu: "Test menu 2",
    description: "This is a description for seach #2"
  },
  {
    href: "#",
    title: "More testing texts",
    menu: "Test menu 3",
    description: "This is a description for seach #3"
  },
  {
    href: "#",
    title: "We can find here another test text",
    menu: "Test menu 4",
    description: "This is a description for seach #4"
  }
];
const globalStore = (0, import_sessionStore_76a26766.w)(void 0);
({
  subscribe: globalStore.subscribe,
  search: (searchString) => {
    if (searchString.length > 1) {
      let resultSearch = [];
      data.forEach((item) => {
        if (item.title.toLowerCase().includes(searchString.toLowerCase())) {
          resultSearch.push(item);
        }
      });
      if (resultSearch.length > 0) {
        globalStore.set(resultSearch);
      } else {
        globalStore.set(void 0);
      }
    } else {
      globalStore.set(void 0);
    }
  },
  clear: () => {
    globalStore.set(void 0);
  }
});
var HeaderActionSearch_svelte_svelte_type_style_lang = "";
var HeaderPanelDivider_svelte_svelte_type_style_lang = "";
var HeaderSearch_svelte_svelte_type_style_lang = "";
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
const Calendar = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
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
  const dispatch = (0, import_index_dc9adc7d.q)();
  let currentView = MODE_MONTH;
  let viewChanged = false;
  let transform = TRANSFORM_CONST;
  let onMonthTransitionTrigger = null;
  function isBetween2(num) {
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
  return `<div class="${"sdt-thead-nav svelte-1xp8yha"}"><button class="${"std-btn std-btn-header sdt-toggle-btn svelte-1xp8yha"}">${(0, import_index_dc9adc7d.e)(tableCaption)}</button>
  <div class="${"sdt-nav-btns svelte-1xp8yha"}">${enableTimeToggle && internalDate ? `<button class="${"std-btn std-btn-header icon-btn sdt-time-icon svelte-1xp8yha"}"${(0, import_index_dc9adc7d.f)("title", i18n.timeView, 0)}><svg class="${"sdt-svg svelte-1xp8yha"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"16"}" height="${"16"}"><path fill-rule="${"evenodd"}" d="${"M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"}"></path></svg></button>` : ``}
    <button class="${"std-btn std-btn-header icon-btn svelte-1xp8yha"}"><svg class="${"sdt-svg svelte-1xp8yha"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"24"}" height="${"24"}"><path d="${"M4.427 9.573l3.396-3.396a.25.25 0 01.354 0l3.396 3.396a.25.25 0 01-.177.427H4.604a.25.25 0 01-.177-.427z"}"></path></svg></button>
    <button class="${"std-btn std-btn-header icon-btn svelte-1xp8yha"}"><svg class="${"sdt-svg svelte-1xp8yha"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"24"}" height="${"24"}"><path d="${"M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"}"></path></svg></button></div></div>
<div class="${["sdt-calendar svelte-1xp8yha", viewChanged ? "is-grid" : ""].join(" ").trim()}">${currentView === MODE_DECADE ? `<table class="${"sdt-table svelte-1xp8yha"}" style="${"max-height: 221px; height: 221px"}"><tbody class="${"sdt-tbody-lg svelte-1xp8yha"}">${(0, import_index_dc9adc7d.d)(dataset.grid, (row, i) => {
    return `<tr>${(0, import_index_dc9adc7d.d)(row, (year, j) => {
      return `<td class="${[
        "svelte-1xp8yha",
        i * 4 + j === dataset.selectionMark ? "is-selected" : ""
      ].join(" ").trim()}"><button class="${["std-btn svelte-1xp8yha", !isBetween2(i * 4 + j) ? "not-current" : ""].join(" ").trim()}">${(0, import_index_dc9adc7d.e)(year)}</button>
        </td>`;
    })}
      </tr>`;
  })}</tbody></table>` : ``}
  ${currentView === MODE_YEAR ? `<table class="${"sdt-table svelte-1xp8yha"}"><tbody class="${[
    "sdt-tbody-lg svelte-1xp8yha",
    (onMonthTransitionTrigger ? true : false) ? "animate-transition" : ""
  ].join(" ").trim()}"${(0, import_index_dc9adc7d.f)("style", `transform: translateY(-${transform}px)`, 0)}>${(0, import_index_dc9adc7d.d)(dataset.grid, (row, i) => {
    return `<tr>${(0, import_index_dc9adc7d.d)(row, (month, j) => {
      return `<td class="${[
        "svelte-1xp8yha",
        i * 4 + j === dataset.selectionMark ? "is-selected" : ""
      ].join(" ").trim()}"><button class="${["std-btn svelte-1xp8yha", !isBetween2(i * 4 + j) ? "not-current" : ""].join(" ").trim()}">${(0, import_index_dc9adc7d.e)(month)}</button>
        </td>`;
    })}
      </tr>`;
  })}</tbody></table>` : ``}
  ${currentView === MODE_MONTH ? `<table class="${"sdt-table sdt-table-height svelte-1xp8yha"}"><tbody><tr class="${"sdt-cal-td svelte-1xp8yha"}">${(0, import_index_dc9adc7d.d)(dayLabels, (header) => {
    return `<th class="${"sdt-cal-th svelte-1xp8yha"}">${(0, import_index_dc9adc7d.e)(header)}</th>`;
  })}</tr>
      ${(0, import_index_dc9adc7d.d)(dataset.grid, (row, i) => {
    return `<tr>${(0, import_index_dc9adc7d.d)(row, (currDate, j) => {
      return `<td class="${[
        "sdt-cal-td svelte-1xp8yha",
        (i * 7 + j === dataset.todayMark ? "sdt-today" : "") + " " + (i * 7 + j === dataset.selectionMark ? "is-selected" : "")
      ].join(" ").trim()}"><button class="${[
        "std-btn sdt-btn-day svelte-1xp8yha",
        !isBetween2(i * 7 + j) ? "not-current" : ""
      ].join(" ").trim()}" ${isDisabledDate(currDate) ? "disabled" : ""}>${(0, import_index_dc9adc7d.e)(currDate.getUTCDate())}</button>
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
const Time = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
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
  const dispatch = (0, import_index_dc9adc7d.q)();
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
  return `<div class="${"sdt-timer svelte-yz95cb"}"><div class="${"sdt-time-head svelte-yz95cb"}">${hasDateComponent ? `<button class="${"sdt-time-btn sdt-back-btn svelte-yz95cb"}"${(0, import_index_dc9adc7d.f)("title", i18n.backToDate, 0)}><svg class="${"sdt-svg svelte-yz95cb"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" width="${"20"}" height="${"20"}"><path fill-rule="${"evenodd"}" d="${"M6.75 0a.75.75 0 01.75.75V3h9V.75a.75.75 0 011.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 01-1.75 1.75H3.25a1.75 1.75 0 01-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 016.75 0zm-3.5 4.5a.25.25 0 00-.25.25V8h18V4.75a.25.25 0 00-.25-.25H3.25zM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25V9.5z"}"></path></svg></button>` : ``}
    <button class="${["sdt-time-btn sdt-time-figure svelte-yz95cb", !isMinuteView ? "is-active" : ""].join(" ").trim()}">${(0, import_index_dc9adc7d.e)(view(selectedHour, showMeridian))}</button>
    <span>:</span>
    <button class="${["sdt-time-btn sdt-time-figure svelte-yz95cb", isMinuteView ? "is-active" : ""].join(" ").trim()}">${(0, import_index_dc9adc7d.e)(view(selectedMinutes, false))}</button>
    ${showMeridian ? `<div class="${"sdt-meridian svelte-yz95cb"}"><button class="${["sdt-time-btn svelte-yz95cb", selectedHour < 12 ? "is-active" : ""].join(" ").trim()}"${(0, import_index_dc9adc7d.f)("data-value", selectedHour % 12, 0)}>AM</button>
      <button class="${["sdt-time-btn svelte-yz95cb", selectedHour >= 12 ? "is-active" : ""].join(" ").trim()}"${(0, import_index_dc9adc7d.f)("data-value", selectedHour % 12 + 12, 0)}>PM</button></div>` : ``}</div>
  <div class="${["sdt-clock svelte-yz95cb", isMinuteView ? "is-minute-view" : ""].join(" ").trim()}"${(0, import_index_dc9adc7d.f)("this", clockEl, 0)}><div class="${"sdt-middle-dot svelte-yz95cb"}"></div>
    <div class="${"sdt-hand-pointer svelte-yz95cb"}"${(0, import_index_dc9adc7d.f)("style", handCss, 0)}><div class="${"sdt-hand-circle svelte-yz95cb"}"></div></div>
    ${(0, import_index_dc9adc7d.d)(pos, (p, i) => {
    return `<button${(0, import_index_dc9adc7d.f)("style", `left:${p.x}px; top:${p.y}px`, 0)} class="${[
      "sdt-tick svelte-yz95cb",
      isSelected(isMinuteView ? selectedMinutes : selectedHour, p.val, i) ? "is-selected" : ""
    ].join(" ").trim()}"${(0, import_index_dc9adc7d.f)("data-value", p.val, 0)}>${(0, import_index_dc9adc7d.e)(p.val)}</button>`;
  })}
    ${!showMeridian && !isMinuteView ? `${(0, import_index_dc9adc7d.d)(innerHours, (p, i) => {
    return `<button${(0, import_index_dc9adc7d.f)("style", `left:${p.x}px; top:${p.y}px`, 0)} class="${[
      "sdt-tick svelte-yz95cb",
      isSelected(selectedHour, p.val, i) ? "is-selected" : ""
    ].join(" ").trim()}"${(0, import_index_dc9adc7d.f)("data-value", p.val, 0)}>${(0, import_index_dc9adc7d.e)(p.val)}</button>`;
  })}` : ``}</div>
</div>`;
});
var SveltyPicker_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".sdt-calendar-colors.svelte-tb6rom{--sdt-primary:#286090;--sdt-color:#000;--sdt-bg-main:#fff;--sdt-bg-today:var(--sdt-primary);--sdt-bg-clear:#dc3545;--sdt-today-bg:#1e486d;--sdt-clear-color:#dc3545;--sdt-btn-bg-hover:#eee;--sdt-btn-header-bg-hover:#dfdfdf;--sdt-clock-bg:#eeeded;--sdt-clock-bg-minute:rgb(238, 237, 237, 0.25);--sdt-clock-bg-shadow:0 0 128px 2px #ddd inset;--sdt-shadow:#ccc}.std-calendar-wrap.svelte-tb6rom{width:280px;background-color:var(--sdt-bg-main);box-shadow:0 1px 6px var(--sdt-shadow);border-radius:4px;padding:0.25rem 0.25rem 0.5rem;color:var(--sdt-color)}.std-calendar-wrap.is-popup.svelte-tb6rom{box-shadow:0 1px 6px var(--sdt-shadow)}.std-btn-row.svelte-tb6rom{margin-top:0.5rem;display:flex;justify-content:space-evenly}.sdt-action-btn.svelte-tb6rom{padding:0.25rem 0.5rem;font-size:.875rem;border-radius:0.2rem}.sdt-today-btn.svelte-tb6rom{background-color:var(--sdt-primary);color:var(--sdt-today-color, var(--sdt-bg-main));padding:0.25rem 0.5rem;font-size:.875rem;border-radius:0.2rem;border:1px solid var(--sdt-today-bg)}.sdt-today-btn[disabled].svelte-tb6rom{opacity:0.75}.sdt-today-btn.svelte-tb6rom:focus,.sdt-today-btn.svelte-tb6rom:active,.sdt-today-btn.svelte-tb6rom:hover:not([disabled]){background-color:var(--sdt-today-bg)}.sdt-clear-btn.svelte-tb6rom{border:1px solid var(--sdt-clear-color);background-color:transparent;color:var(--sdt-clear-color)}.sdt-clear-btn.svelte-tb6rom:focus,.sdt-clear-btn.svelte-tb6rom:active:not([disabled]),.sdt-clear-btn.svelte-tb6rom:hover:not([disabled]){background-color:var(--sdt-clear-color);color:var(--sdt-clear-hover-color, var(--sdt-bg-main))}",
  map: null
};
const config = settings;
const SveltyPicker = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
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
  (0, import_index_dc9adc7d.q)();
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
    $$rendered = `<input${(0, import_index_dc9adc7d.f)("type", pickerOnly ? "hidden" : "text", 0)}${(0, import_index_dc9adc7d.f)("name", name, 0)} autocomplete="${"off"}" ${disabled ? "disabled" : ""}${(0, import_index_dc9adc7d.f)("placeholder", placeholder, 0)} class="${(0, import_index_dc9adc7d.e)((0, import_index_dc9adc7d.n)(inputClasses)) + " svelte-tb6rom"}" ${required ? "required" : ""} ${isFocused ? "readonly" : ""}${(0, import_index_dc9adc7d.f)("value", value, 0)}${(0, import_index_dc9adc7d.f)("this", inputEl, 0)}>
${visible || isFocused ? `<div class="${"std-calendar-wrap is-popup " + (0, import_index_dc9adc7d.e)(theme) + " svelte-tb6rom"}">${currentMode === "date" ? `${(0, import_index_dc9adc7d.v)(Calendar, "Calendar").$$render($$result, {
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
    ${todayBtn || clearBtn ? `<div class="${"std-btn-row svelte-tb6rom"}">${todayBtn ? `<button class="${(0, import_index_dc9adc7d.e)((0, import_index_dc9adc7d.n)(todayBtnClasses)) + " svelte-tb6rom"}" ${startDate > formatDate(new Date(), format, i18n, formatType) ? "disabled" : ""}>${(0, import_index_dc9adc7d.e)(i18n.todayBtn)}</button>` : ``}
      ${clearBtn ? `<button class="${(0, import_index_dc9adc7d.e)((0, import_index_dc9adc7d.n)(clearBtnClasses)) + " svelte-tb6rom"}" ${!innerDate ? "disabled" : ""}>${(0, import_index_dc9adc7d.e)(i18n.clearBtn)}</button>` : ``}</div>` : ``}` : `${(0, import_index_dc9adc7d.v)(Time, "Time").$$render($$result, {
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
const Vices = (0, import_index_dc9adc7d.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $viceStore, $$unsubscribe_viceStore;
  $$unsubscribe_user = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.u, (value) => value);
  $$unsubscribe_viceStore = (0, import_index_dc9adc7d.b)(import_sessionStore_76a26766.v, (value) => $viceStore = value);
  (0, import_lib_e7b867a6.c)();
  let newViceName = "";
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
	${(0, import_index_dc9adc7d.d)(vices, (vice) => {
      return `<div class="${"card bg-base-100 shadow-xl card-compact"}"><div class="${"card-body"}"><h2 class="${"text-4xl text-center"}">${(0, import_index_dc9adc7d.e)(vice.name)}</h2>
				<div tabindex="${"0"}" class="${"collapse collapse-arrow"}"><div class="${"collapse-title text-xl font-medium"}"><div class="${"stats shadow"}"><div class="${"stat"}">
								<div class="${"stat-value"}">${(0, import_index_dc9adc7d.e)(vice.current_ui.days)}d ${(0, import_index_dc9adc7d.e)(vice.current_ui.hours)}h ${(0, import_index_dc9adc7d.e)(vice.current_ui.minutes)}m
								</div>
								<div class="${"stat-desc"}">Current Streak</div>
							</div></div>
						<p class="${"font-semibold"}"></p></div>
					<div class="${"collapse-content"}"><div class="${"stats stats-vertical lg:stats-horizontal shadow"}"><div class="${"stat"}"><div class="${"stat-title"}">Best</div>
								<div class="${"stat-value"}">${(0, import_index_dc9adc7d.e)(vice.best_ui.days)}d ${(0, import_index_dc9adc7d.e)(vice.best_ui.hours)}h ${(0, import_index_dc9adc7d.e)(vice.best_ui.minutes)}m
								</div>
								<div class="${"stat-desc"}">All time record</div></div>

							<div class="${"stat"}"><div class="${"stat-title"}">Avoided</div>
								<div class="${"stat-value"}">${(0, import_index_dc9adc7d.e)(vice.total_ui.days - vice.num)}</div>
								<div class="${"stat-desc"}">Days total</div></div>

							<div class="${"stat"}"><div class="${"stat-title"}">Resets</div>
								<div class="${"stat-value"}">${(0, import_index_dc9adc7d.e)(vice.num)}</div>
								<div class="${"stat-desc"}">Total times vice reset</div>
							</div></div>
					</div></div>
				<div class="${"card-actions justify-between"}"><button class="${"btn btn-accent btn-outline"}">Reset <span class="${"material-symbols-outlined"}">restart_alt </span></button>
					${vice.last_award >= vice.current_ui.days ? `<button class="${"btn btn-circle"}"><span class="${"material-symbols-outlined"}">redeem </span></button>` : `<div class="${"indicator"}"><span class="${"indicator-item indicator-center badge badge-primary"}">${(0, import_index_dc9adc7d.e)(vice.current_ui.days - vice.last_award)}</span>
							<button class="${"btn btn-circle btn-secondary"}"><span class="${"material-symbols-outlined"}">redeem </span></button>
						</div>`}
				</div></div>
		</div>`;
    })}
	<div class="${"add-button svelte-encqz"}"><button class="${"btn btn-accent btn-outline"}">Add New Vice</button></div>
	<div class="${["modal modal-accent sm:modal-middle", ""].join(" ").trim()}"><div class="${"modal-box"}"><label for="${"my-modal-7"}" class="${"btn btn-sm btn-circle absolute right-2 top-2"}">\u2715</label>
			${``}

			${(0, import_index_dc9adc7d.v)(SveltyPicker, "SveltyPicker").$$render($$result, {
      inputClasses: "form-control input input-primary",
      format: "yyyy-mm-dd hh:ii",
      value: myDate
    }, {
      value: ($$value) => {
        myDate = $$value;
        $$settled = false;
      }
    }, {})}
			<label for="${"time-picker"}">Choose date and time</label>
			<div class="${"modal-action"}"><button class="${["btn btn-primary modal-button", myDate === null ? "btn-disabled" : ""].join(" ").trim()}">Reset</button></div></div></div>
	<div class="${["modal modal-accent sm:modal-middle", ""].join(" ").trim()}"><div class="${"modal-box"}"><label for="${"my-modal-7"}" class="${"btn btn-sm btn-circle absolute right-2 top-2"}">\u2715</label>
			<label for="${"habit-name"}" class="${"label"}"><span class="${"label-text"}">New Vice Name</span></label>
			<input id="${"habit-name"}" type="${"text"}" placeholder="${"Type here"}" class="${"input input-bordered input-primary w-full max-w-xs"}"${(0, import_index_dc9adc7d.f)("value", newViceName, 0)}>
			<div class="${"modal-action"}"><button class="${"btn btn-primary modal-button"}">Create Vice</button></div></div></div>
	
	
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_viceStore();
  return $$rendered;
});
