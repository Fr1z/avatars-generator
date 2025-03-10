"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var options_1 = require("../../options");
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: 'Color/Palette/Gray-01', mask: "url(#" + this.props.maskID + ")", fillRule: 'evenodd', fill: color },
                React.createElement("rect", { id: '\uD83D\uDD8DColor', x: '0', y: '0', width: '264', height: '110' })));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Black = makeColor('Nero', '#262E33');
var Blue01 = makeColor('Blu1', '#65C9FF');
var Blue02 = makeColor('Blu2', '#5199E4');
var Blue03 = makeColor('Blu3', '#25557C');
var Gray01 = makeColor('Grigio01', '#E6E6E6');
var Gray02 = makeColor('Grigio02', '#929598');
var Nature = makeColor('Verde Offgrid', '#90c046');
var Heather = makeColor('Grigio Mélange', '#3C4F5C');
var PastelBlue = makeColor('Blu Pastello', '#B1E2FF');
var PastelGreen = makeColor('Verde Pastello', '#A7FFC4');
var PastelOrange = makeColor('Arancio Pastello', '#FFDEB5');
var PastelRed = makeColor('Rosso Pastello', '#FFAFB9');
var PastelYellow = makeColor('Giallo Pastello', '#FFFFB1');
var Pink = makeColor('Rosa', '#FF488E');
var Red = makeColor('Rosso', '#FF5C5C');
var White = makeColor('Bianco', '#FFFFFF');
var Colors = /** @class */ (function (_super) {
    __extends(Colors, _super);
    function Colors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colors.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.ClotheColorOption, defaultOption: Gray01 },
            React.createElement(Black, { maskID: this.props.maskID }),
            React.createElement(Blue01, { maskID: this.props.maskID }),
            React.createElement(Blue02, { maskID: this.props.maskID }),
            React.createElement(Blue03, { maskID: this.props.maskID }),
            React.createElement(Gray01, { maskID: this.props.maskID }),
            React.createElement(Gray02, { maskID: this.props.maskID }),
            React.createElement(Nature, { maskID: this.props.maskID }),
            React.createElement(Heather, { maskID: this.props.maskID }),
            React.createElement(PastelBlue, { maskID: this.props.maskID }),
            React.createElement(PastelGreen, { maskID: this.props.maskID }),
            React.createElement(PastelOrange, { maskID: this.props.maskID }),
            React.createElement(PastelRed, { maskID: this.props.maskID }),
            React.createElement(PastelYellow, { maskID: this.props.maskID }),
            React.createElement(Pink, { maskID: this.props.maskID }),
            React.createElement(Red, { maskID: this.props.maskID }),
            React.createElement(White, { maskID: this.props.maskID })));
    };
    return Colors;
}(React.Component));
exports.default = Colors;
