"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function () {
    var ownerDocument = document.currentScript.ownerDocument;
    var KoellageAlbum = (function (HTMLElement) {
        function KoellageAlbum() {
            _classCallCheck(this, KoellageAlbum);
        }

        _inherits(KoellageAlbum, HTMLElement);

        _prototypeProperties(KoellageAlbum, null, {
            createdCallback: {
                value: function createdCallback() {
                    var template = ownerDocument.querySelector("#koellage-album");
                    this.createShadowRoot().appendChild(document.importNode(template.content, true));
                    this.render();
                },
                writable: true,
                configurable: true
            },
            render: {
                value: function render() {
                    this.setTitle(this.getAttribute("title"));
                },
                writable: true,
                configurable: true
            },
            setTitle: {
                value: function setTitle(title) {
                    this.shadowRoot.querySelector("section h2").textContent = title;
                },
                writable: true,
                configurable: true
            }
        });

        return KoellageAlbum;
    })(HTMLElement);

    document.registerElement("koellage-album", KoellageAlbum);
})();
//currently not called from registerElement -> wait
// -> https://w3c.github.io/webcomponents/spec/custom/#dfn-custom-element-constructor-generation