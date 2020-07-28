module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alias/react-dom.ts":
/*!********************************!*\
  !*** ./src/alias/react-dom.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// bait typescript into thinking this is not reactDOM so no circular dependency.
window.ReactDOM = (window["Reac" + "tDOM"] || // If in Lightcord
    (() => {
        try {
            return window.BdApi.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            const webpack = __webpack_require__(/*! powercord/webpack */ "powercord/webpack");
            return webpack.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            return window.EDApi.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })());
module.exports = window.ReactDOM;


/***/ }),

/***/ "./src/components/components.ts":
/*!**************************************!*\
  !*** ./src/components/components.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __webpack_require__(/*! ./inputs/Button */ "./src/components/inputs/Button.tsx");
const Switch_1 = __webpack_require__(/*! ./inputs/Switch */ "./src/components/inputs/Switch.tsx");
const RadioGroup_1 = __webpack_require__(/*! ./inputs/RadioGroup */ "./src/components/inputs/RadioGroup.tsx");
const TextArea_1 = __webpack_require__(/*! ./inputs/TextArea */ "./src/components/inputs/TextArea.tsx");
const TextInput_1 = __webpack_require__(/*! ./inputs/TextInput */ "./src/components/inputs/TextInput.tsx");
const Dropdown_1 = __webpack_require__(/*! ./inputs/Dropdown */ "./src/components/inputs/Dropdown.tsx");
const Title_1 = __webpack_require__(/*! ./general/Title */ "./src/components/general/Title.tsx");
const SettingsTitle_1 = __webpack_require__(/*! ./general/SettingsTitle */ "./src/components/general/SettingsTitle.tsx");
const Tabs_1 = __webpack_require__(/*! ./general/Tabs */ "./src/components/general/Tabs.tsx");
const SettingSubTitle_1 = __webpack_require__(/*! ./general/SettingSubTitle */ "./src/components/general/SettingSubTitle.tsx");
const CodeBlock_1 = __webpack_require__(/*! ./general/CodeBlock */ "./src/components/general/CodeBlock.tsx");
const cloneNullProto_1 = __webpack_require__(/*! ../modules/cloneNullProto */ "./src/modules/cloneNullProto.ts");
const Tooltip_1 = __webpack_require__(/*! ./general/Tooltip */ "./src/components/general/Tooltip.ts");
const ColorPicker_1 = __webpack_require__(/*! ./inputs/ColorPicker */ "./src/components/inputs/ColorPicker.tsx");
const AlertBox_1 = __webpack_require__(/*! ./general/AlertBox */ "./src/components/general/AlertBox.tsx");
const ErrorCatcher_1 = __webpack_require__(/*! ./private/ErrorCatcher */ "./src/components/private/ErrorCatcher.tsx");
const RadioGroupProxied = ErrorCatcher_1.createProxyErrorCatcherClass(RadioGroup_1.default);
exports.default = cloneNullProto_1.default({
    inputs: cloneNullProto_1.default({
        Button: ErrorCatcher_1.createProxyErrorCatcherClass(Button_1.default),
        Switch: ErrorCatcher_1.createProxyErrorCatcherClass(Switch_1.default),
        Choices: RadioGroupProxied,
        RadioGroup: RadioGroupProxied,
        TextArea: ErrorCatcher_1.createProxyErrorCatcherClass(TextArea_1.default),
        TextInput: ErrorCatcher_1.createProxyErrorCatcherClass(TextInput_1.default),
        Dropdown: ErrorCatcher_1.createProxyErrorCatcherClass(Dropdown_1.default),
        ColorPicker: ErrorCatcher_1.createProxyErrorCatcherClass(ColorPicker_1.default)
    }),
    general: cloneNullProto_1.default({
        Title: ErrorCatcher_1.createProxyErrorCatcherClass(Title_1.default),
        SettingsTitle: ErrorCatcher_1.createProxyErrorCatcherClass(SettingsTitle_1.default),
        SettingSubTitle: ErrorCatcher_1.createProxyErrorCatcherClass(SettingSubTitle_1.default),
        Tabs: ErrorCatcher_1.createProxyErrorCatcherClass(Tabs_1.default),
        CodeBlock: ErrorCatcher_1.createProxyErrorCatcherClass(CodeBlock_1.default),
        Tooltip: ErrorCatcher_1.createProxyErrorCatcherClass(Tooltip_1.default),
        AlertBox: ErrorCatcher_1.createProxyErrorCatcherClass(AlertBox_1.default)
    })
});


/***/ }),

/***/ "./src/components/general/AlertBox.tsx":
/*!*********************************************!*\
  !*** ./src/components/general/AlertBox.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let AlertBoxModules;
class AlertBox extends React.Component {
    get modules() {
        return AlertBoxModules || (AlertBoxModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Markdown" && e.default.defaultProps.parser).default
        ]);
    }
    render() {
        const [Markdown] = this.modules;
        let wrap;
        let children;
        if (typeof this.props.children === "string") {
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: this.props.children
                }, Markdown.defaultProps)
            });
            children = wrap.props.children;
        }
        else {
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: ""
                }, Markdown.defaultProps)
            });
            children = this.props.children;
        }
        wrap.props.children = React.createElement("div", { className: "lc-alert-box lc-alert-box-" + this.props.type },
            React.createElement("blockquote", { className: "lc-blockquote" }, children));
        return wrap;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "***Discord's*** **Markdown** _is_ [supported](https://google.com) or you can just insert your own react childs."
                }
            ], [
                {
                    type: "info"
                },
                {
                    type: "success"
                },
                {
                    type: "warn"
                },
                {
                    type: "error"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = AlertBox;
AlertBox.defaultProps = {
    type: "info",
    children: null
};
AlertBox.help = {
    info: "You can insert markdown (as string) or normal react childs",
    warn: "All string will be interpreted as markdown. If you want raw string, pass an array with the string inside."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/CodeBlock.tsx":
/*!**********************************************!*\
  !*** ./src/components/general/CodeBlock.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let CodeBlockModules;
class CodeBlock extends React.Component {
    get modules() {
        return CodeBlockModules || (CodeBlockModules = [
            WebpackLoader_1.default.find(e => e.markup),
            WebpackLoader_1.default.find(e => e.messageContent),
            WebpackLoader_1.default.find(e => e.scrollbarGhostHairline),
            WebpackLoader_1.default.find(e => e.highlight),
            WebpackLoader_1.default.find(e => e.marginBottom8)
        ]);
    }
    render() {
        let [messageModule1, messageModule2, scrollbarModule1, hightlightJS, marginModule1] = this.modules;
        const code = this.props.language === "plaintext" ? React.createElement("code", { className: `${scrollbarModule1.scrollbarGhostHairline} hljs` }, this.props.content) : React.createElement("code", { className: `${scrollbarModule1.scrollbarGhostHairline} hljs`, dangerouslySetInnerHTML: { __html: hightlightJS.highlight(this.props.language, this.props.content).value } });
        return (React.createElement("div", { className: `${messageModule1.markup} ${messageModule2.messageContent}` },
            React.createElement("pre", null, code),
            React.createElement("div", { className: marginModule1.marginBottom8 })));
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    content: "console.log(\"Exemple code\")"
                }
            ]);
            AllPreviews.push([
                {
                    language: "js"
                },
                {
                    language: "plaintext"
                },
                ...CodeBlock.prototype.modules[3].listLanguages().filter(e => e !== "js").map(e => ({ language: e }))
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = CodeBlock;
CodeBlock.defaultProps = {
    language: "plaintext",
    content: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/SettingSubTitle.tsx":
/*!****************************************************!*\
  !*** ./src/components/general/SettingSubTitle.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let TitleModules;
class SettingSubTitle extends React.Component {
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.marginTop60 === "string"),
            WebpackLoader_1.default.findByUniqueProperties(["h5"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["size14"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["colorStandard"])
        ]);
    }
    render() {
        let [marginModule, titleModule, sizeModule, colorModule] = this.modules;
        let props = this.props;
        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h5} ${marginModule.marginBottom4}`;
        if (props.className)
            className = +" " + props.className;
        return React.createElement("h5", { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = SettingSubTitle;
SettingSubTitle.defaultProps = {
    children: [],
    className: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/SettingsTitle.tsx":
/*!**************************************************!*\
  !*** ./src/components/general/SettingsTitle.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Title_1 = __webpack_require__(/*! ./Title */ "./src/components/general/Title.tsx");
let TitleModules;
class SettingsTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.marginTop60 === "string")
        ]);
    }
    render() {
        let [marginModule] = this.modules;
        let props = this.props;
        let className = `${marginModule.marginTop60} ${marginModule.marginBottom20}`;
        if (props.className)
            className = +" " + props.className;
        return React.createElement(Title_1.default, { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = SettingsTitle;
SettingsTitle.defaultProps = {
    children: [""],
    className: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/Tabs.tsx":
/*!*****************************************!*\
  !*** ./src/components/general/Tabs.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const Title_1 = __webpack_require__(/*! ./Title */ "./src/components/general/Title.tsx");
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tabsElements = [];
        this.state = {
            active: this.props.active || null
        };
    }
    get tabs() {
        return this.props.tabs || [];
    }
    changeTab(tab) {
        if (tab === this.state.active)
            return;
        if (this.props.onChange)
            this.props.onChange(tab);
        this.setState({
            active: tab
        });
        this.tabsElements.forEach(e => e.setActive(tab === e.props.id));
    }
    render() {
        return (React.createElement("div", { className: "lc-tabWrapper", style: this.props.style },
            React.createElement("div", { className: "lc-tabnav", style: { flex: "0 1 auto" } }, this.tabs.map(tab => {
                return React.createElement(Tab, { TabContainer: this, title: tab.label, id: tab.id, key: btoa(tab.label + ":" + tab.id) });
            })),
            React.createElement("div", { className: "lc-tab" }, this.props.children)));
    }
    isActive(tab) {
        return this.state.active === tab;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: (React.createElement("div", { style: { marginTop: "20px", marginBottom: "20px" } },
                        React.createElement("div", { style: {
                                backgroundColor: "var(--background-primary)",
                                padding: "30px 30px",
                                borderRadius: "8px"
                            }, className: "lc-tab-box-shadow" },
                            React.createElement(Title_1.default, null, "Preview tabs"))))
                }
            ], [
                {
                    tabs: [
                        {
                            label: "Active tab",
                            id: "1"
                        },
                        {
                            label: "Unactive tab",
                            id: "2"
                        }
                    ]
                }
            ], [
                {
                    active: "1"
                }
            ], [
                {
                    onChange: (tabId) => { }
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = Tabs;
Tabs.defaultProps = {
    children: null,
    tabs: [{ label: "No tabs was passed to <Tabs>.", id: "none" }],
    active: null,
    onChange: noop_1.default,
    style: {}
};
let AllPreviews;
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.TabContainer.isActive(props.id)
        };
        this.props.TabContainer.tabsElements.push(this);
    }
    setActive(isActive) {
        this.setState({
            active: !!isActive
        });
    }
    render() {
        let className = `lc-navItem`;
        if (this.state.active) {
            className += ` lc-navItemActive`;
        }
        else {
            className += ` lc-navItemInactive`;
        }
        return (React.createElement("div", { className: className, onClick: () => {
                this.props.TabContainer.changeTab(this.props.id);
            } }, this.props.title));
    }
}
exports.Tab = Tab;


/***/ }),

/***/ "./src/components/general/Title.tsx":
/*!******************************************!*\
  !*** ./src/components/general/Title.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let TitleModules;
class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.colorStandard === "string"),
            WebpackLoader_1.default.find(e => typeof e.size32 === "string"),
            WebpackLoader_1.default.find(e => typeof e.h2 === "string")
        ]);
    }
    render() {
        let [colorModule, sizeModule, titleModule] = this.modules;
        let props = this.props;
        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h2} ${titleModule.defaultColor} ${titleModule.defaultMarginh2}`;
        if (props.className)
            className += " " + props.className;
        return React.createElement("h2", { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = Title;
Title.defaultProps = {
    children: null,
    className: null
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/Tooltip.ts":
/*!*******************************************!*\
  !*** ./src/components/general/Tooltip.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const excludeProperties_1 = __webpack_require__(/*! ../../modules/excludeProperties */ "./src/modules/excludeProperties.ts");
let TooltipModules;
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TooltipModules || (TooltipModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Tooltip")
        ]);
    }
    render() {
        let [Tooltip] = this.modules;
        let props = excludeProperties_1.default(this.props, ["children"]);
        return React.createElement(Tooltip.default, props, (data) => {
            return React.createElement("div", Object.assign(Object.assign({}, data), { style: {
                    width: "fit-content",
                    height: "fit-content"
                } }), this.props.children);
        });
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: React.createElement(window.Lightcord.Api.Components.inputs.Button, {
                        color: "green",
                        look: "ghost",
                        size: "small",
                        hoverColor: "yellow",
                        onClick: () => { },
                        wrapper: false
                    }, "Hover this button to see the tooltip")
                }
            ]);
            AllPreviews.push([
                {
                    text: "Example Tooltip Text"
                }
            ]);
            let colors = [];
            Tooltip.Colors.forEach(color => {
                colors.push({
                    color: color
                });
            });
            AllPreviews.push(colors);
            let positions = [];
            Tooltip.Positions.forEach(p => {
                positions.push({
                    position: p
                });
            });
            AllPreviews.push(positions);
            return AllPreviews;
        })();
    }
}
exports.default = Tooltip;
Tooltip.defaultProps = {
    children: null,
    text: "No text was passed to Tooltip",
    position: "top",
    color: "brand"
};
Tooltip.Positions = ["top", "left", "right", "bottom"];
Tooltip.Colors = ["black", "grey", "brand", "green", "yellow", "red"];
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/inputs/Button.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let ButtonModules;
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    get modules() {
        return ButtonModules || (ButtonModules = [
            WebpackLoader_1.default.findByUniqueProperties(["_horizontal"]),
            WebpackLoader_1.default.findByUniqueProperties(["colorTransparent"]),
            WebpackLoader_1.default.findByUniqueProperties(["buttonWrapper"]),
            WebpackLoader_1.default.findByUniqueProperties(["ButtonColors"]),
        ]);
    }
    render() {
        let [flexModule, euhModule1, buttonModule, colorsModule,] = this.modules;
        let props = {};
        if (this.props) {
            if ("color" in this.props) {
                props.color = this.props.color;
            }
            if ("children" in this.props) {
                props.children = this.props.children;
            }
            if ("onClick" in this.props) {
                props.onClick = this.props.onClick;
            }
            if ("wrapper" in this.props) {
                props.wrapper = !!this.props.wrapper;
            }
            if ("look" in this.props) {
                props.look = this.props.look;
            }
            if ("size" in this.props) {
                props.size = this.props.size;
            }
            if ("hoverColor" in this.props) {
                props.hoverColor = this.props.hoverColor;
            }
            if ("disabled" in this.props) {
                props.disabled = this.props.disabled;
            }
            else {
                props.disabled = false;
            }
        }
        if (props.color) {
            props.color = props.color.toLowerCase();
            if (!Button.Colors.includes(props.color)) {
                props.color = Button.Colors[0];
            }
        }
        else {
            props.color = Button.Colors[0];
        }
        if (props.look) {
            props.look = props.look.toLowerCase();
            if (!Button.Looks.includes(props.look)) {
                props.look = Button.Looks[0];
            }
        }
        else {
            props.look = Button.Looks[0];
        }
        if (props.size) {
            props.size = props.size.toLowerCase();
            if (!Button.Sizes.includes(props.size)) {
                props.size = Button.Sizes[0];
            }
        }
        else {
            props.size = Button.Sizes[0];
        }
        if (props.hoverColor) {
            props.hoverColor = props.hoverColor.toLowerCase();
            if (!Button.HoverColors.includes(props.hoverColor)) {
                props.hoverColor = Button.HoverColors[0];
            }
        }
        else {
            props.hoverColor = Button.HoverColors[0];
        }
        let buttonSize = props.size ? colorsModule.ButtonSizes[props.size.toUpperCase()] || "" : "";
        if (buttonSize)
            buttonSize = " " + buttonSize;
        let hoverColor = props.hoverColor ? colorsModule.ButtonHovers[props.hoverColor.toUpperCase()] || "" : "";
        if (hoverColor)
            hoverColor = " " + hoverColor;
        props.onClick = typeof props.onClick === "function" ? props.onClick : () => { };
        if (typeof props.wrapper !== "boolean")
            props.wrapper = true;
        let hover = this.state.hover ? euhModule1.hasHover : "";
        if (hover)
            hover = " " + hover;
        let button = React.createElement("button", { type: "button", className: `${flexModule.flexChild} ${euhModule1.button} ${colorsModule.ButtonLooks[props.look.toUpperCase()]} ${colorsModule.ButtonColors[props.color.toUpperCase()]}${buttonSize}${hoverColor}${hover} ${euhModule1.grow}`, style: { flex: "0 1 auto" }, onClick: this.props.onClick, onMouseEnter: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: true });
            }, onMouseLeave: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: false });
            }, disabled: props.disabled },
            React.createElement("div", { className: euhModule1.contents }, props.children));
        if (props.wrapper) {
            return React.createElement("div", { className: buttonModule.buttonWrapper }, button);
        }
        return button;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            let colors = [];
            for (let color of Button.Colors) {
                colors.push({
                    color: color
                });
            }
            AllPreviews.push(colors);
            let looks = [];
            for (let look of Button.Looks) {
                looks.push({
                    look: look
                });
            }
            AllPreviews.push(looks);
            let sizes = [];
            for (let size of Button.Sizes) {
                sizes.push({
                    size: size
                });
            }
            AllPreviews.push(sizes);
            let hovers = [];
            for (let hover of Button.HoverColors) {
                hovers.push({
                    hoverColor: hover
                });
            }
            AllPreviews.push(hovers);
            AllPreviews.push([{ children: "Test Button" }]);
            AllPreviews.push([{ onClick: () => { } }]);
            AllPreviews.push([{ wrapper: false }]);
            AllPreviews.push([{ disabled: false }, { disabled: true }]);
            return AllPreviews;
        })();
    }
}
exports.default = Button;
Button.Colors = ["brand", "grey", "red", "green", "yellow", "primary", "link", "white", "black", "transparent"];
Button.Looks = ["filled", "inverted", "outlined", "ghost", "link", "blank"];
Button.Sizes = ["small", "medium", "large", "xlarge", "min", "max", "icon", "none"];
Button.HoverColors = ["default", ...Button.Colors];
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/ColorPicker.tsx":
/*!***********************************************!*\
  !*** ./src/components/inputs/ColorPicker.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
const Constants = {
    defaultColor: 10070709,
    baseColors: [
        1752220,
        3066993,
        3447003,
        10181046,
        15277667,
        15844367,
        15105570,
        15158332,
        9807270,
        6323595,
        1146986,
        2067276,
        2123412,
        7419530,
        11342935,
        12745742,
        11027200,
        10038562,
        9936031,
        5533306
    ]
};
let ColorPickerModules;
let isFetching = null;
/**
 * This componennt needs to be loaded. As a result, you may experience 100-300ms loading the first time.
 * Render will return `null` before loaded.
 */
class ColorPicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || null,
            lastColor: this.props.value
        };
        this.onChange = this.onChange.bind(this);
    }
    /** Preload the component. */
    static preload() {
        if (ColorPicker.prototype.modules[0])
            return; // already loaded
        if (isFetching)
            return; // is fetching so don't double preload.
        try { // If we caught an error
            new ColorPicker({}).render();
        }
        catch (e) {
            console.error(e);
        }
    }
    onChange(val) {
        this.props.onChange(val);
        this.setState({
            value: val
        });
        this.forceUpdate();
    }
    get modules() {
        return ColorPickerModules || (ColorPickerModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "ColorPicker")
        ]);
    }
    renderColorPicker() {
        let [ColorPickerComponent] = this.modules;
        if (!ColorPickerComponent) {
            if (isFetching) { // support for multiple color picker
                isFetching.then(() => this.forceUpdate());
                return null;
            }
            ColorPickerModules = null;
            let resolve;
            isFetching = new Promise(res => (resolve = res));
            const GuildSettingsRoles = new (WebpackLoader_1.default.find(e => e.default && e.default.displayName && e.default.displayName.includes("GuildSettingsRoles")).default)().render().type;
            const settings = GuildSettingsRoles.prototype.renderRoleSettings.call({
                props: {
                    guild: {
                        roles: [],
                        id: null,
                        isOwner: () => false
                    },
                    currentUser: {
                        id: null
                    }
                },
                getSelectedRole() {
                    return {
                        id: null
                    };
                },
                renderHeader: GuildSettingsRoles.prototype.renderHeader
            });
            const GuildRoleSettings = settings.props.children[1].type;
            let children = GuildRoleSettings.prototype.renderColorPicker.call({
                props: {
                    role: {
                        id: null,
                        color: 0
                    },
                    locked: false,
                    everyone: false
                }
            }).props.children;
            children.type(children.props).props.children.type._ctor().then(c => {
                ColorPickerModules = null;
                this.forceUpdate();
                resolve();
            });
            return null;
        }
        return React.createElement(ColorPickerComponent.default, { colors: this.props.baseColors, defaultColor: this.props.defaultColor, value: this.state.value, disabled: this.props.disabled, onChange: this.onChange, customColor: this.props.customColor });
    }
    render() {
        if (this.state.lastColor !== this.props.value) {
            this.state = {
                value: this.props.value,
                lastColor: this.props.value
            };
        }
        return this.renderColorPicker();
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    disabled: false
                },
                {
                    disabled: true
                }
            ], [
                {
                    value: Utils_1.default.HexColorToDecimal("#7289DA")
                }, {
                    value: null
                }
            ], [
                {
                    onChange: (color) => { }
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = ColorPicker;
ColorPicker.defaultProps = {
    defaultColor: Constants.defaultColor,
    customColor: null,
    baseColors: Constants.baseColors,
    value: null,
    disabled: false,
    onChange: noop_1.default
};
ColorPicker.help = {
    info: "To convert hex colors to decimal, you can do `Lightcord.Api.Utils.HexColorToDecimal('#7289DA')` and go back with `Lightcord.Api.Utils.DecimalColorToHex(7506394)`",
    warn: "The component may not appear instantly. The component needs to be loaded, so you could experience 50-300ms loading time depending on your internet connection."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Dropdown.tsx":
/*!********************************************!*\
  !*** ./src/components/inputs/Dropdown.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let DropdownModules;
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: props.value || null
        };
    }
    onChange(value) {
        this.props.onChange(value);
        this.setState({
            value: value
        });
    }
    get modules() {
        return DropdownModules || (DropdownModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "SelectTempWrapper").default
        ]);
    }
    render() {
        let [DropdownComponent] = this.modules;
        let props = this.props;
        let returnValue = React.createElement(DropdownComponent, Object.assign({}, props, { onChange: this.onChange, value: this.state.value }));
        return returnValue;
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    error: null
                }, {
                    error: "An error occured"
                }], [{
                    options: [
                        {
                            value: "option1",
                            label: "Option 1"
                        },
                        {
                            value: "option2",
                            label: "Option 2"
                        },
                        {
                            value: "option3",
                            label: "Option 3"
                        }
                    ]
                }], [{
                    value: "option1"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    searchable: true
                }, {
                    searchable: false
                }], [{
                    clearable: true
                }, {
                    clearable: false
                }], [{
                    isMulti: false
                }, {
                    isMulti: true
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = Dropdown;
Dropdown.defaultProps = {
    className: null,
    error: null,
    options: [{
            value: "none",
            "label": "No options - No options was passed to Dropdown. If you meant to put an empty dropdown, input an empty array."
        }],
    valueRenderer: null,
    multiValueRenderer: null,
    optionRenderer: null,
    onChange: noop_1.default,
    value: null,
    disabled: false,
    searchable: false,
    clearable: false,
    styleOverrides: null,
    lightThemeColorOverrides: null,
    darkThemeColorOverrides: null,
    isMulti: false
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/RadioGroup.tsx":
/*!**********************************************!*\
  !*** ./src/components/inputs/RadioGroup.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let RadioGroupModule;
class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: props.value
        };
    }
    onChange(ev) {
        this.props.onChange(ev.value);
        this.setState({
            value: ev.value
        });
    }
    get modules() {
        return RadioGroupModule || (RadioGroupModule = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "RadioGroup").default
        ]);
    }
    render() {
        let [RadioGroupComponent] = this.modules;
        let props = this.props;
        return React.createElement(RadioGroupComponent, { options: props.options, onChange: this.onChange, value: this.state.value, disabled: props.disabled, size: RadioGroupComponent.Sizes[props.size.toUpperCase()], itemType: RadioGroupComponent.ItemTypes[props.itemType.toUpperCase()], infoClassName: props.infoClassName });
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    options: [
                        {
                            value: "option1",
                            name: "Option 1",
                            desc: "description 1"
                        },
                        {
                            value: "option2",
                            name: "Option 2",
                            desc: "description 2"
                        },
                        {
                            value: "option3",
                            name: "Option 3",
                            desc: "description 3"
                        }
                    ]
                }], [{
                    value: "option1"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    size: "medium"
                }, {
                    size: "small"
                }], [{
                    itemType: "bar"
                }, {
                    itemType: "panel"
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = RadioGroup;
RadioGroup.defaultProps = {
    options: [{
            value: "none",
            name: "No options",
            desc: "No options was passed to Choices. If you meant to display no options at all, please pass an empty array.",
            color: "#f04747"
        }],
    value: null,
    disabled: false,
    size: "medium",
    itemType: "bar",
    infoClassName: null,
    onChange: noop_1.default
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Switch.tsx":
/*!******************************************!*\
  !*** ./src/components/inputs/Switch.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let SwitchModules;
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || false
        };
        this.onChange = this.onChange.bind(this);
    }
    get modules() {
        return SwitchModules || (SwitchModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Switch").default
        ]);
    }
    render() {
        let [SwitchComponent] = this.modules;
        let props = this.props;
        return (React.createElement(SwitchComponent, { id: props.id, onChange: this.onChange, value: this.state.value || false, fill: props.fill, theme: SwitchComponent.Themes[props.theme.toUpperCase()], disabled: props.disabled, className: props.className, size: SwitchComponent.Sizes[props.size.toUpperCase()], style: props.style }));
    }
    onChange(value) {
        this.props.onChange(!this.state.value);
        this.setState({
            value: !this.state.value
        });
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{ onChange: (value) => { } }]);
            AllPreviews.push([{
                    value: false
                }], [{
                    theme: "default"
                }, {
                    theme: "clear"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    id: "api-preview-switch"
                }], [{
                    fill: null
                }], [{
                    size: "default"
                }, {
                    size: "mini"
                }], [{
                    style: {}
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = Switch;
Switch.defaultProps = {
    id: null,
    onChange: noop_1.default,
    value: false,
    fill: null,
    theme: "default",
    disabled: false,
    className: null,
    size: "default",
    style: {}
};
Switch.help = {
    error: "The `clear` option doesn't work well on light theme."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/TextArea.tsx":
/*!********************************************!*\
  !*** ./src/components/inputs/TextArea.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextAreaModules;
class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.state = {
            value: props.value || ""
        };
    }
    get modules() {
        return TextAreaModules || (TextAreaModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextArea").default
        ]);
    }
    onChange(value, name) {
        this.props.onChange(value, name);
        this.setState({
            value
        });
    }
    onFocus(ev, name) {
        this.props.onFocus(ev, name);
    }
    onBlur(ev, name) {
        this.props.onBlur(ev, name);
    }
    onKeyDown(ev) {
        this.props.onKeyDown(ev);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = this.props;
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown, value: this.state.value }));
    }
    get value() {
        return this.state.value || "";
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    name: "api-preview-textarea"
                }]);
            AllPreviews.push([{
                    disabled: false
                }, {
                    disabled: true
                }]);
            AllPreviews.push([{
                    placeholder: null
                }]);
            AllPreviews.push([{
                    autoFocus: false
                }, {
                    autoFocus: true
                }]);
            AllPreviews.push([{
                    resizeable: false
                }, {
                    resizeable: true
                }]);
            AllPreviews.push([{
                    flex: false
                }, {
                    flex: true
                }]);
            AllPreviews.push([{
                    autosize: false
                }, {
                    autosize: true
                }]);
            AllPreviews.push([{
                    rows: 3
                }, {
                    rows: 2
                }, {
                    rows: 1
                }]);
            AllPreviews.push([{
                    value: ""
                }]);
            AllPreviews.push([{
                    error: null
                }, {
                    error: "Example error"
                }]);
            AllPreviews.push([{
                    maxLength: 100
                }]);
            AllPreviews.push([{
                    className: ""
                }]);
            AllPreviews.push([{
                    inputClassName: ""
                }]);
            AllPreviews.push([{
                    id: "api-preview-textarea"
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = TextArea;
TextArea.defaultProps = {
    name: null,
    disabled: false,
    placeholder: null,
    autoFocus: false,
    resizeable: false,
    flex: false,
    autosize: false,
    rows: 3,
    value: "",
    error: null,
    maxLength: null,
    className: null,
    id: null,
    onChange: noop_1.default,
    onFocus: noop_1.default,
    onBlur: noop_1.default,
    onKeyDown: noop_1.default
};
TextArea.help = {
    warn: "This should be used for multi line inputs."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/TextInput.tsx":
/*!*********************************************!*\
  !*** ./src/components/inputs/TextInput.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextInputModules;
class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            value: props.value || ""
        };
    }
    get modules() {
        return TextInputModules || (TextInputModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextInput").default
        ]);
    }
    onChange(value, name) {
        this.hasSet = false;
        this.props.onChange(value, name, this);
        if (this.hasSet)
            return; // prevent event if the onChange has changed the value.
        this.setState({
            value
        });
        this.forceUpdate();
    }
    onFocus(ev, name) {
        this.props.onFocus(ev, name, this);
    }
    onBlur(ev, name) {
        this.props.onBlur(ev, name, this);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = this.props;
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, value: this.state.value }));
    }
    get value() {
        return this.state.value || "";
    }
    setValue(value) {
        this.setState({
            value: value
        });
        this.forceUpdate();
        this.hasSet = true;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    name: "api-preview-textinput"
                }], [{
                    size: "default"
                }, {
                    size: "mini"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    placeholder: ""
                }], [{
                    value: ""
                }], [{
                    error: null
                }, {
                    error: "Example error"
                }], [{
                    maxLength: 999
                }], [{
                    className: ""
                }], [{
                    inputClassName: ""
                }], [{
                    id: "api-preview-textinput"
                }], [{
                    onChange: (value, name) => { }
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = TextInput;
TextInput.defaultProps = {
    name: "",
    size: "default",
    disabled: false,
    placeholder: "",
    value: "",
    error: null,
    maxLength: 999,
    className: "",
    inputClassName: "",
    id: null,
    onChange: noop_1.default,
    onFocus: noop_1.default,
    onBlur: noop_1.default
};
TextInput.help = {
    warn: "This should be used for single line inputs."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/private/ErrorCatcher.tsx":
/*!*************************************************!*\
  !*** ./src/components/private/ErrorCatcher.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createProxyErrorCatcherClass = void 0;
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const DiscordTools_1 = __webpack_require__(/*! ../../modules/DiscordTools */ "./src/modules/DiscordTools.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const uuid_1 = __webpack_require__(/*! ../../modules/uuid */ "./src/modules/uuid.ts");
let ErrorCatcherModules;
class ErrorCatcher extends React.Component {
    constructor(props) {
        super(props);
        this.defaultProps = {
            children: null
        };
        this.state = {
            error: false,
            hasSentNotification: false
        };
    }
    get modules() {
        return ErrorCatcherModules || (ErrorCatcherModules = [
            WebpackLoader_1.default.find(e => e.emptyStateImage && e.emptyState)
        ]);
    }
    render() {
        if (!this.state.error) {
            return this.props.children;
        }
        else { // try to render a user-friendly interface.
            const [emptyClasses] = this.modules;
            if (!emptyClasses) { // If we can't, render nothing and show a notification.
                if (this.state.hasSentNotification)
                    return null; // If the notification was already sent, don't send one.
                const notification = DiscordTools_1.default.showNotification({
                    body: "An error occured. Please check the console for more informations.",
                    icon: "https://github.com/lightcord.png",
                    onClick: noop_1.default,
                    onClose: noop_1.default,
                    onShow: noop_1.default,
                    title: "Lightcord Informations"
                });
                this.setState({
                    hasSentNotification: true
                });
                setTimeout(() => {
                    notification.close();
                }, 2000);
                return null;
            }
            return React.createElement("div", { className: emptyClasses.emptyState },
                React.createElement("div", { className: emptyClasses.emptyStateImage, style: {
                        marginTop: "20px"
                    } }),
                React.createElement("div", { className: emptyClasses.emptyStateHeader }, "An error occured"),
                React.createElement("p", { className: emptyClasses.emptyStateSubtext }, "Please check the console for more informations. Join our \u00ADsupport server for more help."));
        }
    }
    componentDidCatch(error, errorInfo) {
        console.error(errorInfo.componentStack);
        this.setState({
            error: true
        });
    }
}
exports.default = ErrorCatcher;
function createProxyErrorCatcherClass(Class) {
    var _a;
    const ClassCopy = (_a = class Proxied extends React.Component {
            render() {
                return React.createElement(ErrorCatcher, { key: uuid_1.default() }, React.createElement(Class, Object.assign(Object.assign({}, this.props), { key: uuid_1.default() })));
            }
            static get original() {
                return Class;
            }
        },
        _a.displayName = Class["displayName"] || Class["name"],
        _a);
    Object.entries(Object.getOwnPropertyDescriptors(Class)).forEach(value => {
        if (value[0] in ClassCopy)
            return;
        Object.defineProperty(ClassCopy, value[0], value[1]);
    });
    return ClassCopy;
}
exports.createProxyErrorCatcherClass = createProxyErrorCatcherClass;


/***/ }),

/***/ "./src/components/private/Notice.tsx":
/*!*******************************************!*\
  !*** ./src/components/private/Notice.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultNotice = void 0;
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Notices_1 = __webpack_require__(/*! ./Notices */ "./src/components/private/Notices.tsx");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let NoticeModules;
exports.defaultNotice = {
    text: "",
    id: "unknown id",
    onClick: noop_1.default,
    buttonText: null,
    type: "default"
};
class Notice extends React.Component {
    get modules() {
        return NoticeModules || (NoticeModules = [
            WebpackLoader_1.default.find(e => e.noticeInfo)
        ]);
    }
    render() {
        const [noticeClasses] = this.modules;
        const className = noticeClasses["notice" + this.props.type.slice(0, 1).toUpperCase() + this.props.type.slice(1)];
        if (!className) {
            Notices_1.notices.pop();
            setImmediate(() => {
                Notices_1.events.emit("noticeUpdate");
            });
            return null;
        }
        const button = this.props.buttonText ? React.createElement("button", { className: noticeClasses.button, onClick: () => {
                Notices_1.notices.pop();
                this.props.onClick();
                Notices_1.events.emit("noticeUpdate");
            } }, this.props.buttonText) : null;
        return React.createElement("div", { className: className },
            React.createElement("div", { className: noticeClasses.dismiss, role: "button", tabIndex: 0, onClick: () => {
                    Notices_1.notices.pop();
                    Notices_1.events.emit("noticeUpdate");
                } }),
            this.props.text,
            button);
    }
}
exports.default = Notice;
Notice.displayName = "LightcordNotice";
Notice.defaultProps = exports.defaultNotice;


/***/ }),

/***/ "./src/components/private/Notices.tsx":
/*!********************************************!*\
  !*** ./src/components/private/Notices.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.notices = exports.events = void 0;
const Notice_1 = __webpack_require__(/*! ./Notice */ "./src/components/private/Notice.tsx");
const events_1 = __webpack_require__(/*! events */ "events");
exports.events = new events_1.EventEmitter();
class Notices extends React.Component {
    constructor(props) {
        super(props);
        this.noticeHandler = this.noticeHandler.bind(this);
    }
    noticeHandler() {
        this.forceUpdate();
    }
    componentWillMount() {
        exports.events.on("noticeUpdate", this.noticeHandler);
    }
    componentWillUnmount() {
        exports.events.off("noticeUpdate", this.noticeHandler);
    }
    render() {
        if (!this.hasNotice)
            return null;
        const notice = exports.notices[0];
        return React.createElement(Notice_1.default, Object.assign({}, notice));
    }
    get hasNotice() {
        return exports.notices.length > 0;
    }
}
exports.default = Notices;
Notices.displayName = "LightcordNotices";
Notices.defaultProps = {};
exports.notices = [];


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ./modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const components_1 = __webpack_require__(/*! ./components/components */ "./src/components/components.ts");
const uuid_1 = __webpack_require__(/*! ./modules/uuid */ "./src/modules/uuid.ts");
const Utils_1 = __webpack_require__(/*! ./modules/Utils */ "./src/modules/Utils.ts");
const DiscordTools_1 = __webpack_require__(/*! ./modules/DiscordTools */ "./src/modules/DiscordTools.ts");
const patchers = __webpack_require__(/*! ./modules/patchers */ "./src/modules/patchers.ts");
const excludeProperties_1 = __webpack_require__(/*! ./modules/excludeProperties */ "./src/modules/excludeProperties.ts");
const cloneNullProto_1 = __webpack_require__(/*! ./modules/cloneNullProto */ "./src/modules/cloneNullProto.ts");
const noop_1 = __webpack_require__(/*! ./modules/noop */ "./src/modules/noop.ts");
const Unfreeze_1 = __webpack_require__(/*! ./modules/Unfreeze */ "./src/modules/Unfreeze.ts");
const environnement_1 = __webpack_require__(/*! ./modules/environnement */ "./src/modules/environnement.ts");
patchers.patch();
const LightcordApi = {
    WebpackLoader: WebpackLoader_1.default,
    Components: components_1.default,
    uuid: uuid_1.default,
    Utils: Utils_1.default,
    DiscordTools: DiscordTools_1.default,
    _: {
        excludeProperties: excludeProperties_1.default,
        cloneNullProto: cloneNullProto_1.default,
        NOOP: noop_1.default,
        unfreeze: Unfreeze_1.default
    },
    get isNative() { return environnement_1.isNative; },
    get isImported() { return environnement_1.isImported; }
};
exports.default = LightcordApi;
Object.assign(window.Lightcord.Api, LightcordApi);


/***/ }),

/***/ "./src/modules/BDModules.ts":
/*!**********************************!*\
  !*** ./src/modules/BDModules.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let req;
setReq();
function filterDangerous(mods) {
    return mods.map(e => {
        return protect(e);
    });
}
function protect(exports) {
    let theModule = exports.exports;
    let mod = theModule.default;
    if (!mod)
        return exports;
    if (mod.remove && mod.set && mod.clear && mod.get && !mod.sort)
        return null;
    if (!mod.getToken && !mod.getEmail && !mod.showToken)
        return exports;
    const proxy = new Proxy(mod, {
        getOwnPropertyDescriptor: function (obj, prop) {
            if (prop === "getToken" || prop === "getEmail" || prop === "showToken")
                return undefined;
            return Object.getOwnPropertyDescriptor(obj, prop);
        },
        get: function (obj, func) {
            if (func == "getToken" && obj.getToken)
                return () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa";
            if (func == "getEmail" && obj.getEmail)
                return () => "puppet11112@gmail.com";
            if (func == "showToken" && obj.showToken)
                return () => true;
            if (func == "__proto__" && obj.__proto__)
                return proxy;
            return obj[func];
        }
    });
    return Object.assign({}, exports, { exports: Object.assign({}, theModule, { default: proxy }) });
}
class Webpackloader {
    get modules() {
        if (req) {
            return filterDangerous(Object.values(req.c).filter((e) => e && e.exports));
        }
        else {
            setReq();
            if (req) {
                return filterDangerous(Object.values(req.c).filter((e) => e && e.exports));
            }
            else {
                return [];
            }
        }
    }
    get(ids, modules) {
        if (typeof ids === "function") {
            return (modules || this.modules).map((mdl) => {
                if (mdl && typeof mdl.exports !== "undefined") {
                    return mdl.exports;
                }
                else {
                    return null;
                }
            }).filter(e => e).filter(ids);
        }
        else if (Array.isArray(ids)) {
            modules = modules || this.modules;
            return ids.map(id => this.get(id, modules));
        }
        else {
            modules = modules || this.modules;
            let module = modules.filter(e => !!e).find(e => e.i === ids);
            if (!module)
                return undefined;
            return module.exports;
        }
    }
    get default() {
        return this;
    }
}
exports.default = new Webpackloader();
function setReq() {
    try {
        req = window["webpackJsonp"].push([[], { __extra_id__: (mdl, exports, req) => mdl.exports = req }, [["__extra_id__"]]]);
        if (req) {
            delete req.m.__extra_id__;
            delete req.c.__extra_id__;
        }
    }
    catch (e) {
        req = undefined;
    }
}


/***/ }),

/***/ "./src/modules/DiscordTools.ts":
/*!*************************************!*\
  !*** ./src/modules/DiscordTools.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
const Notices_1 = __webpack_require__(/*! ../components/private/Notices */ "./src/components/private/Notices.tsx");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const uuid_1 = __webpack_require__(/*! ./uuid */ "./src/modules/uuid.ts");
const cloneNullProto_1 = __webpack_require__(/*! ./cloneNullProto */ "./src/modules/cloneNullProto.ts");
const events_1 = __webpack_require__(/*! events */ "events");
const Notice_1 = __webpack_require__(/*! ../components/private/Notice */ "./src/components/private/Notice.tsx");
const excludeProperties_1 = __webpack_require__(/*! ./excludeProperties */ "./src/modules/excludeProperties.ts");
const noop_1 = __webpack_require__(/*! ./noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ./WebpackLoader */ "./src/modules/WebpackLoader.ts");
let soundModule;
exports.default = new class DiscordTools {
    showNotice(data) {
        if (typeof data !== "object" || typeof data.text !== "string")
            throw new Error(`This notice is not valid. Given: ${Utils_1.default.formatJSObject(data)}`);
        let newData = cloneNullProto_1.default(Object.assign({}, Notice_1.defaultNotice, data));
        newData.id = uuid_1.default();
        Notices_1.notices.push(newData);
        Notices_1.events.emit("noticeUpdate");
        const notice = new Notice(newData);
        return notice;
    }
    get notices() {
        return Notices_1.notices.map(data => new Notice(data));
    }
    /**
     * Quickly send notification (Even when no focused.)
     * @param data The notification. Be sure to include all properties except functions cause they're optional.
     * Notifications have a timeout of 3-5 seconds.
     * They look like this: https://i.imgur.com/jzuxKKu.png
     */
    showNotification(data) {
        const notification = new window.Notification(data.title, excludeProperties_1.default(data, [
            "title",
            "onClick",
            "onClose",
            "onShow"
        ]));
        notification.onclick = data.onClick || noop_1.default;
        notification.onshow = data.onShow || noop_1.default;
        notification.onclose = data.onClose || noop_1.default;
        return notification;
    }
    createSound(sound) {
        soundModule = soundModule || WebpackLoader_1.default.findByUniqueProperties(["createSound"]);
        if (!soundModule)
            throw new WebpackLoader_1.WebpackLoaderError("Couldn't find soundModule here.");
        const created = soundModule.createSound(sound);
        return created;
    }
    playSound(sound) {
        const created = this.createSound(sound);
        created.play();
        return created;
    }
};
const EventHandler = function () {
    if (this.removed !== this.state.removed) {
        if (this.removed) {
            this.emit("removed");
        }
    }
    if (this.showing !== this.state.showing) {
        if (this.showing) {
            this.emit("showing", true);
        }
        else {
            this.emit("showing", false);
        }
    }
    if (this.index !== this.state.index) {
        this.emit("index", this.index);
    }
};
/** A notice interface for modifying it and subscribing to events. */
class Notice extends events_1.EventEmitter {
    constructor(data) {
        super();
        this.nextTickRefresh = false;
        this.data = data;
        this.state = {
            removed: this.removed,
            showing: this.showing,
            index: this.index
        };
        let eventFunc = EventHandler.bind(this);
        Notices_1.events.on("noticeUpdate", eventFunc);
        this.on("removed", () => {
            Notices_1.events.off("noticeUpdate", eventFunc);
        });
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    once(event, listener) {
        return super.once(event, listener);
    }
    off(event, listener) {
        return super.off(event, listener);
    }
    get removed() {
        return !Notices_1.notices.find(e => e.id === this.id);
    }
    get showing() {
        return this.index === 0;
    }
    get index() {
        return Notices_1.notices.findIndex(e => e.id === this.id);
    }
    get id() {
        return this.data.id;
    }
    update(data) {
        for (let key in data) {
            if (key === "id")
                continue;
            this.data[key] = data[key];
        }
        if (!this.nextTickRefresh) {
            this.nextTickRefresh = true;
            process.nextTick(() => {
                this.nextTickRefresh = false;
                Notices_1.events.emit("noticeUpdate");
            });
        }
    }
    get text() {
        return this.data.text;
    }
    set text(text) {
        this.update({
            text
        });
    }
    get type() {
        return this.data.type;
    }
    set type(type) {
        this.update({
            type
        });
    }
    get buttonText() {
        return this.data.buttonText;
    }
    set buttonText(buttonText) {
        this.update({
            buttonText
        });
    }
    get onClick() {
        return this.data.onClick;
    }
    set onClick(onClick) {
        this.update({
            onClick
        });
    }
    remove() {
        if (this.removed)
            return;
        Notices_1.notices.splice(this.index, 1);
        Notices_1.events.emit("noticeUpdate");
    }
}
exports.Notice = Notice;


/***/ }),

/***/ "./src/modules/PluginUtilities.ts":
/*!****************************************!*\
  !*** ./src/modules/PluginUtilities.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __webpack_require__(/*! ../components/components */ "./src/components/components.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const uuid_1 = __webpack_require__(/*! ./uuid */ "./src/modules/uuid.ts");
const TextInput_1 = __webpack_require__(/*! ../components/inputs/TextInput */ "./src/components/inputs/TextInput.tsx");
exports.default = new class PluginUtilities {
    constructor() { }
    renderSettings(settings) {
        let items = this.renderSettingsToReact(settings);
        let elem = React.createElement("div", { key: uuid_1.default() }, items);
        return Utils_1.default.ReactToHTMLElement(elem);
    }
    renderSettingsToReact(settings) {
        let items = [];
        settings.forEach(item => {
            if (typeof item !== "object")
                return items.push(item);
            if (item.props && "children" in item.props) {
                if (!Array.isArray(item.props.children))
                    item.props.children = [item.props.children];
                item.props.children = this.renderSettingsToReact(item.props.children);
            }
            if (!item.props)
                item.props = {};
            item.props.key = uuid_1.default();
            let component = Utils_1.default.getNestedProps(components_1.default, item.component);
            if (!component) {
                let warning = new TextInput_1.default({
                    value: `Warning: No component was found for: "${item.component}". Please correct your code.`,
                    disabled: true,
                    error: `Warning: No component was found for: "${item.component}". Please correct your code.`
                }).render();
                items.push(warning);
                return;
            }
            items.push(React.createElement(component, Object.create(item.props)));
        });
        return items;
    }
};


/***/ }),

/***/ "./src/modules/Unfreeze.ts":
/*!*********************************!*\
  !*** ./src/modules/Unfreeze.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function unfreeze(o) {
    var oo = undefined;
    if (o instanceof Array) {
        oo = [];
        var clone = function (v) {
            oo.push(v);
        };
        o.forEach(clone);
    }
    else if (o instanceof String) {
        oo = new String(o).toString();
    }
    else if (typeof o == 'object') {
        oo = {};
        for (var property in o) {
            oo[property] = o[property];
        }
    }
    return oo;
}
exports.default = unfreeze;
Object.unfreeze = unfreeze;


/***/ }),

/***/ "./src/modules/Utils.ts":
/*!******************************!*\
  !*** ./src/modules/Utils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LightcordApiError = void 0;
const ReactDOM = __webpack_require__(/*! react-dom */ "./src/alias/react-dom.ts");
const PluginUtilities_1 = __webpack_require__(/*! ./PluginUtilities */ "./src/modules/PluginUtilities.ts");
exports.default = new class Utils {
    constructor() { }
    ReactToHTMLElement(ReactElement) {
        const element = document.createElement("div");
        ReactDOM.render(ReactElement, element);
        return element;
    }
    get PluginUtils() { return PluginUtilities_1.default; }
    getNestedProps(obj, path) {
        let segments = path.split(".");
        for (let seg of segments) {
            obj = obj && (seg in obj) ? obj[seg] : undefined;
        }
        return obj;
    }
    DecimalColorToHex(color) {
        return "#" + color.toString(16).toUpperCase();
    }
    HexColorToDecimal(color) {
        color = color.replace(/[#;]/g, "");
        let res = parseInt(color, 16);
        if (isNaN(res))
            throw new Error(`Invalid color: ${color}`);
        return res;
    }
    removeDa(className) {
        if (!className)
            return className;
        return className.split(" ").filter(e => !e.startsWith("da-")).join(" ");
    }
    FindReact(dom, traverseUp = 0) {
        // taken from https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging#39165137
        const key = Object.keys(dom).find(key => key.startsWith("__reactInternalInstance$"));
        const domFiber = dom[key];
        if (domFiber == null)
            return null;
        // react <16
        if (domFiber._currentElement) {
            let compFiber = domFiber._currentElement._owner;
            for (let i = 0; i < traverseUp; i++) {
                compFiber = compFiber._currentElement._owner;
            }
            return compFiber._instance;
        }
        // react 16+
        const GetCompFiber = fiber => {
            //return fiber._debugOwner; // this also works, but is __DEV__ only
            let parentFiber = fiber.return;
            while (typeof parentFiber.type == "string") {
                parentFiber = parentFiber.return;
            }
            return parentFiber;
        };
        let compFiber = GetCompFiber(domFiber);
        for (let i = 0; i < traverseUp; i++) {
            compFiber = GetCompFiber(compFiber);
        }
        return compFiber.stateNode;
    }
    hasClass(classNames, className) {
        if (!classNames || !className)
            return false;
        const classnames = classNames.split(" ");
        for (let classname of this.removeDa(className).split(" ")) {
            if (!classnames.includes(classname))
                return false;
        }
        return true;
    }
    formatJSObject(obj) {
        if (["string", "number", "boolean", "bigint", "undefined"].includes(typeof obj))
            return JSON.stringify(obj);
        if (obj === null)
            return "null";
        if (typeof obj === "function")
            return String(obj);
        if (typeof obj === "symbol")
            return String(obj);
        if (Array.isArray(obj)) {
            if (!obj.length)
                return "[]";
            return `[\n    ${obj.map(e => this.formatJSObject(e)).join(",\n    ")}\n]`;
        }
        else {
            const keys = Object.keys(obj);
            if (keys.length === 0)
                return "{}";
            return `{\n    ${keys.map(key => {
                let original = key;
                if (typeof key === "symbol")
                    key = "[" + String(key) + "]";
                else {
                    if (typeof key === "number")
                        key = String(key);
                    else {
                        console.log(key);
                        if (isNaN(parseInt(key[0]))) {
                            key = this.formatJSObject(key);
                        }
                        else if (/[^\w\d_$]/g.test(key)) {
                            key = this.formatJSObject(key);
                        }
                    }
                }
                return `${key}: ${this.formatJSObject(obj[original])}`;
            })}\n}`;
        }
    }
};
class LightcordApiError extends Error {
    constructor() {
        super(...arguments);
        this.name = "LightcordApiError";
    }
}
exports.LightcordApiError = LightcordApiError;


/***/ }),

/***/ "./src/modules/WebpackLoader.ts":
/*!**************************************!*\
  !*** ./src/modules/WebpackLoader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackLoaderError = void 0;
const BDModules = window.BDModules || __webpack_require__(/*! ./BDModules */ "./src/modules/BDModules.ts");
exports.default = new class WebpackLoader {
    constructor() { }
    get(id) {
        return BDModules.get(id);
    }
    find(filter) {
        let result = BDModules.get(filter)[0];
        if (!result) {
            console.warn(filter, "couldn't find the module.");
        }
        return result;
    }
    findByUniqueProperties(props) {
        return BDModules.get((mod) => {
            if (mod.__esModule && ("default" in mod)) {
                let doesMatch = true;
                for (let prop of props) {
                    if (!Object.prototype.hasOwnProperty.call(mod.default, prop))
                        doesMatch = false;
                }
                if (doesMatch)
                    return true;
            }
            for (let prop of props) {
                if (!Object.prototype.hasOwnProperty.call(mod, prop))
                    return false;
            }
            return true;
        })[0];
    }
    filter(filter) {
        return BDModules.get(filter);
    }
    filterByUniqueProperties(props) {
        return BDModules.get((mod) => {
            if (mod.__esModule && ("default" in mod)) {
                let doesMatch = true;
                for (let prop of props) {
                    if (!Object.prototype.hasOwnProperty.call(mod.default, prop))
                        doesMatch = false;
                }
                if (doesMatch)
                    return true;
            }
            for (let prop of props) {
                if (!Object.prototype.hasOwnProperty.call(mod, prop))
                    return false;
            }
            return true;
        });
    }
};
class WebpackLoaderError extends Error {
    constructor(message = "") {
        message += "\n\tThis error is related to Lightcord not being able to find a WebpackModule. \n\tPlease show this error and a few lines of logs above this error to the devs. \n\tOpen an issue on https://github.com/Lightcord/Lightcord or in our discord server.";
        super(message);
        this.name = "WebpackLoaderError";
    }
}
exports.WebpackLoaderError = WebpackLoaderError;


/***/ }),

/***/ "./src/modules/cloneNullProto.ts":
/*!***************************************!*\
  !*** ./src/modules/cloneNullProto.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Recreate the given object without the __proto__. Useful for better formatting when output in console.
 * @param obj The object to recreate
 */
function cloneNullProto(obj) {
    let o = Object.create(null);
    Object.keys(obj).forEach(k => {
        o[k] = obj[k];
    });
    return o;
}
exports.default = cloneNullProto;


/***/ }),

/***/ "./src/modules/environnement.ts":
/*!**************************************!*\
  !*** ./src/modules/environnement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isImported = exports.isNative = void 0;
exports.isNative = typeof window.BDModules === "undefined";
exports.isImported = typeof window.BDModules !== "undefined";


/***/ }),

/***/ "./src/modules/excludeProperties.ts":
/*!******************************************!*\
  !*** ./src/modules/excludeProperties.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function excludeProperties(obj, props) {
    let newObj = {};
    Object.keys(obj).forEach((k) => {
        if (props.includes(k))
            return;
        newObj[k] = obj[k];
    });
    return newObj;
}
exports.default = excludeProperties;


/***/ }),

/***/ "./src/modules/noop.ts":
/*!*****************************!*\
  !*** ./src/modules/noop.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function NOOP() { }
exports.default = NOOP;


/***/ }),

/***/ "./src/modules/patchers.ts":
/*!*********************************!*\
  !*** ./src/modules/patchers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const Notices_1 = __webpack_require__(/*! ../components/private/Notices */ "./src/components/private/Notices.tsx");
const environnement_1 = __webpack_require__(/*! ./environnement */ "./src/modules/environnement.ts");
function patch() {
    /** START NOTICE */
    getModule(e => e.default && e.default.displayName === "ConnectedAppView")
        .then(async (mod) => {
        const appClasses = await getModule(e => e.hasNotice);
        const buildRender = original => {
            return function render() {
                const returnValue = original.call(this, ...arguments);
                const newchildren = [];
                let children = returnValue.props.children[1].props.children;
                if (!Array.isArray(children))
                    children = [children];
                newchildren.push(children[0]);
                newchildren.push(React.createElement(Notices_1.default, { container: this }));
                newchildren.push(children[1]);
                returnValue.props.children[1].props.children = newchildren;
                returnValue.props.children[1].props.children[2].props.children[0].props.render = buildRenderChannelSidebar(returnValue.props.children[1].props.children[2].props.children[0].props.render);
                return returnValue;
            };
        };
        const buildRenderChannelSidebar = original => {
            return function renderChannelSidebar() {
                const returnValue = original.call(this, ...arguments);
                const hasNotice = Notices_1.notices.length > 0;
                if (!hasNotice)
                    return returnValue;
                if (!Utils_1.default.hasClass(returnValue.props.className, appClasses.hasNotice)) {
                    returnValue.props.className += " " + Utils_1.default.removeDa(appClasses.hasNotice);
                }
                return returnValue;
            };
        };
        mod.default.prototype.render = buildRender(mod.default.prototype.render);
        (async function () {
            const base = document.querySelector("." + Utils_1.default.removeDa(appClasses.base));
            if (!base)
                throw new Error(`Could not find base here`);
            const elem = Utils_1.default.FindReact(base);
            elem.render = buildRender(elem.render);
            elem.forceUpdate();
        })();
    });
    /** END NOTICE */
    if (environnement_1.isNative) {
        /** START USERPOPOUT PATCH */
        awaitLogin()
            .then(async () => {
            let UserPopout = await getModule(e => e.default && e.default.displayName === "FluxContainer(ForwardRef(SubscribeGuildMembersContainer(UserPopout)))");
            const userModule = await getModule(e => e.default && e.default.getCurrentUser);
            const render1 = new UserPopout.default({ userId: userModule.default.getCurrentUser().id, guildId: null, channelId: null, disableUserProfileLink: true }).render();
            const PopoutProps = render1.props;
            const render2 = render1.type.render(PopoutProps, null);
            const render3 = new render2.type(render2.props).render();
            const UserPopoutComponent = render3.type;
            if (!UserPopoutComponent)
                throw new Error(`Couldn't find the UserPopoutComponent component.`);
            const render = UserPopoutComponent.prototype.render;
            UserPopoutComponent.prototype.render = function () {
                const returnValue = render.call(this, ...arguments);
                try {
                    returnValue.props.children.props["data-user-id"] = this.props.user.id;
                }
                catch (e) {
                    console.error(e);
                }
                return returnValue;
            };
        });
        /** END USERPOPOUT PATCH*/
        /** START USERPROFILE PATCH */
        awaitLogin()
            .then(async () => {
            let UserProfile = await getModule(e => e.default && e.default.displayName === "UserProfile");
            const userModule = await getModule(e => e.default && e.default.getCurrentUser);
            const render1 = new UserProfile.default({
                user: userModule.default.getCurrentUser()
            }).render();
            const render2 = new render1.type(render1.props).render();
            const render3 = render2.type.render(render2.props, null);
            const render4 = new render3.type(render3.props).render();
            const UserProfileComponent = render4.type;
            if (!UserProfileComponent)
                throw new Error(`Couldn't find the UserProfileComponent component.`);
            const render = UserProfileComponent.prototype.render;
            UserProfileComponent.prototype.render = function () {
                const returnValue = render.call(this, ...arguments);
                console.log(returnValue);
                try {
                    returnValue.props.children.props["data-user-id"] = this.props.user.id;
                }
                catch (e) {
                    console.error(e);
                }
                return returnValue;
            };
        });
        /** END USERPROFILE PATCH */
    }
    // TODO: Add in app-notifications / confirmations.
    /** START IN-APP NOTIFICATIONS */
    //getModule(e => true)
    /** END IN-APP NOTIFICATIONS */
}
exports.patch = patch;
function getModule(filter) {
    return new Promise((resolve) => {
        window.Lightcord.Api.ensureExported(filter)
            .then(resolve)
            .catch(err => {
            console.error("[LIGHTCORD]", err, filter);
        });
    });
}
let hasCompletedLogin = false;
let loginPromise;
function awaitLogin() {
    if (hasCompletedLogin)
        return Promise.resolve();
    if (loginPromise)
        return loginPromise;
    return loginPromise = new Promise((resolve) => {
        let isResolved = false;
        window.Lightcord.DiscordModules.dispatcher.subscribe("CONNECTION_OPEN", (ev) => {
            if (isResolved)
                return;
            hasCompletedLogin = true;
            resolve();
            isResolved = true;
        });
    });
}
window.Lightcord.DiscordModules.dispatcher.subscribe("LOGOUT", (ev) => {
    hasCompletedLogin = false;
    loginPromise = undefined;
});


/***/ }),

/***/ "./src/modules/uuid.ts":
/*!*****************************!*\
  !*** ./src/modules/uuid.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
const uuidv4 = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
let uuid = Object.assign(function () {
    return uuidv4();
}, { v1: () => uuidv1(), v4: () => uuidv4() });
exports.default = uuid;


/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "powercord/webpack":
/*!************************************!*\
  !*** external "powercord/webpack" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("powercord/webpack");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQWxlcnRCb3gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQ29kZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1NldHRpbmdTdWJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9TZXR0aW5nc1RpdGxlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1RhYnMudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVGl0bGUudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVG9vbHRpcC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQ29sb3JQaWNrZXIudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1JhZGlvR3JvdXAudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Td2l0Y2gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvcHJpdmF0ZS9FcnJvckNhdGNoZXIudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9wcml2YXRlL05vdGljZXMudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9CRE1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvRGlzY29yZFRvb2xzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1BsdWdpblV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9VbmZyZWV6ZS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9VdGlscy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9XZWJwYWNrTG9hZGVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL2Nsb25lTnVsbFByb3RvLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL2Vudmlyb25uZW1lbnQudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvZXhjbHVkZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvbm9vcC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9wYXRjaGVycy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy91dWlkLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcInBvd2VyY29yZC93ZWJwYWNrXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92MVwiIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcInV1aWQvdjRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsZ0ZBQWdGO0FBQ2hGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLE1BQU0s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VUFBVTtZQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVTtRQUUzQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDeEcsSUFBRyxVQUFVO1lBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxVQUFVO1FBRTNDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQztRQUM5RSxJQUFHLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBRTFELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZELElBQUcsS0FBSztZQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSztRQUU1QixJQUFJLE1BQU0sR0FBRyxnQ0FBUSxJQUFJLEVBQUMsUUFBUSxFQUM5QixTQUFTLEVBQUUsR0FBRyxVQUFVLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxLQUFLLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxFQUM1TixLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMs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QUs7UUFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQzNFLElBQUcsVUFBVTtnQkFBQyxPQUFNO1lBQ3BCLGlCQUFpQixHQUFHLElBQUk7WUFDeEIsT0FBTyxFQUFFO1lBQ1QsVUFBVSxHQUFHLElBQUk7UUFDckIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDbEUsaUJBQWlCLEdBQUcsS0FBSztJQUN6QixZQUFZLEdBQUcsU0FBUztBQUM1QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVJRiw2REFBaUM7QUFDakMsNkRBQWlDO0FBR2pDLElBQUksSUFBSSxHQUEyQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdELE9BQU8sTUFBTSxFQUFFO0FBQ25CLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQztBQUU1QyxrQkFBZSxJQUFJOzs7Ozs7Ozs7Ozs7QUNSbkIsbUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgUmVhY3RET01TZWxlY3RvciB9IGZyb20gXCIuL3NlbGVjdG9yc1wiXHJcblxyXG4vLyBiYWl0IHR5cGVzY3JpcHQgaW50byB0aGlua2luZyB0aGlzIGlzIG5vdCByZWFjdERPTSBzbyBubyBjaXJjdWxhciBkZXBlbmRlbmN5LlxyXG53aW5kb3cuUmVhY3RET00gPSAod2luZG93W1wiUmVhY1wiK1widERPTVwiXSB8fCAvLyBJZiBpbiBMaWdodGNvcmRcclxuICAgICgoKT0+eyAvLyBJZiBpbiBTdGFuZGFyZCBCZXR0ZXJEaXNjb3JkXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LkJkQXBpLlJlYWN0RE9NXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0pKCkgfHxcclxuICAgICgoKT0+eyAvLyBJZiBpbiBQb3dlcmNvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKFwicG93ZXJjb3JkL3dlYnBhY2tcIilcclxuICAgICAgICAgICAgcmV0dXJuIHdlYnBhY2suUmVhY3RET01cclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSB8fCBcclxuICAgICgoKT0+eyAvLyBJZiBpbiBFbmhhbmNlZERpc2NvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRURBcGkuUmVhY3RET01cclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSkgYXMgdHlwZW9mIGltcG9ydChcInJlYWN0LWRvbVwiKVxyXG5cclxuZXhwb3J0ID0gKHdpbmRvdy5SZWFjdERPTSBhcyBhbnkpIiwiaW1wb3J0IERpc2NvcmRCdXR0b24gZnJvbSBcIi4vaW5wdXRzL0J1dHRvblwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vaW5wdXRzL1N3aXRjaFwiXHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuL2lucHV0cy9SYWRpb0dyb3VwXCJcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuL2lucHV0cy9UZXh0QXJlYVwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4vaW5wdXRzL1RleHRJbnB1dFwiXHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9pbnB1dHMvRHJvcGRvd25cIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vZ2VuZXJhbC9UaXRsZVwiXHJcbmltcG9ydCBTZXR0aW5nc1RpdGxlIGZyb20gXCIuL2dlbmVyYWwvU2V0dGluZ3NUaXRsZVwiXHJcbmltcG9ydCBUYWJzLCB7IFRhYiB9IGZyb20gXCIuL2dlbmVyYWwvVGFic1wiXHJcbmltcG9ydCBTZXR0aW5nU3ViVGl0bGUgZnJvbSBcIi4vZ2VuZXJhbC9TZXR0aW5nU3ViVGl0bGVcIlxyXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuL2dlbmVyYWwvQ29kZUJsb2NrXCJcclxuaW1wb3J0IGNsb25lTnVsbFByb3RvIGZyb20gXCIuLi9tb2R1bGVzL2Nsb25lTnVsbFByb3RvXCJcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vZ2VuZXJhbC9Ub29sdGlwXCJcclxuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuL2lucHV0cy9Db2xvclBpY2tlclwiXHJcbmltcG9ydCBBbGVydEJveCBmcm9tIFwiLi9nZW5lcmFsL0FsZXJ0Qm94XCJcclxuaW1wb3J0IHsgY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyB9IGZyb20gXCIuL3ByaXZhdGUvRXJyb3JDYXRjaGVyXCJcclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBQcm94aWVkID0gY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhSYWRpb0dyb3VwKVxyXG5leHBvcnQgZGVmYXVsdCBjbG9uZU51bGxQcm90byh7XHJcbiAgICBpbnB1dHM6IGNsb25lTnVsbFByb3RvKHtcclxuICAgICAgICBCdXR0b246IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoRGlzY29yZEJ1dHRvbiksXHJcbiAgICAgICAgU3dpdGNoOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFN3aXRjaCksXHJcbiAgICAgICAgQ2hvaWNlczogUmFkaW9Hcm91cFByb3hpZWQsXHJcbiAgICAgICAgUmFkaW9Hcm91cDogUmFkaW9Hcm91cFByb3hpZWQsXHJcbiAgICAgICAgVGV4dEFyZWE6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVGV4dEFyZWEpLFxyXG4gICAgICAgIFRleHRJbnB1dDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhUZXh0SW5wdXQpLFxyXG4gICAgICAgIERyb3Bkb3duOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKERyb3Bkb3duKSxcclxuICAgICAgICBDb2xvclBpY2tlcjogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhDb2xvclBpY2tlcilcclxuICAgIH0pLFxyXG4gICAgZ2VuZXJhbDogY2xvbmVOdWxsUHJvdG8oe1xyXG4gICAgICAgIFRpdGxlOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFRpdGxlKSxcclxuICAgICAgICBTZXR0aW5nc1RpdGxlOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFNldHRpbmdzVGl0bGUpLFxyXG4gICAgICAgIFNldHRpbmdTdWJUaXRsZTogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhTZXR0aW5nU3ViVGl0bGUpLFxyXG4gICAgICAgIFRhYnM6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVGFicyksXHJcbiAgICAgICAgQ29kZUJsb2NrOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKENvZGVCbG9jayksXHJcbiAgICAgICAgVG9vbHRpcDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhUb29sdGlwKSxcclxuICAgICAgICBBbGVydEJveDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhBbGVydEJveClcclxuICAgIH0pXHJcbn0pIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIEFsZXJ0Qm94UHJvcHMgPSB7XHJcbiAgICB0eXBlOiBcIndhcm5cInxcImluZm9cInxcImRhbmdlclwifFwiZXJyb3JcInxcInN1Y2Nlc3NcIixcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGV8c3RyaW5nXHJcbn1cclxuXHJcbmxldCBBbGVydEJveE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QWxlcnRCb3hQcm9wcz4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpBbGVydEJveFByb3BzID0ge1xyXG4gICAgICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQWxlcnRCb3hNb2R1bGVzIHx8IChBbGVydEJveE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiTWFya2Rvd25cIiAmJiBlLmRlZmF1bHQuZGVmYXVsdFByb3BzLnBhcnNlcikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICBNYXJrZG93blxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHdyYXBcclxuICAgICAgICBsZXQgY2hpbGRyZW5cclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIHdyYXAgPSBNYXJrZG93bi5wcm90b3R5cGUucmVuZGVyLmNhbGwoe1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgfSwgTWFya2Rvd24uZGVmYXVsdFByb3BzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjaGlsZHJlbiA9IHdyYXAucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd3JhcCA9IE1hcmtkb3duLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9LCBNYXJrZG93bi5kZWZhdWx0UHJvcHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIH1cclxuICAgICAgICB3cmFwLnByb3BzLmNoaWxkcmVuID0gPGRpdiBjbGFzc05hbWU9e1wibGMtYWxlcnQtYm94IGxjLWFsZXJ0LWJveC1cIit0aGlzLnByb3BzLnR5cGV9PlxyXG4gICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJsYy1ibG9ja3F1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICByZXR1cm4gd3JhcFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCIqKipEaXNjb3JkJ3MqKiogKipNYXJrZG93bioqIF9pc18gW3N1cHBvcnRlZF0oaHR0cHM6Ly9nb29nbGUuY29tKSBvciB5b3UgY2FuIGp1c3QgaW5zZXJ0IHlvdXIgb3duIHJlYWN0IGNoaWxkcy5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbmZvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICBpbmZvOiBcIllvdSBjYW4gaW5zZXJ0IG1hcmtkb3duIChhcyBzdHJpbmcpIG9yIG5vcm1hbCByZWFjdCBjaGlsZHNcIixcclxuICAgICAgICB3YXJuOiBcIkFsbCBzdHJpbmcgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBtYXJrZG93bi4gSWYgeW91IHdhbnQgcmF3IHN0cmluZywgcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdHJpbmcgaW5zaWRlLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcblxyXG50eXBlIENvZGVCbG9ja1Byb3BzID0ge1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxufVxyXG5cclxubGV0IENvZGVCbG9ja01vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZUJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvZGVCbG9ja1Byb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkNvZGVCbG9ja1Byb3BzID0ge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcInBsYWludGV4dFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQ29kZUJsb2NrTW9kdWxlcyB8fCAoQ29kZUJsb2NrTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5tYXJrdXApLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1lc3NhZ2VDb250ZW50KSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5oaWdobGlnaHQpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1hcmdpbkJvdHRvbTgpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtZXNzYWdlTW9kdWxlMSxcclxuICAgICAgICAgICAgbWVzc2FnZU1vZHVsZTIsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhck1vZHVsZTEsXHJcbiAgICAgICAgICAgIGhpZ2h0bGlnaHRKUyxcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlMVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMucHJvcHMubGFuZ3VhZ2UgPT09IFwicGxhaW50ZXh0XCIgPyA8Y29kZSBjbGFzc05hbWU9e2Ake3Njcm9sbGJhck1vZHVsZTEuc2Nyb2xsYmFyR2hvc3RIYWlybGluZX0gaGxqc2B9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxyXG4gICAgICAgIDwvY29kZT4gOiA8Y29kZSBjbGFzc05hbWU9e2Ake3Njcm9sbGJhck1vZHVsZTEuc2Nyb2xsYmFyR2hvc3RIYWlybGluZX0gaGxqc2B9IFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaGlnaHRsaWdodEpTLmhpZ2hsaWdodCh0aGlzLnByb3BzLmxhbmd1YWdlLCB0aGlzLnByb3BzLmNvbnRlbnQpLnZhbHVlfX0gLz5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgJHttZXNzYWdlTW9kdWxlMS5tYXJrdXB9ICR7bWVzc2FnZU1vZHVsZTIubWVzc2FnZUNvbnRlbnR9YH0+XHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7Y29kZX1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXJnaW5Nb2R1bGUxLm1hcmdpbkJvdHRvbTh9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJjb25zb2xlLmxvZyhcXFwiRXhlbXBsZSBjb2RlXFxcIilcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJqc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcInBsYWludGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4uQ29kZUJsb2NrLnByb3RvdHlwZS5tb2R1bGVzWzNdLmxpc3RMYW5ndWFnZXMoKS5maWx0ZXIoZSA9PiBlICE9PSBcImpzXCIpLm1hcChlID0+ICh7bGFuZ3VhZ2U6IGV9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTZXR0aW5nU3ViVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdTdWJUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nU3ViVGl0bGVQcm9wcz4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpTZXR0aW5nU3ViVGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLm1hcmdpblRvcDYwID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImg1XCJdKSxcclxuICAgICAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcInNpemUxNFwiXSksXHJcbiAgICAgICAgICAgIHdpbmRvdy5MaWdodGNvcmQuQXBpLldlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjb2xvclN0YW5kYXJkXCJdKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlLFxyXG4gICAgICAgICAgICB0aXRsZU1vZHVsZSxcclxuICAgICAgICAgICAgc2l6ZU1vZHVsZSxcclxuICAgICAgICAgICAgY29sb3JNb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke2NvbG9yTW9kdWxlLmNvbG9yU3RhbmRhcmR9ICR7c2l6ZU1vZHVsZS5zaXplMTR9ICR7dGl0bGVNb2R1bGUuaDV9ICR7bWFyZ2luTW9kdWxlLm1hcmdpbkJvdHRvbTR9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgPSsgXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIkV4ZW1wbGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIFNldHRpbmdzVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ3NUaXRsZVByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogU2V0dGluZ3NUaXRsZVByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUubWFyZ2luVG9wNjAgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke21hcmdpbk1vZHVsZS5tYXJnaW5Ub3A2MH0gJHttYXJnaW5Nb2R1bGUubWFyZ2luQm90dG9tMjB9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgPSsgXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlNldHRpbmdzVGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogW1wiXCJdLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJFeGVtcGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCB7IFJlYWN0Tm9kZSwgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxyXG5cclxudHlwZSBUYWJzUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZSxcclxuICAgIHRhYnM6IHtsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nfVtdLFxyXG4gICAgYWN0aXZlPzogc3RyaW5nXHJcbiAgICBvbkNoYW5nZT86ICh0YWI6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYnNQcm9wcywge1xyXG4gICAgYWN0aXZlOiBzdHJpbmdcclxufT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUYWJzUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgdGFiczogW3tsYWJlbDogXCJObyB0YWJzIHdhcyBwYXNzZWQgdG8gPFRhYnM+LlwiLCBpZDogXCJub25lXCJ9XSxcclxuICAgICAgICBhY3RpdmU6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgc3R5bGU6IHt9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlRhYnNQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSB8fCBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRhYnNFbGVtZW50czpUYWJbXSA9IFtdXHJcbiAgICBcclxuICAgIGdldCB0YWJzKCk6VGFic1tcInByb3BzXCJdW1widGFic1wiXXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50YWJzIHx8IFtdXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFiKHRhYjpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRhYiA9PT0gdGhpcy5zdGF0ZS5hY3RpdmUpcmV0dXJuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNoYW5nZSl0aGlzLnByb3BzLm9uQ2hhbmdlKHRhYilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlOiB0YWJcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudGFic0VsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEFjdGl2ZSh0YWIgPT09IGUucHJvcHMuaWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJsYy10YWJXcmFwcGVyXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxjLXRhYm5hdlwiIHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy50YWJzLm1hcCh0YWIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYiwge1RhYkNvbnRhaW5lcjogdGhpcywgdGl0bGU6IHRhYi5sYWJlbCwgaWQ6IHRhYi5pZCwga2V5OiBidG9hKHRhYi5sYWJlbCtcIjpcIit0YWIuaWQpfSlcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYy10YWJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9ICAgXHJcblxyXG4gICAgaXNBY3RpdmUodGFiKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmUgPT09IHRhYlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogKDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzMHB4IDMwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibGMtdGFiLWJveC1zaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5QcmV2aWV3IHRhYnM8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjdGl2ZSB0YWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJVbmFjdGl2ZSB0YWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh0YWJJZCkgPT4ge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XHJcbiAgICBUYWJDb250YWluZXI6IFRhYnMsIFxyXG4gICAgdGl0bGU6IHN0cmluZywgXHJcbiAgICBpZDogc3RyaW5nXHJcbn0sIHtcclxuICAgIGFjdGl2ZTogYm9vbGVhblxyXG59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogcHJvcHMuVGFiQ29udGFpbmVyLmlzQWN0aXZlKHByb3BzLmlkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5UYWJDb250YWluZXIudGFic0VsZW1lbnRzLnB1c2godGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUoaXNBY3RpdmU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogISFpc0FjdGl2ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBsYy1uYXZJdGVtYFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgbGMtbmF2SXRlbUFjdGl2ZWBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgbGMtbmF2SXRlbUluYWN0aXZlYFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuVGFiQ29udGFpbmVyLmNoYW5nZVRhYih0aGlzLnByb3BzLmlkKVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGl0bGVQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRpdGxlUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRpdGxlTW9kdWxlcyB8fCAoVGl0bGVNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5jb2xvclN0YW5kYXJkID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuc2l6ZTMyID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuaDIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBjb2xvck1vZHVsZSxcclxuICAgICAgICAgICAgc2l6ZU1vZHVsZSxcclxuICAgICAgICAgICAgdGl0bGVNb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke2NvbG9yTW9kdWxlLmNvbG9yU3RhbmRhcmR9ICR7c2l6ZU1vZHVsZS5zaXplMTR9ICR7dGl0bGVNb2R1bGUuaDJ9ICR7dGl0bGVNb2R1bGUuZGVmYXVsdENvbG9yfSAke3RpdGxlTW9kdWxlLmRlZmF1bHRNYXJnaW5oMn1gXHJcbiAgICAgICAgaWYocHJvcHMuY2xhc3NOYW1lKWNsYXNzTmFtZSArPSBcIiBcIitwcm9wcy5jbGFzc05hbWVcclxuXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICBjbGFzc05hbWU6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiRXhlbXBsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGV4Y2x1ZGVQcm9wZXJ0aWVzIGZyb20gXCIuLi8uLi9tb2R1bGVzL2V4Y2x1ZGVQcm9wZXJ0aWVzXCJcclxuXHJcbnR5cGUgVG9vbHRpcERhdGEgPSB7XHJcbiAgICBvbkNsaWNrKCk6dm9pZFxyXG4gICAgb25Nb3VzZUVudGVyKCk6dm9pZFxyXG4gICAgb25Nb3VzZUxlYXZlKCk6dm9pZFxyXG4gICAgb25Db250ZXh0TWVudSgpOnZvaWRcclxuICAgIFwiYXJpYS1sYWJlbFwiOiBzdHJpbmdcclxufVxyXG50eXBlIFRvb2x0aXBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOlJlYWN0Tm9kZSxcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIHBvc2l0aW9uPzogVG9vbHRpcFBvc2l0aW9uLFxyXG4gICAgY29sb3I/OiBUb29sdGlwQ29sb3JcclxufVxyXG5cclxubGV0IFRvb2x0aXBNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VG9vbHRpcFByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUb29sdGlwTW9kdWxlcyB8fCAoVG9vbHRpcE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVG9vbHRpcFwiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVG9vbHRpcFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gZXhjbHVkZVByb3BlcnRpZXModGhpcy5wcm9wcywgW1wiY2hpbGRyZW5cIl0pXHJcblxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAuZGVmYXVsdCwgcHJvcHMsIChkYXRhOlRvb2x0aXBEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRvb2x0aXBQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICB0ZXh0OiBcIk5vIHRleHQgd2FzIHBhc3NlZCB0byBUb29sdGlwXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgY29sb3I6IFwiYnJhbmRcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuY3JlYXRlRWxlbWVudCh3aW5kb3cuTGlnaHRjb3JkLkFwaS5Db21wb25lbnRzLmlucHV0cy5CdXR0b24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vazogXCJnaG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LCBcIkhvdmVyIHRoaXMgYnV0dG9uIHRvIHNlZSB0aGUgdG9vbHRpcFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkV4YW1wbGUgVG9vbHRpcCBUZXh0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtdXHJcbiAgICAgICAgICAgIFRvb2x0aXAuQ29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChjb2xvcnMpXHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICBUb29sdGlwLlBvc2l0aW9ucy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKHBvc2l0aW9ucylcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBQb3NpdGlvbnM6VG9vbHRpcFBvc2l0aW9uW10gPSBbXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJib3R0b21cIl1cclxuICAgIHN0YXRpYyBDb2xvcnM6VG9vbHRpcENvbG9yW10gPSBbXCJibGFja1wiLCBcImdyZXlcIiwgXCJicmFuZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicmVkXCJdXHJcbn1cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5leHBvcnQgdHlwZSBUb29sdGlwUG9zaXRpb24gPSBcInRvcFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImJvdHRvbVwiXHJcbmV4cG9ydCB0eXBlIFRvb2x0aXBDb2xvciA9IFwiYmxhY2tcIiB8IFwiZ3JleVwiIHwgXCJicmFuZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicmVkXCIiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5sZXQgQnV0dG9uTW9kdWxlc1xyXG5cclxudHlwZSBCdXR0b25Qcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgb25DbGljaz86IE1vdXNlRXZlbnRIYW5kbGVyLFxyXG4gICAgY29sb3I/OiBCdXR0b25Db2xvcixcclxuICAgIHdyYXBwZXI/OiBib29sZWFuLFxyXG4gICAgbG9vaz86IEJ1dHRvbkxvb2ssXHJcbiAgICBzaXplPzogQnV0dG9uU2l6ZSxcclxuICAgIGhvdmVyQ29sb3I/OiBCdXR0b25Ib3ZlcnMsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QnV0dG9uUHJvcHMsIHtob3ZlcjogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkJ1dHRvblByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDb2xvcnM6QnV0dG9uQ29sb3JbXSA9IFtcImJyYW5kXCIsIFwiZ3JleVwiLCBcInJlZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicHJpbWFyeVwiLCBcImxpbmtcIiwgXCJ3aGl0ZVwiLCBcImJsYWNrXCIsIFwidHJhbnNwYXJlbnRcIl1cclxuICAgIHN0YXRpYyBMb29rczpCdXR0b25Mb29rW10gPSBbXCJmaWxsZWRcIiwgXCJpbnZlcnRlZFwiLCBcIm91dGxpbmVkXCIsIFwiZ2hvc3RcIiwgXCJsaW5rXCIsIFwiYmxhbmtcIl1cclxuICAgIHN0YXRpYyBTaXplczpCdXR0b25TaXplW10gPSBbXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCIsIFwieGxhcmdlXCIsIFwibWluXCIsIFwibWF4XCIsIFwiaWNvblwiLCBcIm5vbmVcIl1cclxuICAgIHN0YXRpYyBIb3ZlckNvbG9yczogQnV0dG9uSG92ZXJzW10gPSBbXCJkZWZhdWx0XCIsIC4uLkJ1dHRvbi5Db2xvcnNdXHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXsgLy8gY2FjaGluZyBtb2R1bGVzXHJcbiAgICAgICAgcmV0dXJuIEJ1dHRvbk1vZHVsZXMgfHwgKEJ1dHRvbk1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJfaG9yaXpvbnRhbFwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjb2xvclRyYW5zcGFyZW50XCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImJ1dHRvbldyYXBwZXJcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiQnV0dG9uQ29sb3JzXCJdKSxcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIGZsZXhNb2R1bGUsXHJcbiAgICAgICAgICAgIGV1aE1vZHVsZTEsXHJcbiAgICAgICAgICAgIGJ1dHRvbk1vZHVsZSxcclxuICAgICAgICAgICAgY29sb3JzTW9kdWxlLFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzOkJ1dHRvblByb3BzID0ge31cclxuICAgICAgICBpZih0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgaWYoXCJjb2xvclwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY29sb3IgPSB0aGlzLnByb3BzLmNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJjaGlsZHJlblwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJvbkNsaWNrXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gdGhpcy5wcm9wcy5vbkNsaWNrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJ3cmFwcGVyXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy53cmFwcGVyID0gISF0aGlzLnByb3BzLndyYXBwZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImxvb2tcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxvb2sgPSB0aGlzLnByb3BzLmxvb2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcInNpemVcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNpemUgPSB0aGlzLnByb3BzLnNpemVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImhvdmVyQ29sb3JcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSB0aGlzLnByb3BzLmhvdmVyQ29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImRpc2FibGVkXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWRcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmNvbG9yKXtcclxuICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBwcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkNvbG9yXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uQ29sb3JzLmluY2x1ZGVzKHByb3BzLmNvbG9yKSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jb2xvciA9IEJ1dHRvbi5Db2xvcnNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IEJ1dHRvbi5Db2xvcnNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmxvb2spe1xyXG4gICAgICAgICAgICBwcm9wcy5sb29rID0gcHJvcHMubG9vay50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkxvb2tcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Mb29rcy5pbmNsdWRlcyhwcm9wcy5sb29rKSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5sb29rID0gQnV0dG9uLkxvb2tzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMubG9vayA9IEJ1dHRvbi5Mb29rc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMuc2l6ZSl7XHJcbiAgICAgICAgICAgIHByb3BzLnNpemUgPSBwcm9wcy5zaXplLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uU2l6ZVxyXG4gICAgICAgICAgICBpZighQnV0dG9uLlNpemVzLmluY2x1ZGVzKHByb3BzLnNpemUpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNpemUgPSBCdXR0b24uU2l6ZXNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5zaXplID0gQnV0dG9uLlNpemVzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5ob3ZlckNvbG9yKXtcclxuICAgICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25Ib3ZlcnNcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Ib3ZlckNvbG9ycy5pbmNsdWRlcyhwcm9wcy5ob3ZlckNvbG9yKSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gQnV0dG9uLkhvdmVyQ29sb3JzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA9IEJ1dHRvbi5Ib3ZlckNvbG9yc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvblNpemUgPSBwcm9wcy5zaXplID8gY29sb3JzTW9kdWxlLkJ1dHRvblNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV0gfHwgXCJcIiA6IFwiXCJcclxuICAgICAgICBpZihidXR0b25TaXplKWJ1dHRvblNpemUgPSBcIiBcIiArIGJ1dHRvblNpemVcclxuXHJcbiAgICAgICAgbGV0IGhvdmVyQ29sb3IgPSBwcm9wcy5ob3ZlckNvbG9yID8gY29sb3JzTW9kdWxlLkJ1dHRvbkhvdmVyc1twcm9wcy5ob3ZlckNvbG9yLnRvVXBwZXJDYXNlKCldIHx8IFwiXCIgOiBcIlwiXHJcbiAgICAgICAgaWYoaG92ZXJDb2xvcilob3ZlckNvbG9yID0gXCIgXCIgKyBob3ZlckNvbG9yXHJcblxyXG4gICAgICAgIHByb3BzLm9uQ2xpY2sgPSB0eXBlb2YgcHJvcHMub25DbGljayA9PT0gXCJmdW5jdGlvblwiID8gcHJvcHMub25DbGljayA6ICgpID0+IHt9XHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLndyYXBwZXIgIT09IFwiYm9vbGVhblwiKXByb3BzLndyYXBwZXIgPSB0cnVlXHJcblxyXG4gICAgICAgIGxldCBob3ZlciA9IHRoaXMuc3RhdGUuaG92ZXIgPyBldWhNb2R1bGUxLmhhc0hvdmVyIDogXCJcIlxyXG4gICAgICAgIGlmKGhvdmVyKWhvdmVyID0gXCIgXCIgKyBob3ZlclxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uID0gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZmxleE1vZHVsZS5mbGV4Q2hpbGR9ICR7ZXVoTW9kdWxlMS5idXR0b259ICR7Y29sb3JzTW9kdWxlLkJ1dHRvbkxvb2tzW3Byb3BzLmxvb2sudG9VcHBlckNhc2UoKV19ICR7Y29sb3JzTW9kdWxlLkJ1dHRvbkNvbG9yc1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXX0ke2J1dHRvblNpemV9JHtob3ZlckNvbG9yfSR7aG92ZXJ9ICR7ZXVoTW9kdWxlMS5ncm93fWB9IFxyXG4gICAgICAgICAgICBzdHlsZT17e2ZsZXg6IFwiMCAxIGF1dG9cIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30gb25Nb3VzZUVudGVyPXsoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFob3ZlckNvbG9yKXJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXI6IHRydWV9KVxyXG4gICAgICAgICAgICB9fSBvbk1vdXNlTGVhdmU9eyhldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWhvdmVyQ29sb3IpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9fSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXVoTW9kdWxlMS5jb250ZW50c30+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICBpZihwcm9wcy53cmFwcGVyKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtidXR0b25Nb2R1bGUuYnV0dG9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBjb2xvciBvZiBCdXR0b24uQ29sb3JzKXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChjb2xvcnMpXHJcbiAgICAgICAgICAgIGxldCBsb29rcyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgbG9vayBvZiBCdXR0b24uTG9va3Mpe1xyXG4gICAgICAgICAgICAgICAgbG9va3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vazogbG9va1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGxvb2tzKVxyXG4gICAgICAgICAgICBsZXQgc2l6ZXMgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IHNpemUgb2YgQnV0dG9uLlNpemVzKXtcclxuICAgICAgICAgICAgICAgIHNpemVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChzaXplcylcclxuICAgICAgICAgICAgbGV0IGhvdmVycyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgaG92ZXIgb2YgQnV0dG9uLkhvdmVyQ29sb3JzKXtcclxuICAgICAgICAgICAgICAgIGhvdmVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiBob3ZlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGhvdmVycylcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe2NoaWxkcmVuOiBcIlRlc3QgQnV0dG9uXCJ9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe29uQ2xpY2s6ICgpID0+IHt9fV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3t3cmFwcGVyOiBmYWxzZX1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7ZGlzYWJsZWQ6IGZhbHNlfSwge2Rpc2FibGVkOiB0cnVlfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3NcclxuXHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25Db2xvciA9IFwiYnJhbmRcIiB8IFwiZ3JleVwiIHwgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IFwieWVsbG93XCIgfCBcInByaW1hcnlcIiB8IFwibGlua1wiIHwgXCJ3aGl0ZVwiIHwgXCJibGFja1wiIHwgXCJ0cmFuc3BhcmVudFwiXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkxvb2sgPSBcImZpbGxlZFwiIHwgXCJpbnZlcnRlZFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJnaG9zdFwiIHwgXCJsaW5rXCIgfCBcImJsYW5rXCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uU2l6ZSA9IFwibm9uZVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwieGxhcmdlXCIgfCBcIm1pblwiIHwgXCJtYXhcIiB8IFwiaWNvblwiXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkhvdmVycyA9IFwiZGVmYXVsdFwiIHwgQnV0dG9uQ29sb3IiLCJpbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuLi9nZW5lcmFsL1Rvb2x0aXBcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5pbXBvcnQgeyBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzIH0gZnJvbSBcIi4uL3ByaXZhdGUvRXJyb3JDYXRjaGVyXCJcclxuXHJcbmNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIGRlZmF1bHRDb2xvcjogMTAwNzA3MDksXHJcbiAgICBiYXNlQ29sb3JzOiBbXHJcbiAgICAgICAgMTc1MjIyMCwgXHJcbiAgICAgICAgMzA2Njk5MywgXHJcbiAgICAgICAgMzQ0NzAwMywgXHJcbiAgICAgICAgMTAxODEwNDYsIFxyXG4gICAgICAgIDE1Mjc3NjY3LCBcclxuICAgICAgICAxNTg0NDM2NywgXHJcbiAgICAgICAgMTUxMDU1NzAsIFxyXG4gICAgICAgIDE1MTU4MzMyLCBcclxuICAgICAgICA5ODA3MjcwLCBcclxuICAgICAgICA2MzIzNTk1LCBcclxuICAgICAgICAxMTQ2OTg2LCBcclxuICAgICAgICAyMDY3Mjc2LCBcclxuICAgICAgICAyMTIzNDEyLCBcclxuICAgICAgICA3NDE5NTMwLCBcclxuICAgICAgICAxMTM0MjkzNSwgXHJcbiAgICAgICAgMTI3NDU3NDIsIFxyXG4gICAgICAgIDExMDI3MjAwLCBcclxuICAgICAgICAxMDAzODU2MiwgXHJcbiAgICAgICAgOTkzNjAzMSwgXHJcbiAgICAgICAgNTUzMzMwNlxyXG4gICAgXVxyXG59XHJcblxyXG50eXBlIENvbG9yUGlja2VyUHJvcHMgPSB7XHJcbiAgICBkZWZhdWx0Q29sb3I/OiBudW1iZXIsXHJcbiAgICBjdXN0b21Db2xvcj86IG51bWJlcixcclxuICAgIGJhc2VDb2xvcnM/OiBudW1iZXJbXSxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgb25DaGFuZ2U/OiAoY29sb3I6bnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBDb2xvclBpY2tlck1vZHVsZXNcclxubGV0IGlzRmV0Y2hpbmcgPSBudWxsXHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbm50IG5lZWRzIHRvIGJlIGxvYWRlZC4gQXMgYSByZXN1bHQsIHlvdSBtYXkgZXhwZXJpZW5jZSAxMDAtMzAwbXMgbG9hZGluZyB0aGUgZmlyc3QgdGltZS5cclxuICogUmVuZGVyIHdpbGwgcmV0dXJuIGBudWxsYCBiZWZvcmUgbG9hZGVkLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbG9yUGlja2VyUHJvcHMsIHt2YWx1ZT86c3RyaW5nLGxhc3RDb2xvcjphbnl9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb2xvclBpY2tlclByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgbnVsbCxcclxuICAgICAgICAgICAgbGFzdENvbG9yOiB0aGlzLnByb3BzLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiogUHJlbG9hZCB0aGUgY29tcG9uZW50LiAqL1xyXG4gICAgc3RhdGljIHByZWxvYWQoKXtcclxuICAgICAgICBpZihDb2xvclBpY2tlci5wcm90b3R5cGUubW9kdWxlc1swXSlyZXR1cm4gLy8gYWxyZWFkeSBsb2FkZWRcclxuICAgICAgICBpZihpc0ZldGNoaW5nKXJldHVybiAvLyBpcyBmZXRjaGluZyBzbyBkb24ndCBkb3VibGUgcHJlbG9hZC5cclxuICAgICAgICB0cnl7IC8vIElmIHdlIGNhdWdodCBhbiBlcnJvclxyXG4gICAgICAgICAgICBuZXcgQ29sb3JQaWNrZXIoe30pLnJlbmRlcigpXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWwpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6Q29sb3JQaWNrZXJQcm9wcyA9IHtcclxuICAgICAgICBkZWZhdWx0Q29sb3I6IENvbnN0YW50cy5kZWZhdWx0Q29sb3IsXHJcbiAgICAgICAgY3VzdG9tQ29sb3I6IG51bGwsXHJcbiAgICAgICAgYmFzZUNvbG9yczogQ29uc3RhbnRzLmJhc2VDb2xvcnMsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQ29sb3JQaWNrZXJNb2R1bGVzIHx8IChDb2xvclBpY2tlck1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiQ29sb3JQaWNrZXJcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbG9yUGlja2VyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgQ29sb3JQaWNrZXJDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGlmKCFDb2xvclBpY2tlckNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgIGlmKGlzRmV0Y2hpbmcpeyAvLyBzdXBwb3J0IGZvciBtdWx0aXBsZSBjb2xvciBwaWNrZXJcclxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmcudGhlbigoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbG9yUGlja2VyTW9kdWxlcyA9IG51bGxcclxuICAgICAgICAgICAgbGV0IHJlc29sdmVcclxuICAgICAgICAgICAgaXNGZXRjaGluZyA9IG5ldyBQcm9taXNlKHJlcyA9PiAocmVzb2x2ZSA9IHJlcykpXHJcbiAgICAgICAgICAgIGNvbnN0IEd1aWxkU2V0dGluZ3NSb2xlcyA9IG5ldyAoV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUuaW5jbHVkZXMoXCJHdWlsZFNldHRpbmdzUm9sZXNcIikpLmRlZmF1bHQpKCkucmVuZGVyKCkudHlwZVxyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEd1aWxkU2V0dGluZ3NSb2xlcy5wcm90b3R5cGUucmVuZGVyUm9sZVNldHRpbmdzLmNhbGwoe1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBndWlsZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc093bmVyOiAoKSA9PiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0ZWRSb2xlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVySGVhZGVyOiBHdWlsZFNldHRpbmdzUm9sZXMucHJvdG90eXBlLnJlbmRlckhlYWRlclxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBHdWlsZFJvbGVTZXR0aW5ncyA9IHNldHRpbmdzLnByb3BzLmNoaWxkcmVuWzFdLnR5cGVcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gR3VpbGRSb2xlU2V0dGluZ3MucHJvdG90eXBlLnJlbmRlckNvbG9yUGlja2VyLmNhbGwoe1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBldmVyeW9uZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgY2hpbGRyZW4udHlwZShjaGlsZHJlbi5wcm9wcykucHJvcHMuY2hpbGRyZW4udHlwZS5fY3RvcigpLnRoZW4oYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb2xvclBpY2tlck1vZHVsZXMgPSBudWxsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxDb2xvclBpY2tlckNvbXBvbmVudC5kZWZhdWx0IGNvbG9ycz17dGhpcy5wcm9wcy5iYXNlQ29sb3JzfSBkZWZhdWx0Q29sb3I9e3RoaXMucHJvcHMuZGVmYXVsdENvbG9yfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gY3VzdG9tQ29sb3I9e3RoaXMucHJvcHMuY3VzdG9tQ29sb3J9PlxyXG4gICAgICAgIDwvQ29sb3JQaWNrZXJDb21wb25lbnQuZGVmYXVsdD5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxhc3RDb2xvciAhPT0gdGhpcy5wcm9wcy52YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGxhc3RDb2xvcjogdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbG9yUGlja2VyKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVXRpbHMuSGV4Q29sb3JUb0RlY2ltYWwoXCIjNzI4OURBXCIpXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoY29sb3IpID0+IHt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICBpbmZvOiBcIlRvIGNvbnZlcnQgaGV4IGNvbG9ycyB0byBkZWNpbWFsLCB5b3UgY2FuIGRvIGBMaWdodGNvcmQuQXBpLlV0aWxzLkhleENvbG9yVG9EZWNpbWFsKCcjNzI4OURBJylgIGFuZCBnbyBiYWNrIHdpdGggYExpZ2h0Y29yZC5BcGkuVXRpbHMuRGVjaW1hbENvbG9yVG9IZXgoNzUwNjM5NClgXCIsXHJcbiAgICAgICAgd2FybjogXCJUaGUgY29tcG9uZW50IG1heSBub3QgYXBwZWFyIGluc3RhbnRseS4gVGhlIGNvbXBvbmVudCBuZWVkcyB0byBiZSBsb2FkZWQsIHNvIHlvdSBjb3VsZCBleHBlcmllbmNlIDUwLTMwMG1zIGxvYWRpbmcgdGltZSBkZXBlbmRpbmcgb24geW91ciBpbnRlcm5ldCBjb25uZWN0aW9uLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBEcm9wZG93blByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgdmFsdWVSZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBvcHRpb25SZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBtdWx0aVZhbHVlUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzZWFyY2hhYmxlPzogYm9vbGVhbixcclxuICAgIGNsZWFyYWJsZT86IGJvb2xlYW4sXHJcbiAgICBzdHlsZU92ZXJyaWRlcz86IENTU1Byb3BlcnRpZXMsXHJcbiAgICBsaWdodFRoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgZGFya1RoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgaXNNdWx0aT86IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSB0aGVtZU92ZXJyaWRlID0ge1xyXG4gICAgbmV1dHJhbDA6IHN0cmluZyxcclxuICAgIG5ldXRyYWw1OiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMTA6IHN0cmluZyxcclxuICAgIG5ldXRyYWwyMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDMwOiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5OiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5MjU6IHN0cmluZyxcclxuICAgIHByaW1hcnk1MDogc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRPcHRpb25CYWNrZ3JvdW5kOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBtZW51QmFja2dyb3VuZDogc3RyaW5nLFxyXG4gICAgbWVudUJvcmRlcjogc3RyaW5nLFxyXG4gICAgc2Nyb2xsQmFyVGh1bWI6IHN0cmluZyxcclxuICAgIG11bHRpT3B0aW9uQmFja2dyb3VuZDogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBEcm9wZG93bk1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RHJvcGRvd25Qcm9wcywge3ZhbHVlOiBzdHJpbmd8bnVsbH0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkRyb3Bkb3duUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkRyb3Bkb3duUHJvcHMgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5vIG9wdGlvbnMgLSBObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gRHJvcGRvd24uIElmIHlvdSBtZWFudCB0byBwdXQgYW4gZW1wdHkgZHJvcGRvd24sIGlucHV0IGFuIGVtcHR5IGFycmF5LlwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgdmFsdWVSZW5kZXJlcjogbnVsbCxcclxuICAgICAgICBtdWx0aVZhbHVlUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb3B0aW9uUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IG51bGwsXHJcbiAgICAgICAgbGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGlzTXVsdGk6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gRHJvcGRvd25Nb2R1bGVzIHx8IChEcm9wZG93bk1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiU2VsZWN0VGVtcFdyYXBwZXJcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgRHJvcGRvd25Db21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSA8RHJvcGRvd25Db21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJBbiBlcnJvciBvY2N1cmVkXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3B0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxuXHJcbnR5cGUgUmFkaW9Hcm91cFByb3BzID0ge1xyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICBjb2xvcj86IHN0cmluZyxcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgICBkZXNjPzogc3RyaW5nXHJcbiAgICB9W10sXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzaXplPzogXCJzbWFsbFwifFwibWVkaXVtXCIsXHJcbiAgICBpdGVtVHlwZT86IFwiYmFyXCJ8XCJwYW5lbFwiLFxyXG4gICAgaW5mb0NsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgUmFkaW9Hcm91cE1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJhZGlvR3JvdXBQcm9wcywge3ZhbHVlPzogc3RyaW5nfT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpSYWRpb0dyb3VwUHJvcHMgPSB7XHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIk5vIG9wdGlvbnNcIixcclxuICAgICAgICAgICAgZGVzYzogXCJObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gQ2hvaWNlcy4gSWYgeW91IG1lYW50IHRvIGRpc3BsYXkgbm8gb3B0aW9ucyBhdCBhbGwsIHBsZWFzZSBwYXNzIGFuIGVtcHR5IGFycmF5LlwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZjA0NzQ3XCJcclxuICAgICAgICB9XSxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgc2l6ZTogXCJtZWRpdW1cIixcclxuICAgICAgICBpdGVtVHlwZTogXCJiYXJcIixcclxuICAgICAgICBpbmZvQ2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpSYWRpb0dyb3VwUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXYudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBldi52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gUmFkaW9Hcm91cE1vZHVsZSB8fCAoUmFkaW9Hcm91cE1vZHVsZSA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJSYWRpb0dyb3VwXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFJhZGlvR3JvdXBDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPFJhZGlvR3JvdXBDb21wb25lbnQgb3B0aW9ucz17cHJvcHMub3B0aW9uc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IFxyXG4gICAgICAgICAgICBzaXplPXtSYWRpb0dyb3VwQ29tcG9uZW50LlNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV19IGl0ZW1UeXBlPXtSYWRpb0dyb3VwQ29tcG9uZW50Lkl0ZW1UeXBlc1twcm9wcy5pdGVtVHlwZS50b1VwcGVyQ2FzZSgpXX0gXHJcbiAgICAgICAgICAgIGluZm9DbGFzc05hbWU9e3Byb3BzLmluZm9DbGFzc05hbWV9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKTpzdHJpbmd8bnVsbHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3B0aW9uIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJkZXNjcmlwdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzY3JpcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2NyaXB0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1lZGl1bVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcImJhclwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcInBhbmVsXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTd2l0Y2hQcm9wcyA9IHtcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogYm9vbGVhbixcclxuICAgIGZpbGw/OiBzdHJpbmcsXHJcbiAgICB0aGVtZT86IFwiZGVmYXVsdFwifFwiY2xlYXJcIixcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIixcclxuICAgIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5sZXQgU3dpdGNoTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3dpdGNoUHJvcHMsIHt2YWx1ZTogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlN3aXRjaFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBTd2l0Y2hNb2R1bGVzIHx8IChTd2l0Y2hNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlN3aXRjaFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBTd2l0Y2hDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKDxTd2l0Y2hDb21wb25lbnQgaWQ9e3Byb3BzLmlkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUgfHwgZmFsc2V9IGZpbGw9e3Byb3BzLmZpbGx9IFxyXG4gICAgICAgICAgICB0aGVtZT17U3dpdGNoQ29tcG9uZW50LlRoZW1lc1twcm9wcy50aGVtZS50b1VwcGVyQ2FzZSgpXX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIHNpemU9e1N3aXRjaENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBzdHlsZT17cHJvcHMuc3R5bGV9Lz4pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoIXRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiAhdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICBmaWxsOiBudWxsLFxyXG4gICAgICAgIHRoZW1lOiBcImRlZmF1bHRcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIHN0eWxlOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DaGFuZ2U6ICh2YWx1ZSkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNsZWFyXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy1zd2l0Y2hcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IG51bGxcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIGVycm9yOiBcIlRoZSBgY2xlYXJgIG9wdGlvbiBkb2Vzbid0IHdvcmsgd2VsbCBvbiBsaWdodCB0aGVtZS5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dEFyZWFQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGF1dG9Gb2N1cz86IGJvb2xlYW4sXHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbixcclxuICAgIGZsZXg/OiBib29sZWFuLFxyXG4gICAgYXV0b3NpemU/OiBmYWxzZSxcclxuICAgIHJvd3M/OiBudW1iZXIsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uS2V5RG93bj86IChldikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dEFyZWFNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRleHRBcmVhUHJvcHMsIHt2YWx1ZTogc3RyaW5nfT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6VGV4dEFyZWFQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0QXJlYU1vZHVsZXMgfHwgKFRleHRBcmVhTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0QXJlYVwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgbmFtZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldiwgbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2LCBuYW1lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbktleURvd24oZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBvbktleURvd249e3RoaXMub25LZXlEb3dufSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlIHx8IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRleHRBcmVhUHJvcHMgPSB7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcclxuICAgICAgICBmbGV4OiBmYWxzZSxcclxuICAgICAgICBhdXRvc2l6ZTogZmFsc2UsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIG9uRm9jdXM6IE5PT1AsXHJcbiAgICAgICAgb25CbHVyOiBOT09QLFxyXG4gICAgICAgIG9uS2V5RG93bjogTk9PUFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYXBpLXByZXZpZXctdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbnVsbFxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGZsZXg6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGF1dG9zaXplOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvc2l6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgcm93czogM1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByb3dzOiAyXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJvd3M6IDFcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJFeGFtcGxlIGVycm9yXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogMTAwXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgd2FybjogXCJUaGlzIHNob3VsZCBiZSB1c2VkIGZvciBtdWx0aSBsaW5lIGlucHV0cy5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dElucHV0UHJvcHMgPSB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgc2l6ZT86IFwiZGVmYXVsdFwifFwibWluaVwiXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBpbnB1dENsYXNzTmFtZT86IHN0cmluZ1xyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dElucHV0TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRleHRJbnB1dFByb3BzLCB7dmFsdWU6IHN0cmluZ30+IHtcclxuICAgIGhhc1NldDogYm9vbGVhblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRleHRJbnB1dFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGV4dElucHV0UHJvcHMgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiA5OTksXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIG9uRm9jdXM6IE5PT1AsXHJcbiAgICAgICAgb25CbHVyOiBOT09QXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGV4dElucHV0TW9kdWxlcyB8fCAoVGV4dElucHV0TW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0SW5wdXRcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaGFzU2V0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCBuYW1lLCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMuaGFzU2V0KXJldHVybiAvLyBwcmV2ZW50IGV2ZW50IGlmIHRoZSBvbkNoYW5nZSBoYXMgY2hhbmdlZCB0aGUgdmFsdWUuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXYsIG5hbWUsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldiwgbmFtZSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUZXh0QXJlYUNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gLz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSB8fCBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgICAgICB0aGlzLmhhc1NldCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJhcGktcHJldmlldy10ZXh0aW5wdXRcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHNpemU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkV4YW1wbGUgZXJyb3JcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogOTk5XHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy10ZXh0aW5wdXRcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7fVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIHdhcm46IFwiVGhpcyBzaG91bGQgYmUgdXNlZCBmb3Igc2luZ2xlIGxpbmUgaW5wdXRzLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIjtcclxuaW1wb3J0IERpc2NvcmRUb29scyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9EaXNjb3JkVG9vbHNcIjtcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiO1xyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi4vLi4vbW9kdWxlcy91dWlkXCI7XHJcblxyXG5cclxudHlwZSBFcnJvckNhdGNoZXJQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5sZXQgRXJyb3JDYXRjaGVyTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckNhdGNoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXJyb3JDYXRjaGVyUHJvcHMsIHtlcnJvcjogYm9vbGVhbiwgaGFzU2VudE5vdGlmaWNhdGlvbjogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkVycm9yQ2F0Y2hlclByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc1NlbnROb3RpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCk6YW55W117XHJcbiAgICAgICAgcmV0dXJuIEVycm9yQ2F0Y2hlck1vZHVsZXMgfHwgKEVycm9yQ2F0Y2hlck1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZW1wdHlTdGF0ZUltYWdlICYmIGUuZW1wdHlTdGF0ZSlcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHRQcm9wczpFcnJvckNhdGNoZXJQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmVycm9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICB9ZWxzZXsgLy8gdHJ5IHRvIHJlbmRlciBhIHVzZXItZnJpZW5kbHkgaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICBjb25zdCBbXHJcbiAgICAgICAgICAgICAgICBlbXB0eUNsYXNzZXNcclxuICAgICAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG4gICAgICAgICAgICBpZighZW1wdHlDbGFzc2VzKXsgLy8gSWYgd2UgY2FuJ3QsIHJlbmRlciBub3RoaW5nIGFuZCBzaG93IGEgbm90aWZpY2F0aW9uLlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5oYXNTZW50Tm90aWZpY2F0aW9uKXJldHVybiBudWxsIC8vIElmIHRoZSBub3RpZmljYXRpb24gd2FzIGFscmVhZHkgc2VudCwgZG9uJ3Qgc2VuZCBvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBEaXNjb3JkVG9vbHMuc2hvd05vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJBbiBlcnJvciBvY2N1cmVkLiBQbGVhc2UgY2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb25zLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiaHR0cHM6Ly9naXRodWIuY29tL2xpZ2h0Y29yZC5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBOT09QLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U6IE5PT1AsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TaG93OiBOT09QLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxpZ2h0Y29yZCBJbmZvcm1hdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1NlbnROb3RpZmljYXRpb246IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtlbXB0eUNsYXNzZXMuZW1wdHlTdGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1wdHlDbGFzc2VzLmVtcHR5U3RhdGVJbWFnZX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlbXB0eUNsYXNzZXMuZW1wdHlTdGF0ZUhlYWRlcn0+QW4gZXJyb3Igb2NjdXJlZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtlbXB0eUNsYXNzZXMuZW1wdHlTdGF0ZVN1YnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBjaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbnMuIEpvaW4gb3VyIMKtc3VwcG9ydCBzZXJ2ZXIgZm9yIG1vcmUgaGVscC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzPGJhc2UgPSBGdW5jdGlvbj4oQ2xhc3M6YmFzZSk6YmFzZSAmIHtcclxuICAgIHJlYWRvbmx5IG9yaWdpbmFsOiBiYXNlXHJcbn17XHJcbiAgICBjb25zdCBDbGFzc0NvcHkgPSAoY2xhc3MgUHJveGllZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3JDYXRjaGVyIGtleT17dXVpZCgpfT5cclxuICAgICAgICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KENsYXNzIGFzIGFueSwgey4uLnRoaXMucHJvcHMsIGtleTogdXVpZCgpfSl9XHJcbiAgICAgICAgICAgIDwvRXJyb3JDYXRjaGVyPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lID0gQ2xhc3NbXCJkaXNwbGF5TmFtZVwiXSB8fCBDbGFzc1tcIm5hbWVcIl1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBvcmlnaW5hbCgpe1xyXG4gICAgICAgICAgICByZXR1cm4gQ2xhc3NcclxuICAgICAgICB9XHJcbiAgICB9KSBhcyBhbnlcclxuICAgIE9iamVjdC5lbnRyaWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKENsYXNzKSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYodmFsdWVbMF0gaW4gQ2xhc3NDb3B5KXJldHVyblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbGFzc0NvcHksIHZhbHVlWzBdLCB2YWx1ZVsxXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gQ2xhc3NDb3B5XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgbm90aWNlLCBub3RpY2VzLCBldmVudHMgfSBmcm9tIFwiLi9Ob3RpY2VzXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcblxyXG5sZXQgTm90aWNlTW9kdWxlc1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdE5vdGljZTpub3RpY2UgPSB7XHJcbiAgICB0ZXh0OiBcIlwiLFxyXG4gICAgaWQ6IFwidW5rbm93biBpZFwiLFxyXG4gICAgb25DbGljazogTk9PUCxcclxuICAgIGJ1dHRvblRleHQ6IG51bGwsXHJcbiAgICB0eXBlOiBcImRlZmF1bHRcIlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxub3RpY2U+IHtcclxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiTGlnaHRjb3JkTm90aWNlXCJcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6bm90aWNlID0gZGVmYXVsdE5vdGljZVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIE5vdGljZU1vZHVsZXMgfHwgKE5vdGljZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubm90aWNlSW5mbylcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBbXHJcbiAgICAgICAgICAgIG5vdGljZUNsYXNzZXNcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vdGljZUNsYXNzZXNbXCJub3RpY2VcIit0aGlzLnByb3BzLnR5cGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSt0aGlzLnByb3BzLnR5cGUuc2xpY2UoMSldXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFjbGFzc05hbWUpe1xyXG4gICAgICAgICAgICBub3RpY2VzLnBvcCgpXHJcbiAgICAgICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLnByb3BzLmJ1dHRvblRleHQgPyA8YnV0dG9uIGNsYXNzTmFtZT17bm90aWNlQ2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgbm90aWNlcy5wb3AoKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKVxyXG4gICAgICAgICAgICBldmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgIH19Pnt0aGlzLnByb3BzLmJ1dHRvblRleHR9PC9idXR0b24+IDogbnVsbFxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e25vdGljZUNsYXNzZXMuZGlzbWlzc30gcm9sZT1cImJ1dHRvblwiIHRhYkluZGV4PXswfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3RpY2VzLnBvcCgpXHJcbiAgICAgICAgICAgICAgICBldmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxyXG4gICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IE5vdGljZSBmcm9tIFwiLi9Ob3RpY2VcIlxyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi4vLi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtjb250YWluZXI6IGFueX0+IHtcclxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiTGlnaHRjb3JkTm90aWNlc1wiXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge31cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBSZWFkb25seTx7IGNvbnRhaW5lcjogYW55IH0+KXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpY2VIYW5kbGVyID0gdGhpcy5ub3RpY2VIYW5kbGVyLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBub3RpY2VIYW5kbGVyKCl7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICAgICAgZXZlbnRzLm9uKFwibm90aWNlVXBkYXRlXCIsIHRoaXMubm90aWNlSGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIGV2ZW50cy5vZmYoXCJub3RpY2VVcGRhdGVcIiwgdGhpcy5ub3RpY2VIYW5kbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLmhhc05vdGljZSlyZXR1cm4gbnVsbFxyXG4gICAgICAgIGNvbnN0IG5vdGljZSA9IG5vdGljZXNbMF1cclxuICAgICAgICByZXR1cm4gPE5vdGljZSB7Li4ubm90aWNlfT48L05vdGljZT5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzTm90aWNlKCl7XHJcbiAgICAgICAgcmV0dXJuIG5vdGljZXMubGVuZ3RoID4gMFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWNlczpub3RpY2VbXSA9IFtdXHJcblxyXG5leHBvcnQgdHlwZSBub3RpY2VXaXRob3V0SUQgPSB7XHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBidXR0b25UZXh0Pzogc3RyaW5nLFxyXG4gICAgb25DbGljaz86ICgpID0+IHZvaWQsXHJcbiAgICB0eXBlOiBcImRlZmF1bHRcInxcImluZm9cInxcInN1Y2Nlc3NcInxcImRhbmdlclwifFwic3RyZWFtZXJNb2RlXCJ8XCJkb3dubG9hZFwifFwibm90aWZpY2F0aW9uXCJ8XCJwcmVtaXVtXCJ8XCJyaWNoUHJlc2VuY2VcInxcInByZW1pdW1UaWVyMVwifFwicHJlbWl1bVRpZXIyXCJ8XCJmYWNlYm9va1wifFwiYnJhbmRcInxcInN1cnZleVwifFwic3BvdGlmeVwiXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIG5vdGljZSA9IHtcclxuICAgIGlkOiBzdHJpbmdcclxufSAmIG5vdGljZVdpdGhvdXRJRCIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9tb2R1bGVzL1V0aWxzXCJcclxuaW1wb3J0IERpc2NvcmRUb29scyBmcm9tIFwiLi9tb2R1bGVzL0Rpc2NvcmRUb29sc1wiXHJcbmltcG9ydCAqIGFzIHBhdGNoZXJzIGZyb20gXCIuL21vZHVsZXMvcGF0Y2hlcnNcIlxyXG5pbXBvcnQgZXhjbHVkZVByb3BlcnRpZXMgZnJvbSBcIi4vbW9kdWxlcy9leGNsdWRlUHJvcGVydGllc1wiXHJcbmltcG9ydCBjbG9uZU51bGxQcm90byBmcm9tIFwiLi9tb2R1bGVzL2Nsb25lTnVsbFByb3RvXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IHVuZnJlZXplIGZyb20gXCIuL21vZHVsZXMvVW5mcmVlemVcIlxyXG5pbXBvcnQgeyBpc05hdGl2ZSwgaXNJbXBvcnRlZCB9IGZyb20gXCIuL21vZHVsZXMvZW52aXJvbm5lbWVudFwiXHJcbmltcG9ydCAqIGFzIGJhbmRhZ2VkYmRBcGkgZnJvbSBcIkBiYW5kYWdlZGJkL2JkYXBpXCJcclxucGF0Y2hlcnMucGF0Y2goKVxyXG5cclxuY29uc3QgTGlnaHRjb3JkQXBpID0ge1xyXG4gICAgV2VicGFja0xvYWRlcjogV2VicGFja0xvYWRlcixcclxuICAgIENvbXBvbmVudHM6IENvbXBvbmVudHMsXHJcbiAgICB1dWlkOiB1dWlkLFxyXG4gICAgVXRpbHM6IFV0aWxzLFxyXG4gICAgRGlzY29yZFRvb2xzOiBEaXNjb3JkVG9vbHMsXHJcbiAgICBfOiB7XHJcbiAgICAgICAgZXhjbHVkZVByb3BlcnRpZXM6IGV4Y2x1ZGVQcm9wZXJ0aWVzLFxyXG4gICAgICAgIGNsb25lTnVsbFByb3RvOiBjbG9uZU51bGxQcm90byxcclxuICAgICAgICBOT09QOiBOT09QLFxyXG4gICAgICAgIHVuZnJlZXplOiB1bmZyZWV6ZVxyXG4gICAgfSxcclxuICAgIGdldCBpc05hdGl2ZSgpe3JldHVybiBpc05hdGl2ZX0sXHJcbiAgICBnZXQgaXNJbXBvcnRlZCgpe3JldHVybiBpc0ltcG9ydGVkfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICB2YXIgUmVhY3Q6dHlwZW9mIGltcG9ydChcInJlYWN0XCIpXHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMaWdodGNvcmQgaXMgb25seSBhdmFpbGxhaWJsZSBpbiBMaWdodGNvcmQgKG5hdGl2ZSlcclxuICAgICAgICAgKi9cclxuICAgICAgICBMaWdodGNvcmQ6IExpZ2h0Y29yZEdsb2JhbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCRE1vZHVsZXMgaXMgb25seSBhdmFpbGxhaWJsZSBpbiBMaWdodGNvcmQgKG5hdGl2ZSlcclxuICAgICAgICAgKi9cclxuICAgICAgICBCRE1vZHVsZXM6IHtcclxuICAgICAgICAgICAgbW9kdWxlczphbnlbXSxcclxuICAgICAgICAgICAgZ2V0KGZpbHRlcjoobW9kOmFueSk9PmJvb2xlYW4sIG1vZHVsZXM/OmFueVtdKTphbnlbXSxcclxuICAgICAgICAgICAgZ2V0KGlkOm51bWJlciwgbW9kdWxlcz86YW55W10pOmFueSxcclxuICAgICAgICAgICAgZ2V0KGlkczogW251bWJlcnwoKG1vZDphbnkpPT5ib29sZWFuKV0sIG1vZHVsZXM/OmFueVtdKTphbnlcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJkQXBpOiB0eXBlb2YgYmFuZGFnZWRiZEFwaS5CZEFwaSxcclxuICAgICAgICBFREFwaTogdHlwZW9mIGJhbmRhZ2VkYmRBcGkuQmRBcGlcclxuICAgIH1cclxuICAgIHZhciBMaWdodGNvcmQ6TGlnaHRjb3JkR2xvYmFsXHJcbiAgICB2YXIgQmRBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpXHJcbiAgICB2YXIgRURBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0Y29yZEFwaVxyXG5cclxuT2JqZWN0LmFzc2lnbih3aW5kb3cuTGlnaHRjb3JkLkFwaSwgTGlnaHRjb3JkQXBpKVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIExpZ2h0Y29yZCBleHBvcnRzLiBDYW4gYmUgYWNjZXNzZWQgd2l0aCBgd2luZG93LkxpZ2h0Y29yZGBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRjb3JkR2xvYmFsIHtcclxuICAgIERpc2NvcmRNb2R1bGVzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW50ZXJuYWwgRGlzY29yZCdzIGRpc3BhdGNoZXIgLSBjYW4gYmUgdXNlZCB0byBzdWJzY3JpYmUgdG8gZ2F0ZXdheSBldmVudHMgLyBjbGllbnQgZXZlbnRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BhdGNoZXI6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZERpc3BhdGNoZXJUeXBlc1wiKS5kZWZhdWx0LFxyXG4gICAgICAgIGNvbnN0YW50czogaW1wb3J0KFwiLi90eXBlcy9EaXNjb3JkQ29uc3RhbnRzVHlwZXNcIikuZGVmYXVsdFxyXG4gICAgfSxcclxuICAgIFNldHRpbmdzOiB7XHJcbiAgICAgICAgZGV2TW9kZTogYm9vbGVhbixcclxuICAgICAgICBjYWxsUmluZ2luZ0JlYXQ6IGJvb2xlYW5cclxuICAgIH0sXHJcbiAgICBBcGk6IExpZ2h0Y29yZEFwaUdsb2JhbCxcclxuICAgIEJldHRlckRpc2NvcmQ6IHtcclxuICAgICAgICBCZEFwaTogdHlwZW9mIGJhbmRhZ2VkYmRBcGkuQmRBcGksXHJcbiAgICAgICAgW21vZDpzdHJpbmddOmFueVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1haW4gQXBpLiBDYW4gYmUgYWNjZXNzZWQgd2l0aCBgd2luZG93LkxpZ2h0Y29yZC5BcGlgXHJcbiAqL1xyXG50eXBlIExpZ2h0Y29yZEFwaUdsb2JhbCA9IGxpZ2h0Y29yZEFwaU1haW5FeHBvcnRzICYgdHlwZW9mIExpZ2h0Y29yZEFwaVxyXG5cclxudHlwZSBsaWdodGNvcmRBcGlNYWluRXhwb3J0cyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgdW50aWwgdGhlIGZpcnN0IG1vZHVsZSB0aGF0IG1hdGNoIHRoZSBmaWx0ZXIgZ2V0cyBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGZpbHRlciBUaGUgZmlsdGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBtb2R1bGUgdG8gbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIGVuc3VyZUV4cG9ydGVkKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOlByb21pc2U8YW55PixcclxuICAgIC8qKlxyXG4gICAgICogUmVjcmVhdGUgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBgX19wcm90b19fYCBhbmQgYHByb3RvdHlwZWAgcHJvcGVydGllcyAtIHVzZWZ1bGwgZm9yIGJldHRlciBmb3JtYXR0aW5nIGluIGNvbnNvbGUuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gcmVjcmVhdGVcclxuICAgICAqL1xyXG4gICAgY2xvbmVOdWxsUHJvdG88T2JqID0gYW55PihvYmo6T2JqKTpPYmpcclxufSIsImxldCByZXFcclxuc2V0UmVxKClcclxuZnVuY3Rpb24gZmlsdGVyRGFuZ2Vyb3VzKG1vZHMpe1xyXG4gICAgcmV0dXJuIG1vZHMubWFwKGUgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm90ZWN0KGUpXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHByb3RlY3QoZXhwb3J0cyl7XHJcbiAgICBsZXQgdGhlTW9kdWxlID0gZXhwb3J0cy5leHBvcnRzXHJcbiAgICBsZXQgbW9kID0gdGhlTW9kdWxlLmRlZmF1bHRcclxuICAgIGlmKCFtb2QpcmV0dXJuIGV4cG9ydHNcclxuICAgIGlmIChtb2QucmVtb3ZlICYmIG1vZC5zZXQgJiYgbW9kLmNsZWFyICYmIG1vZC5nZXQgJiYgIW1vZC5zb3J0KSByZXR1cm4gbnVsbDtcclxuICAgIGlmICghbW9kLmdldFRva2VuICYmICFtb2QuZ2V0RW1haWwgJiYgIW1vZC5zaG93VG9rZW4pcmV0dXJuIGV4cG9ydHNcclxuXHJcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShtb2QsIHtcclxuICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJnZXRUb2tlblwiIHx8IHByb3AgPT09IFwiZ2V0RW1haWxcIiB8fCBwcm9wID09PSBcInNob3dUb2tlblwiKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbihvYmosIGZ1bmMpIHtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJnZXRUb2tlblwiICYmIG9iai5nZXRUb2tlbikgcmV0dXJuICgpID0+IFwibWZhLlhDbmJLem8wQ0xJcWRKekJuTDBEOFBmRHJ1cWtKTkhqd0hYdHIzOVVVM0Y4aEh4NDNqb2pJU3lpNWpkak81MmU5X2U5TWptYWZaRkZwYy1zZU9NYVwiO1xyXG4gICAgICAgICAgICBpZiAoZnVuYyA9PSBcImdldEVtYWlsXCIgJiYgb2JqLmdldEVtYWlsKSByZXR1cm4gKCkgPT4gXCJwdXBwZXQxMTExMkBnbWFpbC5jb21cIjtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJzaG93VG9rZW5cIiAmJiBvYmouc2hvd1Rva2VuKSByZXR1cm4gKCkgPT4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJfX3Byb3RvX19cIiAmJiBvYmouX19wcm90b19fKSByZXR1cm4gcHJveHk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gb2JqW2Z1bmNdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBleHBvcnRzLCB7ZXhwb3J0czogT2JqZWN0LmFzc2lnbih7fSwgdGhlTW9kdWxlLCB7ZGVmYXVsdDogcHJveHl9KX0pXHJcbn1cclxuXHJcbmNsYXNzIFdlYnBhY2tsb2FkZXIge1xyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICBpZihyZXEpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyRGFuZ2Vyb3VzKE9iamVjdC52YWx1ZXMocmVxLmMpLmZpbHRlcigoZTphbnkpID0+IGUgJiYgZS5leHBvcnRzKSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0UmVxKClcclxuICAgICAgICAgICAgaWYocmVxKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJEYW5nZXJvdXMoT2JqZWN0LnZhbHVlcyhyZXEuYykuZmlsdGVyKChlOmFueSkgPT4gZSAmJiBlLmV4cG9ydHMpKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGlkcywgbW9kdWxlcyl7XHJcbiAgICAgICAgaWYodHlwZW9mIGlkcyA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIChtb2R1bGVzIHx8IHRoaXMubW9kdWxlcykubWFwKChtZGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKG1kbCAmJiB0eXBlb2YgbWRsLmV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZGwuZXhwb3J0c1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuZmlsdGVyKGUgPT4gZSkuZmlsdGVyKGlkcylcclxuICAgICAgICB9ZWxzZSBpZihBcnJheS5pc0FycmF5KGlkcykpe1xyXG4gICAgICAgICAgICBtb2R1bGVzID0gbW9kdWxlcyB8fCB0aGlzLm1vZHVsZXNcclxuICAgICAgICAgICAgcmV0dXJuIGlkcy5tYXAoaWQgPT4gdGhpcy5nZXQoaWQsIG1vZHVsZXMpKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtb2R1bGVzID0gbW9kdWxlcyB8fCB0aGlzLm1vZHVsZXNcclxuICAgICAgICAgICAgbGV0IG1vZHVsZSA9IG1vZHVsZXMuZmlsdGVyKGUgPT4gISFlKS5maW5kKGUgPT4gZS5pID09PSBpZHMpXHJcbiAgICAgICAgICAgIGlmKCFtb2R1bGUpcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZGVmYXVsdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXZWJwYWNrbG9hZGVyKClcclxuXHJcbmZ1bmN0aW9uIHNldFJlcSgpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHJlcSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXS5wdXNoKFtbXSwge19fZXh0cmFfaWRfXzogKG1kbCwgZXhwb3J0cywgcmVxKSA9PiBtZGwuZXhwb3J0cyA9IHJlcX0sIFtbXCJfX2V4dHJhX2lkX19cIl1dXSk7XHJcbiAgICAgICAgaWYocmVxKXtcclxuICAgICAgICAgICAgZGVsZXRlIHJlcS5tLl9fZXh0cmFfaWRfXztcclxuICAgICAgICAgICAgZGVsZXRlIHJlcS5jLl9fZXh0cmFfaWRfXztcclxuICAgICAgICB9XHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgcmVxID0gdW5kZWZpbmVkXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBub3RpY2VzLCBub3RpY2VXaXRob3V0SUQsIG5vdGljZSwgZXZlbnRzIGFzIG5vdGljZUV2ZW50cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vdXVpZFwiO1xyXG5pbXBvcnQgY2xvbmVOdWxsUHJvdG8gZnJvbSBcIi4vY2xvbmVOdWxsUHJvdG9cIjtcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0Tm90aWNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpdmF0ZS9Ob3RpY2VcIjtcclxuaW1wb3J0IGV4Y2x1ZGVQcm9wZXJ0aWVzIGZyb20gXCIuL2V4Y2x1ZGVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCBOT09QIGZyb20gXCIuL25vb3BcIjtcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIsIHsgV2VicGFja0xvYWRlckVycm9yIH0gZnJvbSBcIi4vV2VicGFja0xvYWRlclwiO1xyXG5cclxubGV0IHNvdW5kTW9kdWxlXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBEaXNjb3JkVG9vbHMge1xyXG4gICAgc2hvd05vdGljZShkYXRhOk5vdGljZURhdGEpOk5vdGljZXtcclxuICAgICAgICBpZih0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZGF0YS50ZXh0ICE9PSBcInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihgVGhpcyBub3RpY2UgaXMgbm90IHZhbGlkLiBHaXZlbjogJHtVdGlscy5mb3JtYXRKU09iamVjdChkYXRhKX1gKVxyXG4gICAgICAgIGxldCBuZXdEYXRhID0gY2xvbmVOdWxsUHJvdG8oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE5vdGljZSwgZGF0YSkpIGFzIG5vdGljZVxyXG4gICAgICAgIG5ld0RhdGEuaWQgPSB1dWlkKClcclxuICAgICAgICBub3RpY2VzLnB1c2gobmV3RGF0YSlcclxuICAgICAgICBub3RpY2VFdmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgIGNvbnN0IG5vdGljZSA9IG5ldyBOb3RpY2UobmV3RGF0YSlcclxuICAgICAgICByZXR1cm4gbm90aWNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vdGljZXMoKTpOb3RpY2VbXXtcclxuICAgICAgICByZXR1cm4gbm90aWNlcy5tYXAoZGF0YSA9PiBuZXcgTm90aWNlKGRhdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUXVpY2tseSBzZW5kIG5vdGlmaWNhdGlvbiAoRXZlbiB3aGVuIG5vIGZvY3VzZWQuKVxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIG5vdGlmaWNhdGlvbi4gQmUgc3VyZSB0byBpbmNsdWRlIGFsbCBwcm9wZXJ0aWVzIGV4Y2VwdCBmdW5jdGlvbnMgY2F1c2UgdGhleSdyZSBvcHRpb25hbC5cclxuICAgICAqIE5vdGlmaWNhdGlvbnMgaGF2ZSBhIHRpbWVvdXQgb2YgMy01IHNlY29uZHMuXHJcbiAgICAgKiBUaGV5IGxvb2sgbGlrZSB0aGlzOiBodHRwczovL2kuaW1ndXIuY29tL2p6dXhLS3UucG5nXHJcbiAgICAgKi9cclxuICAgIHNob3dOb3RpZmljYXRpb24oZGF0YTpOb3RpZmljYXRpb25EYXRhKTpOb3RpZmljYXRpb257XHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IHdpbmRvdy5Ob3RpZmljYXRpb24oZGF0YS50aXRsZSwgZXhjbHVkZVByb3BlcnRpZXMoZGF0YSwgW1xyXG4gICAgICAgICAgICBcInRpdGxlXCIsXHJcbiAgICAgICAgICAgIFwib25DbGlja1wiLFxyXG4gICAgICAgICAgICBcIm9uQ2xvc2VcIixcclxuICAgICAgICAgICAgXCJvblNob3dcIlxyXG4gICAgICAgIF0pKVxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsaWNrID0gZGF0YS5vbkNsaWNrIHx8IE5PT1BcclxuICAgICAgICBub3RpZmljYXRpb24ub25zaG93ID0gZGF0YS5vblNob3cgfHwgTk9PUFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsb3NlID0gZGF0YS5vbkNsb3NlIHx8IE5PT1BcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU291bmQoc291bmQ6U291bmQpe1xyXG4gICAgICAgIHNvdW5kTW9kdWxlID0gc291bmRNb2R1bGUgfHwgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNyZWF0ZVNvdW5kXCJdKVxyXG4gICAgICAgIGlmKCFzb3VuZE1vZHVsZSl0aHJvdyBuZXcgV2VicGFja0xvYWRlckVycm9yKFwiQ291bGRuJ3QgZmluZCBzb3VuZE1vZHVsZSBoZXJlLlwiKVxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBzb3VuZE1vZHVsZS5jcmVhdGVTb3VuZChzb3VuZClcclxuICAgICAgICByZXR1cm4gY3JlYXRlZFxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTb3VuZChzb3VuZDpTb3VuZCl7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlU291bmQoc291bmQpXHJcbiAgICAgICAgY3JlYXRlZC5wbGF5KClcclxuICAgICAgICByZXR1cm4gY3JlYXRlZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTb3VuZCA9IFwiY2FsbF9jYWxsaW5nXCJ8XCJjYWxsX3JpbmdpbmdcInxcImNhbGxfcmluZ2luZ19iZWF0XCJ8XCJkZHItZG93blwifFwiZGRyLWxlZnRcInxcImRkci1yaWdodFwifFwiZGRyLXVwXCJ8XCJkZWFmZW5cInxcImRpc2NvZG9cInxcImRpc2Nvbm5lY3RcInxcImh1bWFuX21hblwifFwibWVudGlvbjFcInxcIm1lbnRpb24yXCJ8XCJtZW50aW9uM1wifFwibWVzc2FnZTFcInxcIm1lc3NhZ2UyXCJ8XCJtZXNzYWdlM1wifFwibXV0ZVwifFwib3ZlcmxheXVubG9ja1wifFwicHR0X3N0YXJ0XCJ8XCJwdHRfc3RvcFwifFwicmVjb25uZWN0XCJ8XCJyb2JvdF9tYW5cInxcInN0cmVhbV9lbmRlZFwifFwic3RyZWFtX3N0YXJ0ZWRcInxcInN0cmVhbV91c2VyX2pvaW5lZFwifFwic3RyZWFtX3VzZXJfbGVmdFwifFwidW5kZWFmZW5cInxcInVubXV0ZVwifFwidXNlcl9qb2luXCJ8XCJ1c2VyX2xlYXZlXCJ8XCJ1c2VyX21vdmVkXCJcclxuXHJcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkRhdGEgPSB7XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgYm9keTogc3RyaW5nLFxyXG4gICAgaWNvbjogc3RyaW5nLFxyXG4gICAgb25TaG93PzogKCkgPT4gdm9pZCxcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxyXG4gICAgb25DbG9zZT86ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTm90aWNlRGF0YSA9IG5vdGljZVdpdGhvdXRJRFxyXG5cclxuY29uc3QgRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGlmKHRoaXMucmVtb3ZlZCAhPT0gdGhpcy5zdGF0ZS5yZW1vdmVkKXtcclxuICAgICAgICBpZih0aGlzLnJlbW92ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJyZW1vdmVkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5zaG93aW5nICE9PSB0aGlzLnN0YXRlLnNob3dpbmcpe1xyXG4gICAgICAgIGlmKHRoaXMuc2hvd2luZyl7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInNob3dpbmdcIiwgdHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwic2hvd2luZ1wiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmluZGV4ICE9PSB0aGlzLnN0YXRlLmluZGV4KXtcclxuICAgICAgICB0aGlzLmVtaXQoXCJpbmRleFwiLCB0aGlzLmluZGV4KVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQSBub3RpY2UgaW50ZXJmYWNlIGZvciBtb2RpZnlpbmcgaXQgYW5kIHN1YnNjcmliaW5nIHRvIGV2ZW50cy4gKi9cclxuZXhwb3J0IGNsYXNzIE5vdGljZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZW1vdmVkOiB0aGlzLnJlbW92ZWQsXHJcbiAgICAgICAgICAgIHNob3dpbmc6IHRoaXMuc2hvd2luZyxcclxuICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBldmVudEZ1bmMgPSBFdmVudEhhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5vbihcIm5vdGljZVVwZGF0ZVwiLCBldmVudEZ1bmMpXHJcbiAgICAgICAgdGhpcy5vbihcInJlbW92ZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBub3RpY2VFdmVudHMub2ZmKFwibm90aWNlVXBkYXRlXCIsIGV2ZW50RnVuYylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbSB0aGUgbm90aWNlIGlzIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50OiBcInJlbW92ZWRcIiwgbGlzdGVuZXI6ICgpID0+IHZvaWQpOnRoaXNcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWNlIGlzIHZpc2libGUgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBvbihldmVudDogXCJzaG93aW5nXCIsIGxpc3RlbmVyOiAoaXNTaG93aW5nOmJvb2xlYW4pID0+IHZvaWQpOnRoaXNcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWNlIHF1ZXVlIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50OiBcImluZGV4XCIsIGxpc3RlbmVyOiAoaW5kZXg6bnVtYmVyKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKC4uLmFyZ3M6YW55W10pID0+IHZvaWQpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5vbihldmVudCwgbGlzdGVuZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVtIHRoZSBub3RpY2UgaXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudDogXCJyZW1vdmVkXCIsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBpcyB2aXNpYmxlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudDogXCJzaG93aW5nXCIsIGxpc3RlbmVyOiAoaXNTaG93aW5nOmJvb2xlYW4pID0+IHZvaWQpOnRoaXNcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWNlIHF1ZXVlIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZXZlbnQ6IFwiaW5kZXhcIiwgbGlzdGVuZXI6IChpbmRleDpudW1iZXIpID0+IHZvaWQpOnRoaXNcclxuICAgIG9uY2UoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6ICguLi5hcmdzOmFueVtdKSA9PiB2b2lkKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIub25jZShldmVudCwgbGlzdGVuZXIpXHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGV2ZW50OiBcInJlbW92ZWRcIiwgbGlzdGVuZXI6ICgpID0+IHZvaWQpOnRoaXNcclxuICAgIG9mZihldmVudDogXCJzaG93aW5nXCIsIGxpc3RlbmVyOiAoaXNTaG93aW5nOmJvb2xlYW4pID0+IHZvaWQpOnRoaXNcclxuICAgIG9mZihldmVudDogXCJpbmRleFwiLCBsaXN0ZW5lcjogKGluZGV4Om51bWJlcikgPT4gdm9pZCk6dGhpc1xyXG4gICAgb2ZmKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoLi4uYXJnczphbnlbXSkgPT4gdm9pZCl7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLm9mZihldmVudCwgbGlzdGVuZXIpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGU6e1xyXG4gICAgICAgIHJlbW92ZWQ6Ym9vbGVhbixcclxuICAgICAgICBzaG93aW5nOmJvb2xlYW4sXHJcbiAgICAgICAgaW5kZXg6bnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0VGlja1JlZnJlc2g6Ym9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgZ2V0IHJlbW92ZWQoKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiAhbm90aWNlcy5maW5kKGUgPT4gZS5pZCA9PT0gdGhpcy5pZClcclxuICAgIH1cclxuICAgIGdldCBzaG93aW5nKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gMFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbmRleCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gbm90aWNlcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSB0aGlzLmlkKVxyXG4gICAgfVxyXG4gICAgZ2V0IGlkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pZFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkYXRhOiBQYXJ0aWFsPG5vdGljZT4pe1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIGRhdGEpe1xyXG4gICAgICAgICAgICBpZihrZXkgPT09IFwiaWRcIiljb250aW51ZVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFba2V5XSA9IGRhdGFba2V5XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMubmV4dFRpY2tSZWZyZXNoKXtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VGlja1JlZnJlc2ggPSB0cnVlXHJcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGlja1JlZnJlc2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgbm90aWNlRXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnRleHRcclxuICAgIH1cclxuICAgIHNldCB0ZXh0KHRleHQpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnR5cGVcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHR5cGUpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJ1dHRvblRleHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmJ1dHRvblRleHRcclxuICAgIH1cclxuICAgIHNldCBidXR0b25UZXh0KGJ1dHRvblRleHQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGJ1dHRvblRleHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkNsaWNrKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5vbkNsaWNrXHJcbiAgICB9XHJcbiAgICBzZXQgb25DbGljayhvbkNsaWNrKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMucmVtb3ZlZClyZXR1cm5cclxuICAgICAgICBub3RpY2VzLnNwbGljZSh0aGlzLmluZGV4LCAxKVxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICB9XHJcbiAgICBkYXRhOm5vdGljZVxyXG59IiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiXHJcbmltcG9ydCB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vdXVpZFwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgUGx1Z2luVXRpbGl0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzKHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzKVxyXG4gICAgICAgIGxldCBlbGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7a2V5OiB1dWlkKCl9LCBpdGVtcylcclxuICAgICAgICByZXR1cm4gVXRpbHMuUmVhY3RUb0hUTUxFbGVtZW50KGVsZW0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IFtdXHJcbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBpdGVtICE9PSBcIm9iamVjdFwiKXJldHVybiBpdGVtcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucHJvcHMgJiYgXCJjaGlsZHJlblwiIGluIGl0ZW0ucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoaXRlbS5wcm9wcy5jaGlsZHJlbikpaXRlbS5wcm9wcy5jaGlsZHJlbiA9IFtpdGVtLnByb3BzLmNoaWxkcmVuXVxyXG4gICAgICAgICAgICAgICAgaXRlbS5wcm9wcy5jaGlsZHJlbiA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KGl0ZW0ucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWl0ZW0ucHJvcHMpaXRlbS5wcm9wcyA9IHt9XHJcbiAgICAgICAgICAgIGl0ZW0ucHJvcHMua2V5ID0gdXVpZCgpXHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBVdGlscy5nZXROZXN0ZWRQcm9wcyhjb21wb25lbnRzLCBpdGVtLmNvbXBvbmVudClcclxuICAgICAgICAgICAgaWYoIWNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2FybmluZyA9IG5ldyBUZXh0SW5wdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgV2FybmluZzogTm8gY29tcG9uZW50IHdhcyBmb3VuZCBmb3I6IFwiJHtpdGVtLmNvbXBvbmVudH1cIi4gUGxlYXNlIGNvcnJlY3QgeW91ciBjb2RlLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGBXYXJuaW5nOiBObyBjb21wb25lbnQgd2FzIGZvdW5kIGZvcjogXCIke2l0ZW0uY29tcG9uZW50fVwiLiBQbGVhc2UgY29ycmVjdCB5b3VyIGNvZGUuYFxyXG4gICAgICAgICAgICAgICAgfSkucmVuZGVyKClcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2god2FybmluZylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIE9iamVjdC5jcmVhdGUoaXRlbS5wcm9wcykpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zXHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0dGluZ0l0ZW0gPSB7XHJcbiAgICBjb21wb25lbnQ6IHN0cmluZyxcclxuICAgIHByb3BzOiBDb21wb25lbnRQcm9wczxhbnk+XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmZyZWV6ZShvKSB7XHJcbiAgICB2YXIgb28gPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAobyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgb28gPSBbXTtcclxuICAgICAgICB2YXIgY2xvbmUgPSBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgIG9vLnB1c2godilcclxuICAgICAgICB9O1xyXG4gICAgICAgIG8uZm9yRWFjaChjbG9uZSk7XHJcbiAgICB9IGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICBvbyA9IG5ldyBTdHJpbmcobykudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG8gPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvbyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG8pIHtcclxuICAgICAgICAgICAgb29bcHJvcGVydHldID0gb1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9vO1xyXG59XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBPYmplY3RDb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgdW5mcmVlemU6IDxUIGV4dGVuZHMgYW55PihvYmo6IFJlYWRvbmx5PFQ+KSA9PiBUXHJcbiAgICB9XHJcbn1cclxuT2JqZWN0LnVuZnJlZXplID0gdW5mcmVlemUiLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKVxyXG5pbXBvcnQgUGx1Z2luVXRpbGl0aWVzIGZyb20gXCIuL1BsdWdpblV0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFV0aWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIFJlYWN0VG9IVE1MRWxlbWVudChSZWFjdEVsZW1lbnQ6IFJlYWN0RWxlbWVudCl7ICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0RWxlbWVudCwgZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQbHVnaW5VdGlscygpe3JldHVybiBQbHVnaW5VdGlsaXRpZXN9XHJcblxyXG4gICAgZ2V0TmVzdGVkUHJvcHMob2JqOmFueSwgcGF0aDogc3RyaW5nKXtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiLlwiKVxyXG4gICAgICAgIGZvcihsZXQgc2VnIG9mIHNlZ21lbnRzKXtcclxuICAgICAgICAgICAgb2JqID0gb2JqICYmIChzZWcgaW4gb2JqKSA/IG9ialtzZWddIDogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxuXHJcbiAgICBEZWNpbWFsQ29sb3JUb0hleChjb2xvcjpudW1iZXIpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gXCIjXCIrY29sb3IudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuXHJcbiAgICBIZXhDb2xvclRvRGVjaW1hbChjb2xvcjpzdHJpbmcpOm51bWJlcntcclxuICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoL1sjO10vZywgXCJcIilcclxuICAgICAgICBsZXQgcmVzID0gcGFyc2VJbnQoY29sb3IsIDE2KVxyXG4gICAgICAgIGlmKGlzTmFOKHJlcykpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbG9yOiAke2NvbG9yfWApXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZURhKGNsYXNzTmFtZTpzdHJpbmcpOnN0cmluZ3tcclxuICAgICAgICBpZighY2xhc3NOYW1lKXJldHVybiBjbGFzc05hbWVcclxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5maWx0ZXIoZSA9PiAhZS5zdGFydHNXaXRoKFwiZGEtXCIpKS5qb2luKFwiIFwiKVxyXG4gICAgfVxyXG5cclxuICAgIEZpbmRSZWFjdChkb206RWxlbWVudCwgdHJhdmVyc2VVcDpudW1iZXIgPSAwKTpSZWFjdC5Db21wb25lbnR8UmVhY3QuUHVyZUNvbXBvbmVudHtcclxuICAgICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MzIxNzQyL3JlYWN0LWdldHRpbmctYS1jb21wb25lbnQtZnJvbS1hLWRvbS1lbGVtZW50LWZvci1kZWJ1Z2dpbmcjMzkxNjUxMzdcclxuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhkb20pLmZpbmQoa2V5PT5rZXkuc3RhcnRzV2l0aChcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiKSk7XHJcbiAgICAgICAgY29uc3QgZG9tRmliZXIgPSBkb21ba2V5XTtcclxuICAgICAgICBpZiAoZG9tRmliZXIgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICBcclxuICAgICAgICAvLyByZWFjdCA8MTZcclxuICAgICAgICBpZiAoZG9tRmliZXIuX2N1cnJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wRmliZXIgPSBkb21GaWJlci5fY3VycmVudEVsZW1lbnQuX293bmVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlcnNlVXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29tcEZpYmVyID0gY29tcEZpYmVyLl9jdXJyZW50RWxlbWVudC5fb3duZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBGaWJlci5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gcmVhY3QgMTYrXHJcbiAgICAgICAgY29uc3QgR2V0Q29tcEZpYmVyID0gZmliZXI9PntcclxuICAgICAgICAgICAgLy9yZXR1cm4gZmliZXIuX2RlYnVnT3duZXI7IC8vIHRoaXMgYWxzbyB3b3JrcywgYnV0IGlzIF9fREVWX18gb25seVxyXG4gICAgICAgICAgICBsZXQgcGFyZW50RmliZXIgPSBmaWJlci5yZXR1cm47XHJcbiAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgcGFyZW50RmliZXIudHlwZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRGaWJlciA9IHBhcmVudEZpYmVyLnJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RmliZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY29tcEZpYmVyID0gR2V0Q29tcEZpYmVyKGRvbUZpYmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlcnNlVXA7IGkrKykge1xyXG4gICAgICAgICAgICBjb21wRmliZXIgPSBHZXRDb21wRmliZXIoY29tcEZpYmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBGaWJlci5zdGF0ZU5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2xhc3MoY2xhc3NOYW1lczpzdHJpbmcsIGNsYXNzTmFtZTpzdHJpbmcpOmJvb2xlYW57XHJcbiAgICAgICAgaWYoIWNsYXNzTmFtZXMgfHwgIWNsYXNzTmFtZSlyZXR1cm4gZmFsc2VcclxuICAgICAgICBjb25zdCBjbGFzc25hbWVzID0gY2xhc3NOYW1lcy5zcGxpdChcIiBcIilcclxuICAgICAgICBmb3IobGV0IGNsYXNzbmFtZSBvZiB0aGlzLnJlbW92ZURhKGNsYXNzTmFtZSkuc3BsaXQoXCIgXCIpKXtcclxuICAgICAgICAgICAgaWYoIWNsYXNzbmFtZXMuaW5jbHVkZXMoY2xhc3NuYW1lKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRKU09iamVjdChvYmo6YW55KTpzdHJpbmd7XHJcbiAgICAgICAgaWYoW1wic3RyaW5nXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcImJpZ2ludFwiLCBcInVuZGVmaW5lZFwiXS5pbmNsdWRlcyh0eXBlb2Ygb2JqKSlyZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIGlmKG9iaiA9PT0gbnVsbClyZXR1cm4gXCJudWxsXCJcclxuICAgICAgICBpZih0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpcmV0dXJuIFN0cmluZyhvYmopXHJcbiAgICAgICAgaWYodHlwZW9mIG9iaiA9PT0gXCJzeW1ib2xcIilyZXR1cm4gU3RyaW5nKG9iailcclxuXHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShvYmopKXtcclxuICAgICAgICAgICAgaWYoIW9iai5sZW5ndGgpcmV0dXJuIFwiW11cIlxyXG4gICAgICAgICAgICByZXR1cm4gYFtcXG4gICAgJHtvYmoubWFwKGUgPT4gdGhpcy5mb3JtYXRKU09iamVjdChlKSkuam9pbihcIixcXG4gICAgXCIpfVxcbl1gXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopXHJcbiAgICAgICAgICAgIGlmKGtleXMubGVuZ3RoID09PSAwKXJldHVybiBcInt9XCJcclxuICAgICAgICAgICAgcmV0dXJuIGB7XFxuICAgICR7a2V5cy5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmlnaW5hbCA9IGtleVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIilrZXkgPSBcIltcIitTdHJpbmcoa2V5KStcIl1cIlxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiKWtleSA9IFN0cmluZyhrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc05hTihwYXJzZUludChrZXlbMF0pKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmZvcm1hdEpTT2JqZWN0KGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoL1teXFx3XFxkXyRdL2cudGVzdChrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuZm9ybWF0SlNPYmplY3Qoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2tleX06ICR7dGhpcy5mb3JtYXRKU09iamVjdChvYmpbb3JpZ2luYWxdKX1gXHJcbiAgICAgICAgICAgIH0pfVxcbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlnaHRjb3JkQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBuYW1lOnN0cmluZyA9IFwiTGlnaHRjb3JkQXBpRXJyb3JcIlxyXG59IiwiY29uc3QgQkRNb2R1bGVzOnR5cGVvZiB3aW5kb3cuQkRNb2R1bGVzID0gd2luZG93LkJETW9kdWxlcyB8fCByZXF1aXJlKFwiLi9CRE1vZHVsZXNcIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBXZWJwYWNrTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIGdldChpZDogbnVtYmVyKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoaWQpXHJcbiAgICB9XHJcbiAgICBmaW5kKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueXtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gQkRNb2R1bGVzLmdldChmaWx0ZXIpWzBdXHJcbiAgICAgICAgaWYoIXJlc3VsdCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihmaWx0ZXIsIFwiY291bGRuJ3QgZmluZCB0aGUgbW9kdWxlLlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBmaW5kQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pWzBdXHJcbiAgICB9XHJcbiAgICBmaWx0ZXIoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6YW55W117XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoZmlsdGVyKVxyXG4gICAgfVxyXG4gICAgZmlsdGVyQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJwYWNrTG9hZGVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOnN0cmluZyA9IFwiXCIpe1xyXG4gICAgICAgIG1lc3NhZ2UgKz0gXCJcXG5cXHRUaGlzIGVycm9yIGlzIHJlbGF0ZWQgdG8gTGlnaHRjb3JkIG5vdCBiZWluZyBhYmxlIHRvIGZpbmQgYSBXZWJwYWNrTW9kdWxlLiBcXG5cXHRQbGVhc2Ugc2hvdyB0aGlzIGVycm9yIGFuZCBhIGZldyBsaW5lcyBvZiBsb2dzIGFib3ZlIHRoaXMgZXJyb3IgdG8gdGhlIGRldnMuIFxcblxcdE9wZW4gYW4gaXNzdWUgb24gaHR0cHM6Ly9naXRodWIuY29tL0xpZ2h0Y29yZC9MaWdodGNvcmQgb3IgaW4gb3VyIGRpc2NvcmQgc2VydmVyLlwiXHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSlcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIldlYnBhY2tMb2FkZXJFcnJvclwiXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogUmVjcmVhdGUgdGhlIGdpdmVuIG9iamVjdCB3aXRob3V0IHRoZSBfX3Byb3RvX18uIFVzZWZ1bCBmb3IgYmV0dGVyIGZvcm1hdHRpbmcgd2hlbiBvdXRwdXQgaW4gY29uc29sZS5cclxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlY3JlYXRlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU51bGxQcm90bzxPYmo9YW55PihvYmo6T2JqKTpPYmp7XHJcbiAgICBsZXQgbyA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrID0+IHtcclxuICAgICAgICBvW2tdID0gb2JqW2tdXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9cclxufSIsImV4cG9ydCBjb25zdCBpc05hdGl2ZTpib29sZWFuID0gdHlwZW9mIHdpbmRvdy5CRE1vZHVsZXMgPT09IFwidW5kZWZpbmVkXCJcclxuZXhwb3J0IGNvbnN0IGlzSW1wb3J0ZWQ6Ym9vbGVhbiA9IHR5cGVvZiB3aW5kb3cuQkRNb2R1bGVzICE9PSBcInVuZGVmaW5lZFwiIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhjbHVkZVByb3BlcnRpZXM8T2JqID0gYW55PihvYmo6T2JqLCBwcm9wczooa2V5b2YgT2JqKVtdKTpQYXJ0aWFsPE9iaj57XHJcbiAgICBsZXQgbmV3T2JqID0ge31cclxuXHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICBpZihwcm9wcy5pbmNsdWRlcyhrIGFzIGtleW9mIE9iaikpcmV0dXJuXHJcbiAgICAgICAgbmV3T2JqW2tdID0gb2JqW2tdXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBuZXdPYmpcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5PT1AoKXt9IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCJcclxuaW1wb3J0IE5vdGljZXMsIHsgbm90aWNlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlc1wiXHJcbmltcG9ydCB7IGlzTmF0aXZlIH0gZnJvbSBcIi4vZW52aXJvbm5lbWVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKCl7XHJcbiAgICAvKiogU1RBUlQgTk9USUNFICovXHJcbiAgICBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIkNvbm5lY3RlZEFwcFZpZXdcIilcclxuICAgIC50aGVuKGFzeW5jIChtb2QpID0+IHtcclxuICAgICAgICBjb25zdCBhcHBDbGFzc2VzID0gYXdhaXQgZ2V0TW9kdWxlKGUgPT4gZS5oYXNOb3RpY2UpO1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkUmVuZGVyID0gb3JpZ2luYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Y2hpbGRyZW4gPSBbXVxyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSljaGlsZHJlbiA9IFtjaGlsZHJlbl1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbmV3Y2hpbGRyZW4ucHVzaChjaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIG5ld2NoaWxkcmVuLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpY2VzLCB7Y29udGFpbmVyOiB0aGlzfSkpXHJcbiAgICAgICAgICAgICAgICBuZXdjaGlsZHJlbi5wdXNoKGNoaWxkcmVuWzFdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW4gPSBuZXdjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlblsxXS5wcm9wcy5jaGlsZHJlblsyXS5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy5yZW5kZXIgPSBidWlsZFJlbmRlckNoYW5uZWxTaWRlYmFyKHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuWzJdLnByb3BzLmNoaWxkcmVuWzBdLnByb3BzLnJlbmRlcilcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVpbGRSZW5kZXJDaGFubmVsU2lkZWJhciA9IG9yaWdpbmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlckNoYW5uZWxTaWRlYmFyKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNOb3RpY2UgPSBub3RpY2VzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgIGlmKCFoYXNOb3RpY2UpcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZighVXRpbHMuaGFzQ2xhc3MocmV0dXJuVmFsdWUucHJvcHMuY2xhc3NOYW1lLCBhcHBDbGFzc2VzLmhhc05vdGljZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNsYXNzTmFtZSArPSBcIiBcIitVdGlscy5yZW1vdmVEYShhcHBDbGFzc2VzLmhhc05vdGljZSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtb2QuZGVmYXVsdC5wcm90b3R5cGUucmVuZGVyID0gYnVpbGRSZW5kZXIobW9kLmRlZmF1bHQucHJvdG90eXBlLnJlbmRlcik7XHJcbiAgICAgICAgKGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK1V0aWxzLnJlbW92ZURhKGFwcENsYXNzZXMuYmFzZSkpXHJcbiAgICAgICAgICAgIGlmKCFiYXNlKXRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYmFzZSBoZXJlYClcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IFV0aWxzLkZpbmRSZWFjdChiYXNlKSBhcyBhbnlcclxuICAgICAgICAgICAgZWxlbS5yZW5kZXIgPSBidWlsZFJlbmRlcihlbGVtLnJlbmRlcilcclxuICAgICAgICAgICAgZWxlbS5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSlcclxuICAgIC8qKiBFTkQgTk9USUNFICovXHJcblxyXG4gICAgaWYoaXNOYXRpdmUpe1xyXG4gICAgICAgIC8qKiBTVEFSVCBVU0VSUE9QT1VUIFBBVENIICovXHJcbiAgICAgICAgYXdhaXRMb2dpbigpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgVXNlclBvcG91dCA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiRmx1eENvbnRhaW5lcihGb3J3YXJkUmVmKFN1YnNjcmliZUd1aWxkTWVtYmVyc0NvbnRhaW5lcihVc2VyUG9wb3V0KSkpXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJNb2R1bGUgPSBhd2FpdCBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldEN1cnJlbnRVc2VyKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIxID0gbmV3IFVzZXJQb3BvdXQuZGVmYXVsdCh7dXNlcklkOiB1c2VyTW9kdWxlLmRlZmF1bHQuZ2V0Q3VycmVudFVzZXIoKS5pZCwgZ3VpbGRJZDogbnVsbCwgY2hhbm5lbElkOiBudWxsLCBkaXNhYmxlVXNlclByb2ZpbGVMaW5rOiB0cnVlfSkucmVuZGVyKClcclxuICAgICAgICAgICAgY29uc3QgUG9wb3V0UHJvcHMgPSByZW5kZXIxLnByb3BzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjIgPSByZW5kZXIxLnR5cGUucmVuZGVyKFBvcG91dFByb3BzLCBudWxsKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIzID0gbmV3IHJlbmRlcjIudHlwZShyZW5kZXIyLnByb3BzKS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCBVc2VyUG9wb3V0Q29tcG9uZW50ID0gcmVuZGVyMy50eXBlXHJcbiAgICAgICAgICAgIGlmKCFVc2VyUG9wb3V0Q29tcG9uZW50KXRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgZmluZCB0aGUgVXNlclBvcG91dENvbXBvbmVudCBjb21wb25lbnQuYClcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSBVc2VyUG9wb3V0Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJcclxuICAgICAgICAgICAgVXNlclBvcG91dENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gcmVuZGVyLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuLnByb3BzW1wiZGF0YS11c2VyLWlkXCJdID0gdGhpcy5wcm9wcy51c2VyLmlkXHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qKiBFTkQgVVNFUlBPUE9VVCBQQVRDSCovXHJcbiAgICBcclxuICAgICAgICAvKiogU1RBUlQgVVNFUlBST0ZJTEUgUEFUQ0ggKi9cclxuICAgICAgICBhd2FpdExvZ2luKClcclxuICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBVc2VyUHJvZmlsZSA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVXNlclByb2ZpbGVcIilcclxuICAgICAgICAgICAgY29uc3QgdXNlck1vZHVsZSA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZ2V0Q3VycmVudFVzZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjEgPSBuZXcgVXNlclByb2ZpbGUuZGVmYXVsdCh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyTW9kdWxlLmRlZmF1bHQuZ2V0Q3VycmVudFVzZXIoKVxyXG4gICAgICAgICAgICB9KS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIyID0gbmV3IHJlbmRlcjEudHlwZShyZW5kZXIxLnByb3BzKS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIzID0gcmVuZGVyMi50eXBlLnJlbmRlcihyZW5kZXIyLnByb3BzLCBudWxsKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXI0ID0gbmV3IHJlbmRlcjMudHlwZShyZW5kZXIzLnByb3BzKS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCBVc2VyUHJvZmlsZUNvbXBvbmVudCA9IHJlbmRlcjQudHlwZVxyXG4gICAgICAgICAgICBpZighVXNlclByb2ZpbGVDb21wb25lbnQpdGhyb3cgbmV3IEVycm9yKGBDb3VsZG4ndCBmaW5kIHRoZSBVc2VyUHJvZmlsZUNvbXBvbmVudCBjb21wb25lbnQuYClcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSBVc2VyUHJvZmlsZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyXHJcbiAgICAgICAgICAgIFVzZXJQcm9maWxlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSByZW5kZXIuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXR1cm5WYWx1ZSlcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlbi5wcm9wc1tcImRhdGEtdXNlci1pZFwiXSA9IHRoaXMucHJvcHMudXNlci5pZFxyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKiogRU5EIFVTRVJQUk9GSUxFIFBBVENIICovXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogQWRkIGluIGFwcC1ub3RpZmljYXRpb25zIC8gY29uZmlybWF0aW9ucy5cclxuICAgIC8qKiBTVEFSVCBJTi1BUFAgTk9USUZJQ0FUSU9OUyAqL1xyXG4gICAgLy9nZXRNb2R1bGUoZSA9PiB0cnVlKVxyXG4gICAgLyoqIEVORCBJTi1BUFAgTk9USUZJQ0FUSU9OUyAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2R1bGUoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6UHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuZW5zdXJlRXhwb3J0ZWQoZmlsdGVyKVxyXG4gICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbTElHSFRDT1JEXVwiLCBlcnIsIGZpbHRlcilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxubGV0IGhhc0NvbXBsZXRlZExvZ2luID0gZmFsc2VcclxubGV0IGxvZ2luUHJvbWlzZTpQcm9taXNlPHZvaWQ+XHJcbmZ1bmN0aW9uIGF3YWl0TG9naW4oKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgaWYoaGFzQ29tcGxldGVkTG9naW4pcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICBpZihsb2dpblByb21pc2UpcmV0dXJuIGxvZ2luUHJvbWlzZVxyXG4gICAgIFxyXG4gICAgcmV0dXJuIGxvZ2luUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzUmVzb2x2ZWQgPSBmYWxzZVxyXG4gICAgICAgIHdpbmRvdy5MaWdodGNvcmQuRGlzY29yZE1vZHVsZXMuZGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJDT05ORUNUSU9OX09QRU5cIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzUmVzb2x2ZWQpcmV0dXJuXHJcbiAgICAgICAgICAgIGhhc0NvbXBsZXRlZExvZ2luID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgaXNSZXNvbHZlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG53aW5kb3cuTGlnaHRjb3JkLkRpc2NvcmRNb2R1bGVzLmRpc3BhdGNoZXIuc3Vic2NyaWJlKFwiTE9HT1VUXCIsIChldikgPT4ge1xyXG4gICAgaGFzQ29tcGxldGVkTG9naW4gPSBmYWxzZVxyXG4gICAgbG9naW5Qcm9taXNlID0gdW5kZWZpbmVkXHJcbn0pIiwiaW1wb3J0ICogYXMgdXVpZHYxIGZyb20gXCJ1dWlkL3YxXCJcclxuaW1wb3J0ICogYXMgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCJcclxuXHJcbnR5cGUgdXVpZEZ1bmMgPSAoKSA9PiBzdHJpbmdcclxubGV0IHV1aWQ6dXVpZEZ1bmMgJiB7djE6IHV1aWRGdW5jLCB2NDogdXVpZEZ1bmN9ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHV1aWR2NCgpXHJcbn0sIHt2MTogKCkgPT4gdXVpZHYxKCksIHY0OiAoKSA9PiB1dWlkdjQoKX0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dWlkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvd2VyY29yZC93ZWJwYWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9