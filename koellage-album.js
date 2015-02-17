(function () {
    var ownerDocument = document.currentScript.ownerDocument;
    KoellageProto = Object.create(HTMLElement.prototype);

    KoellageProto.createdCallback = function () {
        var t = ownerDocument.querySelector('#koellage-album');
        var clone = document.importNode(t.content, true);
        this.createShadowRoot().appendChild(clone);
    };

    document.registerElement('koellage-album', {prototype: KoellageProto});
})();


