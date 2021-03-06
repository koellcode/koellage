(function () {

let {ownerDocument} = document.currentScript;

class KoellageWall extends HTMLElement {

    constructor() {
        //currently not called from registerElement -> wait
        // -> https://w3c.github.io/webcomponents/spec/custom/#dfn-custom-element-constructor-generation
    }

    createdCallback() {
        let template = ownerDocument.querySelector('#koellage-wall');
        let clone = document.importNode(template.content, true);
        this.createShadowRoot().appendChild(clone);
    };
}

document.registerElement('koellage-wall', KoellageWall);

})();