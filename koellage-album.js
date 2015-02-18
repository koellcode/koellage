"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ownerDocument = document.currentScript.ownerDocument;
var Koellage = (function (HTMLElement) {
    function Koellage() {
        _classCallCheck(this, Koellage);
    }

    _inherits(Koellage, HTMLElement);

    _prototypeProperties(Koellage, null, {
        createdCallback: {
            value: function createdCallback() {
                var template = ownerDocument.querySelector("#koellage-album");
                var clone = document.importNode(template.content, true);
                this.createShadowRoot().appendChild(clone);
            },
            writable: true,
            configurable: true
        }
    });

    return Koellage;
})(HTMLElement);

document.registerElement("koellage-album", Koellage);
//currently not called from registerElement -> wait
// -> https://w3c.github.io/webcomponents/spec/custom/#dfn-custom-element-constructor-generation